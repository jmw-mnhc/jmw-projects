"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export type SparkPoint = {
  date: string;
  value: number;
};

export function Sparkline({
  data,
  color,
  height = 80,
}: {
  data: SparkPoint[];
  color: string;
  height?: number;
}) {
  if (data.length === 0) {
    return (
      <div
        className="text-muted-foreground flex items-center justify-center text-xs"
        style={{ height }}
      >
        No data
      </div>
    );
  }
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{ top: 4, right: 4, left: 4, bottom: 4 }}
      >
        <defs>
          <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.4} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" hide />
        <Tooltip
          cursor={{ stroke: color, strokeOpacity: 0.3 }}
          contentStyle={{
            background: "var(--popover)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            fontSize: 12,
            color: "var(--popover-foreground)",
          }}
          labelStyle={{ color: "var(--muted-foreground)", fontSize: 11 }}
          formatter={(v) => [`${v} chars`, "report size"] as [string, string]}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill={`url(#grad-${color.replace("#", "")})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
