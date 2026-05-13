import Link from "next/link";
import { Sparkles, XCircle } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import { principles } from "@/lib/hr/methodology";

export const metadata = {
  title: "Methodology · HR — JMW Projects",
  description:
    "Six operating principles that decide every engagement: operator-first; fixed-fee; measurement from day one; succession-planned; vendor-agnostic; no cargo-cult AI.",
};

export default function MethodologyPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Methodology
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Six operating principles
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            How the practice operates, what it refuses to do, and the patterns
            it&rsquo;s built to replace. These principles decide every
            engagement structure, every pricing call, every recommendation.
          </p>
        </header>

        <HrSubNav active="/hr/methodology" />

        <section className="mt-12 space-y-10">
          {principles.map((p) => (
            <div key={p.id} className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-base font-medium text-[var(--accent)]">
                  {p.number}
                </span>
                <h2 className="text-2xl font-medium tracking-tight">{p.name}</h2>
              </div>

              <p className="text-base italic leading-relaxed text-[var(--muted)] sm:text-lg">
                {p.oneLiner}
              </p>

              <p className="text-base leading-relaxed text-[var(--muted)]">
                {p.description}
              </p>

              <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
                <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-rose-400">
                  <XCircle className="h-3 w-3" />
                  Replaces
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.insteadOf}</p>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Principles are non-negotiable; pricing and scope are
          </span>
          <Link
            href="/hr"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
          >
            HR hub
          </Link>
        </footer>
      </article>
    </>
  );
}
