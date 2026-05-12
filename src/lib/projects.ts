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
  featured?: boolean;
  private?: boolean;
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
  {
    id: "jmw-os",
    name: "JMW OS",
    tagline: "Personal operating system",
    description:
      "Single pane of glass over every active project. Reads each repo's daily-reports, surfaces today's brief, cross-project patterns, and a hub to all 15 deployed sites. Built on Claude Code, password-gated, shipped to Vercel.",
    status: "live",
    category: "Personal tools",
    stack: ["Next.js 16", "React 19", "Tailwind 4", "Claude Code"],
    href: "https://command-center-tau-two.vercel.app",
    featured: true,
    private: true,
  },
  {
    id: "business-ideas",
    name: "JMW Dealflow",
    tagline: "Acquisition intelligence",
    description:
      "Pipeline, lender readiness, and SBA 7(a) profile in one dashboard. Track every listing on the path to a cash-flowing close.",
    status: "building",
    category: "Personal tools",
    stack: ["Next.js 16", "React 19", "Tailwind 4"],
    href: "https://business-ideas.vercel.app",
    featured: true,
    private: true,
  },
  {
    id: "fqhc-talent-exchange",
    name: "FQHC Talent Exchange",
    tagline: "Healthcare staffing marketplace",
    description:
      "Two-sided marketplace connecting Federally Qualified Health Centers with clinicians for short-term and locum coverage.",
    status: "building",
    category: "Marketplace",
    stack: ["Next.js", "Supabase", "shadcn/ui"],
    featured: true,
  },
  {
    id: "criminal-defense-talent-exchange",
    name: "Criminal Defense Talent Exchange",
    tagline: "Legal staffing platform",
    description:
      "Talent network for criminal defense firms — coverage attorneys, paralegals, and investigators matched by jurisdiction.",
    status: "research",
    category: "Marketplace",
    featured: true,
    private: true,
  },
  {
    id: "mnhc-website",
    name: "MNHC Website",
    tagline: "Community health center site",
    description:
      "Modern public-facing site for a community health center with clear service navigation and patient resources.",
    status: "live",
    category: "Client work",
    href: "https://mnhc.org",
  },
  {
    id: "nasim-realty",
    name: "Nasim Realty",
    tagline: "Real estate brand site",
    description:
      "Boutique real estate brand site — listings, neighborhoods, and agent positioning for the Bay Area market.",
    status: "live",
    category: "Client work",
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
    id: "parent-network",
    name: "Parent Network",
    tagline: "Local parent connection",
    description:
      "Lightweight directory and event board to help parents in a neighborhood find each other.",
    status: "research",
    category: "Local",
    private: true,
  },
  {
    id: "pss-training-app",
    name: "PSS Training App",
    tagline: "Peer support specialist learning",
    description:
      "Mobile-friendly training tool for peer support specialists with module tracking and reference content.",
    status: "building",
    category: "Education",
    private: true,
  },
  {
    id: "conference-intel",
    name: "Conference Intel",
    tagline: "Industry event research",
    description:
      "Tracker for the conferences, speakers, and themes shaping a target industry — informs deal-flow and outreach.",
    status: "research",
    category: "Personal tools",
    private: true,
  },
];
