/**
 * Catalog of every site Jonathan has deployed to Vercel.
 * The JMW OS dashboard is the hub that links out to each of them.
 */

export type SiteStatus = "live" | "demo" | "wip" | "internal";

export type Site = {
  slug: string;
  name: string;
  /** What it actually is, in one short phrase. */
  description: string;
  /** Vercel project name (may differ from slug). Used to build the URL. */
  vercelProject: string;
  /** Override the auto-generated `<vercelProject>.vercel.app` URL. */
  url?: string;
  /** Tailwind hex used for the card accent. */
  hex: string;
  /** Optional emoji indicator. */
  emoji: string;
  status: SiteStatus;
  /** Optional tags for filtering. */
  tags: string[];
};

const v = (project: string) => `https://${project}.vercel.app`;

export const SITES: Site[] = [
  {
    slug: "business-ideas",
    name: "Business Ideas",
    description:
      "Acquisition pipeline across Portugal, Bay Area, Brazil. Deal scoring, SBA profile, lifestyle synergy.",
    vercelProject: "business-ideas",
    hex: "#f43f5e",
    emoji: "💼",
    status: "live",
    tags: ["acquisition", "finance", "personal"],
  },
  {
    slug: "conference-intel",
    name: "Conference Intel",
    description:
      "Speaker + sponsor Venn marketplace, competitive watch on Vendelux/Talkadot/SpeakUp.",
    vercelProject: "conference-intel",
    hex: "#8b5cf6",
    emoji: "🎤",
    status: "live",
    tags: ["sales", "marketplace"],
  },
  {
    slug: "ca-employment-law",
    name: "CA Employment Law",
    description:
      "California employment law case assessment + legislative tracker. 200+ news items, 83 leg entries.",
    vercelProject: "ca-employment-law",
    hex: "#f59e0b",
    emoji: "⚖️",
    status: "live",
    tags: ["legal", "intel"],
  },
  {
    slug: "fqhc-talent-exchange",
    name: "FQHC Talent Exchange",
    description:
      "Section 504 sprint, FQHC news intel, advocacy tracker. WCAG 2.1AA enforcement countdown.",
    vercelProject: "fqhc-talent-exchange",
    hex: "#0d9488",
    emoji: "🩺",
    status: "live",
    tags: ["healthcare", "advocacy"],
  },
  {
    slug: "criminal-defense",
    name: "Criminal Defense Talent Exchange",
    description: "PD jobs board, AB 690 tracking, market intel for CA public defenders.",
    vercelProject: "criminal-defense-talent-exchange",
    hex: "#6366f1",
    emoji: "🏛️",
    status: "live",
    tags: ["legal", "jobs"],
  },
  {
    slug: "parent-network",
    name: "Berkeley Parent Network",
    description:
      "Bay Area family resources, BUSD data, BANANAS childcare, Mother's Day & summer camp guides.",
    vercelProject: "bpn-berkeley",
    hex: "#10b981",
    emoji: "👶",
    status: "live",
    tags: ["community", "berkeley"],
  },
  {
    slug: "mnhc-website",
    name: "MNHC Website",
    description:
      "Mission Neighborhood Health Center website rebuild for WCAG 2.1 AA compliance (May 2026 deadline).",
    vercelProject: "mnhc-website",
    hex: "#0ea5e9",
    emoji: "🏥",
    status: "wip",
    tags: ["client", "healthcare"],
  },
  {
    slug: "kaylie-caap-onboarding",
    name: "Kaylie CAAP Onboarding",
    description:
      "21-page leadership onboarding PWA for new CAAP Director — 90-day framework, RJA program.",
    vercelProject: "kaylie-caap-onboarding",
    hex: "#ec4899",
    emoji: "🎓",
    status: "live",
    tags: ["client", "onboarding"],
  },
  {
    slug: "pss-training-app",
    name: "PSS Training Hub",
    description:
      "Interactive Next.js training app for MNHC PSS staff. Modules, quizzes, completion tracking.",
    vercelProject: "pss-training-app",
    hex: "#14b8a6",
    emoji: "📚",
    status: "live",
    tags: ["client", "training"],
  },
  {
    slug: "berkeley-bungalow-map",
    name: "Berkeley Bungalow Map",
    description:
      "Interactive map of Berkeley craftsman bungalows. Geo + photo + architectural intel.",
    vercelProject: "berkeley-bungalow-map",
    hex: "#a16207",
    emoji: "🏘️",
    status: "live",
    tags: ["real-estate", "berkeley"],
  },
  {
    slug: "nasim-realty",
    name: "Nasim Realty",
    description: "Real estate site for Nasim. Listings, market insights, contact.",
    vercelProject: "nasim-realty",
    hex: "#d97706",
    emoji: "🏡",
    status: "live",
    tags: ["client", "real-estate"],
  },
  {
    slug: "vaca-valley-cc",
    name: "Vaca Valley CC",
    description:
      "Vaca Valley country club / event venue site. Pat's beer/wine/liquor + TrackMan moat.",
    vercelProject: "vaca-valley-cc",
    hex: "#65a30d",
    emoji: "⛳",
    status: "demo",
    tags: ["hospitality"],
  },
  {
    slug: "bright-world-solutions",
    name: "Bright World Solutions",
    description: "Bright World Solutions consulting / services landing site.",
    vercelProject: "bright-world-solutions",
    hex: "#facc15",
    emoji: "☀️",
    status: "live",
    tags: ["client"],
  },
  {
    slug: "mollie-tb-demo",
    name: "Mollie TB Demo",
    description: "Interactive Mollie demo / pitch artifact.",
    vercelProject: "mollie-tb-demo",
    hex: "#06b6d4",
    emoji: "🎬",
    status: "demo",
    tags: ["demo"],
  },
  {
    slug: "jmw-projects",
    name: "JMW Projects (Public)",
    description: "Public-facing portfolio shell.",
    vercelProject: "jmw-projects",
    hex: "#a855f7",
    emoji: "🗂️",
    status: "wip",
    tags: ["portfolio"],
  },
];

export function siteUrl(s: Site): string {
  return s.url ?? v(s.vercelProject);
}

export function getSitesByStatus(status: SiteStatus): Site[] {
  return SITES.filter((s) => s.status === status);
}
