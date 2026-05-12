"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Folder,
  Globe,
  Home,
  Info,
  LineChart,
  ListTree,
  Menu,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/os/utils";
import { Button } from "@/components/os/ui/button";
import type { ProjectMeta } from "@/lib/os/projects";

const TOP_LINKS = [
  { href: "/os", label: "Today", icon: Home },
  { href: "/os/timeline", label: "Timeline", icon: ListTree },
  { href: "/os/calendar", label: "Calendar", icon: Calendar },
  { href: "/os/search", label: "Search", icon: Search },
  { href: "/os/trends", label: "Trends", icon: LineChart },
  { href: "/os/sites", label: "Sites", icon: Globe },
  { href: "/os/about", label: "About", icon: Info },
];

export function SidebarNav({ projects }: { projects: ProjectMeta[] }) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [projectsOpen, setProjectsOpen] = React.useState(true);

  // Close mobile drawer on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile menu button */}
      <div className="border-border bg-background sticky top-0 z-40 flex items-center justify-between border-b px-4 py-3 md:hidden">
        <Link href="/" className="text-base font-semibold tracking-tight">
          JMW OS
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </div>

      {/* Sidebar — desktop static, mobile drawer */}
      <aside
        className={cn(
          "border-border bg-card fixed inset-y-0 left-0 z-30 w-64 shrink-0 border-r transition-transform md:sticky md:top-0 md:h-screen md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="border-border hidden h-16 items-center border-b px-6 md:flex">
            <Link href="/os" className="flex items-center gap-2">
              <div className="bg-foreground text-background flex size-7 items-center justify-center rounded-md font-mono text-xs font-bold">
                JM
              </div>
              <span className="text-sm font-semibold tracking-tight">
                JMW OS
              </span>
            </Link>
          </div>

          <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
            <div className="space-y-1">
              {TOP_LINKS.map((link) => {
                const Icon = link.icon;
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      active &&
                        "bg-accent text-accent-foreground",
                    )}
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setProjectsOpen((v) => !v)}
                className="text-muted-foreground hover:text-foreground flex w-full items-center gap-2 px-3 pb-1 text-xs font-semibold uppercase tracking-wide"
              >
                <Folder className="size-3.5" />
                Projects
                <span className="ml-auto opacity-60">
                  {projectsOpen ? "−" : "+"}
                </span>
              </button>
              {projectsOpen && (
                <div className="space-y-0.5">
                  {projects.map((p) => {
                    const href = `/projects/${p.slug}`;
                    const active = pathname === href;
                    return (
                      <Link
                        key={p.slug}
                        href={href}
                        className={cn(
                          "hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          active && "bg-accent text-accent-foreground",
                        )}
                      >
                        <span
                          className="size-2 rounded-full"
                          style={{ backgroundColor: p.hex }}
                          aria-hidden
                        />
                        <span className="truncate">{p.shortName}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          <div className="text-muted-foreground border-border border-t px-6 py-3 text-xs">
            <div>Personal OS. Markdown-driven.</div>
            <div className="mt-0.5">Built on Claude Code.</div>
          </div>
        </div>
      </aside>

      {/* Mobile drawer scrim */}
      {open && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
