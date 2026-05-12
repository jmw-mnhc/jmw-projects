"use client";

import { useEffect, useRef, useState } from "react";

const NUMBER_RE = /(\$?-?\d+(?:[.,]\d+)?)([kKmMbB%]?)/;

export function AnimatedCounter({
  value,
  duration = 1400,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [started, setStarted] = useState(false);

  const match = value.match(NUMBER_RE);
  const numericPart = match?.[1].replace(/[,$]/g, "") ?? null;
  const target = numericPart ? parseFloat(numericPart) : null;
  const prefix = match && value.startsWith("$") ? "$" : "";
  const suffix = match?.[2] ?? "";

  useEffect(() => {
    if (target == null) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      setStarted(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = target * eased;
            const formatted = Number.isInteger(target)
              ? Math.round(current).toLocaleString()
              : current.toFixed(1);
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    setDisplay(`${prefix}0${suffix}`);
    return () => obs.disconnect();
  }, [target, value, duration, prefix, suffix, started]);

  return <span ref={ref}>{display}</span>;
}
