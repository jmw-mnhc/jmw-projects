import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/os/ui/card";
import { TrendsCharts } from "@/components/os/trends-charts";
import { PROJECTS } from "@/lib/os/projects";
import { getReportsForProject, getRunLog } from "@/lib/os/reports";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function TrendsPage() {
  const perProject = await Promise.all(
    PROJECTS.map(async (p) => {
      const reports = await getReportsForProject(p.slug, 28);
      // newest-last for charts
      const points = [...reports]
        .reverse()
        .map((r) => ({
          date: r.date,
          size: r.size,
          actions: r.actions.length,
        }));
      return {
        slug: p.slug,
        name: p.shortName,
        hex: p.hex,
        total: reports.length,
        points,
      };
    }),
  );

  const runLog = await getRunLog();
  const runLogChart = runLog
    .slice(0, 14)
    .reverse()
    .map((r) => ({
      date: r.date,
      total: r.items_added_total ?? 0,
      ranSucceeded: r.projects_succeeded ?? 0,
      duration: r.duration_minutes ?? 0,
    }));

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Trends
        </h1>
        <p className="text-muted-foreground mt-1">
          4-week trailing window across every project. Daily report size is a
          proxy for intel produced.
        </p>
      </header>

      <TrendsCharts perProject={perProject} runLog={runLogChart} />

      <Card>
        <CardHeader>
          <CardTitle>Run log (latest 14)</CardTitle>
          <p className="text-muted-foreground text-xs">
            From <code>_daily-reports/_run-log.jsonl</code>.
          </p>
        </CardHeader>
        <CardContent>
          {runLog.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No run-log entries yet.
            </p>
          ) : (
            <table className="w-full text-sm">
              <thead className="text-muted-foreground border-b text-left text-xs">
                <tr>
                  <th className="py-2 pr-3 font-medium">Date</th>
                  <th className="px-3 font-medium">Projects ran</th>
                  <th className="px-3 font-medium">Succeeded</th>
                  <th className="px-3 font-medium">Items added</th>
                  <th className="px-3 font-medium">Blockers</th>
                  <th className="px-3 font-medium">Duration (min)</th>
                </tr>
              </thead>
              <tbody>
                {runLog.slice(0, 14).map((r) => (
                  <tr key={r.date} className="border-b last:border-b-0">
                    <td className="py-2 pr-3 font-mono">{r.date}</td>
                    <td className="px-3">{r.projects_run ?? "—"}</td>
                    <td className="px-3">{r.projects_succeeded ?? "—"}</td>
                    <td className="px-3">{r.items_added_total ?? "—"}</td>
                    <td className="px-3">{r.blockers ?? "—"}</td>
                    <td className="px-3">{r.duration_minutes ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
