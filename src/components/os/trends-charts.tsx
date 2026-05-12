"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/os/ui/card";
import { Sparkline } from "@/components/os/sparkline";

type ProjectSeries = {
  slug: string;
  name: string;
  hex: string;
  total: number;
  points: { date: string; size: number; actions: number }[];
};

type RunRow = {
  date: string;
  total: number;
  ranSucceeded: number;
  duration: number;
};

export function TrendsCharts({
  perProject,
  runLog,
}: {
  perProject: ProjectSeries[];
  runLog: RunRow[];
}) {
  const totals = perProject.map((p) => ({
    name: p.name,
    total: p.total,
    hex: p.hex,
  }));

  const tooltipStyle = {
    background: "var(--popover)",
    border: "1px solid var(--border)",
    borderRadius: 6,
    fontSize: 12,
    color: "var(--popover-foreground)",
  } as const;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reports per project (28d)</CardTitle>
            <p className="text-muted-foreground text-xs">
              Trailing 28-day total per project.
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={totals}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                  height={50}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  allowDecimals={false}
                />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--muted)" }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                  {totals.map((t, i) => (
                    <Cell key={i} fill={t.hex} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Items added per day (run log)</CardTitle>
            <p className="text-muted-foreground text-xs">
              Last 14 days from <code>_run-log.jsonl</code>.
            </p>
          </CardHeader>
          <CardContent>
            {runLog.length === 0 ? (
              <p className="text-muted-foreground py-12 text-center text-sm">
                No run-log entries yet — run <code>/all-daily</code> to start
                logging.
              </p>
            ) : (
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={runLog}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                    allowDecimals={false}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#0d9488"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {perProject.map((p) => (
          <Card key={p.slug}>
            <CardHeader className="pb-1">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">{p.name}</CardTitle>
                <span
                  className="text-xs font-semibold"
                  style={{ color: p.hex }}
                >
                  {p.total} report{p.total === 1 ? "" : "s"}
                </span>
              </div>
              <p className="text-muted-foreground text-xs">
                Daily output (chars) over 28d.
              </p>
            </CardHeader>
            <CardContent>
              <Sparkline
                data={p.points.map((pt) => ({
                  date: pt.date,
                  value: pt.size,
                }))}
                color={p.hex}
                height={90}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
