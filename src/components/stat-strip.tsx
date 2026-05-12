import { AnimatedCounter } from "@/components/animated-counter";

type Stat = {
  value: string;
  label: string;
  caption?: string;
};

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="relative border-b border-[var(--border)] bg-[var(--paper)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/40 to-transparent"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[var(--border)] md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative flex flex-col bg-[var(--paper)] p-6 transition hover:bg-[var(--surface-warm)]/40"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted-soft)]">
              {s.label}
            </p>
            <p className="mt-2 text-3xl font-medium tabular-nums tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-br from-[var(--accent-deep)] via-[var(--accent)] to-[var(--accent-bright)] bg-clip-text text-transparent">
                <AnimatedCounter value={s.value} />
              </span>
            </p>
            {s.caption && (
              <p className="mt-1 text-xs text-[var(--muted)]">{s.caption}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
