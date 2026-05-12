import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Nav } from "@/components/nav";

export const metadata = {
  title: "HR — Small Business AI Implementation Partner · JMW Projects",
  description:
    "Field notes on building the SMB AI implementation practice. The 83% adoption playbook from a HIPAA-regulated workforce, the productized service catalog, and the partner-program positioning across Anthropic, OpenAI, AWS, and Microsoft.",
};

export default function HRPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to portfolio
        </Link>

        <header className="mt-8 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Practice · May 2026
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Small Business AI Implementation Partner
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Most SMBs trying to deploy AI never make it past pilot. The Big-4
            consultancies start at $200k engagements; the indie &ldquo;AI
            consultants&rdquo; have no operator scars; the SaaS vendors give you
            a tool but not adoption. Here&rsquo;s the work I&rsquo;m building to
            fix the middle — anchored on an 83% adoption rate in a
            HIPAA-regulated 240-person workforce.
          </p>
        </header>

        {/* §1 - THE PROBLEM */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            1 · Why most SMB AI projects stall
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Three patterns show up across the small-and-mid market in 2026.
            They&rsquo;re each rational and each fails for the same structural
            reason: <em>no one owns adoption</em>.
          </p>

          <div className="overflow-hidden rounded-xl border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--surface-warm)] text-left">
                <tr>
                  <th className="px-4 py-3 font-medium">Pattern</th>
                  <th className="px-4 py-3 font-medium">What it looks like</th>
                  <th className="px-4 py-3 font-medium">Why it stalls</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <Row
                  name="Pilot purgatory"
                  shape="One enthusiastic VP runs a 90-day experiment. The model works. Nothing scales."
                  reason="No governance, no champion network, no measurement framework. Pilot ends; org returns to status quo."
                />
                <Row
                  name="The compliance freeze"
                  shape="Legal + security block AI use until &lsquo;policy is ready.&rsquo; Policy is never ready."
                  reason="Compliance team has never seen a defensible AI deployment template, so they default to no."
                />
                <Row
                  name="The Big-4 quote"
                  shape="$200k–$2M strategy engagement. Decks. A roadmap. No deployment."
                  reason="Senior partners sell; analysts deliver. SMB economics don&rsquo;t support the pyramid."
                />
              </tbody>
            </table>
          </div>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            What works at the SMB tier is the same thing that works at the
            enterprise tier — but priced and scoped for organizations between
            10 and 250 employees. Senior judgment, productized engagements,
            measurable adoption, structured partner relationships.
          </p>
        </section>

        {/* §2 - THE CASE STUDY */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            2 · The 83% adoption case study
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            From my current Director of HR role at a four-site Federally
            Qualified Health Center in San Francisco, we led the
            HIPAA-reviewed enterprise deployment of an LLM platform across all
            240 staff. By month nine,{" "}
            <strong className="text-[var(--foreground)]">
              83% of the workforce was actively using the tool weekly
            </strong>{" "}
            — front-desk reception through MDs and PhDs.
          </p>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
              Outcomes at month 9
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
              <li>
                <strong className="text-[var(--foreground)]">
                  83% weekly active adoption
                </strong>{" "}
                — measured, not estimated. Top quintile of enterprise AI
                deployments measured publicly in 2026.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">
                  HIPAA-clean throughout
                </strong>{" "}
                — governance framework reviewed by compliance, legal, and the
                external HIPAA security counsel before rollout. Zero PHI
                exposure incidents to date.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">
                  Cross-skill spread
                </strong>{" "}
                — front-desk, billing, behavioral health, primary care, dental,
                back-office. Not concentrated in one team.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">
                  Co-occurring retention improvement
                </strong>{" "}
                — voluntary turnover fell from 30% to 25% organization-wide
                in the same window; first-year frontline turnover halved from
                50% to 25%.
              </li>
            </ul>
          </div>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            The number that&rsquo;s rare isn&rsquo;t the deployment itself —
            it&rsquo;s the combination of measured adoption, regulatory
            cleanliness, and a workforce range from clerical to clinical
            doctorate. The framework below is the playbook extracted from that
            work.
          </p>
        </section>

        {/* §3 - THE FRAMEWORK */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            3 · The five-pillar adoption framework
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            The technology is rarely the bottleneck. Adoption is. Five pillars
            account for the gap between &ldquo;the tool works&rdquo; and
            &ldquo;the workforce uses it.&rdquo;
          </p>

          <ol className="space-y-5 text-base leading-relaxed text-[var(--muted)]">
            <Pillar
              number="1"
              name="Governance before tools"
              detail="Acceptable-use policy, data-classification framework, and BAA-quality vendor terms drafted and adopted before the first license is purchased. The compliance team becomes co-author, not gatekeeper."
            />
            <Pillar
              number="2"
              name="Champion network, not training"
              detail="A 15–25-person cross-functional champion cohort trained in cohort-format. Champions translate AI for their teams in their own language. Worth 10× more than top-down training."
            />
            <Pillar
              number="3"
              name="Use-case ladder, not feature dump"
              detail="Start with the three highest-ROI / lowest-risk use cases per department. Sequence the rollout. Don't unveil the full surface area on day one — workforces freeze."
            />
            <Pillar
              number="4"
              name="Measurement from day one"
              detail="Weekly active users, prompts-per-user, time-saved estimates, error-flag rates. If you can't measure adoption, you can't fix what's broken — and you can't prove ROI to the board."
            />
            <Pillar
              number="5"
              name="Senior judgment on call"
              detail="Someone with director-level authority needs to be reachable for the daily exceptions: a new vendor, a policy edge case, a sensitive employee question. AI deployment failures almost always trace to a missing decision-maker."
            />
          </ol>
        </section>

        {/* §4 - SERVICE CATALOG */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            4 · The service catalog
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Productized engagements with named pricing and named deliverables.
            No Statement-of-Work translation required.
          </p>

          <div className="overflow-hidden rounded-xl border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--surface-warm)] text-left">
                <tr>
                  <th className="px-4 py-3 font-medium">Service</th>
                  <th className="px-4 py-3 font-medium">Format</th>
                  <th className="px-4 py-3 font-medium">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <ServiceRow
                  name="7-Day AI Readiness Audit"
                  format="Fixed-fee · 7 business days"
                  price="$9,500"
                  note="The funnel offer. Stakeholder interviews + maturity scoring + 3-use-case shortlist + 30/90/180-day roadmap."
                />
                <ServiceRow
                  name="90-Day AI Implementation Engagement"
                  format="Fixed-fee · 12 weeks"
                  price="$40k – $120k"
                  note="Full deployment against 1–3 use cases. Governance + champion training + measurement framework."
                />
                <ServiceRow
                  name="AI Governance & New-Use-Case Retainer"
                  format="Monthly retainer"
                  price="$3k – $8k / mo"
                  note="Post-implementation oversight. Senior judgment available weekly."
                />
                <ServiceRow
                  name="AI Policy & HIPAA-Compliance Sprint"
                  format="Fixed-fee · 3 weeks"
                  price="$25,000"
                  note="For healthcare orgs where compliance is the bottleneck. Policy + BAA template + training kit delivered in three weeks."
                />
                <ServiceRow
                  name="AI Champion Training Cohort"
                  format="6-week cohort"
                  price="$15k – $50k"
                  note="Train 15–25 internal champions. Live sessions + async coursework + capstone."
                />
                <ServiceRow
                  name="Vertical AI Tool Build"
                  format="Fixed-fee · 60 days"
                  price="$35k – $90k"
                  note="Custom internal AI tool for a workflow you can't buy. Next.js + Supabase + Claude or GPT under the hood."
                />
                <ServiceRow
                  name="Fractional Chief AI Officer"
                  format="Monthly retainer · 12-mo min"
                  price="$10k – $20k / mo"
                  note="Board-level AI leadership at SMB-affordable cost. Quarterly board reports, annual roadmap, vendor management."
                />
              </tbody>
            </table>
          </div>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            The audit is the front door. Roughly half of audit clients convert
            to a 90-day implementation; half of those move to a governance
            retainer afterward. The HIPAA sprint and the champion cohort can
            run standalone for orgs that already have AI in production but
            need to tighten one piece.
          </p>
        </section>

        {/* §5 - PARTNER STACK */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            5 · The partner-program stack
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Structured partner relationships with the AI infrastructure
            providers — not informal ones. Each partnership gives the client
            cleaner contracts, escalation paths into the model vendor, and
            measurable cost advantages on production deployments.
          </p>

          <div className="overflow-hidden rounded-xl border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--surface-warm)] text-left">
                <tr>
                  <th className="px-4 py-3 font-medium">Provider</th>
                  <th className="px-4 py-3 font-medium">Program</th>
                  <th className="px-4 py-3 font-medium">What it unlocks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <Row
                  name="Anthropic"
                  shape="Solution Partners + Customer Stories"
                  reason="Direct Solutions Architect access on customer deals. Healthcare GTM co-marketing. The Claude API channel."
                />
                <Row
                  name="OpenAI"
                  shape="Consulting Partners"
                  reason="ChatGPT Enterprise / Teams customer flow. Multi-model optionality. Reseller margin at higher tiers."
                />
                <Row
                  name="AWS"
                  shape="Partner Network · Bedrock Generative AI Competency"
                  reason="Enterprise co-sell motions. AWS Marketplace listing. Healthcare Industry Practice team introductions."
                />
                <Row
                  name="Microsoft"
                  shape="Partner Network · Azure OpenAI + Copilot Specialization"
                  reason="Co-sell with Microsoft enterprise reps. Azure Marketplace. Copilot rollout engagements at scale."
                />
              </tbody>
            </table>
          </div>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            The deliberate choice: <strong className="text-[var(--foreground)]">
            model-agnostic on the implementation, partner-program-anchored on
            the channel.</strong> A healthcare customer running Azure gets the
            same five-pillar adoption playbook as a Bay Area startup running
            Claude directly. The difference is the procurement path.
          </p>
        </section>

        {/* §6 - WHO I SERVE */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            6 · Who I serve
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            The sweet spot is{" "}
            <strong className="text-[var(--foreground)]">
              10–250 employee organizations
            </strong>{" "}
            where leadership has decided AI is strategic, but in-house capacity
            isn&rsquo;t ready to own it. Across verticals:
          </p>

          <ul className="space-y-3 text-base leading-relaxed text-[var(--muted)]">
            <li>
              <strong className="text-[var(--foreground)]">Healthcare —</strong>{" "}
              FQHCs, multi-site clinics, hospital systems, healthcare
              nonprofits. The compliance constraint is the differentiator;
              the 83% adoption case is the credential.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">
                Venture-backed startups —
              </strong>{" "}
              Seed through Series B teams of 30–200 who want AI productivity
              without spinning up an internal AI team. Cana Technology (TPB
              portfolio) shape.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">
                Distributed / international employers —
              </strong>{" "}
              Companies operating across 5+ countries with the people-ops
              complexity that generic AI consultancies fumble. Asia
              Foundation shape (21 offices, 19 countries).
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Nonprofits —</strong>{" "}
              Multi-site youth-serving, behavioral health, and community
              orgs. Boys &amp; Girls Clubs of San Francisco shape.
            </li>
          </ul>

          <p className="text-base leading-relaxed text-[var(--muted)]">
            What I don&rsquo;t serve well: pre-product startups, single-store
            retail, organizations under 10 employees where the founder is
            already doing AI implementation themselves.
          </p>
        </section>

        {/* §7 - HOW TO ENGAGE */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            7 · How to engage
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            The cleanest first step is the 7-day audit. $9,500 fixed-fee,
            seven business days, written report and executive deck at the end.
            If the audit shows we&rsquo;re a fit, we scope a 90-day
            implementation. If it shows we&rsquo;re not, you keep the report
            and the roadmap — usable with any implementation partner.
          </p>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
              The 7-day audit, week-by-week
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
              <li>
                <strong className="text-[var(--foreground)]">Day 1–2 —</strong>{" "}
                Stakeholder interviews. 5–8 conversations across leadership,
                operations, compliance, and the people closest to the work.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Day 3–4 —</strong>{" "}
                Current-state assessment scored against the five-pillar
                framework. Tech stack, data posture, policy maturity, talent
                readiness.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Day 5 —</strong>{" "}
                Use-case shortlist. 3 high-ROI / low-risk candidates with
                effort and ROI estimates.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Day 6 —</strong>{" "}
                Written report drafted with 30 / 90 / 180-day roadmap.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Day 7 —</strong>{" "}
                Debrief call with leadership + executive summary deck for
                board presentation.
              </li>
            </ul>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="mailto:jweingard@gmail.com?subject=AI%20Readiness%20Audit%20inquiry"
              className="btn-primary inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-white"
            >
              Start with the audit
              <ArrowRight className="h-3.5 w-3.5" />
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

        {/* §8 - WHY ME */}
        <section className="mt-14 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            8 · Why me
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            The combination is the credential:
          </p>

          <ul className="space-y-3 text-base leading-relaxed text-[var(--muted)]">
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
              <span>
                <strong className="text-[var(--foreground)]">
                  Director-level operator
                </strong>{" "}
                across four organizations — currently 200-staff FQHC; earlier
                400-staff multi-site nonprofit; venture-backed startup HR
                from scratch; international NGO across 19 countries.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
              <span>
                <strong className="text-[var(--foreground)]">
                  Software shipping cadence
                </strong>{" "}
                — the projects on this site are real and used. The same hands
                that wrote the AI governance framework also wrote the
                California Employment Law Platform and the FQHC Talent
                Exchange.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
              <span>
                <strong className="text-[var(--foreground)]">
                  Measured outcomes
                </strong>{" "}
                — 83% AI adoption. 13% benefits cost reduction while
                preserving employer-paid premiums and $0 deductibles. 30%→25%
                turnover. 50%→25% first-year frontline turnover. The numbers
                are documented, not estimated.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
              <span>
                <strong className="text-[var(--foreground)]">
                  Earlier career in capital-intensive operations
                </strong>{" "}
                — five years at NaturEner and Pristine Sun across 200+ MW of
                wind and solar. Project finance, pro-formas, milestone
                payments — the discipline of running operations against a
                financial model.
              </span>
            </li>
          </ul>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Practice committed May 12, 2026 · Berkeley, CA
          </span>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to portfolio
          </Link>
        </footer>
      </article>
    </>
  );
}

function Row({
  name,
  shape,
  reason,
}: {
  name: string;
  shape: string;
  reason: string;
}) {
  return (
    <tr className="align-top">
      <td className="px-4 py-4 whitespace-nowrap font-medium text-[var(--foreground)]">
        {name}
      </td>
      <td className="px-4 py-4 text-[var(--muted)]">{shape}</td>
      <td className="px-4 py-4 text-[var(--muted)]">{reason}</td>
    </tr>
  );
}

function ServiceRow({
  name,
  format,
  price,
  note,
}: {
  name: string;
  format: string;
  price: string;
  note: string;
}) {
  return (
    <tr className="align-top">
      <td className="px-4 py-4">
        <div className="font-medium text-[var(--foreground)]">{name}</div>
        <div className="mt-1 text-[12px] text-[var(--muted)]">{note}</div>
      </td>
      <td className="px-4 py-4 text-[var(--muted)] whitespace-nowrap">
        {format}
      </td>
      <td className="px-4 py-4 font-medium text-[var(--accent)] whitespace-nowrap">
        {price}
      </td>
    </tr>
  );
}

function Pillar({
  number,
  name,
  detail,
}: {
  number: string;
  name: string;
  detail: string;
}) {
  return (
    <li className="flex gap-4">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-sm font-medium text-[var(--accent)]">
        {number}
      </div>
      <div>
        <p className="font-medium text-[var(--foreground)]">
          <Award className="mr-1 inline h-3.5 w-3.5 text-[var(--accent)]" />
          {name}
        </p>
        <p className="mt-1 text-[var(--muted)]">{detail}</p>
      </div>
    </li>
  );
}
