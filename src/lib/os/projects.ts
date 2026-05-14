import path from "node:path";

export type ProjectSlug =
  | "fqhc"
  | "criminal-defense"
  | "ca-employment-law"
  | "parent-network"
  | "business-ideas"
  | "conference-intel";

export type ProjectMeta = {
  slug: ProjectSlug;
  name: string;
  shortName: string;
  /** absolute path to daily-reports/ folder (resolves to ./data/reports/<slug>) */
  reportsPath: string;
  /** Public Vercel URL for the deployed app, if any */
  vercelUrl?: string;
  /** Tailwind color stub used for badges/dots, e.g. "teal" */
  color: string;
  /** Hex used for charts where a literal color is required */
  hex: string;
  /** Tailwind class fragments for accent ring/text/bg */
  accentText: string;
  accentBg: string;
  accentBorder: string;
  accentRing: string;
  description: string;
};

/**
 * Data root — sibling directories used to live at /Users/jmw/Documents/...
 * but Vercel can't read the local filesystem. The `scripts/sync-data.mjs`
 * script copies each project's daily-reports into ./data/ at build time.
 */
const DATA_ROOT = path.join(process.cwd(), "data");
const reports = (slug: string) => path.join(DATA_ROOT, "reports", slug);

export const PROJECTS: ProjectMeta[] = [
  {
    slug: "fqhc",
    name: "FQHC Talent Exchange",
    shortName: "FQHC",
    reportsPath: reports("fqhc"),
    vercelUrl: "https://fqhc-talent-exchange.vercel.app",
    color: "teal",
    hex: "#0d9488",
    accentText: "text-teal-700 dark:text-teal-300",
    accentBg: "bg-teal-50 dark:bg-teal-950/40",
    accentBorder: "border-teal-200 dark:border-teal-900/60",
    accentRing: "ring-teal-500/30",
    description: "Section 504 sprint, FQHC news intel, advocacy tracker.",
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense Talent Exchange",
    shortName: "Criminal Defense",
    reportsPath: reports("criminal-defense"),
    vercelUrl: "https://criminal-defense-talent-exchange.vercel.app",
    color: "indigo",
    hex: "#6366f1",
    accentText: "text-indigo-700 dark:text-indigo-300",
    accentBg: "bg-indigo-50 dark:bg-indigo-950/40",
    accentBorder: "border-indigo-200 dark:border-indigo-900/60",
    accentRing: "ring-indigo-500/30",
    description: "PD jobs, AB 690 tracking, market intelligence.",
  },
  {
    slug: "ca-employment-law",
    name: "CA Employment Law",
    shortName: "CA Employment",
    reportsPath: reports("ca-employment-law"),
    vercelUrl: "https://ca-employment-law.vercel.app",
    color: "amber",
    hex: "#f59e0b",
    accentText: "text-amber-700 dark:text-amber-300",
    accentBg: "bg-amber-50 dark:bg-amber-950/40",
    accentBorder: "border-amber-200 dark:border-amber-900/60",
    accentRing: "ring-amber-500/30",
    description: "Case assessment + legislative tracker.",
  },
  {
    slug: "parent-network",
    name: "Berkeley Parent Network",
    shortName: "Parent Network",
    reportsPath: reports("parent-network"),
    vercelUrl: "https://bpn-berkeley.vercel.app",
    color: "emerald",
    hex: "#10b981",
    accentText: "text-emerald-700 dark:text-emerald-300",
    accentBg: "bg-emerald-50 dark:bg-emerald-950/40",
    accentBorder: "border-emerald-200 dark:border-emerald-900/60",
    accentRing: "ring-emerald-500/30",
    description: "Bay Area family events, SEO opportunities, 510families watch.",
  },
  {
    slug: "business-ideas",
    name: "Business Acquisition Search",
    shortName: "Business Ideas",
    reportsPath: reports("business-ideas"),
    vercelUrl: "https://business-ideas.vercel.app/api/unlock?key=jmwprojects&from=/",
    color: "rose",
    hex: "#f43f5e",
    accentText: "text-rose-700 dark:text-rose-300",
    accentBg: "bg-rose-50 dark:bg-rose-950/40",
    accentBorder: "border-rose-200 dark:border-rose-900/60",
    accentRing: "ring-rose-500/30",
    description: "PT/Bay Area/BR acquisition pipeline + Berkeley mixed-use.",
  },
  {
    slug: "conference-intel",
    name: "Conference Intel",
    shortName: "Conference Intel",
    reportsPath: reports("conference-intel"),
    vercelUrl: "https://conference-intel.vercel.app",
    color: "violet",
    hex: "#8b5cf6",
    accentText: "text-violet-700 dark:text-violet-300",
    accentBg: "bg-violet-50 dark:bg-violet-950/40",
    accentBorder: "border-violet-200 dark:border-violet-900/60",
    accentRing: "ring-violet-500/30",
    description: "Speaker/sponsor Venn marketplace + competitive watch.",
  },
];

export const UNIFIED_REPORTS_PATH = path.join(DATA_ROOT, "unified");
export const RUN_LOG_PATH = path.join(DATA_ROOT, "run-log.jsonl");

export function getProject(slug: string): ProjectMeta | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function isProjectSlug(value: string): value is ProjectSlug {
  return PROJECTS.some((p) => p.slug === value);
}
