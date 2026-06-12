"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type FluidFrameProps = {
  children: ReactNode;
  className?: string;
  /** which top corner the frame is pinned to while it unfurls */
  origin?: "left" | "right";
};

/**
 * Scroll-scrubbed reveal that feels like the image is being pulled open from
 * a single point: the clip window starts as a small patch pinned to one
 * corner and unfurls to the full frame, while the artwork inside counter-
 * scales (with a slight settling rotation) from that same point. Scrubbing
 * ties it to the scroll position, so it stretches and relaxes with your hand.
 */
export default function FluidFrame({
  children,
  className,
  origin = "left",
}: FluidFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const left = origin === "left";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: frameRef.current,
          start: "top 94%",
          end: "top 42%",
          scrub: 1,
        },
      });

      tl.fromTo(
        frameRef.current,
        {
          clipPath: left
            ? "inset(0% 76% 62% 0% round 24px)"
            : "inset(0% 0% 62% 76% round 24px)",
        },
        { clipPath: "inset(0% 0% 0% 0% round 16px)", ease: "none", duration: 1 },
        0
      )
        .fromTo(
          scaleRef.current,
          { scale: 1.45, transformOrigin: left ? "0% 0%" : "100% 0%" },
          { scale: 1, ease: "none", duration: 1 },
          0
        )
        // the tilt settles early so edges never peek out of the clip
        .fromTo(
          scaleRef.current,
          { rotate: left ? -3.5 : 3.5 },
          { rotate: 0, ease: "power2.out", duration: 0.7 },
          0
        );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [origin]);

  return (
    <div ref={frameRef} className={cn("will-change-[clip-path]", className)}>
      <div ref={scaleRef} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
