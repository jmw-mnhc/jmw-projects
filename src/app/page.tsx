"use client";

import { LandingDemo } from "@/components/landing-demo";
import { LandingFull } from "@/components/landing-full";
import { usePasswordGate } from "@/components/password-gate";

export default function Home() {
  const { unlocked } = usePasswordGate();
  return unlocked ? <LandingFull /> : <LandingDemo />;
}
