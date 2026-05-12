#!/usr/bin/env node
/**
 * Syncs daily-reports from sibling project directories into ./data/ so that
 * the dashboard can be deployed to Vercel (which can't read the local
 * filesystem). Runs as a `prebuild`/`predev` hook locally; gracefully no-ops
 * on Vercel because the source paths don't exist there.
 *
 * Source: /Users/jmw/Documents/Claude Projects/<project-dir>/daily-reports/
 * Dest:   ./data/reports/<slug>/<date>.md
 *
 * Unified briefs: /Users/jmw/Documents/Claude Projects/_daily-reports/*.md
 * Dest:           ./data/unified/<date>.md
 */
import fs from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const WORKSPACE = "/Users/jmw/Documents/Claude Projects";
const HERE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA = path.join(HERE, "data");

const PROJECTS = [
  { slug: "fqhc", dir: "fqhc-talent-exchange" },
  { slug: "criminal-defense", dir: "criminal-defense-talent-exchange" },
  { slug: "ca-employment-law", dir: "ca-employment-law" },
  { slug: "parent-network", dir: "parent-network" },
  { slug: "business-ideas", dir: "business-ideas" },
  { slug: "conference-intel", dir: "conference-intel" },
];

const silent = process.argv.includes("--silent");
const log = (...a) => silent || console.log(...a);

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function copyMarkdown(srcDir, destDir) {
  if (!existsSync(srcDir)) return 0;
  await ensureDir(destDir);
  const files = await fs.readdir(srcDir);
  const md = files.filter((f) => /^\d{4}-\d{2}-\d{2}.*\.md$/.test(f));
  for (const f of md) {
    const src = path.join(srcDir, f);
    const dest = path.join(destDir, f);
    const data = await fs.readFile(src);
    await fs.writeFile(dest, data);
  }
  return md.length;
}

async function copyFileIfExists(src, dest) {
  if (!existsSync(src)) return false;
  await ensureDir(path.dirname(dest));
  await fs.copyFile(src, dest);
  return true;
}

async function main() {
  // Skip on Vercel — the workspace path doesn't exist there. Committed
  // /data/ is the source of truth in CI.
  if (!existsSync(WORKSPACE)) {
    log(`[sync] Workspace not found at ${WORKSPACE} — skipping (assumed CI).`);
    return;
  }

  log(`[sync] Syncing daily-reports → ${path.relative(process.cwd(), DATA)}`);
  await ensureDir(DATA);

  let total = 0;
  for (const p of PROJECTS) {
    const src = path.join(WORKSPACE, p.dir, "daily-reports");
    const dest = path.join(DATA, "reports", p.slug);
    const n = await copyMarkdown(src, dest);
    log(`  ${p.slug.padEnd(20)} ${n} report${n === 1 ? "" : "s"}`);
    total += n;
  }

  // Unified executive briefs
  const unifiedSrc = path.join(WORKSPACE, "_daily-reports");
  const unifiedDest = path.join(DATA, "unified");
  const u = await copyMarkdown(unifiedSrc, unifiedDest);
  log(`  ${"unified".padEnd(20)} ${u} brief${u === 1 ? "" : "s"}`);
  total += u;

  // Run log
  const ranLog = await copyFileIfExists(
    path.join(unifiedSrc, "_run-log.jsonl"),
    path.join(DATA, "run-log.jsonl"),
  );
  if (ranLog) log(`  run-log.jsonl        copied`);

  // Snapshot manifest
  const manifest = {
    syncedAt: new Date().toISOString(),
    projects: PROJECTS.map((p) => p.slug),
    totalFiles: total,
  };
  await fs.writeFile(
    path.join(DATA, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );

  log(`[sync] Done — ${total} files in ${path.relative(process.cwd(), DATA)}/`);
}

main().catch((err) => {
  console.error("[sync] Failed:", err);
  process.exit(1);
});
