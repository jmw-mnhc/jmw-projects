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
    <section className="relative isolate overflow-hidden border-b border-[#e8e1d0] bg-gradient-to-b from-[#fafaf6] via-[#fdfcf6] to-[#ffffff]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_72%_28%,rgba(34,211,196,0.2),transparent_60%),radial-gradient(60%_55%_at_12%_88%,rgba(14,124,117,0.12),transparent_72%),radial-gradient(35%_30%_at_50%_50%,rgba(252,211,77,0.05),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div>
          <h1 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight text-[#0a1419] sm:text-5xl md:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a5560] sm:text-lg">
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
                  className="inline-flex items-center rounded-full border border-[#ddd3bb] bg-white/80 px-5 py-2.5 text-sm font-medium text-[#0a1419] backdrop-blur transition hover:border-[#0e7c75] hover:bg-white hover:text-[#0a5e58]"
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
