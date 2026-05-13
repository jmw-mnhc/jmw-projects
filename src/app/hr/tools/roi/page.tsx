import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import { RoiCalculator } from "@/components/hr/roi-calculator";

export const metadata = {
  title: "ROI estimator · HR — JMW Projects",
  description:
    "Interactive engagement ROI calculator. Plug in team size, sector, target adoption, and engagement price. Get Year 1 savings range, ROI %, payback period.",
};

export default function RoiToolPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Tools · ROI estimator
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Engagement ROI estimator
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Tells you what an engagement is roughly worth to your
            organization. Conservative defaults, transparent methodology.
            Inputs change everything live.
          </p>
        </header>

        <HrSubNav active="/hr/tools/roi" />

        <section className="mt-12">
          <RoiCalculator />
        </section>

        <section className="mt-10 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            How the math works
          </h2>
          <p>
            Productivity savings are calculated as: <em>active users × hours
            saved per user per week × 48 working weeks × fully-loaded hourly
            cost</em>. Sector-specific defaults are intentionally conservative
            — closer to what gets observed in well-run programs at month nine,
            not what gets pitched in initial decks.
          </p>
          <p>
            ROI is Year 1 only. Engagement costs are one-time fixed-fees.
            Ongoing governance retainers (typical $36–$96k/year) are not
            included in the calculator — add them separately if relevant to
            your case.
          </p>
          <p>
            Sampled time-savings methodology recommended for production
            measurement: every quarter, ask 20 active users to log a
            representative day&rsquo;s AI usage and self-report estimated time
            savings. Extrapolate weekly and conservatively.
          </p>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Not investment advice. Actual ROI varies.
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
