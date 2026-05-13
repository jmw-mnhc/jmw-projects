"use client";

import { Lock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mark } from "@/components/mark";
import { usePasswordGate } from "@/components/password-gate";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const pathname = usePathname();
  const { unlocked, request, lock } = usePasswordGate();

  // The OS routes get their own chrome (OS sidebar). Hide the portfolio nav.
  if (pathname?.startsWith("/os")) return null;

  return (
    <nav className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" aria-label="JMW Projects" className="flex items-center">
          <Mark className="h-7 w-7" />
        </Link>

        <div className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--paper)]/60 p-1 backdrop-blur">
          <button
            type="button"
            onClick={lock}
            aria-pressed={!unlocked}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              !unlocked
                ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            Demo
          </button>
          <button
            type="button"
            onClick={unlocked ? undefined : request}
            aria-pressed={unlocked}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition ${
              unlocked
                ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {!unlocked && <Lock className="h-3 w-3" />}
            Private
          </button>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
