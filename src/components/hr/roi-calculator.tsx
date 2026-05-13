"use client";

import { ArrowRight, Calculator, RotateCw } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type Sector =
  | "healthcare"
  | "venture-startup"
  | "distributed"
  | "nonprofit"
  | "professional-services";

const SECTOR_LABELS: Record<Sector, string> = {
  healthcare: "Healthcare",
  "venture-startup": "Venture-backed startup",
  distributed: "Distributed / international",
  nonprofit: "Nonprofit",
  "professional-services": "Professional services",
};

// Productivity savings estimate per active user per week (hours)
const HOURS_PER_USER_PER_WEEK: Record<Sector, [number, number]> = {
  healthcare: [1.5, 4.0],
  "venture-startup": [2.5, 6.0],
  distributed: [2.0, 5.0],
  nonprofit: [1.5, 3.5],
  "professional-services": [2.0, 5.0],
};

// Avg fully-loaded hourly cost per sector
const HOURLY_COST: Record<Sector, number> = {
  healthcare: 65,
  "venture-startup": 90,
  distributed: 75,
  nonprofit: 50,
  "professional-services": 110,
};

function fmt(n: number): string {
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (Math.abs(n) >= 1_000) return `$${(n / 1_000).toFixed(0)}k`;
  return `$${Math.round(n).toLocaleString()}`;
}

export function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(75);
  const [sector, setSector] = useState<Sector>("healthcare");
  const [adoptionPct, setAdoptionPct] = useState(70);
  const [engagementPrice, setEngagementPrice] = useState(80_000);

  const result = useMemo(() => {
    const activeUsers = Math.round(teamSize * (adoptionPct / 100));
    const [lowHrs, highHrs] = HOURS_PER_USER_PER_WEEK[sector];
    const hourlyCost = HOURLY_COST[sector];
    const weeksPerYear = 48; // assume 4 weeks off

    const lowAnnualSavings = activeUsers * lowHrs * weeksPerYear * hourlyCost;
    const highAnnualSavings = activeUsers * highHrs * weeksPerYear * hourlyCost;
    const midAnnualSavings = (lowAnnualSavings + highAnnualSavings) / 2;

    const paybackMonthsLow =
      lowAnnualSavings > 0 ? (engagementPrice / lowAnnualSavings) * 12 : 0;
    const paybackMonthsHigh =
      highAnnualSavings > 0 ? (engagementPrice / highAnnualSavings) * 12 : 0;
    const paybackMonthsMid =
      midAnnualSavings > 0 ? (engagementPrice / midAnnualSavings) * 12 : 0;

    const firstYearRoiMid = midAnnualSavings - engagementPrice;
    const firstYearRoiPctMid =
      engagementPrice > 0 ? (firstYearRoiMid / engagementPrice) * 100 : 0;

    return {
      activeUsers,
      lowAnnualSavings,
      midAnnualSavings,
      highAnnualSavings,
      paybackMonthsLow,
      paybackMonthsMid,
      paybackMonthsHigh,
      firstYearRoiMid,
      firstYearRoiPctMid,
    };
  }, [teamSize, sector, adoptionPct, engagementPrice]);

  function reset() {
    setTeamSize(75);
    setSector("healthcare");
    setAdoptionPct(70);
    setEngagementPrice(80_000);
  }

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--paper)] p-6">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="flex items-center gap-2 text-xl font-medium text-[var(--foreground)]">
          <Calculator className="h-5 w-5 text-[var(--accent)]" />
          Engagement ROI estimator
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
        Plug in your numbers. Inputs change everything live. Conservative
        defaults assume 48 productive weeks per year and fully-loaded hourly
        costs.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
            Team size
          </span>
          <input
            type="number"
            min={10}
            max={2000}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
            Sector
          </span>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value as Sector)}
            className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
          >
            {(Object.keys(SECTOR_LABELS) as Sector[]).map((s) => (
              <option key={s} value={s}>
                {SECTOR_LABELS[s]}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
            Target weekly adoption — {adoptionPct}%
          </span>
          <input
            type="range"
            min={20}
            max={95}
            step={5}
            value={adoptionPct}
            onChange={(e) => setAdoptionPct(Number(e.target.value))}
            className="mt-2 w-full accent-[var(--accent)]"
          />
          <span className="mt-1 block text-[11px] text-[var(--muted-soft)]">
            ({result.activeUsers} weekly active users)
          </span>
        </label>

        <label className="block">
          <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
            Engagement price
          </span>
          <select
            value={engagementPrice}
            onChange={(e) => setEngagementPrice(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none"
          >
            <option value={9500}>$9,500 · 7-Day Audit</option>
            <option value={25_000}>$25,000 · HIPAA Sprint</option>
            <option value={40_000}>$40,000 · 90-Day Impl. (light)</option>
            <option value={80_000}>$80,000 · 90-Day Impl. (typical)</option>
            <option value={120_000}>$120,000 · 90-Day Impl. (complex)</option>
          </select>
        </label>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Metric
          label="Year 1 savings (mid)"
          value={fmt(result.midAnnualSavings)}
          accent
        />
        <Metric
          label="Year 1 ROI (mid)"
          value={`${result.firstYearRoiPctMid >= 0 ? "+" : ""}${Math.round(result.firstYearRoiPctMid)}%`}
        />
        <Metric
          label="Payback (mid)"
          value={`${result.paybackMonthsMid.toFixed(1)} mo`}
        />
        <Metric
          label="Savings range"
          value={`${fmt(result.lowAnnualSavings)} – ${fmt(result.highAnnualSavings)}`}
        />
      </div>

      <p className="mt-5 text-[11px] leading-relaxed text-[var(--muted-soft)]">
        Assumes a productive workforce of {result.activeUsers} users at
        adoption, with {HOURS_PER_USER_PER_WEEK[sector][0]}–
        {HOURS_PER_USER_PER_WEEK[sector][1]} hours per user per week saved
        and a fully-loaded hourly cost of ${HOURLY_COST[sector]}. Conservative
        on both ends; actual outcomes vary by use case. Engagement price is
        Year 1 only; ongoing governance retainer not included.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/hr/services"
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
        >
          See full service catalog
          <ArrowRight className="h-3 w-3" />
        </Link>
        <a
          href="mailto:jweingard@gmail.com?subject=AI%20Readiness%20Audit%20inquiry"
          className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white"
        >
          Start with the audit
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-3">
      <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted-soft)]">
        {label}
      </p>
      <p
        className={`mt-1 text-lg font-medium ${accent ? "text-[var(--accent)]" : "text-[var(--foreground)]"}`}
      >
        {value}
      </p>
    </div>
  );
}
