"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  BookOpen,
  Briefcase,
  Eye,
  EyeOff,
  ExternalLink,
  Layers,
  Lock,
  LogOut,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePasswordGate } from "@/components/password-gate";
import { projects } from "@/lib/projects";

type View = "operator" | "demo" | "private";

const PRIMARY = [
  {
    href: "/hr",
    icon: Brain,
    eyebrow: "Practice",
    title: "Small Business AI Partner",
    description:
      "Productized AI implementation for 10–250-person orgs. 9 sub-pages, 2 interactive tools, anchored on the 83% adoption case.",
    accent: true,
  },
  {
    href: "/os",
    icon: Sparkles,
    eyebrow: "Operator console",
    title: "JMW OS",
    description:
      "Today's brief across every project. Calendar, search, timeline, trends.",
    accent: false,
  },
  {
    href: "/research",
    icon: BookOpen,
    eyebrow: "Deep dive",
    title: "AI & OS Research",
    description:
      "Field notes on agent frameworks and Personal OS design.",
    accent: false,
  },
  {
    href: "https://business-ideas.vercel.app",
    icon: Briefcase,
    eyebrow: "Workspace",
    title: "Dealflow Studio",
    description:
      "Acquisition + investment pipeline. Lender readiness, deal scoring.",
    accent: false,
    external: true,
  },
];

const DEEP_DIVES = [
  {
    href: "/hr/framework",
    title: "The five-pillar adoption framework",
    detail: "Governance, champions, ladder, measurement, judgment",
  },
  {
    href: "/hr/case-study/fqhc-83-adoption",
    title: "240-person FQHC: 0 → 83% adoption in 9 months",
    detail: "Lead case study, HIPAA-clean",
  },
  {
    href: "/hr/services",
    title: "Service catalog",
    detail: "$9.5k audit → $20k/mo Chief AI Officer",
  },
  {
    href: "/hr/partnerships",
    title: "Partner stack",
    detail: "Anthropic · OpenAI · AWS · Microsoft",
  },
  {
    href: "/hr/thinking",
    title: "Long-form essays",
    detail: "6 essays on adoption, measurement, fractional CAIO",
  },
  {
    href: "/hr/tools/readiness",
    title: "AI Readiness self-check (interactive)",
    detail: "11 questions across 5 pillars",
  },
  {
    href: "/hr/tools/roi",
    title: "Engagement ROI estimator (interactive)",
    detail: "Inputs change everything live",
  },
];

export function LandingOperator() {
  const { lock } = usePasswordGate();
  const [view, setView] = useState<View>("operator");

  const live = projects.filter((p) => !p.restricted && p.status === "live");
  const building = projects.filter(
    (p) => !p.restricted && p.status === "building",
  );

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      {/* HEADER */}
      <header className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
            Operator console · Welcome back
          </p>
          <h1 className="mt-1 text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl">
            Jonathan Malta-Weingard
          </h1>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Berkeley, California · {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <button
          type="button"
          onClick={lock}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--paper)]/60 px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
        >
          <LogOut className="h-3 w-3" />
          Lock
        </button>
      </header>

      {/* VIEW SWITCHER */}
      <div className="mt-6 flex flex-wrap items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--paper)]/40 p-1 text-sm">
        <ViewPill view="operator" current={view} onClick={setView} label="Operator" />
        <ViewPill view="private" current={view} onClick={setView} label="Public — Private (rich)" />
        <ViewPill view="demo" current={view} onClick={setView} label="Public — Demo (minimal)" />
      </div>

      {view === "operator" && <OperatorView live={live} building={building} />}
      {view === "demo" && <DemoPreview />}
      {view === "private" && <PrivatePreview />}
    </main>
  );
}

function ViewPill({
  view,
  current,
  onClick,
  label,
}: {
  view: View;
  current: View;
  onClick: (v: View) => void;
  label: string;
}) {
  const active = view === current;
  return (
    <button
      type="button"
      onClick={() => onClick(view)}
      aria-pressed={active}
      className={`rounded-full px-4 py-1.5 transition ${
        active
          ? "bg-[var(--accent)]/15 text-[var(--accent)]"
          : "text-[var(--muted)] hover:text-[var(--foreground)]"
      }`}
    >
      {label}
    </button>
  );
}

function OperatorView({
  live,
  building,
}: {
  live: typeof projects;
  building: typeof projects;
}) {
  return (
    <>
      {/* PRIMARY ACCESS GRID */}
      <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PRIMARY.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className={`group rounded-xl border p-5 transition hover:-translate-y-0.5 ${
                card.accent
                  ? "border-[var(--accent)]/30 bg-[var(--accent)]/5 hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/10"
                  : "border-[var(--border)] bg-[var(--paper)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-warm)]/40"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                    card.accent
                      ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                      : "bg-[var(--accent)]/10 text-[var(--accent)]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-1 text-base font-medium text-[var(--foreground)]">
                    {card.title}
                  </h2>
                </div>
                {card.external && (
                  <ExternalLink className="h-3.5 w-3.5 text-[var(--muted)]" />
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {card.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] transition group-hover:translate-x-0.5">
                Open
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          );
        })}
      </section>

      {/* DEEP DIVES */}
      <section className="mt-12">
        <header className="mb-4 flex items-baseline justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
              Deep dives
            </p>
            <h2 className="mt-1 text-xl font-medium text-[var(--foreground)]">
              Jump back into the practice
            </h2>
          </div>
          <Link
            href="/hr"
            className="inline-flex items-center gap-1 text-xs text-[var(--accent)] underline-offset-4 hover:underline"
          >
            All of /hr
            <ArrowRight className="h-3 w-3" />
          </Link>
        </header>
        <ul className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--paper)]">
          {DEEP_DIVES.map((d) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className="group flex items-center justify-between gap-4 px-5 py-3 transition hover:bg-[var(--surface-warm)]/40"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                    {d.title}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-[var(--muted)]">
                    {d.detail}
                  </p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0 text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS QUICK GLANCE */}
      <section className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProjectColumn label="Live" projects={live} />
        <ProjectColumn label="Building" projects={building} />
      </section>
    </>
  );
}

function ProjectColumn({
  label,
  projects: items,
}: {
  label: string;
  projects: typeof projects;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-5">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-soft)]">
        {label}
        <span className="ml-2 text-[var(--accent)]">{items.length}</span>
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((p) => (
          <li key={p.id}>
            {p.href ? (
              <Link
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  p.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-baseline justify-between gap-2"
              >
                <span className="text-sm text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                  {p.name}
                </span>
                <span className="text-[10px] text-[var(--muted-soft)]">
                  {p.category}
                </span>
              </Link>
            ) : (
              <span className="flex items-baseline justify-between gap-2 text-sm text-[var(--foreground)]">
                {p.name}
                <span className="text-[10px] text-[var(--muted-soft)]">
                  {p.category}
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DemoPreview() {
  return (
    <section className="mt-10 rounded-xl border border-dashed border-[var(--border)] bg-[var(--paper)]/40 p-6">
      <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        <Eye className="h-3 w-3" />
        Previewing public — Demo view
      </p>
      <p className="mt-3 text-sm text-[var(--muted)]">
        What unauthenticated visitors see. Minimal: 3 selected projects
        + the HR Practice featured card.
      </p>
      <Link
        href="/?preview=demo"
        className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] underline-offset-4 hover:underline"
      >
        Open the public Demo landing
        <ArrowRight className="h-3 w-3" />
      </Link>
    </section>
  );
}

function PrivatePreview() {
  return (
    <section className="mt-10 rounded-xl border border-dashed border-[var(--border)] bg-[var(--paper)]/40 p-6">
      <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        <EyeOff className="h-3 w-3" />
        Previewing public — Private (rich) view
      </p>
      <p className="mt-3 text-sm text-[var(--muted)]">
        The full public-facing landing — hero, marquees, every project,
        contact form. What trusted contacts see after entering the password.
      </p>
      <Link
        href="/full"
        className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] underline-offset-4 hover:underline"
      >
        Open the Private (rich) landing
        <ArrowRight className="h-3 w-3" />
      </Link>
    </section>
  );
}
