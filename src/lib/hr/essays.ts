export type Essay = {
  slug: string;
  title: string;
  dek: string; // Subhead / summary
  publishedAt: string; // ISO date
  readingMinutes: number;
  tags: string[];
  // Inline-rendered or planned
  status: "live" | "draft" | "planned";
};

export const essays: Essay[] = [
  {
    slug: "why-most-smb-ai-pilots-die",
    title: "Why most SMB AI pilots die in month four",
    dek: "An anatomy of the three patterns that account for ~80% of SMB AI failures, and what to do about each.",
    publishedAt: "2026-05-13",
    readingMinutes: 9,
    tags: ["adoption", "smb", "pilot-purgatory"],
    status: "live",
  },
  {
    slug: "five-pillar-adoption",
    title: "The five-pillar adoption framework, with worked examples",
    dek: "Governance, champions, use-case ladder, measurement, judgment — what each pillar looks like in a healthcare org, a startup, and a distributed nonprofit.",
    publishedAt: "2026-05-13",
    readingMinutes: 14,
    tags: ["framework", "adoption", "deployment"],
    status: "live",
  },
  {
    slug: "compliance-without-the-freeze",
    title: "Drafting AI policy without freezing your compliance team",
    dek: "How to sequence governance + tools so that compliance becomes co-author of the rollout, not gatekeeper of it.",
    publishedAt: "2026-05-13",
    readingMinutes: 11,
    tags: ["governance", "compliance", "hipaa"],
    status: "live",
  },
  {
    slug: "measuring-adoption-honestly",
    title: "Measuring adoption honestly",
    dek: "License utilization is the metric you report when you don't want to know the answer. Here's what to track instead.",
    publishedAt: "2026-05-13",
    readingMinutes: 7,
    tags: ["measurement", "metrics"],
    status: "live",
  },
  {
    slug: "fractional-caio",
    title: "What a fractional Chief AI Officer actually does",
    dek: "The day-to-day of the role, who it works for, when it doesn't.",
    publishedAt: "2026-05-13",
    readingMinutes: 8,
    tags: ["fractional", "leadership"],
    status: "live",
  },
  {
    slug: "operator-vs-consultant",
    title: "Why operators make better AI partners than consultants",
    dek: "Career consultants stopped operating five years ago. Their advice is theoretical. Here's what that costs you.",
    publishedAt: "2026-05-13",
    readingMinutes: 6,
    tags: ["positioning", "operator"],
    status: "live",
  },
];

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}
