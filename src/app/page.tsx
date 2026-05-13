import { ArrowRight, BookOpen, Briefcase, Lock, Sparkles } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ProjectCard } from "@/components/project-card";
import { StatStrip } from "@/components/stat-strip";
import { projects } from "@/lib/projects";

const quickLinks = [
  {
    href: "/os",
    eyebrow: "Operator",
    title: "JMW OS",
    description: "Personal operating system. Today’s brief across every project.",
    icon: Sparkles,
    locked: true,
    external: false,
  },
  {
    href: "/research",
    eyebrow: "Read",
    title: "AI & OS Research",
    description: "Field notes on agent frameworks and Personal OS design.",
    icon: BookOpen,
    locked: false,
    external: false,
  },
  {
    href: "https://business-ideas.vercel.app",
    eyebrow: "Workspace",
    title: "Dealflow Studio",
    description: "Acquisition + investment pipeline. Lender readiness, deal scoring.",
    icon: Briefcase,
    locked: false,
    external: true,
  },
];

const featuredCallouts = [
  {
    eyebrow: "Live · Active marketplace",
    title: "FQHC Talent Exchange",
    description:
      "Two-sided marketplace connecting Federally Qualified Health Centers with clinicians for short-term and locum coverage. Active and growing.",
    cta: { href: "https://fqhc-talent-exchange.vercel.app", label: "Visit FQHC Talent" },
  },
  {
    eyebrow: "Launched May 11, 2026",
    title: "MNHC Website",
    description:
      "Full rebuild of mnhc.org — modern, fast, WCAG 2.1 AA compliant. Replaces the prior WordPress site with a Next.js stack and a dramatically better service-navigation experience.",
    cta: { href: "https://www.mnhc.org", label: "Visit mnhc.org" },
  },
];

const principles = [
  {
    quote:
      "Build the smallest version that solves a real problem. Ship before it's pretty.",
    author: "Sequencing",
  },
  {
    quote:
      "Operators who code make the best products. Coders who think like operators ship the right ones.",
    author: "Posture",
  },
  {
    quote:
      "A portfolio isn't a museum. Live projects get attention, research bets get patience, dead ones get killed.",
    author: "Pruning",
  },
];

export default function Home() {
  // Exclude operator-only projects (e.g. JMW OS) from every public render.
  const publicProjects = projects.filter((p) => !p.restricted);
  const featured = publicProjects.filter((p) => p.featured);
  const rest = publicProjects.filter((p) => !p.featured);
  const liveCount = publicProjects.filter((p) => p.status === "live").length;
  const buildingCount = publicProjects.filter((p) => p.status === "building").length;
  const researchCount = publicProjects.filter((p) => p.status === "research").length;

  return (
    <>
      <Hero
        title={
          <>
            <span className="gradient-shimmer">JMW Projects</span> builds tools
            for the most important problems in healthcare, real estate, and
            community.
          </>
        }
        subtitle="The portfolio of Jonathan Malta-Weingard. Based in Berkeley, California."
        primaryCta={{ href: "#projects", label: "See the projects" }}
        secondaryCta={{ href: "#contact", label: "Get in touch" }}
      />

      <section className="border-b border-[var(--border)] bg-[var(--paper)]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {quickLinks.map((q, i) => {
              const Icon = q.icon;
              const linkProps = q.external
                ? { target: "_blank", rel: "noopener noreferrer" as const }
                : {};
              return (
                <FadeIn key={q.title} delay={i * 70}>
                  <Link
                    href={q.href}
                    {...linkProps}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-bright)]/60 hover:shadow-[var(--card-shadow)]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,var(--card-glow),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted-soft)]">
                          {q.eyebrow}
                        </p>
                      </div>
                      {q.locked && (
                        <Lock
                          aria-label="Password protected"
                          className="h-3.5 w-3.5 text-[var(--accent)]"
                        />
                      )}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-[var(--foreground)]">
                      {q.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      {q.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition group-hover:text-[var(--accent-bright)]">
                      Open
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <StatStrip
        stats={[
          { label: "Projects", value: String(projects.length), caption: "Tracked end-to-end" },
          { label: "Live", value: String(liveCount), caption: "Shipping to real users" },
          { label: "Building", value: String(buildingCount), caption: "Active this quarter" },
          { label: "Research", value: String(researchCount), caption: "Scoping next bets" },
        ]}
      />

      <Marquee
        items={[
          { label: "Launched May 11", value: "MNHC Website · mnhc.org rebuild", tone: "live" },
          { label: "Live", value: "FQHC Talent Exchange · clinician coverage", tone: "live" },
          { label: "Now building", value: "CA Employment Law · legislative tracker", tone: "accent" },
          { label: "Now building", value: "PSS Training App · peer support modules", tone: "accent" },
          { label: "Now building", value: "Criminal Defense Talent Exchange", tone: "accent" },
          { label: "Now building", value: "Acquisition + Investment Studio", tone: "accent" },
          { label: "Live", value: "Nasim Realty · Bay Area boutique", tone: "default" },
          { label: "Atlas", value: "Berkeley Bungalow Map · historic homes", tone: "default" },
          { label: "Local", value: "Berkeley Parent Network · family resources", tone: "default" },
        ]}
      />

      <section className="border-b border-[var(--border)] bg-[var(--paper)]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2">
          {featuredCallouts.map((f, i) => (
            <FadeIn key={f.title} delay={i * 80}>
              <Link
                href={f.cta.href}
                className="group relative flex h-full flex-col overflow-hidden bg-[var(--paper)] p-8 transition hover:bg-[var(--surface-warm)]/40 md:p-10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,var(--card-glow),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                  {f.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
                  {f.title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {f.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition group-hover:text-[var(--accent-bright)]">
                  {f.cta.label}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--border-warm)] bg-[var(--surface-warm)]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-[var(--border-warm)] md:grid-cols-3">
          {[
            {
              eyebrow: `Live · ${liveCount}`,
              body: "Products and sites running in the wild, serving real users right now.",
            },
            {
              eyebrow: `Building · ${buildingCount}`,
              body: "Active builds with most of my attention this quarter.",
            },
            {
              eyebrow: `Research · ${researchCount}`,
              body: "Bets I'm scoping before committing the engineering time.",
            },
          ].map((s, i) => (
            <FadeIn key={s.eyebrow} delay={i * 60}>
              <div className="flex h-full flex-col bg-[var(--surface-warm)] p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  {s.eyebrow}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--foreground)] sm:text-base">
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="relative border-b border-[var(--border)] bg-[var(--paper)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,var(--card-glow),transparent_70%)] opacity-30"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
                  What I&apos;m actually working on.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Each project is a focused attempt at one problem. Click into the
                ones that look interesting — most have either a live site or a
                README worth reading.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...featured, ...rest].map((p, i) => (
              <FadeIn key={p.id} delay={i * 50}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="border-b border-[var(--border-warm)] bg-[var(--surface-warm)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                  Research · May 2026
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
                    AI agents &amp; personal operating systems.
                  </span>
                </h2>
              </div>
              <div className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                <p>
                  Field notes on the 2026 agent-framework gold rush. Compared
                  Hermes Agent, Hyperagent (Airtable), Claude Code, OpenClaw,
                  Argent OS, and Claude Flow. Concluded I already had ~80% of a
                  Personal OS &mdash; and shipped the surface instead of
                  installing a framework.
                </p>
                <p className="mt-4">
                  <Link
                    href="/research"
                    className="inline-flex items-center gap-1.5 font-medium text-[var(--accent)] transition hover:text-[var(--accent-bright)]"
                  >
                    Read the full research
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="about" className="border-b border-[var(--border-cool)] bg-[var(--surface-cool)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                  About
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
                    Operator who codes. Coder who thinks like an operator.
                  </span>
                </h2>
              </div>
              <div className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                <p>
                  I build small, focused products at the intersection of
                  healthcare, real estate, law, and local community. Lately:
                  acquiring a service business via SBA 7(a) while shipping the
                  tools to make that decision repeatable.
                </p>
                <p className="mt-4">
                  Based in Berkeley, California. Most of these projects are
                  solo-built but the durable ones are shaped by conversation —
                  lawyers, lenders, clinicians, brokers, neighbors.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="writing" className="border-b border-[var(--border-warm)] bg-[var(--surface-warm)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                Principles
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
                  How I decide what to build.
                </span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <FadeIn key={p.quote} delay={i * 80}>
                <figure className="flex h-full flex-col border-t border-[var(--border-warm)] pt-6">
                  <blockquote className="text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-xs text-[var(--muted)]">
                    <span className="font-medium text-[var(--foreground)]">{p.author}</span>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-[var(--border-cool)] bg-[var(--surface-cool)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn>
            <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                  Get in touch
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
                    Have a problem worth solving together?
                  </span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  Healthcare, real estate, marketplaces, acquisition, local
                  community — happy to talk.
                </p>
              </div>
              <form className="flex w-full gap-2">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 rounded-full border border-[var(--border-cool)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-soft)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/15"
                />
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-white"
                >
                  Say hello
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[var(--footer-bg)] text-[var(--footer-text)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_0%,rgba(34,211,196,0.12),transparent_60%),radial-gradient(50%_40%_at_90%_100%,rgba(14,124,117,0.2),transparent_70%)]"
        />
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-10 text-xs text-[var(--footer-muted)]">
          <span>© {new Date().getFullYear()} Jonathan Malta-Weingard</span>
          <span>Berkeley, CA</span>
        </div>
      </footer>
    </>
  );
}
