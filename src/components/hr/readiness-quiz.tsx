"use client";

import { ArrowRight, CheckCircle2, Gauge, RotateCw } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type PillarKey = "governance" | "champions" | "ladder" | "measurement" | "judgment";

type Question = {
  id: string;
  pillar: PillarKey;
  question: string;
};

const QUESTIONS: Question[] = [
  // governance
  {
    id: "g1",
    pillar: "governance",
    question:
      "Do you have a written, board-adopted AI Acceptable Use Policy?",
  },
  {
    id: "g2",
    pillar: "governance",
    question:
      "Has your compliance / legal / security team co-authored your AI policy (vs. reviewing it after the fact)?",
  },
  {
    id: "g3",
    pillar: "governance",
    question:
      "Do you have a documented data classification framework that AI use is mapped against?",
  },
  // champions
  {
    id: "c1",
    pillar: "champions",
    question:
      "Do you have at least one trained AI champion in every major department or team?",
  },
  {
    id: "c2",
    pillar: "champions",
    question:
      "Does your champion network have ongoing access to each other and to senior leadership (e.g., monthly office hours)?",
  },
  // ladder
  {
    id: "l1",
    pillar: "ladder",
    question:
      "Have you identified three high-ROI / low-risk use cases per department and sequenced their rollout?",
  },
  {
    id: "l2",
    pillar: "ladder",
    question:
      "Do you have use-case-specific prompt templates or playbooks for your prioritized use cases?",
  },
  // measurement
  {
    id: "m1",
    pillar: "measurement",
    question:
      "Do you have a dashboard tracking weekly active users (WAU) and prompts-per-user — not just license activations?",
  },
  {
    id: "m2",
    pillar: "measurement",
    question:
      "Can you produce a quarterly AI ROI report for your board with documented methodology?",
  },
  // judgment
  {
    id: "j1",
    pillar: "judgment",
    question:
      "Is there a named decision-maker reachable on a same-day cadence for AI policy edge cases?",
  },
  {
    id: "j2",
    pillar: "judgment",
    question:
      "Do you have a clear escalation playbook for AI-related incidents (data leakage, hallucination at scale, vendor failure)?",
  },
];

const PILLAR_LABELS: Record<PillarKey, string> = {
  governance: "Governance",
  champions: "Champion network",
  ladder: "Use-case ladder",
  measurement: "Measurement",
  judgment: "Senior judgment",
};

type AnswerValue = "yes" | "partial" | "no" | null;

const SCORE_FOR: Record<Exclude<AnswerValue, null>, number> = {
  yes: 2,
  partial: 1,
  no: 0,
};

export function ReadinessQuiz() {
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>(
    Object.fromEntries(QUESTIONS.map((q) => [q.id, null])),
  );

  const stats = useMemo(() => {
    const byPillar: Record<PillarKey, { score: number; max: number }> = {
      governance: { score: 0, max: 0 },
      champions: { score: 0, max: 0 },
      ladder: { score: 0, max: 0 },
      measurement: { score: 0, max: 0 },
      judgment: { score: 0, max: 0 },
    };
    QUESTIONS.forEach((q) => {
      byPillar[q.pillar].max += 2;
      const a = answers[q.id];
      if (a) byPillar[q.pillar].score += SCORE_FOR[a];
    });

    let total = 0;
    let answered = 0;
    Object.values(answers).forEach((a) => {
      if (a) {
        answered += 1;
        total += SCORE_FOR[a];
      }
    });

    const maxTotal = QUESTIONS.length * 2;
    const pct = answered === 0 ? 0 : (total / maxTotal) * 100;

    let recommendation = "";
    if (answered < QUESTIONS.length) {
      recommendation = `Answer ${QUESTIONS.length - answered} more questions for a full result.`;
    } else if (pct >= 75) {
      recommendation =
        "You're in the top quartile of SMB readiness. A Governance Retainer is likely the right tier — keep what's working, expand the use-case ladder, and harden measurement.";
    } else if (pct >= 50) {
      recommendation =
        "Mid-range readiness. A 90-Day Implementation Engagement is the right fit — fill the gaps in 1–2 pillars while running real deployment in the strong ones.";
    } else if (pct >= 25) {
      recommendation =
        "Foundational gaps in multiple pillars. A 7-Day Audit is the right first step — it surfaces which pillars to address in which order, with a written roadmap.";
    } else {
      recommendation =
        "Pre-readiness. The 7-Day Audit will tell you whether to invest in foundational governance and operations first, or skip AI for now and revisit in 6 months. Sometimes the most valuable engagement is the one that says 'not yet.'";
    }

    return { byPillar, total, maxTotal, pct, answered, recommendation };
  }, [answers]);

  function setAnswer(id: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function reset() {
    setAnswers(Object.fromEntries(QUESTIONS.map((q) => [q.id, null])));
  }

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="flex items-center gap-2 text-xl font-medium text-[var(--foreground)]">
          <Gauge className="h-5 w-5 text-[var(--accent)]" />
          AI Readiness self-check
        </h2>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1 text-xs text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          <RotateCw className="h-3 w-3" />
          Reset
        </button>
      </div>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Eleven questions across the five pillars. Answer honestly — partial
        scores are valuable. The result is an unofficial maturity score with a
        recommendation for which service tier likely fits.
      </p>

      <div className="mt-6 space-y-6">
        {(Object.keys(PILLAR_LABELS) as PillarKey[]).map((pillar) => {
          const qs = QUESTIONS.filter((q) => q.pillar === pillar);
          return (
            <fieldset key={pillar} className="space-y-3">
              <legend className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                {PILLAR_LABELS[pillar]}
                <span className="ml-2 text-[var(--accent)]">
                  {stats.byPillar[pillar].score} / {stats.byPillar[pillar].max}
                </span>
              </legend>
              {qs.map((q) => (
                <div
                  key={q.id}
                  className="rounded-lg border border-[var(--border)] bg-[var(--background)]/40 p-4"
                >
                  <p className="text-sm text-[var(--foreground)]">{q.question}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(["yes", "partial", "no"] as const).map((opt) => {
                      const selected = answers[q.id] === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setAnswer(q.id, opt)}
                          className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                            selected
                              ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                              : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
                          }`}
                        >
                          {opt === "yes" ? "Yes" : opt === "partial" ? "Partial" : "No"}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </fieldset>
          );
        })}
      </div>

      {/* RESULT */}
      <div className="mt-8 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-5">
        <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--accent)]">
          Result
        </p>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="text-3xl font-medium text-[var(--foreground)]">
            {Math.round(stats.pct)}%
          </span>
          <span className="text-sm text-[var(--muted)]">
            ({stats.total} / {stats.maxTotal})
          </span>
          <span className="text-xs text-[var(--muted-soft)]">
            · {stats.answered} / {QUESTIONS.length} answered
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {stats.recommendation}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {(Object.keys(PILLAR_LABELS) as PillarKey[]).map((p) => {
            const s = stats.byPillar[p];
            const pct = s.max > 0 ? (s.score / s.max) * 100 : 0;
            return (
              <div
                key={p}
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-3"
              >
                <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
                  {PILLAR_LABELS[p]}
                </p>
                <p className="mt-1 text-base font-medium text-[var(--foreground)]">
                  {Math.round(pct)}%
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:jweingard@gmail.com?subject=AI%20Readiness%20Audit%20-%20self-check%20${Math.round(stats.pct)}%25`}
            className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white"
          >
            Start the full 7-Day Audit
            <ArrowRight className="h-3 w-3" />
          </a>
          <Link
            href="/hr/framework"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Read the five-pillar framework
            <CheckCircle2 className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
