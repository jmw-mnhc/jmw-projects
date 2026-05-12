import Link from "next/link";
import { NodeGraphic } from "@/components/node-graphic";

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  title: React.ReactNode;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_72%_28%,var(--hero-glow-1),transparent_60%),radial-gradient(60%_55%_at_12%_88%,var(--hero-glow-2),transparent_72%),radial-gradient(35%_30%_at_50%_50%,var(--hero-glow-3),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-100"
      >
        <span className="absolute left-[8%] top-[18%] h-1 w-1 rounded-full bg-[var(--accent-bright)] opacity-70" style={{ animation: "drift-1 9s ease-in-out infinite" }} />
        <span className="absolute left-[22%] top-[68%] h-[3px] w-[3px] rounded-full bg-[var(--accent-mint)] opacity-80" style={{ animation: "drift-2 11s ease-in-out infinite" }} />
        <span className="absolute right-[28%] top-[12%] h-[2px] w-[2px] rounded-full bg-[var(--accent-glow)] opacity-70" style={{ animation: "drift-3 12s ease-in-out infinite" }} />
        <span className="absolute right-[8%] top-[78%] h-1 w-1 rounded-full bg-[var(--accent-bright)] opacity-60" style={{ animation: "drift-1 13s ease-in-out infinite" }} />
        <span className="absolute left-[44%] bottom-[8%] h-[2px] w-[2px] rounded-full bg-[var(--accent-mint)] opacity-75" style={{ animation: "drift-2 10s ease-in-out infinite" }} />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div>
          <h1 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="btn-primary inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-white"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--paper)]/70 px-5 py-2.5 text-sm font-medium text-[var(--foreground)] backdrop-blur transition hover:border-[var(--accent)] hover:bg-[var(--paper)] hover:text-[var(--accent)]"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
        <div className="relative mx-auto w-full max-w-[480px]">
          <NodeGraphic className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
