import Link from "next/link";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";

export const metadata = {
  title: "Research — AI Agents & Personal OS · JMW Projects",
  description:
    "Field notes from May 2026: how the major AI agent frameworks stack up, what an Agentic Operating System actually is, and why I built JMW OS on Claude Code instead of adopting a framework.",
};

export default function ResearchPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to portfolio
        </Link>

        <header className="mt-8 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Research · May 2026
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              AI Agents & Personal Operating Systems
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Field notes from the agent-framework gold rush. I was about to
            install Hermes Agent and Hyperagent to &ldquo;100x my Claude Code
            productivity.&rdquo; Then I audited what I already had and shipped
            a personal OS instead. Here&rsquo;s the work.
          </p>
        </header>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            1 · The 2026 agent landscape
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Five systems showed up repeatedly in May 2026. Each is real and
            each solves a different problem. The temptation is to assume any
            one of them is &ldquo;the answer&rdquo; — they aren&rsquo;t.
            They&rsquo;re different answers to different questions.
          </p>

          <div className="overflow-hidden rounded-xl border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--surface-warm)] text-left">
                <tr>
                  <th className="px-4 py-3 font-medium">System</th>
                  <th className="px-4 py-3 font-medium">Shape</th>
                  <th className="px-4 py-3 font-medium">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <Row
                  name="Hermes Agent"
                  org="Nous Research · 140k★ MIT"
                  shape="Self-improving local daemon. Multi-provider routing. Compounding skill library."
                  bestFor="Long-horizon autonomous loops. Cost optimization via cheaper-model routing."
                />
                <Row
                  name="Hyperagent"
                  org="Airtable · Howie Liu, public April 2026"
                  shape="Cloud-isolated agent sessions. Real browser, shell, FS per session. One-click Slack deploy."
                  bestFor="Research-while-you-sleep. Agents-as-coworkers in a team Slack."
                />
                <Row
                  name="Claude Code"
                  org="Anthropic · 70–75% SWE-bench"
                  shape="Best-in-class IDE/CLI for actually writing software."
                  bestFor="Building. Always building. The execution layer."
                />
                <Row
                  name="OpenClaw"
                  org="Open source · ~30–60min setup"
                  shape="Personal automation across messaging, scheduling, web."
                  bestFor="Connecting Slack/email/calendar automations once you have an OS."
                />
                <Row
                  name="Argent OS"
                  org="Maturing · public March 2026"
                  shape="Personal AI OS on your hardware. Channels + context + memory."
                  bestFor="Greenfield users with no existing system."
                />
              </tbody>
            </table>
          </div>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            What I noticed: <strong className="text-[var(--foreground)]">these
            are destinations, not multipliers</strong>. Each one is a place you
            migrate <em>to</em>. If you already have a working stack — and most
            operators do, even if they haven&rsquo;t named it — adopting one of
            these means surrendering the surface you&rsquo;ve built.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            2 · The Agentic OS pattern
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            The most useful framing came from{" "}
            <Cite href="https://www.mindstudio.ai/blog/agentic-operating-system-claude-code">
              MindStudio
            </Cite>{" "}
            and{" "}
            <Cite href="https://maxmitcham.substack.com/p/how-to-build-an-ai-agent-operating">
              Max Mitcham&rsquo;s essay
            </Cite>{" "}
            on how agent systems compound. The pattern is folder-based, not
            framework-based:
          </p>

          <pre className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--paper)] p-4 text-xs leading-relaxed text-[var(--muted)]">
{`/skills/[skill-name]/
  skill.md          # Instructions
  learnings.md      # What worked, what missed, do differently
  eval.json         # Scoring criteria with weights
  last-output.md    # Most recent output
  context/handoff.md  # Output to chain into next skill

/brand-context/
  business-brain.md   # Persistent shared understanding (~1k words)
  memory.md           # Facts that persist indefinitely`}
          </pre>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            Three layers do the work. <strong className="text-[var(--foreground)]">Persistent
            memory</strong> survives every conversation.{" "}
            <strong className="text-[var(--foreground)]">Self-improving
            skills</strong> append to <code>learnings.md</code> on every run.{" "}
            <strong className="text-[var(--foreground)]">Skill chaining</strong>{" "}
            via <code>handoff.md</code> turns one workflow into a pipeline. The
            system gets smarter because every run adds a data point — no model
            change required.
          </p>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            Max Mitcham&rsquo;s four-part stack adds an information
            architecture insight: separate the <em>raw</em>{" "}
            (append-only sources), <em>wiki</em> (synthesized knowledge), and{" "}
            <em>output</em> (deliverables) layers. Most agent failures come
            from collapsing all three into one bucket.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            3 · What I built instead
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            An audit showed I already had{" "}
            <strong className="text-[var(--foreground)]">~80% of a Personal
            OS</strong>: 15 deployed Vercel sites, six projects with
            autonomous daily-update commands, scheduled <code>/all-daily</code>{" "}
            orchestrator, unified executive briefs landing in{" "}
            <code>_daily-reports/</code>, and ~30 Claude Code skills.
          </p>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            What was missing was the <em>surface</em> — somewhere I could
            actually see the work without grepping markdown across 15
            directories. That&rsquo;s what JMW OS is.
          </p>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
              Decision tree
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
              <li>
                <strong className="text-[var(--foreground)]">Building →</strong>{" "}
                Claude Code (already at 70–75% SWE-bench; nothing wins here)
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Daily research loops →</strong>{" "}
                evaluate Hyperagent over Q2&rsquo;26 (cloud-isolated sessions
                are genuinely good for &ldquo;research while I sleep&rdquo;)
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Memory + skills →</strong>{" "}
                adopt the <code>learnings.md</code> + <code>business-brain.md</code>{" "}
                convention inside <code>~/.claude/skills/</code>
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Single pane of glass →</strong>{" "}
                Next.js dashboard on Vercel, password-gated. <em>This is JMW OS.</em>
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Skip:</strong>{" "}
                Hermes (daemon overhead I don&rsquo;t need yet), OpenClaw
                (pre-OS connector layer), Argent (greenfield-only)
              </li>
            </ul>
          </div>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            The result lives at{" "}
            <code className="text-[var(--foreground)]">/os</code> — operator-only,
            visible to people who&rsquo;ve already authenticated. It pulls
            every daily-report from sibling directories at build time, snapshots
            them, and renders the unified state. Today&rsquo;s brief, action
            checklist, cross-project signal feed, calendar, fuzzy search,
            week-over-week trends, and a hub linking out to all 15 sites.
          </p>
        </section>

        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            4 · The non-obvious bugs
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Two things cost me hours and are worth writing down:
          </p>
          <ul className="space-y-3 text-base leading-relaxed text-[var(--muted)]">
            <li>
              <strong className="text-[var(--foreground)]">Next.js 16
              renamed <code>middleware.ts</code> &rarr; <code>proxy.ts</code></strong>{" "}
              — and the file must live next to <code>src/app/</code>, not the
              project root. Wrong location compiles silently with an empty
              <code> middleware-manifest.json</code>. The build log even
              prints <em>&ldquo;Proxy compiled&rdquo;</em> while not registering it.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Vercel SSO Protection
              auto-blocks custom aliases.</strong> Default URLs work; anything
              you alias (jmwos.vercel.app, jmwprojects.vercel.app) gets a
              second SSO wall in front of your own auth. Toggle via{" "}
              <code>PATCH /v9/projects/{`{id}`}</code> with{" "}
              <code>ssoProtection: null</code>.
            </li>
          </ul>
        </section>

        <section className="mt-14 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">Sources</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-[var(--muted)]">
            <Source
              href="https://github.com/NousResearch/hermes-agent/blob/main/skills/autonomous-ai-agents/claude-code/SKILL.md"
              label="Hermes Agent — Claude Code Skill (Nous Research, GitHub)"
            />
            <Source
              href="https://x.com/howietl/status/2024618178912145592"
              label="Howie Liu announces Hyperagent (X)"
            />
            <Source
              href="https://www.airtable.com/newsroom/introducing-superagent"
              label="Introducing Superagent (Airtable Newsroom)"
            />
            <Source
              href="https://www.mindstudio.ai/blog/agentic-operating-system-claude-code"
              label="How to Build an Agentic OS Inside Claude Code (MindStudio)"
            />
            <Source
              href="https://maxmitcham.substack.com/p/how-to-build-an-ai-agent-operating"
              label="How to Build an AI Agent OS That Compounds (Max Mitcham)"
            />
            <Source
              href="https://utilo.io/en/home/blog/hermes-vs-claude-code-vs-openclaw-2026"
              label="Hermes Agent vs Claude Code vs OpenClaw (Utilo, 2026)"
            />
            <Source
              href="https://shipyard.build/blog/claude-code-multi-agent/"
              label="Multi-agent orchestration for Claude Code in 2026 (Shipyard)"
            />
            <Source
              href="https://creatoreconomy.so/p/the-race-to-build-a-personal-ai-agent-openclaw-hermes-claude-codex-gemini"
              label="The Race to Build a Personal AI Agent (Creator Economy)"
            />
            <Source
              href="https://github.com/ArgentAIOS"
              label="Argent OS (GitHub)"
            />
            <Source
              href="https://github.com/builderz-labs/mission-control"
              label="Mission Control — open-source agent fleet dashboard (GitHub)"
            />
            <Source
              href="https://www.lennysnewsletter.com/p/how-we-restructured-airtables-entire-org-for-ai"
              label="How we restructured Airtable's entire org for AI (Lenny's Newsletter)"
            />
          </ul>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Researched May 12, 2026 · Built same day
          </span>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to portfolio
          </Link>
        </footer>
      </article>
    </>
  );
}

function Row({
  name,
  org,
  shape,
  bestFor,
}: {
  name: string;
  org: string;
  shape: string;
  bestFor: string;
}) {
  return (
    <tr className="align-top">
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="font-medium text-[var(--foreground)]">{name}</div>
        <div className="mt-0.5 text-[11px] text-[var(--muted-soft)]">{org}</div>
      </td>
      <td className="px-4 py-4 text-[var(--muted)]">{shape}</td>
      <td className="px-4 py-4 text-[var(--muted)]">{bestFor}</td>
    </tr>
  );
}

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[var(--accent)] underline decoration-dotted underline-offset-4 hover:text-[var(--accent-bright)]"
    >
      {children}
    </a>
  );
}

function Source({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-baseline gap-1 text-[var(--accent)] underline-offset-4 hover:underline"
      >
        {label}
        <ExternalLink className="h-3 w-3" />
      </a>
    </li>
  );
}
