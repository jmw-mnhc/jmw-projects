type MarqueeItem = {
  label: string;
  value: string;
  tone?: "default" | "accent" | "warning" | "live";
};

export function Marquee({ items }: { items: MarqueeItem[] }) {
  const doubled = [...items, ...items];

  return (
    <section
      aria-label="Live deal ticker"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--paper)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--paper)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--paper)] to-transparent"
      />
      <div className="flex w-max items-center gap-10 whitespace-nowrap py-3 text-sm" style={{ animation: "marquee 40s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            {item.tone === "live" && (
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent-bright)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-bright)]" />
              </span>
            )}
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted-soft)]">
              {item.label}
            </span>
            <span
              className={
                item.tone === "accent" || item.tone === "live"
                  ? "font-medium text-[var(--accent)]"
                  : item.tone === "warning"
                    ? "font-medium text-[var(--accent-amber)]"
                    : "font-medium text-[var(--foreground)]"
              }
            >
              {item.value}
            </span>
            <span className="text-[var(--border-strong)]">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
