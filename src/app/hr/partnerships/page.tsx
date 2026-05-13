import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import {
  PROVIDER_LABELS,
  STATUS_LABELS,
  partnerships,
  type Provider,
} from "@/lib/hr/partnerships";

export const metadata = {
  title: "Partner stack · HR — JMW Projects",
  description:
    "Structured partnerships with the AI infrastructure providers — Anthropic, OpenAI, AWS, Microsoft. Multi-channel procurement, model-agnostic implementation.",
};

const PROVIDER_ORDER: Provider[] = [
  "anthropic",
  "openai",
  "aws",
  "microsoft",
];

export default function PartnershipsPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Partner stack
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Model-agnostic implementation, partner-anchored channel
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Structured relationships with all four major AI infrastructure
            providers — not informal ones. Each partnership gives the client a
            cleaner procurement path, an escalation route into the model
            vendor, and measurable cost advantages on production deployments.
            And because there are four, not one, the recommendation isn&rsquo;t
            biased by commission.
          </p>
        </header>

        <HrSubNav active="/hr/partnerships" />

        {PROVIDER_ORDER.map((p) => {
          const items = partnerships.filter((x) => x.provider === p);
          if (items.length === 0) return null;
          return (
            <section key={p} className="mt-12 space-y-5">
              <h2 className="text-2xl font-medium tracking-tight">
                {PROVIDER_LABELS[p]}
              </h2>
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6"
                >
                  <header className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-lg font-medium text-[var(--foreground)]">
                      {item.programName}
                    </h3>
                    <span className="rounded-full bg-[var(--accent)]/10 px-2 py-0.5 text-[11px] font-medium text-[var(--accent)]">
                      {STATUS_LABELS[item.status]}
                    </span>
                  </header>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {item.what}
                  </p>

                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                        What it gives the client
                      </dt>
                      <dd className="mt-1 text-[var(--muted)]">
                        {item.clientBenefit}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                        What it gives the practice
                      </dt>
                      <dd className="mt-1 text-[var(--muted)]">
                        {item.practiceBenefit}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                        Procurement path unlocked
                      </dt>
                      <dd className="mt-1 text-[var(--accent)]">
                        {item.procurementPath}
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </section>
          );
        })}

        {/* DISCLOSURE */}
        <section className="mt-14 rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
          <h2 className="text-base font-medium text-amber-300">Disclosure</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Any commission, referral fee, or partner-tier-driven incentive
            earned on a customer engagement is disclosed at the time the
            recommendation is made. Partner-program newsletters and program
            updates route to a dedicated intelligence-intake inbox; client
            communication does not pass through that channel.
          </p>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Partner-program details current as of May 2026
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
