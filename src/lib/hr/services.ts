export type ServiceFormat =
  | "fixed-fee"
  | "monthly-retainer"
  | "cohort"
  | "build";

export type ServiceTier = "entry" | "core" | "premium" | "specialty";

export type Service = {
  id: string;
  tier: ServiceTier;
  name: string;
  tagline: string;
  format: ServiceFormat;
  price: string;
  duration: string;
  description: string;
  deliverables: string[];
  idealCustomer: string;
  whyItWorks: string;
  upsellPath: string;
  // Common questions from prospects
  commonQuestions: { q: string; a: string }[];
  // Sample week-by-week (if applicable)
  weekByWeek?: { label: string; detail: string }[];
};

export const services: Service[] = [
  {
    id: "ai-readiness-audit-7-day",
    tier: "entry",
    name: "7-Day AI Readiness Audit",
    tagline: "Where you are, where you can go, what to deploy first.",
    format: "fixed-fee",
    price: "$9,500",
    duration: "7 business days",
    description:
      "A 7-business-day engagement that maps your organization against the five-pillar adoption framework, surfaces the three highest-ROI low-risk AI use cases, and ships a written report your leadership can act on. The most common front door into the practice.",
    deliverables: [
      "Stakeholder interview synthesis (5–8 interviews)",
      "Five-pillar maturity scoring (governance, champions, use-case ladder, measurement, judgment)",
      "Current-state assessment (tech stack, data posture, policy maturity, talent readiness)",
      "Three-use-case shortlist with effort + ROI estimates",
      "30 / 90 / 180-day roadmap",
      "Executive summary deck",
      "1-hour leadership debrief",
    ],
    idealCustomer:
      "Operating leaders (CEO / COO / CFO / CHRO) at 50–250 employee orgs who are AI-curious but stuck in pilot purgatory or paralyzed by compliance fears.",
    whyItWorks:
      "Most SMBs procrastinate on AI because they can't price the unknown. A 7-day fixed-fee audit makes the unknown finite. Half of audit clients convert to a 90-day implementation; the other half walk away with a roadmap they can use with any partner.",
    upsellPath: "→ 90-Day Implementation engagement OR Governance Retainer",
    commonQuestions: [
      {
        q: "Why fixed-fee and not hourly?",
        a: "Hourly aligns incentives with the consultant, not the client. Fixed-fee aligns them with the deliverable. If the audit takes longer, that's my problem.",
      },
      {
        q: "What if we're not ready for AI at all?",
        a: "The audit surfaces that too. Honestly. The roadmap might say 'wait six months and revisit' — and that's a useful answer.",
      },
      {
        q: "Do you sign an NDA?",
        a: "Yes, before the first interview.",
      },
    ],
    weekByWeek: [
      { label: "Day 1–2", detail: "Stakeholder interviews across leadership, operations, compliance, and the people closest to the work." },
      { label: "Day 3–4", detail: "Five-pillar scoring + current-state assessment." },
      { label: "Day 5", detail: "Use-case shortlist with effort + ROI estimates." },
      { label: "Day 6", detail: "Written report drafted with 30 / 90 / 180-day roadmap." },
      { label: "Day 7", detail: "Leadership debrief + executive summary deck." },
    ],
  },
  {
    id: "ai-implementation-90-day",
    tier: "core",
    name: "90-Day AI Implementation Engagement",
    tagline: "From zero to your first deployed AI workflow — measured.",
    format: "fixed-fee",
    price: "$40,000 – $120,000",
    duration: "12 weeks",
    description:
      "Full engagement for organizations ready to deploy. Twelve weeks against 1–3 prioritized use cases, with the entire five-pillar framework operationalized. Governance, champion training, tool selection, deployment, measurement, and handoff to in-house ownership.",
    deliverables: [
      "AI Governance Framework (acceptable use, data classification, vendor terms)",
      "Policy documents formally adopted by the organization",
      "Vendor selection + contract review (Claude / GPT / Bedrock / Azure)",
      "Pilot deployment for 1–3 use cases",
      "Champion network — 15–25 internal champions trained",
      "Measurement dashboard + adoption KPIs",
      "Manager and end-user training kits",
      "30-day post-engagement check-in",
    ],
    idealCustomer:
      "Organizations committed to deployment — typically post-audit, but also entry-point for orgs with clear internal signals (an executive sponsor, a defined use case, and budget authority).",
    whyItWorks:
      "Most engagements at this tier are either Big-4 ($200k+) or unmoored AI consultants without operator scars. This is mid-market priced, operator-led, with measurable adoption as the success metric — anchored on the framework that hit 83% adoption in a regulated workforce.",
    upsellPath:
      "→ Governance Retainer ($3–8k/mo) OR new-use-case engagement after first deployment",
    commonQuestions: [
      {
        q: "Why does the price range matter so much?",
        a: "Use-case complexity, organization size, and regulatory burden. A 50-person tech startup with one use case is the lower end. A 250-person healthcare org with three use cases plus a HIPAA wrap is the upper end.",
      },
      {
        q: "Do you write code, or just consult?",
        a: "I write code when it's the right tool. For most engagements that means custom internal-tool builds or configuration of existing platforms (Claude, ChatGPT Enterprise, Microsoft Copilot). The portfolio on this site is real.",
      },
      {
        q: "What about ongoing support after the 90 days?",
        a: "Most clients move to a monthly governance retainer. Some bring it in-house using the champion network. Both are good outcomes — the work is succession-planned from day one.",
      },
    ],
  },
  {
    id: "ai-governance-retainer",
    tier: "core",
    name: "AI Governance & New-Use-Case Retainer",
    tagline: "Senior eyes on every AI decision, every week.",
    format: "monthly-retainer",
    price: "$3,000 – $8,000 / month",
    duration: "12-month minimum",
    description:
      "Ongoing oversight for organizations that have deployed and need senior governance + new-use-case scoping. The recurring-revenue layer beneath the project work, and the way most clients keep us connected after the 90-day engagement closes.",
    deliverables: [
      "Weekly async governance review",
      "Monthly leadership update + KPI review",
      "Quarterly new-use-case prioritization session",
      "Vendor / contract review as triggered",
      "Policy updates as the regulatory landscape moves",
      "Champion-network office hours (monthly)",
      "First-responder availability on AI-related incidents",
    ],
    idealCustomer:
      "Post-engagement implementation customers OR organizations with internal AI capacity that need senior judgment on call.",
    whyItWorks:
      "The AI equivalent of a fractional CISO or fractional General Counsel — senior judgment available on retainer at SMB-affordable pricing. The right pattern for organizations where AI is now critical infrastructure but doesn't justify a full-time AI lead.",
    upsellPath:
      "→ Larger retainer for orgs adding new use-cases OR transition to full-time AI lead recruitment",
    commonQuestions: [
      {
        q: "What's the difference between the $3k and $8k tiers?",
        a: "Coverage hours and SLA. $3k is ~5 hrs/mo of senior time + asynchronous review. $8k is ~15 hrs/mo + a guaranteed same-day response on flagged issues.",
      },
      {
        q: "Can we cancel?",
        a: "Yes, on 60 days notice after the 12-month initial term. The 12-month minimum is because governance work doesn't show value in the first 90 days — it shows value the first time it prevents an incident.",
      },
    ],
  },
  {
    id: "ai-policy-hipaa-sprint",
    tier: "specialty",
    name: "AI Policy & HIPAA-Compliance Sprint",
    tagline: "Your AI policy + HIPAA framework, written in three weeks.",
    format: "fixed-fee",
    price: "$25,000",
    duration: "3 weeks",
    description:
      "A specialized engagement for healthcare organizations — FQHCs, hospitals, multi-site clinics — where compliance is the bottleneck blocking AI adoption. The deliverable is the framework MNHC's compliance counsel reviewed and approved, customized to your environment.",
    deliverables: [
      "AI Acceptable Use Policy (HIPAA-compliant)",
      "Data classification framework",
      "BAA review template + vendor checklist",
      "Compliance officer briefing deck",
      "Staff training kit (general use + role-specific)",
      "Annual review schedule + governance cadence",
    ],
    idealCustomer:
      "FQHCs, hospitals, and multi-site clinics (100–1,000 staff) where the compliance team is currently saying 'no' to AI experiments because they've never seen a defensible deployment template.",
    whyItWorks:
      "Healthcare IT consultancies charge $50k+ for similar work without LLM-specific deployment experience. This is the only available product anchored on a measured HIPAA-clean adoption case — meaning your compliance team can call mine and verify it actually works.",
    upsellPath:
      "→ 90-Day Implementation OR Governance Retainer post-policy adoption",
    commonQuestions: [
      {
        q: "Will this stand up to a HIPAA audit?",
        a: "The MNHC version has. Yours will be customized to your environment, vendor stack, and risk posture — but the bones are the same.",
      },
      {
        q: "Can we use this with any AI vendor?",
        a: "Yes. The framework is model-agnostic; it covers Claude, GPT, Azure OpenAI, Bedrock, and the major vertical-AI vendors.",
      },
    ],
  },
  {
    id: "ai-champion-training",
    tier: "specialty",
    name: "AI Champion Training Cohort",
    tagline: "Train 15–25 of your people to lead the rollout.",
    format: "cohort",
    price: "$15,000 – $50,000 per cohort",
    duration: "6 weeks",
    description:
      "A 6-week cohort program training internal AI champions — the staff who will own org-wide adoption. Modeled on the manager-training playbook that contributed to the MNHC 83% adoption number, adapted for AI specifically.",
    deliverables: [
      "Six live 2-hour sessions (delivered live, not recorded-only)",
      "Async coursework + reading list",
      "Practical assignments tied to your actual use cases",
      "Capstone presentation + rollout plan",
      "12-month champion network access",
      "Org-specific customization session (1 hour)",
    ],
    idealCustomer:
      "Organizations that have decided to deploy AI and need to build internal capacity. Typically 100–500 EE with 15–30 mid-level managers or functional leads.",
    whyItWorks:
      "Most AI training products are generic Coursera-style content. This is operator-delivered, cohort-paced, customized to your actual use cases — drawn from the playbook that hit 83% adoption in a workforce of 240.",
    upsellPath: "→ Governance Retainer for ongoing post-cohort support",
    commonQuestions: [
      {
        q: "Why a cohort and not async-only?",
        a: "The peer cohort effect is most of the value. Async-only training has < 20% completion rates. Cohort completion is > 85%.",
      },
      {
        q: "Can we run this with our own facilitator?",
        a: "Yes — license-only versions available at the lower price tier ($15k). Live-delivered versions are $35–50k.",
      },
    ],
  },
  {
    id: "vertical-ai-tool-build",
    tier: "premium",
    name: "Vertical AI Tool Build",
    tagline: "Your custom internal AI tool, shipped in 60 days.",
    format: "build",
    price: "$35,000 – $90,000 build + $1,000–$3,000/mo maintenance",
    duration: "60 days build + ongoing maintenance",
    description:
      "Custom-built internal AI tool for a workflow that doesn't exist off-the-shelf — credentialing tracker, intake triage, contract summarizer, performance review draft, compliance dashboard. Next.js + Supabase + Claude or GPT under the hood. Deployed on your infrastructure.",
    deliverables: [
      "Working tool deployed on your infrastructure",
      "Source code + full documentation",
      "Training for in-house IT to maintain",
      "1-year maintenance retainer included",
      "Architecture diagrams + governance integration",
      "Security review + threat model",
    ],
    idealCustomer:
      "Organizations with a specific workflow that generalist AI tools don't fit, where building beats buying. Especially healthcare, multi-site service businesses, and regulated industries.",
    whyItWorks:
      "Most SMBs can't afford custom-built AI tools — agencies charge $200k+ for similar scope. This is the operator-built, narrower-scoped version at half the price, designed by someone who's lived the operating workflow you're automating.",
    upsellPath:
      "→ Productized v2 of the same tool sold horizontally to other organizations (revenue share possible)",
    commonQuestions: [
      {
        q: "Who owns the code?",
        a: "You do. I retain rights to the framework abstractions — the patterns that don't include your business logic.",
      },
      {
        q: "Can this become a SaaS product later?",
        a: "Sometimes — if the tool turns out to be valuable horizontally. We discuss revenue-share terms at that point. FQHC Talent Exchange started this way.",
      },
    ],
  },
  {
    id: "fractional-chief-ai-officer",
    tier: "premium",
    name: "Fractional Chief AI Officer",
    tagline: "Board-level AI leadership at SMB-affordable cost.",
    format: "monthly-retainer",
    price: "$10,000 – $20,000 / month",
    duration: "12-month minimum",
    description:
      "C-level fractional AI leader for organizations (200–1,000 EE) that have decided AI is strategic but aren't ready to hire a full-time Chief AI Officer. 20–40 hours per month at the C-table. The premium tier of the retainer line.",
    deliverables: [
      "Functional membership on executive leadership team",
      "Quarterly board reports",
      "Annual AI roadmap + OKRs",
      "Vendor / partnership management",
      "Org-wide AI policy ownership",
      "Champion network leadership",
      "External partnerships (Anthropic, OpenAI, AWS) maintained on your behalf",
    ],
    idealCustomer:
      "Mid-market organizations (200–1,000 EE) where the CEO/COO is over-stretched and AI is mission-critical. Especially healthcare systems, financial services firms, and PE-portfolio companies.",
    whyItWorks:
      "A full-time CAIO costs $300–500k all-in. Fractional is 50–60% cheaper with senior judgment — same playbook as fractional CFO applied to AI. And unlike a search, you're working with someone whose credibility is already established.",
    upsellPath:
      "→ Permanent CAIO recruitment (placement fee) when org outgrows fractional",
    commonQuestions: [
      {
        q: "How is this different from the governance retainer?",
        a: "The retainer is oversight; this is leadership. The CAIO sets strategy, signs vendor contracts, presents to the board. The retainer reviews and advises.",
      },
      {
        q: "Can you serve more than one org as CAIO?",
        a: "Yes — up to three concurrent, with disclosure. No two from the same competitive set.",
      },
    ],
  },
];

export const SERVICE_TIER_LABELS: Record<ServiceTier, string> = {
  entry: "Entry",
  core: "Core",
  premium: "Premium",
  specialty: "Specialty",
};

export const SERVICE_FORMAT_LABELS: Record<ServiceFormat, string> = {
  "fixed-fee": "Fixed-fee project",
  "monthly-retainer": "Monthly retainer",
  cohort: "Cohort program",
  build: "Build",
};

export function servicesByTier(tier: ServiceTier): Service[] {
  return services.filter((s) => s.tier === tier);
}
