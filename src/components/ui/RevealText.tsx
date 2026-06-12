"use client";

import { useRef, useEffect, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** seconds before the reveal begins once triggered */
  delay?: number;
  /** play immediately on mount instead of on scroll */
  immediate?: boolean;
};

/**
 * Splits text into word-level masks and slides each word up into view.
 * Word-level (not char) keeps line wrapping natural and screen readers happy
 * via an aria-label on the wrapper.
 */
export default function RevealText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  immediate = false,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const words = el.querySelectorAll<HTMLElement>(".reveal-word");
      gsap.set(words, { yPercent: 110 });
      gsap.to(words, {
        yPercent: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.045,
        delay,
        ...(immediate
          ? {}
          : {
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }),
      });
    });

    return () => mm.revert();
  }, [delay, immediate]);

  return (
    <Tag ref={ref} aria-label={text} className={cn(className)}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]"
        >
          <span className="reveal-word inline-block will-change-transform">
            {word}
            {" "}
          </span>
        </span>
      ))}
    </Tag>
  );
}
