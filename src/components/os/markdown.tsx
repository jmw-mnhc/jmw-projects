"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/os/utils";

export function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        "prose-headings:scroll-mt-20 prose-headings:font-semibold",
        "prose-h1:text-2xl prose-h2:text-xl prose-h2:mt-8 prose-h3:text-base prose-h3:mt-6",
        "prose-a:text-foreground prose-a:underline-offset-4 prose-a:decoration-muted-foreground/40 hover:prose-a:decoration-foreground",
        "prose-table:text-sm prose-table:border prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-th:bg-muted",
        "prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:text-[0.85em] prose-code:before:content-none prose-code:after:content-none",
        "prose-blockquote:border-l-foreground/20 prose-blockquote:not-italic",
        "prose-hr:border-border",
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
