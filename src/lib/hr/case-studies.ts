export type CaseStudy = {
  id: string;
  slug: string;
  // Anonymized identifier
  title: string;
  // Sector + size
  sector: string;
  size: string;
  // The headline outcome
  headlineMetric: string;
  // Featured? Surfaces on the case-study landing
  featured: boolean;
  // Story arc
  challenge: string;
  approach: string;
  outcomes: { label: string; value: string }[];
  // The lessons that apply to similar orgs
  takeaways: string[];
  // Time-boxed window
  window: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fqhc-83-adoption",
    slug: "fqhc-83-adoption",
    title: "240-person FQHC: 0 → 83% AI adoption in 9 months",
    sector: "Healthcare — Federally Qualified Health Center",
    size: "240 staff · 4 SF sites · ~13,000 patients/year",
    headlineMetric: "83% weekly active adoption · HIPAA-clean",
    featured: true,
    challenge:
      "A four-site Federally Qualified Health Center in San Francisco serving roughly 13,000 patients annually wanted to deploy AI to its staff — but the compliance environment (HIPAA, 340B, HRSA grant terms, union employees) had blocked previous attempts. Three earlier pilots had stalled in legal review. The CEO needed an approach that would actually ship and that the compliance officer could sign off on.",
    approach:
      "Five-pillar adoption framework, sequenced over nine months: (1) governance framework drafted with compliance, legal, and external HIPAA counsel before the first license was purchased; (2) cross-functional champion cohort of 22 staff representing every clinic, billing, behavioral health, dental, and back-office team; (3) use-case ladder starting with two low-risk wins (meeting summaries, policy drafting) before expanding into patient-facing work; (4) adoption dashboard surfaced weekly active users and prompts-per-user from day one; (5) director-level decisions made on a same-day cadence for the daily exceptions.",
    outcomes: [
      { label: "Weekly active adoption", value: "83% (200 of 240 staff) by month 9" },
      { label: "PHI exposure incidents", value: "0" },
      { label: "Champion network", value: "22 active across all teams" },
      { label: "Use cases in production", value: "11 across 5 departments" },
      { label: "Co-occurring retention impact", value: "Voluntary turnover 30% → 25% org-wide" },
      { label: "First-year frontline turnover", value: "50% → 25%" },
    ],
    takeaways: [
      "Governance-first sequencing is what unlocks compliance approval. Most healthcare organizations have this backwards.",
      "Champion cohorts at 8–10% of headcount outperform top-down training by an order of magnitude on adoption velocity.",
      "The dashboard is non-negotiable. Without measurement, you cannot prove ROI, cannot diagnose stalls, and cannot defend the program in the next budget cycle.",
      "Adoption and retention are correlated, not independent. Staff who use the tool feel modern, capable, and supported — and stay longer.",
    ],
    window: "2025 Q3 — 2026 Q2",
  },
  {
    id: "international-19-country",
    slug: "international-19-country",
    title: "International development NGO: 19-country People Ops redesign",
    sector: "Nonprofit — International development",
    size: "800+ staff · 21 offices · 19 countries",
    headlineMetric: "30% YoY international benefits cost reduction · richer coverage",
    featured: true,
    challenge:
      "An international development nonprofit operating across 21 offices in 19 countries was paying a 30% premium on benefits relative to comparable peers, while still under-serving country-office staff on the benefits that mattered most (fertility, gender-affirming care, mental health). Three prior consulting engagements had attempted to rationalize benefits and produced country-specific patchworks that were impossible to administer.",
    approach:
      "Multi-jurisdiction benefits architecture rebuilt from first principles. Benchmarked across all 19 countries against in-country comparables, not US comparables. Identified the cost drivers (US insurer markups on international coverage; redundant policy layers; misaligned vendors) and consolidated to a smaller stack of jurisdiction-aware partners. Designed the new offering with country-office HR leadership as co-authors, not recipients.",
    outcomes: [
      { label: "International benefits cost (YoY)", value: "-30%" },
      { label: "Mental health coverage", value: "Added across all 19 countries" },
      { label: "Fertility benefits", value: "Added (where legally permitted)" },
      { label: "Gender-affirming care", value: "Added across the global plan" },
      { label: "Country-office HR satisfaction (post-deployment survey)", value: "+22 points" },
    ],
    takeaways: [
      "Benefits redesign across borders is mostly a procurement problem, not an insurance problem. The 30% savings came from removing redundant intermediaries, not cutting coverage.",
      "Co-authoring with country-office HR is the difference between a plan that works on paper and a plan that works in country.",
      "Adding benefits while cutting cost is almost always possible at orgs that haven't redesigned in 5+ years. The expense is usually in the wrong place.",
    ],
    window: "2018 — 2022",
  },
  {
    id: "venture-startup-30-50",
    slug: "venture-startup-30-50",
    title: "Venture-backed startup: HR + Ops from 30 → 50 employees, from zero",
    sector: "Technology — Venture-backed startup (food + bio)",
    size: "30 → 50 staff over 18 months",
    headlineMetric: "Full People + Ops + Payroll function built from scratch · reporting to CEO",
    featured: true,
    challenge:
      "A venture-backed molecular-beverage-printer startup funded by The Production Board needed to scale its operating infrastructure as it grew from 30 to 50 employees over 18 months. No HR function existed. No formal performance management. No engagement measurement. No equity refresh framework. The CEO was personally handling offer letters and benefits selection.",
    approach:
      "Built the function from first principles, reporting directly to the CEO. Stood up the company's first SaaS stack (HRIS, performance, comp, engagement). Designed and ran the company's first engagement survey. Initiated a manager cohort and led Liberating Structures workshops to break down silos between the technical, scientific, and customer-facing teams. Wrote the first handbook, the first comp framework, the first equity refresh schedule.",
    outcomes: [
      { label: "Headcount growth", value: "30 → 50 in 18 months" },
      { label: "First engagement survey", value: "Designed, deployed, reported to board" },
      { label: "Manager cohort", value: "First-time-manager training rolled out" },
      { label: "HRIS + perf + comp + engagement stack", value: "All selected, contracted, deployed" },
    ],
    takeaways: [
      "Founders almost always wait 30–50 staff longer than they should before bringing in HR/Ops leadership. The cost of waiting compounds.",
      "Reporting line to the CEO is non-negotiable for the first HR/Ops hire. Anything else underweights the function.",
      "Liberating Structures is the most undervalued tool in the operator's kit. Better than any deck for cross-functional alignment.",
    ],
    window: "2022 — 2023",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
