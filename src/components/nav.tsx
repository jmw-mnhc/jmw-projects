import Link from "next/link";
import { Mark } from "@/components/mark";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#writing", label: "Writing" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" aria-label="JMW Projects" className="flex items-center">
          <Mark className="h-7 w-7" />
        </Link>
        <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn-primary inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
