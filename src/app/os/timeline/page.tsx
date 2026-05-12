import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Card, CardContent } from "@/components/os/ui/card";
import { TimelineFilters } from "@/components/os/timeline-filters";
import { getAllReports } from "@/lib/os/reports";
import { getProject } from "@/lib/os/projects";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function TimelinePage() {
  const reports = await getAllReports(60);
  const items = reports
    .filter((r) => r.signal)
    .map((r) => {
      const project = getProject(r.project)!;
      return {
        id: `${r.project}-${r.date}`,
        date: r.date,
        signal: r.signal!,
        projectSlug: r.project,
        projectName: project.shortName,
        projectHex: project.hex,
      };
    });

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 md:px-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Timeline
        </h1>
        <p className="text-muted-foreground mt-1">
          Every &ldquo;today&rsquo;s signal&rdquo; across every project,
          newest first.
        </p>
      </header>

      <TimelineFilters items={items} />

      {items.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="text-muted-foreground py-10 text-center text-sm">
            No signals extracted yet. Reports without a recognized
            &ldquo;TODAY&rsquo;S SIGNAL&rdquo; section will not appear here.
          </CardContent>
        </Card>
      )}

      <p className="text-muted-foreground text-xs">
        Tip: click a project pill above to open that project&rsquo;s page.
        Click a signal to jump to its full report.
      </p>

      <div className="text-muted-foreground text-xs">
        <Link className="hover:text-foreground" href="/">
          ← Back to today
        </Link>
      </div>
    </div>
  );
}
