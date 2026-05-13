import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import {
  SERVICE_FORMAT_LABELS,
  SERVICE_TIER_LABELS,
  services,
  servicesByTier,
} from "@/lib/hr/services";

export const metadata = {
  title: "Service catalog · HR — JMW Projects",
  description:
    "Seven productized engagements with named pricing and named deliverables. The 7-Day AI Readiness Audit ($9,500), 90-Day Implementation, Governance Retainer, HIPAA Sprint, Champion Training, Vertical Tool Build, Fractional Chief AI Officer.",
};

const TIERS = ["entry", "core", "premium", "specialty"] as const;

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Service catalog
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Productized engagements
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Seven services with named pricing and named deliverables. No
            Statement-of-Work translation. The audit is the front door;
            roughly half of audit clients convert to a 90-day implementation;
            half of those move to a governance retainer afterward.
          </p>
        </header>

        <HrSubNav active="/hr/services" />

        {TIERS.map((tier) => {
          const items = servicesByTier(tier);
          if (items.length === 0) return null;
          return (
            <section key={tier} className="mt-14 space-y-6">
              <h2 className="text-2xl font-medium tracking-tight">
                {SERVICE_TIER_LABELS[tier]}
                <span className="ml-2 text-base font-normal text-[var(--muted)]">
                  ({items.length})
                </span>
              </h2>

              <div className="space-y-6">
                {items.map((s) => (
                  <article
                    key={s.id}
                    className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6"
                  >
                    <header className="space-y-2">
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted-soft)]">
                        {SERVICE_FORMAT_LABELS[s.format]} · {s.duration}
                      </p>
                      <h3 className="text-xl font-medium text-[var(--foreground)]">
                        {s.name}
                      </h3>
                      <p className="text-sm italic text-[var(--muted)]">
                        {s.tagline}
                      </p>
                      <p className="text-lg font-medium text-[var(--accent)]">
                        {s.price}
                      </p>
                    </header>

                    <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                      {s.description}
                    </p>

                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                          Deliverables
                        </p>
                        <ul className="mt-2 space-y-1.5 text-sm text-[var(--muted)]">
                          {s.deliverables.map((d, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-1 h-3 w-3 flex-shrink-0 text-[var(--accent)]" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                            Ideal customer
                          </p>
                          <p className="mt-1 text-sm text-[var(--muted)]">
                            {s.idealCustomer}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                            Why it works
                          </p>
                          <p className="mt-1 text-sm text-[var(--muted)]">
                            {s.whyItWorks}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                            What it leads to
                          </p>
                          <p className="mt-1 text-sm text-[var(--accent)]">
                            {s.upsellPath}
                          </p>
                        </div>
                      </div>
                    </div>

                    {s.weekByWeek && (
                      <div className="mt-5">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                          Week-by-week
                        </p>
                        <ul className="mt-2 space-y-1.5 text-sm text-[var(--muted)]">
                          {s.weekByWeek.map((w, i) => (
                            <li key={i} className="flex gap-3">
                              <strong className="min-w-[68px] text-[var(--foreground)]">
                                {w.label}
                              </strong>
                              <span>{w.detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {s.commonQuestions.length > 0 && (
                      <details className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--background)]/40 p-4">
                        <summary className="cursor-pointer text-sm font-medium text-[var(--foreground)]">
                          Common questions ({s.commonQuestions.length})
                        </summary>
                        <ul className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                          {s.commonQuestions.map((qa, i) => (
                            <li key={i}>
                              <p className="font-medium text-[var(--foreground)]">
                                {qa.q}
                              </p>
                              <p className="mt-1">{qa.a}</p>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="mt-14 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6">
          <h2 className="text-xl font-medium text-[var(--foreground)]">
            Not sure which service fits?
          </h2>
          <p className="mt-2 text-base text-[var(--muted)]">
            The 7-Day Audit is designed to answer exactly that. $9,500 fixed-fee,
            seven business days, written roadmap. If we&rsquo;re a fit, we scope
            a 90-day implementation. If we&rsquo;re not, the roadmap is yours.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:jweingard@gmail.com?subject=AI%20Readiness%20Audit%20inquiry"
              className="btn-primary inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-white"
            >
              Start with the audit
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/hr/tools/roi"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Estimate ROI first
            </Link>
          </div>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            All engagements signed via written MSA + scope-specific SOW
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
