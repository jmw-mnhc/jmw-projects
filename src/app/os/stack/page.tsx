import Link from "next/link";
import { ArrowLeft, Check, ExternalLink, Minus, X } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Stack — Free/OSS tools to evaluate · JMW OS",
};

type Verdict = "try-first" | "consider" | "skip";

type Tool = {
  name: string;
  url: string;
  license: string;
  oneLine: string;
  why: string;
  verdict: Verdict;
};

export default function StackPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/os"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition"
      >
        <ArrowLeft className="size-3.5" />
        Back to OS
      </Link>

      <header className="mt-8 space-y-3">
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-[0.18em]">
          Operator-only · Stack research · May 2026
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Free / OSS tools worth assessing
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Opinionated picks for the AI agency and Personal OS, in priority
          order. Each one is free, open-source, self-hostable, and battle-tested
          enough to bet on. <strong className="text-foreground">Audience: me.</strong>
        </p>
      </header>

      <section className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">
          The build-today stack (8 tools)
        </h2>
        <p className="text-muted-foreground text-sm">
          If I install <em>nothing else</em>, these eight tools cover ~90% of
          the surface I&rsquo;d want for the agency + OS. Top-down by what to
          adopt first.
        </p>

        <Stack
          title="1 · Local LLM serving — start with Ollama, graduate to vLLM"
          tools={[
            {
              name: "Ollama",
              url: "https://ollama.com",
              license: "MIT",
              oneLine: "One command to run any local model. MLX backend on Apple Silicon.",
              why: "Lowest friction. 30 tok/s on an M-series Mac with a 24B model. The fastest path from 'I want to call Llama 3.3 locally' to a working HTTP API. Start here.",
              verdict: "try-first",
            },
            {
              name: "vLLM",
              url: "https://github.com/vllm-project/vllm",
              license: "Apache 2.0",
              oneLine: "Production-grade serving with continuous batching + PagedAttention.",
              why: "When you serve concurrent requests (clients, multi-agent loops), vLLM hits ~16× Ollama's throughput. Adopt when concurrency starts mattering, not before.",
              verdict: "consider",
            },
          ]}
        />

        <Stack
          title="2 · Agent orchestration — CrewAI + LangGraph, alongside Claude Code"
          tools={[
            {
              name: "CrewAI",
              url: "https://crewai.com/open-source",
              license: "MIT",
              oneLine: "Role-based multi-agent teams in Python. Built-in ChromaDB memory.",
              why: "Best fit when you're modeling a workflow as a team (analyst → writer → reviewer). Read the source — it's small enough to fully understand. ChromaDB included.",
              verdict: "try-first",
            },
            {
              name: "LangGraph",
              url: "https://github.com/langchain-ai/langgraph",
              license: "MIT",
              oneLine: "Stateful, graph-based agent workflows with checkpointing.",
              why: "For workflows that need to loop, branch, and pause — like a long-running deal-evaluation agent that checks back daily. Heavier than CrewAI; use when state matters.",
              verdict: "consider",
            },
            {
              name: "Claude Code",
              url: "https://claude.com/code",
              license: "Closed (used here as anchor)",
              oneLine: "Already the build layer. Nothing wins here.",
              why: "70–75% SWE-bench. Skills + commands + MCP. The agent runtime for writing all the code that powers everything else. Not changing.",
              verdict: "try-first",
            },
          ]}
        />

        <Stack
          title="3 · Memory / RAG — pgvector on Supabase, not a new database"
          tools={[
            {
              name: "pgvector",
              url: "https://github.com/pgvector/pgvector",
              license: "PostgreSQL",
              oneLine: "Vector search as a Postgres extension. You already have Postgres on Supabase.",
              why: "Don't run a separate vector DB until pgvector breaks. 0.9 benchmarks are within striking distance of Qdrant on most workloads. Same SQL, one fewer service.",
              verdict: "try-first",
            },
            {
              name: "Qdrant",
              url: "https://qdrant.tech",
              license: "Apache 2.0",
              oneLine: "Dedicated vector DB with payload-aware filtering.",
              why: "Adopt only when pgvector starts hurting (10M+ vectors, complex hybrid filtering). Self-host via Docker.",
              verdict: "consider",
            },
            {
              name: "LlamaIndex",
              url: "https://github.com/run-llama/llama_index",
              license: "MIT",
              oneLine: "Best-in-class document indexing + retrieval primitives.",
              why: "Use the Python library for ingestion (chunking, embeddings, hybrid retrieval) over pgvector. Skip the heavy framework wrappers; use it as a toolkit.",
              verdict: "try-first",
            },
          ]}
        />

        <Stack
          title="4 · Workflow automation — Activepieces for visual, Windmill for code"
          tools={[
            {
              name: "Activepieces",
              url: "https://www.activepieces.com",
              license: "MIT",
              oneLine: "Self-hostable n8n competitor. Visual, AI-first, cleaner UX.",
              why: "Better default UX than n8n; built specifically for AI workflows in 2026. One Docker container. Use for client-visible automations and personal Slack/email/calendar glue.",
              verdict: "try-first",
            },
            {
              name: "Windmill",
              url: "https://windmill.dev",
              license: "AGPLv3 / commercial OK for self-host",
              oneLine: "Code-first automation. Turn Python/TS scripts into workflows + internal UIs.",
              why: "When the visual builders get in your way. Internal apps + scheduled jobs + queue-backed workers in one platform. The engineer's automation tool.",
              verdict: "try-first",
            },
          ]}
        />

        <Stack
          title="5 · LLM observability — Langfuse, day one"
          tools={[
            {
              name: "Langfuse",
              url: "https://langfuse.com",
              license: "MIT (core)",
              oneLine: "Self-hosted LLM tracing, prompt management, evals, datasets.",
              why: "5-minute Docker setup. Trace every Claude/Ollama/agent call. Prompt versioning + scoring + dataset evals built in. Adopt before you have problems, not after.",
              verdict: "try-first",
            },
            {
              name: "OpenLLMetry",
              url: "https://github.com/traceloop/openllmetry",
              license: "Apache 2.0",
              oneLine: "OpenTelemetry instrumentation for LLMs — vendor-neutral.",
              why: "Use this SDK so your traces aren't tied to one backend. Ship spans to Langfuse today, swap for Phoenix or Laminar later without changing instrumentation.",
              verdict: "consider",
            },
          ]}
        />

        <Stack
          title="6 · Second brain — Logseq, not Obsidian"
          tools={[
            {
              name: "Logseq",
              url: "https://logseq.com",
              license: "AGPLv3",
              oneLine: "Local markdown + outliner + graph view + bidirectional links.",
              why: "Closest like-for-like Obsidian replacement that's actually open-source. Same .md files on disk → can be read by Claude Code, indexed for RAG, synced via Git. Bridges your second brain to your AI agents naturally.",
              verdict: "try-first",
            },
            {
              name: "SiYuan",
              url: "https://b3log.org/siyuan",
              license: "AGPLv3",
              oneLine: "Block-based notes + database + self-hosted sync. Heavier than Logseq.",
              why: "Consider if Logseq's outliner format feels constraining and you want database-style notes. ~$50–70/year self-host.",
              verdict: "consider",
            },
          ]}
        />

        <Stack
          title="7 · Web scraping for agents — Firecrawl, self-hosted"
          tools={[
            {
              name: "Firecrawl",
              url: "https://www.firecrawl.dev",
              license: "AGPLv3 (self-host) / SaaS available",
              oneLine: "LLM-ready crawler. Cleans HTML, handles JS, outputs markdown.",
              why: "Every agent needs a 'fetch a URL and give me clean text' primitive. Firecrawl is currently the best. Self-hostable via Docker; SaaS tier is generous if you want to skip the ops.",
              verdict: "try-first",
            },
          ]}
        />

        <Stack
          title="8 · Personal dashboards — Grafana only if you outgrow Next.js"
          tools={[
            {
              name: "Grafana",
              url: "https://grafana.com/oss",
              license: "AGPLv3",
              oneLine: "Gold-standard dashboards over Prometheus / Postgres / anything.",
              why: "Don't adopt yet. JMW OS does the job today. Add Grafana when you want time-series quantified-self data (Apple Health export, sleep tracking, finance), not before.",
              verdict: "consider",
            },
          ]}
        />
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          What I&rsquo;d skip
        </h2>
        <div className="space-y-3">
          <Skip
            name="Dify"
            reason="Great product but it&rsquo;s a destination platform — you&rsquo;d migrate workflows TO it. Your stack is Next.js + Claude Code already; Dify duplicates the surface."
          />
          <Skip
            name="Open WebUI / LibreChat"
            reason="You&rsquo;re not building a chatbot UI. You ship apps. Skip unless you specifically want a ChatGPT-style internal interface."
          />
          <Skip
            name="Hermes Agent (Nous Research)"
            reason="Researched in May. Daemon-style with skill-learning compounding. Defer unless you want a competing OS layer; you already have one."
          />
          <Skip
            name="Argent OS"
            reason="Greenfield-only. You&rsquo;re past zero."
          />
          <Skip
            name="Heavy graph DBs (Neo4j, Memgraph)"
            reason="Premature until you have an actual entity-relationship problem. pgvector + Postgres tables handle 99% of what people use graph DBs for."
          />
          <Skip
            name="AnythingLLM, PrivateGPT, GPT4All"
            reason="Wrappers around Ollama + a chat UI. You can build a better version of either in two hours of Claude Code if you actually need it."
          />
          <Skip
            name="Weaviate"
            reason="Resource-heavy JVM-based runtime. pgvector or Qdrant fit your stack better."
          />
        </div>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Try this week (in order)
        </h2>
        <ol className="space-y-3 text-sm">
          <Step
            n={1}
            title="Install Ollama, pull Llama 3.3 70B (or Mistral Small)"
            cmd="brew install ollama && ollama run llama3.3"
            why="15-minute test. You'll know within an hour whether local inference is fast enough for your daily-update workflows. If yes, every prompt that doesn't need Opus-tier reasoning can stay local and free."
          />
          <Step
            n={2}
            title="Spin up Langfuse via Docker Compose"
            cmd="git clone github.com/langfuse/langfuse && cd langfuse && docker compose up"
            why="Add the SDK to your Claude Code orchestration in /all-daily and you'll have real traces of every agent run by tomorrow. Pays for itself the first time a daily-update silently fails."
          />
          <Step
            n={3}
            title="Pilot CrewAI on one workflow"
            cmd="pip install crewai && python -m venv .venv && ..."
            why="Pick ONE workflow currently orchestrated by Claude Code subagents (probably the cross-project pattern detector in /all-daily Step 4a) and re-implement it as a CrewAI 'crew'. Compare the outputs and the dev experience. If CrewAI wins, you've found your role-based agent layer. If not, you're back to Claude Code with a clear answer."
          />
          <Step
            n={4}
            title="Install Logseq, point it at /Users/jmw/Documents/notes/"
            cmd="brew install --cask logseq"
            why="Start a `business-brain.md` file inside it. Add the Logseq folder to your Claude Code allowed paths so agents can read/write notes. Now your second brain and your agent layer share data, no glue code."
          />
        </ol>
      </section>

      <footer className="text-muted-foreground mt-16 border-t pt-8 text-xs">
        <p>
          Last researched: May 12, 2026. Cross-referenced against the public
          {" "}
          <Link href="/research" className="underline">/research</Link> page;
          this version is the operator-only prescriptive version (the public
          one is the comparative landscape).
        </p>
      </footer>
    </article>
  );
}

function Stack({ title, tools }: { title: string; tools: Tool[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <div className="space-y-2">
        {tools.map((t) => (
          <ToolCard key={t.name} tool={t} />
        ))}
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const verdictBadge = {
    "try-first": (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
        <Check className="size-3" />
        try first
      </span>
    ),
    consider: (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-300">
        <Minus className="size-3" />
        consider
      </span>
    ),
    skip: (
      <span className="inline-flex items-center gap-1 rounded-full bg-zinc-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-400">
        <X className="size-3" />
        skip
      </span>
    ),
  }[tool.verdict];

  return (
    <div className="border-border rounded-lg border p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent text-sm font-semibold underline-offset-4 hover:underline"
            >
              {tool.name}
              <ExternalLink className="ml-1 inline size-3" />
            </a>
            <span className="text-muted-foreground text-[10px] font-mono">
              {tool.license}
            </span>
            {verdictBadge}
          </div>
          <p className="text-foreground/90 mt-1 text-sm">{tool.oneLine}</p>
          <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
            {tool.why}
          </p>
        </div>
      </div>
    </div>
  );
}

function Skip({ name, reason }: { name: string; reason: string }) {
  return (
    <div className="border-border/60 rounded-lg border border-dashed p-3 text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-muted-foreground"> — {reason}</span>
    </div>
  );
}

function Step({
  n,
  title,
  cmd,
  why,
}: {
  n: number;
  title: string;
  cmd: string;
  why: string;
}) {
  return (
    <li className="border-border rounded-lg border p-4">
      <div className="flex items-start gap-3">
        <span className="bg-foreground text-background flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
          {n}
        </span>
        <div className="flex-1 space-y-2">
          <p className="text-foreground font-medium">{title}</p>
          <code className="bg-muted block rounded px-2 py-1 text-[11px]">
            {cmd}
          </code>
          <p className="text-muted-foreground text-xs leading-relaxed">{why}</p>
        </div>
      </div>
    </li>
  );
}
