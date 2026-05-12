import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { CalendarClock, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/os/ui/card";
import { Badge } from "@/components/os/ui/badge";
import { Markdown } from "@/components/os/markdown";
import { Sparkline } from "@/components/os/sparkline";
import { ProjectSearch } from "@/components/os/project-search";
import { getProject, isProjectSlug, PROJECTS } from "@/lib/os/projects";
import { getReportsForProject } from "@/lib/os/reports";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isProjectSlug(slug)) notFound();
  const project = getProject(slug)!;

  const reports = await getReportsForProject(slug, 30);

  const sparkData = [...reports]
    .reverse()
    .map((r) => ({ date: r.date, value: r.size }));

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 md:px-8">
      {/* Hero */}
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span
            className="size-3 rounded-full"
            style={{ backgroundColor: project.hex }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: project.hex }}
          >
            {project.shortName}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {project.name}
        </h1>
        <p className="text-muted-foreground">{project.description}</p>
      </header>

      {/* Stats + sparkline */}
      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="py-4">
            <div className="text-muted-foreground text-xs font-medium">
              Reports (30d)
            </div>
            <div className="mt-1 text-2xl font-bold">{reports.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="text-muted-foreground text-xs font-medium">
              Latest
            </div>
            <div className="mt-1 text-base font-semibold">
              {reports[0]
                ? format(parseISO(reports[0].date), "MMM d, yyyy")
                : "—"}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="text-muted-foreground text-xs font-medium">
              Avg report size
            </div>
            <div className="mt-1 text-base font-semibold">
              {reports.length === 0
                ? "—"
                : `${Math.round(
                    reports.reduce((s, r) => s + r.size, 0) /
                      reports.length /
                      100,
                  ) / 10}k chars`}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Sparkline */}
      <Card>
        <CardHeader>
          <CardTitle>Output trend (30d)</CardTitle>
          <p className="text-muted-foreground text-xs">
            Daily report size in characters — a proxy for intel produced.
          </p>
        </CardHeader>
        <CardContent>
          <Sparkline data={sparkData} color={project.hex} height={120} />
        </CardContent>
      </Card>

      {/* Search */}
      <ProjectSearch
        reports={reports.map((r) => ({
          date: r.date,
          content: r.content,
          signal: r.signal,
        }))}
        accentHex={project.hex}
      />

      {/* Timeline */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Timeline</h2>
        {reports.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="text-muted-foreground py-10 text-center text-sm">
              No reports found yet for this project.
            </CardContent>
          </Card>
        )}
        <div className="relative space-y-6 border-l pl-6">
          {reports.map((r) => (
            <article key={r.filePath} className="relative">
              <span
                className="border-background absolute -left-[31px] top-2 size-3 rounded-full border-2"
                style={{ backgroundColor: project.hex }}
                aria-hidden
              />
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="gap-1"
                      style={{
                        backgroundColor: `${project.hex}1a`,
                        color: project.hex,
                      }}
                    >
                      <CalendarClock className="size-3" />
                      {format(parseISO(r.date), "EEE, MMM d, yyyy")}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <FileText className="size-3" />
                      {Math.round(r.size / 100) / 10}k chars
                    </Badge>
                    {r.actions.length > 0 && (
                      <Badge variant="outline">
                        {r.actions.length} action
                        {r.actions.length === 1 ? "" : "s"}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <Markdown>{r.content}</Markdown>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
