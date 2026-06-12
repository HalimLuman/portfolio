"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value));
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section aria-label="Statistics" className="relative border-y border-line bg-elevated">
      <div ref={ref} className="container-x grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-3 px-2 py-12 sm:px-8 sm:py-16 ${
              i > 0 ? "border-l border-line" : ""
            } ${i === 2 ? "max-lg:border-l-0 max-lg:border-t" : ""} ${
              i === 3 ? "max-lg:border-t" : ""
            }`}
          >
            <p className="font-display text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              <span data-count={stat.value}>{stat.value}</span>
              <span className="text-gradient">{stat.suffix}</span>
            </p>
            <p className="font-mono text-[11px] tracking-[0.25em] text-muted uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
