import Link from "next/link";
import { ArrowRight, Clock, Sparkles, Tag } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import { essays } from "@/lib/hr/essays";

export const metadata = {
  title: "Thinking · HR — JMW Projects",
  description:
    "Long-form essays from the practice: why most SMB AI pilots die, the five-pillar adoption framework, what a fractional Chief AI Officer actually does.",
};

export default function ThinkingIndex() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            Thinking · Field notes
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              Long-form writing from the practice
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            What I&rsquo;m thinking about, in long form. Mostly drawn from
            engagements, sometimes from the broader market. The point of
            writing publicly is the same as the point of writing internally:
            you don&rsquo;t actually know what you think until you write it
            down.
          </p>
        </header>

        <HrSubNav active="/hr/thinking" />

        <section className="mt-12 space-y-4">
          {essays.map((e) => (
            <Link
              key={e.slug}
              href={`/hr/thinking/${e.slug}`}
              className="group block rounded-xl border border-[var(--border)] bg-[var(--paper)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--surface-warm)]/40"
            >
              <div className="flex flex-wrap items-baseline gap-3 text-[11px] text-[var(--muted-soft)]">
                <span>{e.publishedAt}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {e.readingMinutes} min read
                </span>
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1 rounded-full bg-[var(--accent)]/10 px-2 py-0.5 text-[10px] font-medium text-[var(--accent)]"
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mt-2 text-xl font-medium text-[var(--foreground)] transition group-hover:text-[var(--accent)]">
                {e.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {e.dek}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] transition group-hover:translate-x-0.5">
                Read
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            New essays roughly biweekly
          </span>
          <Link
            href="/hr"
            className="inline-flex items-center gap-1.5 transition hover:text-[var(--accent)]"
          >
            HR hub
          </Link>
        </footer>
      </article>
    </>
  );
}
