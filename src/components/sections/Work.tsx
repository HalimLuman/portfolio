"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import FluidFrame from "@/components/ui/FluidFrame";
import { PROJECTS, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const visualRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax: the artwork travels slower than the card frame.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        innerRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <article
      className={cn(
        "group grid items-center gap-8 lg:grid-cols-12 lg:gap-12",
        flip && "lg:[&>*:first-child]:order-2"
      )}
    >
      <Link
        href="/contact"
        data-cursor="View"
        aria-label={`${project.title} case study`}
        className="block lg:col-span-7"
      >
        {/* the visual unfurls from the corner nearest its text column */}
        <FluidFrame
          origin={flip ? "right" : "left"}
          className="relative aspect-[4/3] sm:aspect-[16/10]"
        >
          <div
            ref={visualRef}
            className="relative h-full w-full overflow-hidden rounded-2xl border border-line bg-elevated"
          >
            <div
              ref={innerRef}
              className="absolute -inset-y-[12%] inset-x-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            >
              {/* Original generative artwork: gradient field + ring + grid */}
              <div className={cn("absolute inset-0 bg-gradient-to-br", project.hue)} />
              <div
                className="absolute inset-0 opacity-[0.13]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-60 transition-transform duration-700 group-hover:rotate-45"
                style={{ borderColor: project.accent, borderWidth: 1.5 }}
              />
              <div
                className="absolute top-1/2 left-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{ background: project.accent, opacity: 0.35 }}
              />
              <span
                aria-hidden="true"
                className="absolute right-[8%] bottom-[8%] font-display text-7xl font-bold tracking-tighter text-white/10 sm:text-8xl"
              >
                {project.index}
              </span>
            </div>
          </div>
        </FluidFrame>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-5"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-mint uppercase">
          {project.category}
        </p>
        <h3 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>
        <p className="mt-6 font-mono text-xs text-faint">{project.year}</p>
      </motion.div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" aria-label="Featured work" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6 sm:mb-24">
          <SectionHeading
            label="Featured Work"
            title="Selected projects, real outcomes"
            className="max-w-2xl"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            A few of the products we&apos;ve designed, engineered, and shipped
            alongside our partners.
          </p>
        </div>

        <div className="flex flex-col gap-20 sm:gap-32">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.index} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
