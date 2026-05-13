import Link from "next/link";
import { AlertTriangle, CheckCircle2, Sparkles, Target } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import { pillars, stages } from "@/lib/hr/framework";

export const metadata = {
  title:
    "The Five-Pillar Adoption Framework · HR — JMW Projects",
  description:
    "Governance, champion network, use-case ladder, measurement, senior judgment. The framework behind the 83% adoption deployment, with failure modes and worked examples for each pillar.",
};

export default function FrameworkPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Framework
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              The five-pillar adoption framework
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            The technology is rarely the bottleneck — adoption is. Five
            pillars account for the gap between &ldquo;the tool works&rdquo;
            and &ldquo;the workforce uses it.&rdquo; This is the playbook
            behind the 83% adoption deployment, in long form.
          </p>
        </header>

        <HrSubNav active="/hr/framework" />

        {/* PILLARS */}
        <section className="mt-14 space-y-10">
          {pillars.map((p) => (
            <div key={p.number} className="space-y-4">
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

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
                  <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-rose-400">
                    <AlertTriangle className="h-3 w-3" />
                    Failure mode this pillar prevents
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{p.failureMode}</p>
                </div>
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    Success signal
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {p.successSignal}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                  Artifacts produced
                </p>
                <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
                  {p.artifacts.map((a, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-amber-400">
                  Common mistake
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.commonMistake}</p>
              </div>
            </div>
          ))}
        </section>

        {/* STAGES */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-medium tracking-tight">
            How the pillars sequence — the five stages
          </h2>
          <p className="text-base leading-relaxed text-[var(--muted)]">
            The pillars work as a sequence, not a checklist. The full
            framework runs in five stages over ~12 weeks (the 90-Day
            Implementation engagement) with ongoing scale activity from month
            four onward.
          </p>

          <div className="overflow-hidden rounded-xl border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--surface-warm)] text-left">
                <tr>
                  <th className="px-4 py-3 font-medium">Stage</th>
                  <th className="px-4 py-3 font-medium">Window</th>
                  <th className="px-4 py-3 font-medium">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {stages.map((s) => (
                  <tr key={s.id} className="align-top">
                    <td className="px-4 py-4">
                      <div className="font-medium text-[var(--foreground)]">{s.name}</div>
                      <div className="mt-1 text-[12px] text-[var(--muted)]">
                        {s.description}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[var(--muted)] whitespace-nowrap">
                      {s.duration}
                    </td>
                    <td className="px-4 py-4 text-[var(--muted)]">
                      <ul className="space-y-1">
                        {s.outcomes.map((o, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-6">
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            <Target className="h-3.5 w-3.5" />
            Want to see how your org scores against the five pillars?
          </p>
          <p className="mt-2 text-base text-[var(--muted)]">
            The free <Link href="/hr/tools/readiness" className="text-[var(--accent)] underline-offset-4 hover:underline">AI Readiness self-check</Link>{" "}
            scores your organization across all five pillars in under five
            minutes. If you want a deeper assessment, the{" "}
            <Link href="/hr/services" className="text-[var(--accent)] underline-offset-4 hover:underline">7-Day Audit</Link>{" "}
            does the full interview-based version with a written report.
          </p>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Framework refined over 9 months of MNHC deployment
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
