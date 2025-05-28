import React from "react";
import { cn } from "@/lib/utils";

type BlockquoteProps = {
  children?: React.ReactNode;
  className?: string;
};

const Blockquote = ({ children, className }: BlockquoteProps) => {
  return (
    <div
      className={cn(
        "relative rounded-lg border-l-8 border-l-[var(--primary)] " +
          "bg-[var(--muted)] py-5 pl-16 pr-5 font-sans text-lg italic leading-relaxed text-[var(--muted-foreground)] " +
          "before:absolute before:left-3 before:top-3 before:font-serif before:text-6xl before:text-[var(--primary)] before:content-['“']",
        className
      )}
    >
      {children}
    </div>
  );
};

const BlockquoteAuthor = ({ children, className }: BlockquoteProps) => {
  return (
    <p
      className={cn(
        "mt-5 pr-4 text-right font-bold not-italic text-[var(--foreground)]",
        className
      )}
    >
      {children}
    </p>
  );
};

export { Blockquote, BlockquoteAuthor };
