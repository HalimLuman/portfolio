"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealText from "@/components/ui/RevealText";
import Marquee from "@/components/ui/Marquee";
import { preloaderState } from "@/lib/preloader-state";

gsap.registerPlugin(ScrollTrigger);

const KEYWORDS = [
  "Web Design",
  "SaaS Development",
  "Mobile Apps",
  "UI/UX Design",
  "Dedicated Teams",
  "Custom Software",
  "Technical Consulting",
];

// Preloader takes ~1.65s; hero choreography starts as the curtain lifts.
const PRELOADER_DELAY = 1.8;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // On client-side navigation the preloader no longer plays, so start fast.
  const entryDelay = preloaderState.done ? 0.15 : PRELOADER_DELAY;

  // Depth on exit: content drifts up and fades as the next section arrives.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(contentRef.current, {
        yPercent: -18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 30%",
          scrub: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="Intro"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <div
        ref={contentRef}
        className="container-x relative flex flex-1 flex-col justify-center pt-32 pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay, duration: 0.7, ease: "easeOut" }}
          className="mb-8 font-mono text-xs tracking-[0.35em] text-mint uppercase"
        >
          Digital Product Studio
        </motion.p>

        <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.98] font-medium tracking-tight">
          <RevealText text="We craft digital" immediate delay={entryDelay + 0.1} />
          <RevealText
            text="products that move"
            immediate
            delay={entryDelay + 0.25}
          />
          <span className="relative inline-block">
            <span className="text-gradient">
              <RevealText
                text="people forward."
                immediate
                delay={entryDelay + 0.4}
              />
            </span>
            {/* hand-drawn underline that strokes itself in after the words land */}
            <svg
              aria-hidden="true"
              viewBox="0 0 340 28"
              preserveAspectRatio="none"
              className="absolute -bottom-[0.08em] left-0 h-[0.18em] w-full"
            >
              <motion.path
                d="M6 20 C 70 6, 150 26, 244 12 S 322 8, 334 16"
                fill="none"
                stroke="#ce8946"
                strokeWidth="4"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{
                  delay: entryDelay + 1.2,
                  duration: 1.1,
                  ease: [0.65, 0, 0.35, 1],
                  opacity: { delay: entryDelay + 1.2, duration: 0.25 },
                }}
              />
            </svg>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay + 0.7, duration: 0.8, ease: "easeOut" }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Kinetiq is the technology partner behind ambitious startups, scale-ups,
          and enterprise teams — designing and engineering software people
          actually love to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay + 0.9, duration: 0.8, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-base transition-colors duration-300 hover:bg-mint"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/work"
              className="inline-flex h-14 items-center rounded-full border border-line px-8 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground/40 hover:bg-white/5"
            >
              See our work
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: entryDelay + 1.3, duration: 1 }}
        className="relative border-t border-line py-5"
      >
        <div className="container-x mb-0 flex items-center justify-between">
          <Marquee className="flex-1">
            {KEYWORDS.map((k) => (
              <span key={k} className="flex items-center">
                <span className="px-6 font-mono text-xs tracking-[0.25em] whitespace-nowrap text-muted uppercase">
                  {k}
                </span>
                <span className="h-1 w-1 rounded-full bg-iris" />
              </span>
            ))}
          </Marquee>
          <span className="ml-8 hidden items-center gap-2 font-mono text-xs tracking-widest text-faint uppercase sm:flex">
            Scroll
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
