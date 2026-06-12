"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
};

/**
 * Infinite marquee. Content is duplicated once (second copy aria-hidden)
 * and the track translates -50% on a loop, so the seam is invisible.
 */
export default function Marquee({ children, reverse, className }: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
