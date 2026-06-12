"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

/**
 * Desktop: the section pins and the six steps travel horizontally as you
 * scroll — vertical scroll becomes lateral storytelling. Tablet/mobile and
 * reduced-motion fall back to a clean vertical stack.
 */
export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const distance = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // progress bar synced to the horizontal travel
        gsap.to("#process-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 1,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="Our process"
      className="relative overflow-hidden bg-elevated py-28 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-0"
    >
      <div className="container-x lg:pt-24">
        <SectionHeading
          label="Process"
          title="A process built for certainty"
          className="mb-12 max-w-2xl lg:mb-16"
        />
      </div>

      <div
        ref={trackRef}
        className="container-x flex flex-col gap-6 will-change-transform lg:w-max lg:max-w-none lg:flex-row lg:gap-8 lg:pr-[40vw]"
      >
        {PROCESS.map((step) => (
          <article
            key={step.index}
            className="group relative flex flex-col justify-between rounded-2xl border border-line bg-base/60 p-8 transition-colors duration-500 hover:border-iris/40 sm:p-10 lg:h-[420px] lg:w-[400px] lg:shrink-0"
          >
            <div>
              <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-mint">
                {step.index}
              </span>
              <h3 className="mt-6 font-display text-3xl font-medium tracking-tight">
                {step.title}
              </h3>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted lg:mt-0">
              {step.description}
            </p>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-iris to-mint transition-transform duration-500 origin-left group-hover:scale-x-100"
            />
          </article>
        ))}
      </div>

      <div className="container-x mt-12 hidden lg:block lg:pb-24">
        <div className="h-px w-full bg-line">
          <div
            id="process-progress"
            className="h-px origin-left scale-x-0 bg-gradient-to-r from-iris to-mint"
          />
        </div>
      </div>
    </section>
  );
}
