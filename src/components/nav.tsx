import Link from "next/link";
import { Mark } from "@/components/mark";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#writing", label: "Writing" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-[#e8e1d0] bg-[#fafaf6]/85 backdrop-blur supports-[backdrop-filter]:bg-[#fafaf6]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" aria-label="JMW Projects" className="flex items-center">
          <Mark className="h-7 w-7" />
        </Link>
        <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm text-[#4a5560] transition hover:text-[#0a1419]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="#contact"
          className="btn-primary inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
