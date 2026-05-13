"use client";

import { LandingDemo } from "@/components/landing-demo";
import { LandingOperator } from "@/components/landing-operator";
import { usePasswordGate } from "@/components/password-gate";

export default function Home() {
  const { unlocked } = usePasswordGate();
  return unlocked ? <LandingOperator /> : <LandingDemo />;
}
