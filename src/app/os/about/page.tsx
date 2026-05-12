import { Card, CardContent } from "@/components/os/ui/card";
import {
  Cpu,
  GitBranch,
  Layers,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 md:px-8">
      <header className="space-y-3">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Sparkles className="size-4" />
          About JMW OS
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          A personal operating system for shipping ideas.
        </h1>
        <p className="text-muted-foreground text-lg">
          Built on Claude Code. Reads from every active project. One dashboard
          to see the whole picture.
        </p>
      </header>

      <Card>
        <CardContent className="prose prose-zinc dark:prose-invert max-w-none pt-6">
          <p>
            JMW OS is the operator&rsquo;s view of every project I&rsquo;m
            running &mdash; client work, acquisition pipelines, advocacy
            sprints, marketplaces, demos. Each project lives in its own Next.js
            app on Vercel. Each one writes a daily report. This dashboard pulls
            them all together.
          </p>
          <p>
            It is not a separate AI agent. It is the <em>shareable surface</em>{" "}
            over the agent loops I already run inside Claude Code. The agent
            stays where the code lives. The dashboard makes the work visible
            without giving anyone shell access.
          </p>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Pillar
            icon={<Workflow className="size-4" />}
            title="Daily agent loops"
            body="Each project has its own /daily-update command. /all-daily orchestrates them. The reports land in daily-reports/ folders inside each repo."
          />
          <Pillar
            icon={<Layers className="size-4" />}
            title="Snapshot ingestion"
            body="A build-time script copies every daily-report into ./data/ so Vercel can serve them. No DB, no API calls — just markdown."
          />
          <Pillar
            icon={<Cpu className="size-4" />}
            title="Claude Code skills"
            body="The intelligence lives in skills (~/.claude/skills) and commands (~/.claude/commands). The dashboard surfaces the output; the agent does the work."
          />
          <Pillar
            icon={<GitBranch className="size-4" />}
            title="Compound memory"
            body="Memory files persist across conversations. learnings.md and business-brain.md grow with every run — the Agentic OS pattern, applied to a single operator."
          />
          <Pillar
            icon={<Rocket className="size-4" />}
            title="Ship daily"
            body="15+ Vercel deployments. Each one shippable in a working session. The dashboard makes 'do I have stale projects?' a question you can answer at a glance."
          />
          <Pillar
            icon={<Sparkles className="size-4" />}
            title="Cloud agents (next)"
            body="Hyperagent (Airtable) Founding 500 program opens a parallel track for cloud-isolated agent sessions. Layer on top — don't replace what works."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Stack</h2>
        <Card>
          <CardContent className="text-sm space-y-2 pt-6">
            <Row k="Front-end" v="Next.js 16 (App Router, Turbopack) + React 19 + TypeScript strict" />
            <Row k="Styling" v="Tailwind CSS 4 + shadcn/ui (New York) + Lucide icons" />
            <Row k="Content" v="react-markdown + remark-gfm + gray-matter (frontmatter)" />
            <Row k="Search" v="fuse.js fuzzy index over every report" />
            <Row k="Charts" v="recharts for week-over-week trends" />
            <Row k="Hosting" v="Vercel. Password-gated with Basic Auth middleware." />
            <Row k="Data" v="Markdown files committed to /data/. Refreshed nightly + on demand." />
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">
          Why not Hermes / Hyperagent / Argent OS?
        </h2>
        <Card>
          <CardContent className="text-sm space-y-3 pt-6">
            <p>
              They&rsquo;re good systems. Each one is a destination you migrate{" "}
              <em>to</em>. JMW OS is a surface you build <em>over</em> the
              tools you already use.
            </p>
            <p className="text-muted-foreground">
              The plan: pilot Hyperagent in parallel for autonomous research
              loops. Keep Claude Code as the building layer. Use this dashboard
              as the unified view either way.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function Pillar({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Card>
      <CardContent className="space-y-2 pt-6">
        <div className="text-muted-foreground flex items-center gap-2 text-xs font-medium uppercase tracking-wide">
          {icon}
          {title}
        </div>
        <p className="text-sm leading-snug">{body}</p>
      </CardContent>
    </Card>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <div className="text-muted-foreground w-24 shrink-0 text-xs font-medium uppercase tracking-wide">
        {k}
      </div>
      <div className="flex-1">{v}</div>
    </div>
  );
}
