"use client";

import * as React from "react";
import { cn } from "@/lib/os/utils";
import type { ProjectMeta } from "@/lib/os/projects";

export type ActionItem = {
  id: string;
  text: string;
  project?: ProjectMeta;
};

const STORAGE_KEY = "command-center.actions.v1";

type State = Record<string, boolean>;

function loadState(): State {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as State) : {};
  } catch {
    return {};
  }
}

function saveState(state: State) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota
  }
}

export function ActionChecklist({ items }: { items: ActionItem[] }) {
  const [state, setState] = React.useState<State>({});
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  function toggle(id: string) {
    setState((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveState(next);
      return next;
    });
  }

  if (items.length === 0) {
    return (
      <p className="text-muted-foreground text-sm">
        No actions surfaced yet — projects without a report today will not
        contribute items.
      </p>
    );
  }

  const checkedCount = hydrated
    ? items.filter((it) => state[it.id]).length
    : 0;

  return (
    <div className="space-y-3">
      <div className="text-muted-foreground flex items-center justify-between text-xs font-medium">
        <span>
          {checkedCount} of {items.length} done
        </span>
        {checkedCount > 0 && (
          <button
            type="button"
            onClick={() => {
              const reset: State = {};
              for (const it of items) reset[it.id] = false;
              setState((prev) => ({ ...prev, ...reset }));
              saveState({ ...state, ...reset });
            }}
            className="hover:text-foreground underline-offset-2 hover:underline"
          >
            Reset
          </button>
        )}
      </div>
      <ul className="space-y-2">
        {items.map((it) => {
          const checked = !!state[it.id];
          return (
            <li
              key={it.id}
              className={cn(
                "border-border bg-card flex items-start gap-3 rounded-lg border p-3 transition-colors",
                checked && "opacity-60",
              )}
            >
              <button
                type="button"
                role="checkbox"
                aria-checked={checked}
                onClick={() => toggle(it.id)}
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border transition-colors",
                  checked
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground/50",
                )}
              >
                {checked && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3"
                    aria-hidden
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
              <div className="min-w-0 flex-1">
                {it.project && (
                  <span
                    className="mb-1 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide"
                    style={{ color: it.project.hex }}
                  >
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: it.project.hex }}
                    />
                    {it.project.shortName}
                  </span>
                )}
                <p
                  className={cn(
                    "text-sm leading-snug",
                    checked && "line-through",
                  )}
                >
                  {it.text}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
