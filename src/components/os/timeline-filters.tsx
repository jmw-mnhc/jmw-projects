"use client";

import * as React from "react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Card, CardContent } from "@/components/os/ui/card";
import { Badge } from "@/components/os/ui/badge";
import { cn } from "@/lib/os/utils";
import { PROJECTS } from "@/lib/os/projects";

export type TimelineItem = {
  id: string;
  date: string;
  signal: string;
  projectSlug: string;
  projectName: string;
  projectHex: string;
};

export function TimelineFilters({ items }: { items: TimelineItem[] }) {
  const [active, setActive] = React.useState<Set<string>>(
    new Set(PROJECTS.map((p) => p.slug)),
  );
  const [query, setQuery] = React.useState("");

  function toggle(slug: string) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  const filtered = items.filter((it) => {
    if (!active.has(it.projectSlug)) return false;
    if (query && !it.signal.toLowerCase().includes(query.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {PROJECTS.map((p) => {
          const on = active.has(p.slug);
          return (
            <button
              key={p.slug}
              type="button"
              onClick={() => toggle(p.slug)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                on
                  ? "text-foreground"
                  : "text-muted-foreground border-border opacity-50 hover:opacity-100",
              )}
              style={
                on
                  ? {
                      borderColor: p.hex,
                      backgroundColor: `${p.hex}14`,
                    }
                  : undefined
              }
            >
              <span
                className="size-1.5 rounded-full"
                style={{ backgroundColor: p.hex }}
              />
              {p.shortName}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => setActive(new Set(PROJECTS.map((p) => p.slug)))}
          className="text-muted-foreground hover:text-foreground ml-auto text-xs underline-offset-2 hover:underline"
        >
          all
        </button>
        <button
          type="button"
          onClick={() => setActive(new Set())}
          className="text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        >
          none
        </button>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter signals by keyword…"
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring/40 h-9 w-full rounded-md border px-3 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2"
      />

      <ul className="relative space-y-3 border-l pl-6">
        {filtered.map((it) => (
          <li key={it.id} className="relative">
            <span
              className="border-background absolute -left-[31px] top-3 size-3 rounded-full border-2"
              style={{ backgroundColor: it.projectHex }}
              aria-hidden
            />
            <Card>
              <CardContent className="py-4">
                <div className="flex flex-wrap items-center gap-2 pb-1.5">
                  <Link href={`/os/projects/${it.projectSlug}`}>
                    <Badge
                      style={{
                        backgroundColor: `${it.projectHex}1a`,
                        color: it.projectHex,
                      }}
                      className="hover:opacity-80"
                    >
                      <span
                        className="mr-1.5 size-1.5 rounded-full"
                        style={{ backgroundColor: it.projectHex }}
                      />
                      {it.projectName}
                    </Badge>
                  </Link>
                  <span className="text-muted-foreground text-xs">
                    {format(parseISO(it.date), "EEE MMM d, yyyy")}
                  </span>
                </div>
                <p className="text-sm leading-snug">{it.signal}</p>
              </CardContent>
            </Card>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-muted-foreground py-4 text-sm">
            No signals match the current filter.
          </li>
        )}
      </ul>
    </div>
  );
}
