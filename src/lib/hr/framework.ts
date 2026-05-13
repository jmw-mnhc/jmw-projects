export type Pillar = {
  number: string;
  name: string;
  oneLiner: string;
  // The full explanation
  description: string;
  // The failure mode this pillar prevents
  failureMode: string;
  // Concrete artifacts that come out of this pillar
  artifacts: string[];
  // What signal tells you the pillar is in place
  successSignal: string;
  // A common mistake practitioners make
  commonMistake: string;
};

export const pillars: Pillar[] = [
  {
    number: "1",
    name: "Governance before tools",
    oneLiner:
      "Acceptable-use policy, data-classification framework, and BAA-quality vendor terms drafted and adopted before the first license is purchased.",
    description:
      "Most AI deployments start by buying a license and then drafting a policy. That sequence guarantees a six-month back-and-forth between IT, legal, and compliance — during which the org's enthusiasm decays. The right sequence is the reverse: governance first, tools second. The compliance team becomes co-author of the policy, not gatekeeper of the rollout.",
    failureMode:
      "The compliance freeze. Legal won't approve the vendor; security won't approve the data flow; nothing ships.",
    artifacts: [
      "AI Acceptable Use Policy (written, board-adopted)",
      "Data classification framework (public, internal, confidential, restricted)",
      "Vendor evaluation checklist with BAA-quality terms",
      "Incident response playbook",
      "Annual policy review schedule",
    ],
    successSignal:
      "The compliance team is recommending vendors instead of blocking them.",
    commonMistake:
      "Drafting the policy in isolation from operations. The policy must be informed by the actual use cases — otherwise it's either too restrictive (nothing fits) or too permissive (every edge case is uncovered).",
  },
  {
    number: "2",
    name: "Champion network, not training",
    oneLiner:
      "A 15–25-person cross-functional champion cohort trained in cohort-format, who translate AI for their teams in their own language.",
    description:
      "Traditional rollouts use top-down training: HR records a video, sends a link, expects adoption. Adoption rates are typically 15–25%. The pattern that works: identify a champion in every department, train them as a cohort, give them ongoing access to each other and to senior leadership. Champions then translate AI for their team. This is worth 5–10× more than top-down training.",
    failureMode:
      "Training fatigue. Staff sit through an hour-long video, never open the tool, the program dies quietly.",
    artifacts: [
      "Champion charter (responsibilities, time commitment, recognition)",
      "Cohort curriculum (6 weeks of live + async)",
      "Office hours cadence (weekly or biweekly)",
      "Champion → department playbook templates",
      "Recognition and incentive structure",
    ],
    successSignal:
      "Champions are getting questions from peers about AI use cases — and answering them.",
    commonMistake:
      "Picking champions by seniority instead of curiosity. The best champions are mid-level operators with real influence in their team, not VPs.",
  },
  {
    number: "3",
    name: "Use-case ladder, not feature dump",
    oneLiner:
      "Start with the three highest-ROI / lowest-risk use cases per department. Sequence the rollout. Don't unveil the full surface area on day one.",
    description:
      "When you give a workforce access to a general-purpose LLM, the typical response is paralysis. The tool can do anything; therefore staff use it for nothing. The solution is to ladder the rollout: start with 1–3 use cases per department that have clear ROI, low regulatory risk, and high time-savings. Get those wins documented. Then add the next layer. Adoption compounds.",
    failureMode:
      "The general-purpose freeze. Tool is deployed, staff are told 'use AI to be more productive,' nothing happens.",
    artifacts: [
      "Department-by-department use-case inventory",
      "Effort + ROI scoring per use case",
      "30 / 90 / 180-day rollout sequence",
      "Use-case-specific prompt templates",
      "Per-use-case success metrics",
    ],
    successSignal:
      "Staff are asking for the next use case before you offer it.",
    commonMistake:
      "Choosing the most innovative use cases instead of the highest-ROI ones. Boring use cases (drafting, summarizing, formatting) produce most of the early wins.",
  },
  {
    number: "4",
    name: "Measurement from day one",
    oneLiner:
      "Weekly active users, prompts-per-user, time-saved estimates, error-flag rates. If you can't measure adoption, you can't fix what's broken — and you can't prove ROI to the board.",
    description:
      "Most AI deployments report 'adoption' as license utilization — meaning, did people log in. That number is meaningless. Real adoption is weekly active users producing artifacts, with time-savings documented and error rates monitored. Instrument from day one so you can see the rollout in real time, intervene where it's stalling, and present hard numbers to the board.",
    failureMode:
      "The 'is it working?' fog. Six months in, the CEO asks how the AI program is going. Nobody has data.",
    artifacts: [
      "Adoption dashboard (WAU, prompts/user, retention cohorts)",
      "Time-savings tracking methodology (sampled, not estimated)",
      "Error-flag review cadence",
      "Use-case-specific KPIs",
      "Quarterly board report template",
    ],
    successSignal:
      "Leadership knows adoption rates by department without asking.",
    commonMistake:
      "Tracking license utilization instead of weekly active users. Logging in once a month is not adoption.",
  },
  {
    number: "5",
    name: "Senior judgment on call",
    oneLiner:
      "Someone with director-level authority needs to be reachable for the daily exceptions: a new vendor, a policy edge case, a sensitive employee question.",
    description:
      "AI deployment failures almost always trace to a missing decision-maker. When the front-desk staff member asks 'can I use this for patient communication?' and there's no one to answer, the program freezes. The pillar requires someone with the authority to say 'yes, here's how' or 'no, here's why' on short notice. This is where fractional Chief AI Officer arrangements add real value — the role exists precisely because most SMBs can't justify a full-time hire but desperately need the decisions made.",
    failureMode:
      "The decision vacuum. Every edge case escalates to the CEO; the CEO is too busy; the program stalls.",
    artifacts: [
      "Decision-rights matrix (who decides what)",
      "Escalation playbook",
      "Daily / weekly leadership review cadence",
      "Vendor-evaluation rubric (delegated authority)",
      "Incident response protocol",
    ],
    successSignal:
      "Edge cases get decided in <24 hours, consistently.",
    commonMistake:
      "Delegating the role to a junior team member. Champions execute; senior judgment decides. They're different roles.",
  },
];

export type FrameworkStage =
  | "diagnose"
  | "design"
  | "deploy"
  | "measure"
  | "scale";

export type Stage = {
  id: FrameworkStage;
  name: string;
  duration: string;
  description: string;
  outcomes: string[];
};

export const stages: Stage[] = [
  {
    id: "diagnose",
    name: "Diagnose",
    duration: "Days 1–7",
    description:
      "Five-pillar maturity scoring. Interviews with 5–8 stakeholders. Current-state assessment across tech, data, policy, and talent.",
    outcomes: [
      "Maturity score per pillar",
      "Three prioritized use cases",
      "Roadmap draft for leadership review",
    ],
  },
  {
    id: "design",
    name: "Design",
    duration: "Weeks 2–4",
    description:
      "Governance framework drafted with compliance + legal. Vendor selection. Champion identification. Measurement framework defined.",
    outcomes: [
      "Adopted AI Acceptable Use Policy",
      "Selected vendor + signed contract",
      "Champion cohort identified",
      "Measurement dashboard live",
    ],
  },
  {
    id: "deploy",
    name: "Deploy",
    duration: "Weeks 5–10",
    description:
      "Champion training cohort. Pilot deployment to 1–3 use cases. Manager training. End-user enablement. Office hours stood up.",
    outcomes: [
      "Champions trained and active",
      "Pilot use cases in production",
      "Manager + end-user training complete",
      "Office hours cadence established",
    ],
  },
  {
    id: "measure",
    name: "Measure",
    duration: "Weeks 11–12",
    description:
      "Adoption metrics surfaced. Use-case ROI documented. Issue patterns identified. Leadership review.",
    outcomes: [
      "Adoption dashboard reporting WAU + prompts/user",
      "Time-savings methodology in place",
      "First quarterly board report",
      "Issue patterns identified",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    duration: "Ongoing (month 4+)",
    description:
      "New use cases added. Champion network expanded. Governance retainer manages day-to-day. The pattern compounds.",
    outcomes: [
      "Next layer of use cases live",
      "Champion network self-sustaining",
      "Governance retainer in place",
      "Adoption above 70% by month 9 (target)",
    ],
  },
];
