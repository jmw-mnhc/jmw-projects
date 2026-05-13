import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Sparkles, Tag } from "lucide-react";
import { Nav } from "@/components/nav";
import { essays, getEssay } from "@/lib/hr/essays";
import { essayBodies } from "@/lib/hr/essay-bodies";

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = getEssay(slug);
  if (!e) return { title: "Essay not found" };
  return {
    title: `${e.title} · Thinking — JMW Projects`,
    description: e.dek,
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = getEssay(slug);
  const body = essayBodies[slug];
  if (!e || !body) notFound();

  return (
    <>
      <Nav />
      <article className="mx-auto max-w-2xl px-6 py-16 text-[var(--foreground)]">
        <Link
          href="/hr/thinking"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All essays
        </Link>

        <header className="mt-8 space-y-4">
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
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              {e.title}
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            {e.dek}
          </p>
        </header>

        <div className="mt-10 space-y-6">
          {body.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-[var(--muted)] sm:text-[17px]"
            >
              {p}
            </p>
          ))}
        </div>

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            More essays at /hr/thinking
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
