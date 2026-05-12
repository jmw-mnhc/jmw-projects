"use client";

import * as React from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { format, parseISO } from "date-fns";
import { Search } from "lucide-react";
import { Input } from "@/components/os/ui/input";
import { Card, CardContent } from "@/components/os/ui/card";
import { Badge } from "@/components/os/ui/badge";

type Doc = {
  id: string;
  date: string;
  content: string;
  signal: string | null;
  projectSlug: string;
  projectName: string;
  projectHex: string;
  size: number;
};

export function GlobalSearch({ docs }: { docs: Doc[] }) {
  const [q, setQ] = React.useState("");

  const fuse = React.useMemo(
    () =>
      new Fuse(docs, {
        keys: [
          { name: "content", weight: 0.6 },
          { name: "signal", weight: 0.3 },
          { name: "date", weight: 0.05 },
          { name: "projectName", weight: 0.05 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        includeMatches: true,
        minMatchCharLength: 3,
      }),
    [docs],
  );

  const results = React.useMemo(() => {
    if (!q.trim()) return [];
    return fuse.search(q.trim()).slice(0, 30);
  }, [q, fuse]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
        <Input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search every report — try 'Section 504', 'Sintra', 'speaker', 'Mother's Day'…"
          className="h-11 pl-9 text-base"
        />
      </div>

      {q.trim() && (
        <p className="text-muted-foreground text-xs">
          {results.length} result{results.length === 1 ? "" : "s"}
        </p>
      )}

      <ul className="space-y-3">
        {results.map(({ item }) => (
          <li key={item.id}>
            <Link
              href={`/os/projects/${item.projectSlug}`}
              className="group block"
            >
              <Card className="group-hover:border-foreground/20 transition-colors">
                <CardContent className="py-4">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <Badge
                      style={{
                        backgroundColor: `${item.projectHex}1a`,
                        color: item.projectHex,
                      }}
                    >
                      <span
                        className="mr-1.5 size-1.5 rounded-full"
                        style={{ backgroundColor: item.projectHex }}
                      />
                      {item.projectName}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {format(parseISO(item.date), "EEE MMM d, yyyy")}
                    </span>
                    <span className="text-muted-foreground/60 text-xs">
                      &middot; {Math.round(item.size / 100) / 10}k chars
                    </span>
                  </div>
                  <p className="text-sm leading-snug">
                    {snippet(item.content, q)}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
        {q.trim() && results.length === 0 && (
          <li className="text-muted-foreground py-6 text-center text-sm">
            No matches for “{q}”. Try a shorter or more distinctive phrase.
          </li>
        )}
        {!q.trim() && (
          <li className="text-muted-foreground py-12 text-center text-sm">
            Start typing to search.
          </li>
        )}
      </ul>
    </div>
  );
}

function snippet(text: string, q: string, len = 280): React.ReactNode {
  const lower = text.toLowerCase();
  const term = q.toLowerCase();
  const idx = lower.indexOf(term);
  if (idx === -1) {
    return text.slice(0, len) + (text.length > len ? "…" : "");
  }
  const start = Math.max(0, idx - len / 2);
  const end = Math.min(text.length, start + len);
  const before = text.slice(start, idx);
  const match = text.slice(idx, idx + q.length);
  const after = text.slice(idx + q.length, end);
  return (
    <>
      {start > 0 ? "…" : ""}
      {before}
      <mark className="bg-yellow-200/70 px-0.5 dark:bg-yellow-500/30 dark:text-yellow-100">
        {match}
      </mark>
      {after}
      {end < text.length ? "…" : ""}
    </>
  );
}
