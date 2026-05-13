import { LandingFull } from "@/components/landing-full";

export const metadata = {
  title: "JMW Projects — Private (rich) view",
  description:
    "Full public-facing landing — hero, projects, principles, contact.",
};

// The rich landing as a standalone preview route. Reachable from the
// operator console's view-switcher, or by direct URL.
export default function FullView() {
  return <LandingFull />;
}
