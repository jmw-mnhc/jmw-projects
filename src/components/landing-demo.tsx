"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

const DEMO_IDS = [
  "fqhc-talent-exchange",
  "mnhc-website",
  "ca-employment-law",
];

export function LandingDemo() {
  const items = DEMO_IDS.map((id) => projects.find((p) => p.id === id)!).filter(
    Boolean,
  );

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="mb-14">
        <h1 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
          JMW Projects
        </h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Jonathan Malta-Weingard · Berkeley, California
        </p>
      </header>

      {/* FEATURED PRACTICE */}
      <Link
        href="/hr"
        className="group mb-12 block rounded-xl border border-[var(--accent)]/25 bg-[var(--accent)]/5 p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/10"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          Practice · Now taking clients
        </p>
        <p className="mt-2 text-xl font-medium text-[var(--foreground)]">
          Small Business AI Implementation Partner
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          An AI implementation practice for 10–250-person organizations.
          Productized engagements from $9,500. Structured partnerships with
          Anthropic, OpenAI, AWS, and Microsoft. Anchored on an 83% adoption
          deployment in a HIPAA-regulated workforce.
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] transition group-hover:translate-x-0.5">
          Open the practice
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>

      <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-soft)]">
        Selected work
      </p>

      <ul className="space-y-8">
        {items.map((p) => (
          <li key={p.id}>
            <Link
              href={p.href!}
              target={p.href!.startsWith("http") ? "_blank" : undefined}
              rel={
                p.href!.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group block"
            >
              <p className="text-base font-medium text-[var(--foreground)]">
                <span className="underline decoration-[var(--accent)]/40 decoration-1 underline-offset-4 transition group-hover:decoration-[var(--accent)]">
                  {p.name}
                </span>
                <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 text-[var(--accent)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                {p.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
