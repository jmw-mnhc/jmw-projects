import Link from "next/link";
import { ExternalLink, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/os/ui/card";
import { Badge } from "@/components/os/ui/badge";
import { SITES, siteUrl } from "@/lib/os/sites";

export const dynamic = "force-static";

const STATUS_BADGE: Record<string, { label: string; className: string }> = {
  live: {
    label: "live",
    className: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  },
  demo: {
    label: "demo",
    className: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
  },
  wip: {
    label: "wip",
    className: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  },
  internal: {
    label: "internal",
    className: "bg-zinc-500/15 text-zinc-700 dark:text-zinc-300",
  },
};

export default function SitesPage() {
  const byStatus: Record<string, typeof SITES> = { live: [], demo: [], wip: [], internal: [] };
  for (const s of SITES) byStatus[s.status].push(s);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 md:px-8">
      <header className="flex flex-col gap-2">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Globe className="size-4" />
          Sites
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Everything I&rsquo;ve shipped
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          {SITES.length} apps deployed across Vercel. Each one is a separate
          repo and a separate Claude Code workspace. This dashboard is the
          single pane of glass over the lot of them.
        </p>
      </header>

      {(["live", "wip", "demo", "internal"] as const).map((status) => {
        const sites = byStatus[status];
        if (sites.length === 0) return null;
        const badge = STATUS_BADGE[status];
        return (
          <section key={status} className="space-y-3">
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl font-semibold tracking-tight capitalize">
                {status === "wip" ? "Work in progress" : status}
              </h2>
              <Badge className={badge.className}>{sites.length}</Badge>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sites.map((s) => (
                <a
                  key={s.slug}
                  href={siteUrl(s)}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <Card
                    className="hover:border-foreground/20 h-full transition-all"
                    style={{ borderTopColor: s.hex, borderTopWidth: 3 }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl leading-none">
                            {s.emoji}
                          </span>
                          <CardTitle className="text-sm font-semibold">
                            {s.name}
                          </CardTitle>
                        </div>
                        <ExternalLink className="text-muted-foreground group-hover:text-foreground size-4 shrink-0 transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground line-clamp-3 text-sm leading-snug">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="border-border text-muted-foreground rounded-full border px-2 py-0.5 text-[10px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="text-muted-foreground text-[11px] font-mono">
                        {siteUrl(s).replace(/^https?:\/\//, "")}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        );
      })}

      <section className="border-border bg-muted/30 rounded-lg border border-dashed p-6 text-sm">
        <p className="text-muted-foreground">
          <strong className="text-foreground">Daily-update projects</strong>{" "}
          (FQHC, Criminal Defense, CA Employment Law, Parent Network, Business
          Ideas, Conference Intel) feed signals into this dashboard via their{" "}
          <code className="text-foreground">daily-reports/</code> folders. The
          rest are static / client / demo sites without daily intel pipelines —
          they live here as part of the portfolio.
        </p>
      </section>
    </div>
  );
}
