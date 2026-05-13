import Link from "next/link";
import { CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";

export const metadata = {
  title: "About · HR — JMW Projects",
  description:
    "About Jonathan Malta-Weingard — director-level operator, software builder, AI implementation partner. The credentials behind the practice.",
};

export default function AboutHr() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            About
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Jonathan Malta-Weingard
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Director-level operator. Software builder. Small Business AI
            Implementation Partner. Based in Berkeley, California.
          </p>
        </header>

        <HrSubNav active="/hr/about" />

        {/* CURRENT ROLE */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">Current role</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">Director of
            Human Resources, Mission Neighborhood Health Center (San
            Francisco, 2025–present).</strong> Lead HR strategy, total
            rewards, people operations, labor relations, and IT vendor
            management for a Federally Qualified Health Center serving roughly
            13,000 patients annually across four SF sites with ~200 employees.
            Trusted advisor to the CEO, COO, and Finance on workforce
            planning, comp, and benefits.
          </p>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Selected results in 12 months: voluntary turnover from 30% to 25%
            org-wide; first-year frontline turnover from 50% to 25%; 13%
            benefits cost reduction while preserving 95% employer-paid
            premiums, 100% out-of-pocket coverage, and $0 deductibles; the
            HIPAA-reviewed enterprise LLM deployment that reached 83%
            adoption across the 240-staff workforce.
          </p>
        </section>

        {/* PRIOR ROLES */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">
            Prior operating experience
          </h2>
          <ul className="space-y-4 text-base leading-relaxed text-[var(--muted)]">
            <li>
              <strong className="text-[var(--foreground)]">
                Director of Human Resources, Boys &amp; Girls Clubs of San
                Francisco (2024).
              </strong>{" "}
              Led HR strategy and operations for a 400+ employee
              youth-serving organization spanning nine clubhouses, five school
              sites, and a 2,000-acre summer camp.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">
                Director of Human Resources, Cana Technology (2022–2023).
              </strong>{" "}
              Built and led the HR, Operations, and Payroll function for a
              venture-backed molecular-beverage-printer startup (funded by The
              Production Board), scaling from 30 to 50 employees, reporting
              directly to the CEO.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">
                Associate Director of Human Resources, The Asia Foundation
                (2018–2022).
              </strong>{" "}
              Led enterprise people programs for an international development
              nonprofit operating across 21 offices in 19 countries with 800+
              employees. Designed the org&rsquo;s first global engagement
              survey. Streamlined US and international benefits across
              multiple regulatory contexts, decreasing costs 30% YoY while
              enriching coverage.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">
                HR Specialist, Swords to Plowshares (2016–2017).
              </strong>{" "}
              Primary HR point of contact for 200+ employees at a
              veteran-serving nonprofit.
            </li>
          </ul>
        </section>

        {/* EARLIER */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">
            Earlier career — renewable energy operations and finance
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Five years at NaturEner and Pristine Sun LLC — from project
            coordination into finance and operations leadership across wind
            and solar projects totaling 200+ MW. This is where I learned how
            capital-intensive operating businesses actually run: project
            finance, vendor contracts, milestone payments, regulatory
            compliance, the discipline of running operations against a pro
            forma.
          </p>
        </section>

        {/* CREDENTIALS */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">
            Why I&rsquo;m the right partner
          </h2>
          <ul className="space-y-3 text-base leading-relaxed text-[var(--muted)]">
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
              <span>
                <strong className="text-[var(--foreground)]">
                  Currently operating, not retired.
                </strong>{" "}
                Every recommendation made to a client is stress-tested
                against the ongoing program I&rsquo;m running at MNHC.
                Operator credibility, not nostalgia.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
              <span>
                <strong className="text-[var(--foreground)]">
                  Software shipper.
                </strong>{" "}
                The portfolio on this site is real and used. FQHC Talent
                Exchange, the California Employment Law Platform, the JMW OS
                operator dashboard — all built and maintained by the same
                hands that draft your governance framework.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
              <span>
                <strong className="text-[var(--foreground)]">
                  Measured outcomes, not testimonials.
                </strong>{" "}
                83% AI adoption. 13% benefits cost reduction. 30% YoY
                international benefits savings. 30%→25% turnover. 50%→25%
                first-year frontline turnover. Numbers, documented.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
              <span>
                <strong className="text-[var(--foreground)]">
                  Capital-intensive ops background.
                </strong>{" "}
                Five years in renewable energy project finance + operations.
                Useful when an engagement involves CapEx, vendor contracts,
                or pro-forma discipline — which most multi-quarter AI
                deployments do.
              </span>
            </li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">Education</h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Bachelor of Arts, Politics — University of California, Santa Cruz.
            Regents Scholar. Semester abroad at the University of West Indies,
            Cave Hill, Barbados.
          </p>
        </section>

        {/* CONTACT */}
        <section className="mt-12 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Want to talk?
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            The cleanest first step is the 7-day audit. If you want to talk
            first, email or LinkedIn DM both work.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:jweingard@gmail.com?subject=HR%20practice%20inquiry"
              className="btn-primary inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-white"
            >
              jweingard@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jonathanmw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              LinkedIn
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Berkeley, CA · 510-760-2245
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
