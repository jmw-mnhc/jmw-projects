"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/hr", label: "HR" },
  { href: "/research", label: "Research" },
  { href: "/#about", label: "About" },
];

const JMW_OS_URL = "/os";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Only operators who have already authenticated into /os see the pill.
  const [showOS, setShowOS] = useState(false);

  // The OS routes get their own chrome (OS sidebar). Hide the portfolio nav.
  if (pathname?.startsWith("/os")) return null;

  useEffect(() => {
    try {
      setShowOS(localStorage.getItem("jmwos_unlocked") === "1");
    } catch {
      // ignore
    }
  }, []);

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
          {showOS && (
            <Link
              href={JMW_OS_URL}
              className="hidden items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-sm font-medium text-[var(--accent)] transition hover:bg-[var(--accent)]/15 sm:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5" />
              JMW OS
            </Link>
          )}
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
          {showOS && (
            <Link
              href={JMW_OS_URL}
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-medium text-[var(--accent)]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              JMW OS
            </Link>
          )}
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
