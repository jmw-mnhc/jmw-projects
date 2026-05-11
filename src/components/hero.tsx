import Link from "next/link";
import { NodeGraphic } from "@/components/node-graphic";

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  subtitle: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#eceae3]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_30%,rgba(34,211,196,0.16),transparent_60%),radial-gradient(60%_50%_at_15%_85%,rgba(13,139,133,0.1),transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div>
          <h1 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight text-[#0f1419] sm:text-5xl md:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b6470] sm:text-lg">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center rounded-full bg-[#0d8b85] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0a6d68]"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-[#d8d6cf] bg-white px-5 py-2.5 text-sm font-medium text-[#0f1419] transition hover:border-[#0d8b85] hover:text-[#0a6d68]"
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
