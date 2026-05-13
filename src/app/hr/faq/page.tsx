import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { HrSubNav } from "@/components/hr/sub-nav";
import { FAQ_CATEGORIES, faqs, faqsByCategory, type Faq } from "@/lib/hr/faqs";

export const metadata = {
  title: "FAQ · HR — JMW Projects",
  description:
    "The questions most prospects ask before signing: scope, pricing, engagement structure, vendor neutrality, credentials, logistics.",
};

const CATEGORY_ORDER: Faq["category"][] = [
  "scope",
  "pricing",
  "engagement",
  "vendor",
  "credentials",
  "logistics",
];

export default function FaqPage() {
  return (
    <>
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16 text-[var(--foreground)]">
        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
            FAQ
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-br from-[var(--foreground)] via-[var(--accent-deep)] to-[var(--accent)] bg-clip-text text-transparent">
              The questions prospects actually ask
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Organized by category. {faqs.length} questions covering scope,
            pricing, engagement structure, vendor neutrality, credentials, and
            logistics. If your question isn&rsquo;t here, ask — and I&rsquo;ll
            add the answer.
          </p>
        </header>

        <HrSubNav active="/hr/faq" />

        {CATEGORY_ORDER.map((cat) => {
          const items = faqsByCategory(cat);
          if (items.length === 0) return null;
          return (
            <section key={cat} className="mt-12 space-y-4">
              <h2 className="text-2xl font-medium tracking-tight">
                {FAQ_CATEGORIES[cat]}
              </h2>
              <div className="space-y-3">
                {items.map((f) => (
                  <details
                    key={f.id}
                    className="group rounded-xl border border-[var(--border)] bg-[var(--paper)] p-5"
                  >
                    <summary className="cursor-pointer list-none text-base font-medium text-[var(--foreground)]">
                      <span className="transition group-open:text-[var(--accent)]">
                        {f.q}
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          );
        })}

        <footer className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
          <span>
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Ask anything not covered here:{" "}
            <a
              href="mailto:jweingard@gmail.com?subject=HR%20practice%20question"
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              jweingard@gmail.com
            </a>
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
