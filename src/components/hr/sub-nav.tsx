import Link from "next/link";

export type HrPath =
  | "/hr"
  | "/hr/framework"
  | "/hr/case-study"
  | "/hr/services"
  | "/hr/partnerships"
  | "/hr/methodology"
  | "/hr/thinking"
  | "/hr/faq"
  | "/hr/about"
  | "/hr/tools/roi"
  | "/hr/tools/readiness";

const SECTIONS: { href: HrPath; label: string }[] = [
  { href: "/hr", label: "Overview" },
  { href: "/hr/framework", label: "Framework" },
  { href: "/hr/case-study", label: "Case studies" },
  { href: "/hr/services", label: "Services" },
  { href: "/hr/partnerships", label: "Partner stack" },
  { href: "/hr/methodology", label: "Methodology" },
  { href: "/hr/thinking", label: "Thinking" },
  { href: "/hr/faq", label: "FAQ" },
  { href: "/hr/about", label: "About JMW" },
];

export function HrSubNav({ active }: { active: HrPath }) {
  return (
    <nav
      aria-label="HR section"
      className="not-prose mt-8 -mx-6 overflow-x-auto border-b border-[var(--border)]"
    >
      <ul className="flex min-w-max gap-1 px-6 pb-px text-sm">
        {SECTIONS.map((s) => {
          const isActive = s.href === active;
          return (
            <li key={s.href}>
              <Link
                href={s.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex whitespace-nowrap rounded-t-lg px-3 py-2 transition ${
                  isActive
                    ? "border-x border-t border-[var(--border)] bg-[var(--background)] font-medium text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {s.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
