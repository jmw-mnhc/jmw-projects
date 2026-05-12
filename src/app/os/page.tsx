import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  ArrowRight,
  Calendar as CalendarIcon,
  Check,
  CircleDot,
  FileText,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/os/ui/card";
import { Badge } from "@/components/os/ui/badge";
import { Markdown } from "@/components/os/markdown";
import { ActionChecklist, type ActionItem } from "@/components/os/action-checklist";
import {
  getAllCalendarEvents,
  getLatestUnifiedBrief,
  getProjectStatuses,
  today,
} from "@/lib/os/reports";
import { Separator } from "@/components/os/ui/separator";

// Read fresh markdown on every request — never cache.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  const todayISO = today();
  const [statuses, calendar, brief] = await Promise.all([
    getProjectStatuses(),
    getAllCalendarEvents(),
    getLatestUnifiedBrief(),
  ]);

  const ranToday = statuses.filter((s) => s.ranToday);
  const totalReports = statuses.reduce(
    (sum, s) => sum + s.reportCount30d,
    0,
  );

  const actionItems: ActionItem[] = statuses
    .filter((s) => s.topAction)
    .map((s, i) => ({
      id: `${s.project.slug}-${s.latestDate ?? "x"}-${i}`,
      text: s.topAction!,
      project: s.project,
    }));

  // This week's calendar — events in the next 8 days from today
  const todayDate = parseISO(todayISO);
  const eightDays = new Date(todayDate);
  eightDays.setDate(eightDays.getDate() + 8);
  const upcoming = calendar.filter((e) => {
    const d = parseISO(e.date);
    return d >= todayDate && d <= eightDays;
  });

  const todayStr = format(todayDate, "EEEE, MMMM d, yyyy");

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 md:px-8">
      {/* Hero */}
      <section className="flex flex-col gap-2">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Sparkles className="size-4" />
          JMW OS &middot; Today&rsquo;s Brief
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {todayStr}
        </h1>
        <p className="text-muted-foreground">
          {ranToday.length} of {statuses.length}
          {" "}daily-update projects ran today &middot; {totalReports}
          {" "}reports across the last 30 days &middot;{" "}
          <a href="/os/sites" className="underline-offset-4 hover:underline">
            15 sites shipped
          </a>
        </p>
      </section>

      {/* Stat strip */}
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StatTile
          label="Projects ran today"
          value={`${ranToday.length}/${statuses.length}`}
          icon={<Check className="size-4" />}
        />
        <StatTile
          label="Open actions"
          value={String(actionItems.length)}
          icon={<CircleDot className="size-4" />}
        />
        <StatTile
          label="Reports (30d)"
          value={String(totalReports)}
          icon={<FileText className="size-4" />}
        />
        <StatTile
          label="Upcoming deadlines"
          value={String(upcoming.length)}
          icon={<CalendarIcon className="size-4" />}
        />
      </section>

      {/* Project grid */}
      <section className="space-y-3">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <p className="text-muted-foreground text-xs">
            Latest signal per project
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {statuses.map((s) => (
            <Link
              key={s.project.slug}
              href={`/os/projects/${s.project.slug}`}
              className="group"
            >
              <Card
                className="hover:border-foreground/20 group-focus-visible:ring-ring/40 h-full transition-all group-focus-visible:ring-2"
                style={{
                  borderTopColor: s.project.hex,
                  borderTopWidth: 3,
                }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-sm font-semibold">
                        {s.project.shortName}
                      </CardTitle>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        {s.project.description}
                      </p>
                    </div>
                    {s.ranToday ? (
                      <Badge
                        variant="secondary"
                        className="shrink-0 gap-1.5"
                        style={{
                          backgroundColor: `${s.project.hex}1a`,
                          color: s.project.hex,
                        }}
                      >
                        <span
                          className="size-1.5 rounded-full"
                          style={{ backgroundColor: s.project.hex }}
                        />
                        ran today
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-muted-foreground shrink-0"
                      >
                        no run today
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="line-clamp-3 text-sm leading-snug">
                    {s.signal ?? (
                      <span className="text-muted-foreground italic">
                        No signal extracted from latest report.
                      </span>
                    )}
                  </p>
                  <div className="text-muted-foreground flex items-center justify-between text-xs">
                    <span>
                      {s.reportCount30d} report
                      {s.reportCount30d === 1 ? "" : "s"} (30d)
                    </span>
                    <span className="inline-flex items-center gap-1 group-hover:text-foreground">
                      Open <ArrowRight className="size-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Two-column block: Action checklist + Week calendar */}
      <section className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Today&rsquo;s actions</CardTitle>
            <p className="text-muted-foreground text-xs">
              One per project, persisted in your browser.
            </p>
          </CardHeader>
          <CardContent>
            <ActionChecklist items={actionItems} />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>This week</CardTitle>
            <p className="text-muted-foreground text-xs">
              Deadlines from any report dated within the next 8 days.
            </p>
          </CardHeader>
          <CardContent>
            <WeekStrip events={upcoming} todayISO={todayISO} />
          </CardContent>
        </Card>
      </section>

      {/* Unified brief */}
      {brief && (
        <section className="space-y-3">
          <div className="flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight">
              Unified executive brief
            </h2>
            <p className="text-muted-foreground text-xs">
              {format(parseISO(brief.date), "MMMM d, yyyy")}
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Markdown>{brief.content}</Markdown>
            </CardContent>
          </Card>
        </section>
      )}

      {!brief && (
        <Card className="border-dashed">
          <CardContent className="text-muted-foreground py-10 text-center text-sm">
            No unified brief found at <code>_daily-reports/</code>. Run{" "}
            <code>/all-daily</code> to generate one.
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function StatTile({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between py-4">
        <div>
          <div className="text-muted-foreground text-xs font-medium">
            {label}
          </div>
          <div className="mt-1 text-2xl font-bold tracking-tight">{value}</div>
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </CardContent>
    </Card>
  );
}

function WeekStrip({
  events,
  todayISO,
}: {
  events: { date: string; label: string; project?: string }[];
  todayISO: string;
}) {
  if (events.length === 0) {
    return (
      <div className="text-muted-foreground py-8 text-center text-sm">
        No deadlines parsed for the next 8 days.
        <div className="mt-3">
          <TrendingUp className="text-muted-foreground/40 mx-auto size-6" />
        </div>
      </div>
    );
  }
  return (
    <ul className="space-y-2">
      {events.slice(0, 8).map((e, i) => {
        const isToday = e.date === todayISO;
        return (
          <li
            key={`${e.date}-${i}`}
            className="border-border flex items-start gap-3 rounded-lg border p-3"
          >
            <div className="bg-muted text-muted-foreground flex size-12 shrink-0 flex-col items-center justify-center rounded-md">
              <span className="text-[10px] font-semibold uppercase">
                {format(parseISO(e.date), "MMM")}
              </span>
              <span className="text-base font-bold leading-none">
                {format(parseISO(e.date), "d")}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-snug">{e.label}</p>
              {isToday && (
                <Badge variant="secondary" className="mt-1">
                  today
                </Badge>
              )}
            </div>
          </li>
        );
      })}
      <li className="pt-1">
        <Link
          href="/os/calendar"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs"
        >
          View full calendar <ArrowRight className="size-3" />
        </Link>
      </li>
    </ul>
  );
}
