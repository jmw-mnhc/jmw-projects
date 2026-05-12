type Stat = {
  value: string;
  label: string;
  caption?: string;
};

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="relative border-b border-[#e8e1d0] bg-gradient-to-b from-white via-[#fbfaf3] to-[#f5efe1]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22d3c4]/40 to-transparent"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#e8e1d0] md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative flex flex-col bg-gradient-to-b from-white to-[#fbfaf3] p-6 transition hover:from-[#fafaf6] hover:to-[#f5efe1]"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6f6b54]">
              {s.label}
            </p>
            <p className="mt-2 text-3xl font-medium tabular-nums tracking-tight text-[#0a1419] sm:text-4xl">
              <span className="bg-gradient-to-br from-[#0a5e58] via-[#0e7c75] to-[#22d3c4] bg-clip-text text-transparent">
                {s.value}
              </span>
            </p>
            {s.caption && (
              <p className="mt-1 text-xs text-[#4a5560]">{s.caption}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
