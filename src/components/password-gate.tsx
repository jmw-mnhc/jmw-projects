"use client";

import { Lock, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const STORAGE_KEY = "jmw-projects-unlocked";
const COOKIE_NAME = "jmwp_unlocked";
const PASSWORD = "jmwprojects";

function setCookie() {
  // 7-day cookie shared with the proxy that gates /os.
  document.cookie = `${COOKIE_NAME}=${PASSWORD}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
}

function clearCookie() {
  document.cookie = `${COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
}

type PasswordGateValue = {
  unlocked: boolean;
  request: () => void;
  lock: () => void;
};

const PasswordGateContext = createContext<PasswordGateValue>({
  unlocked: false,
  request: () => {},
  lock: () => {},
});

export function usePasswordGate() {
  return useContext(PasswordGateContext);
}

export function PasswordGateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const fromSession = sessionStorage.getItem(STORAGE_KEY) === "true";
      const fromCookie = document.cookie
        .split("; ")
        .some((c) => c === `${COOKIE_NAME}=${PASSWORD}`);
      if (fromSession || fromCookie) {
        setUnlocked(true);
        if (fromSession && !fromCookie) setCookie();
        return;
      }
      // Auto-open the modal when bounced back from /os via ?unlock=1.
      const params = new URLSearchParams(window.location.search);
      if (params.get("unlock") === "1") {
        setOpen(true);
        params.delete("unlock");
        const qs = params.toString();
        const next = window.location.pathname + (qs ? `?${qs}` : "");
        window.history.replaceState({}, "", next);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  const request = useCallback(() => {
    if (!unlocked) setOpen(true);
  }, [unlocked]);

  const lock = useCallback(() => {
    setUnlocked(false);
    setOpen(false);
    setValue("");
    setError(false);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      clearCookie();
    } catch {}
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      setUnlocked(true);
      setOpen(false);
      setError(false);
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
        setCookie();
      } catch {}
    } else {
      setError(true);
    }
  };

  return (
    <PasswordGateContext.Provider value={{ unlocked, request, lock }}>
      {children}
      {open && !unlocked && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="password-gate-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-8 shadow-2xl">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_60%_at_50%_0%,var(--card-glow),transparent_70%)] opacity-100"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -top-px left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--accent-bright)] to-transparent"
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--paper)]/60 text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-warm)] text-[var(--accent)]">
                <Lock className="h-4 w-4" />
              </span>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent-deep)] dark:text-[var(--accent-bright)]">
                Private portfolio
              </p>
              <h2
                id="password-gate-title"
                className="mt-2 text-2xl font-medium tracking-tight text-[var(--foreground)]"
              >
                Enter access code
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Most of these projects are work-in-progress private builds.
                Enter the access code to explore the full portfolio.
              </p>
              <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
                <input
                  ref={inputRef}
                  type="password"
                  autoComplete="off"
                  placeholder="Access code"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    if (error) setError(false);
                  }}
                  aria-invalid={error}
                  className="w-full rounded-full border border-[var(--border)] bg-[var(--surface-warm)] px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-soft)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/15"
                />
                {error && (
                  <p className="text-xs text-rose-400">
                    Incorrect code. Try again.
                  </p>
                )}
                <button
                  type="submit"
                  className="btn-primary mt-1 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white"
                >
                  Unlock portfolio
                </button>
              </form>
              <p className="mt-5 text-[11px] text-[var(--muted-soft)]">
                Public links (FQHC Talent Exchange, MNHC, CA Employment Law,
                PSS Training) remain accessible without a code.
              </p>
            </div>
          </div>
        </div>
      )}
    </PasswordGateContext.Provider>
  );
}
