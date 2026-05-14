"use client";

import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { STATUS_LABELS, type Project } from "@/lib/projects";
import { usePasswordGate } from "./password-gate";

export function ProjectCard({ project }: { project: Project }) {
  const { unlocked, request } = usePasswordGate();
  const locked = Boolean(project.private) && !unlocked;

  // Locked variant — whole card is a button that opens the gate.
  if (locked) {
    return (
      <button
        type="button"
        onClick={request}
        aria-label={`${project.name} — private, enter access code to view`}
        className="block h-full w-full text-left"
      >
        <LockedCardBody project={project} />
      </button>
    );
  }

  // Unlocked / public variant — article is the root so a sibling compareHref
  // anchor doesn't end up nested inside another anchor (invalid HTML, hydration
  // error). The primary Link uses the "stretch link" pattern: an absolutely
  // positioned overlay makes the whole card clickable, while compareHref sits
  // above it via z-index and remains independently clickable.
  const isExternal = project.href?.startsWith("http");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-bright)]/60 hover:shadow-[var(--card-shadow)]">
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,var(--card-glow),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--accent-bright)] to-transparent transition-all duration-500 group-hover:w-3/4"
      />

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-medium text-[var(--foreground)]">
          {project.href ? (
            <Link
              href={project.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
          {STATUS_LABELS[project.status]}
        </span>
      </div>

      <p className="mt-1 text-sm font-medium text-[var(--accent)]">
        {project.tagline}
      </p>

      {project.launched && (
        <p className="mt-1 text-[11px] uppercase tracking-wider text-emerald-300/80">
          Launched {project.launched}
        </p>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>

      {project.compareHref && (
        <a
          href={project.compareHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-2 inline-flex w-fit items-center gap-1 text-[11px] font-medium text-[var(--muted)] underline decoration-dotted underline-offset-4 transition hover:text-[var(--accent)]"
        >
          {project.compareLabel || "Compare"} →
        </a>
      )}

      {project.stack && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-warm)] px-2 py-0.5 text-[10px] text-[var(--muted)]"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {project.href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition group-hover:text-[var(--accent-bright)]">
          Visit
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      )}
    </article>
  );
}

function LockedCardBody({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-bright)]/60 hover:shadow-[var(--card-shadow)]">
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,var(--card-glow),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--accent-bright)] to-transparent transition-all duration-500 group-hover:w-3/4"
      />
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-medium text-[var(--foreground)]">
          {project.name}
        </h3>
        <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
          <Lock aria-label="Private" className="h-3 w-3 text-[var(--accent)]" />
          {STATUS_LABELS[project.status]}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-[var(--accent)]">
        {project.tagline}
      </p>
      <p className="mt-3 flex-1 select-none text-sm leading-relaxed text-[var(--muted)] blur-[3px]">
        {project.description}
      </p>
      {project.stack && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-warm)] px-2 py-0.5 text-[10px] text-[var(--muted)]"
            >
              {s}
            </span>
          ))}
        </div>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition group-hover:text-[var(--accent-bright)]">
        <Lock className="h-3.5 w-3.5" />
        Enter code to view
      </span>
    </article>
  );
}
