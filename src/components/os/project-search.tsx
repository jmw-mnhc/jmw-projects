"use client";

import * as React from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Input } from "@/components/os/ui/input";
import { Card, CardContent } from "@/components/os/ui/card";

type ReportLite = {
  date: string;
  content: string;
  signal: string | null;
};

export function ProjectSearch({
  reports,
  accentHex,
}: {
  reports: ReportLite[];
  accentHex: string;
}) {
  const [q, setQ] = React.useState("");

  const fuse = React.useMemo(
    () =>
      new Fuse(reports, {
        keys: ["content", "signal", "date"],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [reports],
  );

  const results = React.useMemo(() => {
    if (!q.trim()) return [];
    return fuse.search(q.trim()).slice(0, 10);
  }, [q, fuse]);

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search this project's reports…"
          className="pl-9"
        />
      </div>
      {q.trim() && (
        <div className="space-y-2">
          {results.length === 0 && (
            <p className="text-muted-foreground text-xs">No matches.</p>
          )}
          {results.map(({ item }) => (
            <Card key={item.date}>
              <CardContent className="py-3">
                <div className="flex items-baseline justify-between">
                  <a
                    href={`#`}
                    className="text-sm font-semibold"
                    style={{ color: accentHex }}
                  >
                    {format(parseISO(item.date), "EEE MMM d, yyyy")}
                  </a>
                </div>
                <p className="text-muted-foreground mt-1 line-clamp-3 text-xs">
                  {snippet(item.content, q)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function snippet(text: string, q: string, len = 220) {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());
  if (idx === -1) return text.slice(0, len) + (text.length > len ? "…" : "");
  const start = Math.max(0, idx - len / 2);
  const end = Math.min(text.length, start + len);
  return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
}
