import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import { caseStudies } from "@/lib/hr/case-studies";

export const metadata = {
  title: "Case studies · HR — JMW Projects",
  description:
    "Anonymized case studies from the practice: 83% AI adoption at a 240-person FQHC, 30% YoY international benefits cost reduction across 19 countries, HR/Ops from scratch at a 30→50 venture-backed startup.",
};

export default function CaseStudiesIndex() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Case studies
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Anonymized deployments
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Three deployments anchor the practice. The lead case is the
            HIPAA-regulated 83% adoption story; the supporting cases show
            the framework working across very different organizations.
          </p>
        </header>

        <HrSubNav active="/hr/case-study" />

        <section className="mt-12 space-y-6">
          {caseStudies.map((c) => (
            <Link
              key={c.id}
              href={`/hr/case-study/${c.slug}`}
              className="group block rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-warm)]/40"
            >
              {c.featured && (
                <p className="mb-2 flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
                  <Star className="h-3 w-3" /> Lead case
                </p>
              )}
              <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                {c.sector} · {c.size}
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight text-[var(--foreground)]">
                {c.title}
              </h2>
              <p className="mt-3 text-base font-medium text-[var(--accent)]">
                {c.headlineMetric}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {c.challenge.slice(0, 200)}…
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] transition group-hover:translate-x-0.5">
                Read the full case
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            All cases anonymized; references available on request post-NDA
          </span>
          <Link
            href="/hr"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
          >
            Back to HR hub
          </Link>
        </footer>
      </article>
    </>
  );
}
