import { GlobalSearch } from "@/components/os/global-search";
import { getAllReports } from "@/lib/os/reports";
import { getProject } from "@/lib/os/projects";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function SearchPage() {
  const reports = await getAllReports(120);
  const docs = reports.map((r) => {
    const project = getProject(r.project)!;
    return {
      id: `${r.project}-${r.date}`,
      date: r.date,
      content: r.content,
      signal: r.signal,
      projectSlug: r.project,
      projectName: project.shortName,
      projectHex: project.hex,
      size: r.size,
    };
  });

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 md:px-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Archive search
        </h1>
        <p className="text-muted-foreground mt-1">
          Fuzzy search across {docs.length} report{docs.length === 1 ? "" : "s"}
          {" "}from every project.
        </p>
      </header>
      <GlobalSearch docs={docs} />
    </div>
  );
}
