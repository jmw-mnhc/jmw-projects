import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Lightbulb, Sparkles, Target } from "lucide-react";
import { Nav } from "@/components/nav";
import { caseStudies, getCaseStudy } from "@/lib/hr/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return { title: "Case study not found" };
  return {
    title: `${c.title} · Case study — JMW Projects`,
    description: c.challenge.slice(0, 160),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <Link
          href="/hr/case-study"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All case studies
        </Link>

        <header className="mt-8 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Case study · {c.window}
          </p>
          <p className="text-sm text-[var(--muted)]">
            {c.sector} · {c.size}
          </p>
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              {c.title}
            </span>
          </h1>
          <p className="text-lg font-medium text-[var(--accent)]">
            {c.headlineMetric}
          </p>
        </header>

        {/* CHALLENGE */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-medium tracking-tight">
            <Target className="h-5 w-5 text-[var(--accent)]" />
            The challenge
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            {c.challenge}
          </p>
        </section>

        {/* APPROACH */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">The approach</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            {c.approach}
          </p>
        </section>

        {/* OUTCOMES */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">Measured outcomes</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {c.outcomes.map((o, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-4"
              >
                <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                  {o.label}
                </p>
                <p className="mt-1 text-base font-medium text-[var(--foreground)]">
                  {o.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TAKEAWAYS */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-medium tracking-tight">
            <Lightbulb className="h-5 w-5 text-[var(--accent)]" />
            Takeaways for similar orgs
          </h2>
          <ul className="space-y-3 text-base leading-relaxed text-[var(--muted)]">
            {c.takeaways.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Anonymized; reference available on request post-NDA
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
