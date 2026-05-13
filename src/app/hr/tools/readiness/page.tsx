import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import { ReadinessQuiz } from "@/components/hr/readiness-quiz";

export const metadata = {
  title: "AI readiness self-check · HR — JMW Projects",
  description:
    "Interactive 11-question self-assessment against the five-pillar adoption framework. Scores your organization by pillar with a service-tier recommendation.",
};

export default function ReadinessToolPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Tools · Readiness self-check
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              AI readiness — five-pillar self-check
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Eleven questions, five minutes. Outputs a maturity score per
            pillar plus a service-tier recommendation. No data leaves your
            browser — the scoring runs locally.
          </p>
        </header>

        <HrSubNav active="/hr/tools/readiness" />

        <section className="mt-12">
          <ReadinessQuiz />
        </section>

        <section className="mt-10 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            What this is and isn&rsquo;t
          </h2>
          <p>
            This is a self-scored screen meant to surface gaps and recommend
            a service tier. It&rsquo;s not the full 7-Day Audit — the audit
            runs 5–8 stakeholder interviews, scores pillars against
            structured evidence, and produces a written report with a 30 /
            90 / 180-day roadmap. The self-check is the front door; the audit
            is the diagnostic deep dive.
          </p>
          <p>
            Common pattern: a CEO or CHRO runs the self-check, gets a 40–55%
            score, recognizes the gaps, and uses the result to make the case
            internally for a structured audit. The self-check is built to
            make that conversation easier.
          </p>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            All scoring runs locally — nothing sent anywhere
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
