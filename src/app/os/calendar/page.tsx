import { format, parseISO } from "date-fns";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/os/ui/card";
import { Badge } from "@/components/os/ui/badge";
import { CalendarGrid } from "@/components/os/calendar-grid";
import { getAllCalendarEvents, today } from "@/lib/os/reports";
import { getProject } from "@/lib/os/projects";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CalendarPage() {
  const todayISO = today();
  const events = await getAllCalendarEvents();

  const enriched = events.map((e) => {
    const project = e.project ? getProject(e.project) : undefined;
    return {
      date: e.date,
      label: e.label,
      projectSlug: e.project,
      projectName: project?.shortName ?? "Unified",
      projectHex: project?.hex ?? "#737373",
      reportDate: e.reportDate,
    };
  });

  const upcoming = enriched.filter((e) => e.date >= todayISO);
  const past = enriched.filter((e) => e.date < todayISO);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Calendar
        </h1>
        <p className="text-muted-foreground mt-1">
          Every dated event mentioned in any report. Today is{" "}
          {format(parseISO(todayISO), "EEEE, MMMM d, yyyy")}.
        </p>
      </header>

      <CalendarGrid events={enriched} todayISO={todayISO} />

      <section className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
            <p className="text-muted-foreground text-xs">
              {upcoming.length} event{upcoming.length === 1 ? "" : "s"} from
              today onward.
            </p>
          </CardHeader>
          <CardContent>
            <EventList items={upcoming} todayISO={todayISO} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent (past 30d)</CardTitle>
            <p className="text-muted-foreground text-xs">
              {past.length} historical event{past.length === 1 ? "" : "s"}.
            </p>
          </CardHeader>
          <CardContent>
            <EventList items={past.slice(-30).reverse()} todayISO={todayISO} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function EventList({
  items,
  todayISO,
}: {
  items: {
    date: string;
    label: string;
    projectName: string;
    projectHex: string;
  }[];
  todayISO: string;
}) {
  if (items.length === 0) {
    return (
      <p className="text-muted-foreground py-4 text-center text-sm">
        Nothing here.
      </p>
    );
  }
  return (
    <ul className="space-y-2">
      {items.map((e, i) => {
        const isToday = e.date === todayISO;
        return (
          <li
            key={`${e.date}-${i}`}
            className="border-border flex items-start gap-3 rounded-lg border p-3"
          >
            <div
              className="flex size-12 shrink-0 flex-col items-center justify-center rounded-md"
              style={{
                backgroundColor: `${e.projectHex}14`,
                color: e.projectHex,
              }}
            >
              <span className="text-[10px] font-semibold uppercase">
                {format(parseISO(e.date), "MMM")}
              </span>
              <span className="text-base font-bold leading-none">
                {format(parseISO(e.date), "d")}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <Badge
                  variant="secondary"
                  style={{
                    backgroundColor: `${e.projectHex}1a`,
                    color: e.projectHex,
                  }}
                >
                  {e.projectName}
                </Badge>
                {isToday && <Badge variant="outline">today</Badge>}
              </div>
              <p className="text-sm leading-snug">{e.label}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
