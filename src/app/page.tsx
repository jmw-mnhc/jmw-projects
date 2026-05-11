import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/hero";
import {
  STATUS_LABELS,
  projects,
  type Project,
} from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#eceae3] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#22d3c4]/60 hover:shadow-[0_20px_60px_-15px_rgba(34,211,196,0.35)]">
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,rgba(34,211,196,0.18),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-px left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#22d3c4] to-transparent transition-all duration-500 group-hover:w-3/4"
      />
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-medium text-[#0f1419]">
          {project.name}
        </h3>
        <span className="text-[11px] uppercase tracking-wider text-[#5b6470]">
          {STATUS_LABELS[project.status]}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-[#0a6d68]">
        {project.tagline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5b6470]">
        {project.description}
      </p>
      {project.stack && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[#eceae3] bg-[#faf9f6] px-2 py-0.5 text-[10px] text-[#5b6470]"
            >
              {s}
            </span>
          ))}
        </div>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d8b85] transition group-hover:text-[#0a6d68]">
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
    cta: { href: "http://localhost:3012", label: "Open the workspace" },
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

      <section className="border-b border-[#eceae3]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-[#eceae3] md:grid-cols-2">
          {featuredCallouts.map((f) => (
            <Link
              key={f.title}
              href={f.cta.href}
              className="group flex flex-col bg-white p-8 transition hover:bg-[#faf9f6] md:p-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#0a6d68]">
                {f.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-tight text-[#0f1419] sm:text-3xl">
                {f.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5b6470] sm:text-base">
                {f.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#0d8b85] transition group-hover:text-[#0a6d68]">
                {f.cta.label}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-[#eceae3]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-[#eceae3] md:grid-cols-3">
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
          ].map((s) => (
            <div key={s.eyebrow} className="flex flex-col bg-white p-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#5b6470]">
                {s.eyebrow}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#0f1419] sm:text-base">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="border-b border-[#eceae3] bg-[#faf9f6]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0a6d68]">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f1419] sm:text-4xl">
              What I&apos;m actually working on.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5b6470]">
              Each project is a focused attempt at one problem. Click into the
              ones that look interesting — most have either a live site or a
              README worth reading.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...featured, ...rest].map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-[#eceae3]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0a6d68]">
                About
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f1419] sm:text-4xl">
                Operator who codes. Coder who thinks like an operator.
              </h2>
            </div>
            <div className="text-base leading-relaxed text-[#5b6470] sm:text-lg">
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
        </div>
      </section>

      <section id="writing" className="border-b border-[#eceae3]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0a6d68]">
              Principles
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f1419] sm:text-4xl">
              How I decide what to build.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <figure
                key={p.quote}
                className="flex flex-col border-t border-[#eceae3] pt-6"
              >
                <blockquote className="text-base leading-relaxed text-[#0f1419] sm:text-lg">
                  &ldquo;{p.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-xs text-[#5b6470]">
                  <span className="font-medium text-[#0f1419]">{p.author}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-[#eceae3] bg-[#faf9f6]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#0a6d68]">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#0f1419] sm:text-4xl">
                Have a problem worth solving together?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5b6470] sm:text-base">
                Healthcare, real estate, marketplaces, acquisition, local
                community — happy to talk.
              </p>
            </div>
            <form className="flex w-full gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-[#d8d6cf] bg-white px-4 py-2.5 text-sm text-[#0f1419] placeholder:text-[#9aa2ad] focus:border-[#0d8b85] focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-[#0d8b85] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0a6d68]"
              >
                Say hello
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-xs text-[#5b6470]">
          <span>© {new Date().getFullYear()} Jonathan Malta-Weingard</span>
          <span>Berkeley, CA</span>
        </div>
      </footer>
    </>
  );
}
