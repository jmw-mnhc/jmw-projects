import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeScript } from "@/components/theme-script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JMW Projects — Jonathan Malta-Weingard",
  description:
    "Tools for the most important problems in healthcare, real estate, and community. The portfolio of Jonathan Malta-Weingard, based in Berkeley, California.",
  openGraph: {
    title: "JMW Projects",
    description:
      "Tools for the most important problems in healthcare, real estate, and community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <ScrollProgress />
        <Nav />
        {children}
      </body>
    </html>
  );
}
