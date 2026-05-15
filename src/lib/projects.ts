export type ProjectStatus = "live" | "building" | "research" | "paused";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  category: string;
  stack?: string[];
  href?: string;
  /** Launch date label, e.g. "May 11, 2026" — shown on live projects */
  launched?: string;
  /** Optional before/after comparison URL (e.g. WordPress archive) */
  compareHref?: string;
  /** Comparison link label */
  compareLabel?: string;
  featured?: boolean;
  private?: boolean;
  /** Hide from the public portfolio render entirely (operator-only) */
  restricted?: boolean;
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  live: "Live",
  building: "Building",
  research: "Research",
  paused: "Paused",
};

export const STATUS_STYLES: Record<ProjectStatus, string> = {
  live: "bg-emerald-400/10 text-emerald-200 ring-emerald-400/30",
  building: "bg-blue-400/10 text-blue-200 ring-blue-400/30",
  research: "bg-amber-400/10 text-amber-200 ring-amber-400/30",
  paused: "bg-zinc-400/10 text-zinc-300 ring-zinc-400/30",
};

export const projects: Project[] = [
  // === LIVE & ACTIVE ===
  {
    id: "fqhc-talent-exchange",
    name: "FQHC Talent Exchange",
    tagline: "Healthcare staffing marketplace",
    description:
      "Two-sided marketplace connecting Federally Qualified Health Centers with clinicians for short-term and locum coverage. Live and growing.",
    status: "live",
    category: "Marketplace",
    stack: ["Next.js 16", "Supabase", "shadcn/ui"],
    href: "https://fqhc-talent-exchange.vercel.app",
    featured: true,
  },
  {
    id: "mnhc-website",
    name: "MNHC Website",
    tagline: "Community health center site",
    description:
      "Full rebuild of mnhc.org — modern, fast, WCAG 2.1 AA compliant. Replaces the prior WordPress site with a Next.js stack, dramatically better service navigation, and patient resources.",
    status: "live",
    category: "Client work",
    stack: ["Next.js 16", "Tailwind 4", "Accessibility"],
    href: "https://www.mnhc.org",
    launched: "May 11, 2026",
    // Wayback Machine snapshot from March 9, 2026 — before the Next.js rebuild went live.
    compareHref: "https://web.archive.org/web/20260309102526/https://www.mnhc.org/",
    compareLabel: "See old WordPress site (March 2026)",
    featured: true,
  },

  // === IN DEVELOPMENT ===
  {
    id: "ca-employment-law",
    name: "CA Employment Law",
    tagline: "Case assessment + legislative tracker",
    description:
      "California employment-law platform: case-assessment tool, attorney resources, and a live legislative tracker that monitors 200+ news items and 80+ legislative entries.",
    status: "building",
    category: "Legal tech",
    stack: ["Next.js 16", "Supabase", "Tailwind 4"],
    href: "https://ca-employment-law.vercel.app",
    featured: true,
    private: true,
  },
  {
    id: "pss-training-app",
    name: "PSS Training App",
    tagline: "Peer support specialist learning",
    description:
      "Interactive training PWA for MNHC peer-support staff. Modules, quizzes, and completion tracking. Built mobile-first for use in the field.",
    status: "building",
    category: "Education",
    stack: ["Next.js 16", "Tailwind 4"],
    href: "https://pss-training-app.vercel.app",
    featured: true,
    private: true,
  },
  {
    id: "criminal-defense-talent-exchange",
    name: "Criminal Defense Talent Exchange",
    tagline: "Legal staffing platform",
    description:
      "Talent network for criminal-defense firms — coverage attorneys, paralegals, and investigators matched by jurisdiction. AB 690 + market intelligence built in.",
    status: "building",
    category: "Marketplace",
    stack: ["Next.js 16", "Supabase"],
    href: "https://criminal-defense-talent-exchange.vercel.app",
    featured: true,
    private: true,
  },
  {
    id: "business-ideas",
    name: "Acquisition + Investment Studio",
    tagline: "Deal flow + lifestyle synergy",
    description:
      "Personal acquisition studio. Pipeline tracking across Portugal, Bay Area, and Brazil; SBA 7(a) readiness; lender profiles; lifestyle synergy scoring; and a Berkeley mixed-use track.",
    status: "building",
    category: "Personal studio",
    stack: ["Next.js 16", "React 19", "Tailwind 4"],
    href: "https://business-ideas-virid.vercel.app",
    featured: true,
    private: true,
  },

  // === REST ===
  {
    id: "nasim-realty",
    name: "Nasim Realty",
    tagline: "Real estate brand site",
    description:
      "Boutique real estate brand site — listings, neighborhoods, and agent positioning for the Bay Area market.",
    status: "live",
    category: "Client work",
    href: "https://nasim-realty.vercel.app",
    private: true,
  },
  {
    id: "berkeley-bungalow-map",
    name: "Berkeley Bungalow Map",
    tagline: "Architecture atlas",
    description:
      "Interactive map of Berkeley's historic bungalows — style, era, and street-level photography.",
    status: "live",
    category: "Local",
    href: "https://berkeley-bungalow-map.vercel.app",
    private: true,
  },
  {
    id: "parent-network",
    name: "Berkeley Parent Network",
    tagline: "Local parent connection",
    description:
      "Bay Area family resources, BUSD data, BANANAS childcare, Mother's Day and summer camp guides.",
    status: "research",
    category: "Local",
    href: "https://bpn-berkeley.vercel.app",
    private: true,
  },
  {
    id: "global-hr-navigator",
    name: "Global HR Navigator",
    tagline: "Cross-border HR compliance",
    description:
      "Decision support for HR teams managing employment across jurisdictions — policies, leave, and termination playbooks.",
    status: "research",
    category: "B2B",
    private: true,
  },
  {
    id: "conference-intel",
    name: "Conference Intel",
    tagline: "Industry event research",
    description:
      "Speaker + sponsor Venn marketplace; tracker for the conferences, speakers, and themes shaping target industries.",
    status: "research",
    category: "Personal tools",
    href: "https://conference-intel.vercel.app",
    private: true,
  },

  // === OPERATOR-ONLY (hidden from public render) ===
  {
    id: "jmw-os",
    name: "JMW OS",
    tagline: "Personal operating system",
    description:
      "Single pane of glass over every active project. Reads each repo's daily-reports, surfaces today's brief, cross-project patterns, and a hub to all 15 deployed sites. Built on Claude Code.",
    status: "live",
    category: "Personal tools",
    stack: ["Next.js 16", "React 19", "Tailwind 4", "Claude Code"],
    href: "/os",
    private: true,
    restricted: true,
  },
];
