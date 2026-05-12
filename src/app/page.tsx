import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { Hero } from "@/components/hero";
import { StatStrip } from "@/components/stat-strip";
import {
  STATUS_LABELS,
  projects,
  type Project,
} from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-bright)]/60 hover:shadow-[var(--card-shadow)]">
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,var(--card-glow),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--accent-bright)] to-transparent transition-all duration-500 group-hover:w-3/4"
      />
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-medium text-[var(--foreground)]">
          {project.name}
        </h3>
        <span className="text-[11px] uppercase tracking-wider text-[var(--muted)]">
          {STATUS_LABELS[project.status]}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-[var(--accent)]">
        {project.tagline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>
      {project.stack && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--border)] bg-[var(--surface-warm)] px-2 py-0.5 text-[10px] text-[var(--muted)]"
            >
              {s}
            </span>
          ))}
        </div>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition group-hover:text-[var(--accent-bright)]">
        {project.href ? "Visit" : "Read more"}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </article>
  );
  return project.href ? (
    <Link href={project.href} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

const featuredCallouts = [
  {
    eyebrow: "Building",
    title: "Introducing JMW Dealflow",
    description:
      "An independent acquisition intelligence workspace. Pipeline, lender readiness, and SBA 7(a) profile in one place.",
    cta: { href: "https://business-ideas-virid.vercel.app", label: "Open the workspace" },
  },
  {
    eyebrow: "In flight · 2026",
    title: "FQHC Talent Exchange",
    description:
      "Marketplace pairing community health centers with clinicians for short-term and locum coverage.",
    cta: { href: "#projects", label: "See the project" },
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
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const liveCount = projects.filter((p) => p.status === "live").length;
  const buildingCount = projects.filter((p) => p.status === "building").length;
  const researchCount = projects.filter((p) => p.status === "research").length;

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

      <StatStrip
        stats={[
          { label: "Projects", value: String(projects.length), caption: "Tracked end-to-end" },
          { label: "Live", value: String(liveCount), caption: "Shipping to real users" },
          { label: "Building", value: String(buildingCount), caption: "Active this quarter" },
          { label: "Research", value: String(researchCount), caption: "Scoping next bets" },
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
