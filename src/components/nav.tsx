"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#writing", label: "Writing" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
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
            className="btn-primary hidden items-center rounded-full px-4 py-2 text-sm font-medium text-white sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--paper)]/60 text-[var(--foreground)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          open ? "max-h-96 border-t border-[var(--border)]" : "max-h-0 border-t border-transparent"
        } overflow-hidden transition-[max-height,border-color] duration-300 ease-out`}
      >
        <div className="mx-auto max-w-6xl space-y-1 px-6 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--surface-warm)]/40 hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-1 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white sm:hidden"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
