"use client";

import * as React from "react";
import {
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/os/ui/card";
import { Button } from "@/components/os/ui/button";
import { cn } from "@/lib/os/utils";

type Event = {
  date: string;
  label: string;
  projectName: string;
  projectHex: string;
};

export function CalendarGrid({
  events,
  todayISO,
}: {
  events: Event[];
  todayISO: string;
}) {
  const [cursor, setCursor] = React.useState(parseISO(todayISO));

  const monthStart = startOfMonth(cursor);
  const monthEnd = endOfMonth(cursor);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const today = parseISO(todayISO);

  const days: Date[] = [];
  for (let d = gridStart; d <= gridEnd; d = new Date(d.getTime() + 86400000)) {
    days.push(new Date(d));
  }

  const eventsByDay = React.useMemo(() => {
    const map = new Map<string, Event[]>();
    for (const e of events) {
      const k = e.date;
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(e);
    }
    return map;
  }, [events]);

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous month"
            onClick={() => setCursor((c) => subMonths(c, 1))}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <div className="text-base font-semibold tracking-tight">
            {format(cursor, "MMMM yyyy")}
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Next month"
            onClick={() => setCursor((c) => addMonths(c, 1))}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d) => {
            const iso = format(d, "yyyy-MM-dd");
            const ev = eventsByDay.get(iso) ?? [];
            const inMonth = isSameMonth(d, cursor);
            const isToday = isSameDay(d, today);
            return (
              <div
                key={iso}
                className={cn(
                  "border-border flex min-h-[80px] flex-col gap-1 rounded-md border p-1.5 text-left text-xs",
                  !inMonth && "opacity-40",
                  isToday && "ring-foreground ring-2",
                )}
              >
                <span
                  className={cn(
                    "self-start font-mono font-semibold",
                    isToday && "text-foreground",
                  )}
                >
                  {format(d, "d")}
                </span>
                {ev.slice(0, 2).map((e, i) => (
                  <span
                    key={i}
                    title={e.label}
                    className="truncate rounded px-1 py-0.5 text-[10px] font-medium"
                    style={{
                      backgroundColor: `${e.projectHex}1f`,
                      color: e.projectHex,
                    }}
                  >
                    {e.label}
                  </span>
                ))}
                {ev.length > 2 && (
                  <span className="text-muted-foreground text-[10px]">
                    +{ev.length - 2} more
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
