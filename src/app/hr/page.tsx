import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  CalendarClock,
  Calculator,
  CheckCircle2,
  ExternalLink,
  FileText,
  Gauge,
  Layers,
  ListChecks,
  MessageSquare,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import { caseStudies } from "@/lib/hr/case-studies";
import { essays } from "@/lib/hr/essays";
import { faqs } from "@/lib/hr/faqs";
import { pillars } from "@/lib/hr/framework";
import { principles } from "@/lib/hr/methodology";
import { partnerships } from "@/lib/hr/partnerships";
import { services } from "@/lib/hr/services";

export const metadata = {
  title:
    "HR · Small Business AI Implementation Partner — JMW Projects",
  description:
    "An AI implementation practice for 10–250-person organizations — anchored on an 83% adoption case from a HIPAA-regulated workforce, productized engagements with named pricing, and structured partnerships with Anthropic, OpenAI, AWS, and Microsoft.",
};

const HUB_CARDS = [
  {
    href: "/hr/framework",
    icon: Layers,
    eyebrow: `${pillars.length} pillars · 5 stages`,
    title: "The framework",
    description:
      "Governance, champions, use-case ladder, measurement, judgment. The five-pillar adoption model with worked examples and the failure modes each pillar prevents.",
  },
  {
    href: "/hr/case-study",
    icon: FileText,
    eyebrow: `${caseStudies.length} case studies`,
    title: "Case studies",
    description:
      "The 83% adoption deployment, plus the 19-country benefits redesign and the venture-backed-startup-from-zero story. Anonymized outcomes, full takeaways.",
  },
  {
    href: "/hr/services",
    icon: Briefcase,
    eyebrow: `${services.length} services · $9.5k → $20k/mo`,
    title: "Service catalog",
    description:
      "Productized engagements: 7-Day Audit, 90-Day Implementation, Governance Retainer, HIPAA Sprint, Champion Training, Vertical Tool Build, Fractional Chief AI Officer.",
  },
  {
    href: "/hr/partnerships",
    icon: Users,
    eyebrow: `${partnerships.length} structured partnerships`,
    title: "Partner stack",
    description:
      "Anthropic Solution Partners, OpenAI Consulting Partners, AWS Partner Network, Microsoft Partner Network. Multi-channel procurement, model-agnostic implementation.",
  },
  {
    href: "/hr/methodology",
    icon: Target,
    eyebrow: `${principles.length} operating principles`,
    title: "Methodology",
    description:
      "Operator-first. Fixed-fee. Measurement from day one. Succession-planned. Vendor-agnostic on implementation. No cargo-cult AI. The principles that decide every engagement.",
  },
  {
    href: "/hr/thinking",
    icon: MessageSquare,
    eyebrow: `${essays.length} essays`,
    title: "Thinking",
    description:
      "Field notes from the practice: why most SMB AI pilots die, the measurement question, what a fractional CAIO actually does. Long-form public writing.",
  },
  {
    href: "/hr/tools/readiness",
    icon: Gauge,
    eyebrow: "5-minute self-assessment",
    title: "AI readiness self-check",
    description:
      "Quick interactive scoring against the five-pillar framework. No interview required. Outputs a maturity score + a custom roadmap suggestion.",
  },
  {
    href: "/hr/tools/roi",
    icon: Calculator,
    eyebrow: "Interactive calculator",
    title: "Engagement ROI estimator",
    description:
      "Input team size, sector, and adoption target. See the engagement cost, the productivity savings range, and the payback period.",
  },
  {
    href: "/hr/faq",
    icon: ListChecks,
    eyebrow: `${faqs.length} questions`,
    title: "FAQ",
    description:
      "Scope, pricing, engagement structure, vendor neutrality, credentials, logistics. The questions most prospects ask before signing.",
  },
];

export default function HRHub() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Practice · May 2026 · Berkeley, CA
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Small Business AI Implementation Partner
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            An AI implementation practice for 10–250-person organizations.
            Productized engagements, measurable adoption, structured partner
            relationships across Anthropic, OpenAI, AWS, and Microsoft.
            Anchored on the 83% adoption deployment at a HIPAA-regulated
            240-person healthcare organization.
          </p>
        </header>

        <HrSubNav active="/hr" />

        {/* HEADLINE NUMBERS */}
        <section className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Weekly adoption" value="83%" caption="At month 9, regulated workforce" />
          <Stat label="Workforce" value="240" caption="Front-desk to MDs/PhDs" />
          <Stat label="PHI incidents" value="0" caption="HIPAA-clean throughout" />
          <Stat label="Co-occurring retention" value="-5pp" caption="Voluntary turnover" />
        </section>

        {/* WHO + WHY */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            Who I serve, and why this practice exists
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Most small and mid-sized businesses trying to deploy AI never make
            it past pilot. The Big-4 firms start at $200k engagements; the
            indie &ldquo;AI consultants&rdquo; have no operator scars; the SaaS
            vendors hand you a tool but not adoption. The middle is unserved.
          </p>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            This practice fills the middle. Productized engagements at
            $9.5k–$120k. Measurable adoption as the success metric. Senior
            operator credibility — I&rsquo;m currently sitting in the Director
            of HR chair at a four-site SF Federally Qualified Health Center
            where we just shipped the deployment this case study is built on.
          </p>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">Sweet spot:</strong>{" "}
            10–250 employee organizations across healthcare, venture-backed
            startups, distributed/international employers, and mission-driven
            nonprofits. <strong className="text-[var(--foreground)]">Lead
            vertical:</strong> healthcare — FQHCs, multi-site clinics,
            community health systems.
          </p>
        </section>

        {/* HUB CARDS */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            Explore the practice
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Nine workspaces. Open the one relevant to where you are in the
            decision.
          </p>
          <div className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HUB_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block rounded-xl border border-[var(--border)] bg-[var(--paper)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-warm)]/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                        {card.eyebrow}
                      </p>
                      <h3 className="mt-1 text-base font-medium text-[var(--foreground)]">
                        {card.title}
                      </h3>
                    </div>
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
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            Start with the audit
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            The cleanest first step is a <strong className="text-[var(--foreground)]">
            7-day, fixed-fee, $9,500 AI Readiness Audit</strong>. Seven business
            days, a written report, a 30 / 90 / 180-day roadmap. If we&rsquo;re
            a fit, we scope a 90-day implementation. If we&rsquo;re not, the
            roadmap is yours — usable with any implementation partner.
          </p>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
              <CalendarClock className="mr-1 inline h-3.5 w-3.5" />
              The audit — week one
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--muted)]">
              <li><strong className="text-[var(--foreground)]">Day 1–2:</strong> Stakeholder interviews.</li>
              <li><strong className="text-[var(--foreground)]">Day 3–4:</strong> Five-pillar maturity scoring + current-state assessment.</li>
              <li><strong className="text-[var(--foreground)]">Day 5:</strong> Three-use-case shortlist with effort + ROI estimates.</li>
              <li><strong className="text-[var(--foreground)]">Day 6:</strong> Written report drafted with 30/90/180-day roadmap.</li>
              <li><strong className="text-[var(--foreground)]">Day 7:</strong> Leadership debrief + executive summary deck.</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:jweingard@gmail.com?subject=AI%20Readiness%20Audit%20inquiry"
              className="btn-primary inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-white"
            >
              Start with the audit
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/hr/tools/readiness"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Gauge className="h-3.5 w-3.5" />
              Self-assess first (free)
            </Link>
            <a
              href="https://www.linkedin.com/in/jonathanmw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              LinkedIn
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Practice committed May 12, 2026 · Subsite shipped May 13, 2026
          </span>
        </footer>
      </article>
    </>
  );
}

function Stat({
  label,
  value,
  caption,
}: {
  label: string;
  value: string;
  caption: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-4">
      <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
        {label}
      </p>
      <p className="mt-1 text-2xl font-medium text-[var(--foreground)]">
        {value}
      </p>
      <p className="mt-1 text-[11px] text-[var(--muted)]">{caption}</p>
    </div>
  );
}
