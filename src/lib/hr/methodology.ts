export type Principle = {
  id: string;
  number: string;
  name: string;
  oneLiner: string;
  description: string;
  // The bad pattern this principle replaces
  insteadOf: string;
};

export const principles: Principle[] = [
  {
    id: "operator-first",
    number: "1",
    name: "Operator-first, consultant-second",
    oneLiner:
      "I'm an operator who consults. The credibility is sitting in the chair while you're trying to sell from a deck.",
    description:
      "Almost every AI consulting firm has the same problem: their senior people stopped operating five or more years ago. Their advice is theoretical. They've never had to convince a skeptical clinician, defuse a compliance officer's veto, or look a frontline staff member in the eye and explain why a new tool is worth their attention. I have. The 83% adoption number isn't case-study material — it's the daily work.",
    insteadOf:
      "Career consultants who haven't operated in 5+ years and can't tell you what actually happened in week 3 of a rollout.",
  },
  {
    id: "fixed-fee-fixed-scope",
    number: "2",
    name: "Fixed-fee, fixed-scope, fixed-timeline",
    oneLiner:
      "If the engagement takes longer or proves harder than scoped, that's my problem. Not yours.",
    description:
      "Hourly billing rewards the consultant for being slow. Fixed-fee rewards the consultant for being efficient. Every engagement on the catalog is fixed-fee with named deliverables and named timelines. If a deliverable proves harder than scoped, I absorb it. The only exception is when scope formally changes — in which case the change order is in writing.",
    insteadOf:
      "Open-ended hourly engagements that quietly bill against retainers without producing artifacts.",
  },
  {
    id: "measurement-from-day-one",
    number: "3",
    name: "Measurement from day one — or the engagement doesn't ship",
    oneLiner:
      "If we can't measure adoption, ROI, and impact, we can't defend the program in the next budget cycle. Period.",
    description:
      "Every engagement starts with a measurement plan. Weekly active users. Prompts per user. Time-saved estimates. Error-flag rates. Use-case-specific KPIs. The dashboard goes live by week 3, not month 6. This is the single biggest difference between programs that survive a budget review and programs that quietly die.",
    insteadOf:
      "AI programs reported as 'license utilization' (meaningless) or 'pilots in flight' (vibes).",
  },
  {
    id: "succession-planned",
    number: "4",
    name: "Succession-planned from day one",
    oneLiner:
      "Every engagement is designed to be ownable by your internal team by the end. The handoff is the deliverable.",
    description:
      "The pattern most consulting firms run is dependency-extending: the engagement ends, the firm leaves, the program degrades within six months, and the firm gets called back at a premium. I'm not that firm. Every engagement trains your champion network, ships your playbooks, and ends with a written handoff to the team that will own the work. The natural successor relationship is a governance retainer — light-touch, on-call — not a permanent dependency.",
    insteadOf:
      "Dependency-extending engagements where the consultancy is forever indispensable.",
  },
  {
    id: "vendor-agnostic",
    number: "5",
    name: "Vendor-agnostic on the implementation, partner-anchored on the channel",
    oneLiner:
      "I have structured relationships with Anthropic, OpenAI, AWS, and Microsoft. I have no allegiance to any of them on your behalf.",
    description:
      "Most AI consultancies have a preferred model and a preferred cloud. They tend to recommend whatever maximizes their referral fee. I have partner-program relationships with all four major providers — meaning your procurement path is the right one for your environment, not the one that pays me best. A healthcare customer running Azure gets the same five-pillar adoption playbook as a Bay Area startup running Claude directly. The framework is portable; the implementation is bespoke.",
    insteadOf:
      "Single-vendor consultancies that recommend whatever ships their commission.",
  },
  {
    id: "no-cargo-cult",
    number: "6",
    name: "No cargo-cult AI",
    oneLiner:
      "If 'wait six months' is the right answer for your org, the audit will say so. Honestly.",
    description:
      "Not every organization is ready for AI deployment. Some have governance debt that needs to be cleared first. Some have a use case that the underlying technology doesn't actually solve. Some are still resolving more fundamental operational problems. The audit will tell you which one you are. Sometimes the most valuable engagement output is a roadmap that says 'pause AI, address X, revisit in two quarters.' That answer doesn't pay me as well, but it's the right one.",
    insteadOf:
      "Engagements that sell AI to organizations that should be solving something else first.",
  },
];
