import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import {
  PROJECTS,
  UNIFIED_REPORTS_PATH,
  RUN_LOG_PATH,
  getProject,
  type ProjectMeta,
  type ProjectSlug,
} from "./projects";

export type Report = {
  project: ProjectSlug;
  /** ISO YYYY-MM-DD parsed from filename */
  date: string;
  /** absolute file path */
  filePath: string;
  /** raw markdown body (frontmatter stripped) */
  content: string;
  frontmatter: Record<string, unknown>;
  /** "TODAY'S SIGNAL" extracted, or null */
  signal: string | null;
  /** action checklist items (text only, no checkbox state) */
  actions: string[];
  /** rough character count */
  size: number;
};

export type UnifiedBrief = {
  date: string;
  filePath: string;
  content: string;
};

export type RunLogEntry = {
  date: string;
  duration_minutes?: number;
  projects_run?: number;
  projects_succeeded?: number;
  items_added_total?: number;
  blockers?: number;
  first_run?: boolean;
};

const DATE_RE = /^(\d{4}-\d{2}-\d{2})\.md$/;

async function safeReadDir(dir: string): Promise<string[]> {
  try {
    return await fs.readdir(dir);
  } catch {
    return [];
  }
}

async function safeReadFile(p: string): Promise<string | null> {
  try {
    return await fs.readFile(p, "utf8");
  } catch {
    return null;
  }
}

/** Parse `TODAY'S SIGNAL` (with or without emoji) from a markdown body. */
export function extractSignal(content: string): string | null {
  // Match "## 📰 TODAY'S SIGNAL", "## TODAY'S SIGNAL", "TODAY'S SIGNAL:" inline
  // Capture the body until the next heading or end-of-file.
  const headingRe =
    /(?:^|\n)#{1,6}\s+(?:[^\w\s]+\s+)?TODAY'S\s+SIGNAL\s*[:.]?\s*\n+([\s\S]*?)(?=\n#{1,6}\s|\n---|\n🎯|\nACTION|\nACTIONS|$)/i;
  const match = content.match(headingRe);
  if (match) {
    return match[1].trim() || null;
  }
  // Fallback — bold-prefix style: "📰 **TODAY'S SIGNAL**: ..."
  const inlineRe =
    /(?:📰\s*)?\*\*TODAY'S\s+SIGNAL\*\*\s*[:\-—]?\s*([^\n]+(?:\n(?!\n|🎯|\*\*).+)*)/i;
  const inline = content.match(inlineRe);
  if (inline) {
    return inline[1].trim();
  }
  return null;
}

/** Pull `- [ ] foo` / `- [x] foo` lines, returns the text after the box. */
export function extractActions(content: string): string[] {
  const lines = content.split("\n");
  const out: string[] = [];
  for (const line of lines) {
    const m = line.match(/^\s*[-*]\s*\[[ xX]\]\s+(.+)$/);
    if (m) out.push(m[1].trim());
  }
  return out;
}

/** Calendar event as parsed from the unified brief or any report. */
export type CalendarEvent = {
  date: string; // ISO YYYY-MM-DD if resolvable, otherwise raw label
  rawDate: string; // original token
  label: string;
  project?: ProjectSlug;
  reportDate: string; // the report this came from
  reportFilePath: string;
};

/**
 * Parse the "## 📅 THIS WEEK'S CALENDAR" section. Each `- **Date** — text` line
 * becomes an event. Falls back to scanning bullet lines anywhere in the doc
 * that lead with a bolded date.
 */
export function extractCalendar(
  content: string,
  reportDate: string,
  reportFilePath: string,
  project?: ProjectSlug,
): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  // Look for any `- **<date>** — <label>` or `- **<date>** - <label>` lines.
  const lineRe = /^\s*-\s+\*\*([^*]+?)\*\*\s+[—–-]\s+(.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = lineRe.exec(content)) !== null) {
    const rawDate = m[1].trim();
    const label = m[2].trim();
    const iso = parseDateLabel(rawDate, reportDate);
    if (!iso) continue;
    events.push({
      date: iso,
      rawDate,
      label,
      project,
      reportDate,
      reportFilePath,
    });
  }
  return events;
}

const MONTHS: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

/**
 * Normalize a free-text date label into an ISO YYYY-MM-DD when possible.
 * Examples handled:
 *   "May 2 (today)"        -> 2026-05-02
 *   "May 11 (Mon)"         -> 2026-05-11
 *   "Mid-May"              -> null (unresolvable, skip)
 *   "June 1"               -> 2026-06-01
 *   "May 25 (Mon)"         -> 2026-05-25
 */
function parseDateLabel(raw: string, contextDate: string): string | null {
  const text = raw.toLowerCase().trim();
  const ctx = new Date(contextDate + "T00:00:00Z");
  const ctxYear = ctx.getUTCFullYear();

  // strip trailing parenthetical
  const cleaned = text.replace(/\([^)]*\)/g, "").trim();
  const tokens = cleaned.split(/\s+/);
  if (tokens.length < 2) return null;
  const monthIdx = MONTHS[tokens[0]];
  if (monthIdx === undefined) return null;
  const day = parseInt(tokens[1], 10);
  if (Number.isNaN(day) || day < 1 || day > 31) return null;
  const mm = String(monthIdx + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  // Assume same calendar year as the report; if month is more than 6 months
  // earlier than the report month, roll forward to next year.
  let year = ctxYear;
  const ctxMonth = ctx.getUTCMonth();
  if (monthIdx + 12 - ctxMonth < 6 && monthIdx < ctxMonth - 6) year += 1;
  return `${year}-${mm}-${dd}`;
}

async function loadOne(
  project: ProjectSlug,
  reportsPath: string,
  filename: string,
): Promise<Report | null> {
  const m = filename.match(DATE_RE);
  if (!m) return null;
  const date = m[1];
  const filePath = path.join(reportsPath, filename);
  const raw = await safeReadFile(filePath);
  if (raw === null) return null;
  const parsed = matter(raw);
  const content = parsed.content;
  return {
    project,
    date,
    filePath,
    content,
    frontmatter: parsed.data as Record<string, unknown>,
    signal: extractSignal(content),
    actions: extractActions(content),
    size: content.length,
  };
}

/** All reports for a single project, newest first. */
export async function getReportsForProject(
  slug: ProjectSlug,
  days = 30,
): Promise<Report[]> {
  const project = getProject(slug);
  if (!project) return [];
  const files = await safeReadDir(project.reportsPath);
  const candidates = files.filter((f) => DATE_RE.test(f));
  // Newest first
  candidates.sort((a, b) => b.localeCompare(a));
  const reports: Report[] = [];
  for (const f of candidates) {
    const r = await loadOne(slug, project.reportsPath, f);
    if (r) reports.push(r);
  }
  if (days <= 0) return reports;
  // Filter to last N days from today
  const cutoff = new Date();
  cutoff.setUTCDate(cutoff.getUTCDate() - days);
  const cutoffISO = cutoff.toISOString().slice(0, 10);
  return reports.filter((r) => r.date >= cutoffISO);
}

/** Latest single report for a project, or null. */
export async function getLatestReport(
  slug: ProjectSlug,
): Promise<Report | null> {
  const reports = await getReportsForProject(slug, 0);
  return reports[0] ?? null;
}

/** Flat list across every project, newest first. */
export async function getAllReports(days = 60): Promise<Report[]> {
  const all: Report[] = [];
  for (const p of PROJECTS) {
    const reports = await getReportsForProject(p.slug, days);
    all.push(...reports);
  }
  all.sort((a, b) => (a.date === b.date ? 0 : a.date > b.date ? -1 : 1));
  return all;
}

/** Read the latest unified executive brief, or null if none exist. */
export async function getLatestUnifiedBrief(): Promise<UnifiedBrief | null> {
  const files = await safeReadDir(UNIFIED_REPORTS_PATH);
  const candidates = files.filter((f) => DATE_RE.test(f));
  candidates.sort((a, b) => b.localeCompare(a));
  if (candidates.length === 0) return null;
  const latest = candidates[0];
  const filePath = path.join(UNIFIED_REPORTS_PATH, latest);
  const content = (await safeReadFile(filePath)) ?? "";
  const m = latest.match(DATE_RE);
  return {
    date: m![1],
    filePath,
    content,
  };
}

/** Parse the JSONL run-log; tolerant of empty lines and malformed rows. */
export async function getRunLog(): Promise<RunLogEntry[]> {
  const raw = await safeReadFile(RUN_LOG_PATH);
  if (!raw) return [];
  const out: RunLogEntry[] = [];
  for (const line of raw.split("\n")) {
    const t = line.trim();
    if (!t) continue;
    try {
      out.push(JSON.parse(t) as RunLogEntry);
    } catch {
      // skip
    }
  }
  out.sort((a, b) => (a.date > b.date ? -1 : 1));
  return out;
}

/** Calendar across every project + the unified brief. */
export async function getAllCalendarEvents(): Promise<CalendarEvent[]> {
  const events: CalendarEvent[] = [];
  const reports = await getAllReports(60);
  for (const r of reports) {
    events.push(
      ...extractCalendar(r.content, r.date, r.filePath, r.project),
    );
  }
  const unified = await getLatestUnifiedBrief();
  if (unified) {
    events.push(
      ...extractCalendar(
        unified.content,
        unified.date,
        unified.filePath,
        undefined,
      ),
    );
  }
  // De-dupe (date + label)
  const seen = new Set<string>();
  const uniq: CalendarEvent[] = [];
  for (const e of events) {
    const key = `${e.date}::${e.label.toLowerCase().slice(0, 80)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    uniq.push(e);
  }
  uniq.sort((a, b) => (a.date > b.date ? 1 : -1));
  return uniq;
}

/** Today's date as ISO YYYY-MM-DD in the local timezone. */
export function today(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

/** Project status summary for the home dashboard. */
export type ProjectStatus = {
  project: ProjectMeta;
  ranToday: boolean;
  latestDate: string | null;
  signal: string | null;
  reportCount30d: number;
  topAction: string | null;
  latestFilePath: string | null;
};

export async function getProjectStatuses(): Promise<ProjectStatus[]> {
  const todayISO = today();
  const out: ProjectStatus[] = [];
  for (const project of PROJECTS) {
    const reports = await getReportsForProject(project.slug, 30);
    const latest = reports[0] ?? null;
    out.push({
      project,
      ranToday: latest?.date === todayISO,
      latestDate: latest?.date ?? null,
      signal: latest?.signal ?? null,
      reportCount30d: reports.length,
      topAction: latest?.actions[0] ?? null,
      latestFilePath: latest?.filePath ?? null,
    });
  }
  return out;
}
