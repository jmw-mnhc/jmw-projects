"use client";

import { ArrowUpRight } from "lucide-react";
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
