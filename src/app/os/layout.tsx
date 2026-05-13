import { SidebarNav } from "@/components/os/sidebar-nav";
import { ThemeToggle } from "@/components/os/theme-toggle";
import { PROJECTS } from "@/lib/os/projects";

export default function OSLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex min-h-screen md:flex-row">
        <SidebarNav projects={PROJECTS} />
        <div className="flex min-h-screen w-full flex-1 flex-col md:pl-0">
          <header className="border-border bg-background/80 sticky top-0 z-10 hidden h-16 items-center justify-end gap-2 border-b px-6 backdrop-blur md:flex">
            <ThemeToggle />
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}
