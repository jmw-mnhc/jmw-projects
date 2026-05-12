"use client";

import { useEffect } from "react";

/**
 * Sets a localStorage flag the first time a successfully-authenticated user
 * lands on any /os route. The portfolio nav reads this flag to decide whether
 * to render the "JMW OS" pill — so the OS link only appears for people who
 * have already unlocked the dashboard.
 */
export function UnlockSetter() {
  useEffect(() => {
    try {
      localStorage.setItem("jmwos_unlocked", "1");
    } catch {
      // ignore (incognito, etc.)
    }
  }, []);
  return null;
}
