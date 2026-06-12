"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { TESTIMONIALS } from "@/lib/data";

const AUTO_ADVANCE_MS = 7000;

export default function Testimonials() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const reduced = useReducedMotion();

  const paginate = useCallback((dir: number) => {
    setState(([i]) => [
      (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length,
      dir,
    ]);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => paginate(1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paginate, reduced, index]);

  const t = TESTIMONIALS[index];

  return (
    <section aria-label="Testimonials" className="relative overflow-hidden py-28 sm:py-40">
      {/* ambient glow behind the quote */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/10 blur-[120px]"
      />

      <div className="container-x relative">
        <SectionHeading label="Testimonials" title="Partners, in their own words" align="center" />

        <div className="relative mx-auto mt-16 min-h-[320px] max-w-4xl sm:mt-20 sm:min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <blockquote className="font-display text-2xl leading-snug font-medium tracking-tight text-balance sm:text-3xl lg:text-4xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-10">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <MagneticButton>
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-foreground/40 hover:bg-white/5"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          </MagneticButton>

          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setState([i, i > index ? 1 : -1])}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === index ? "w-8 bg-mint" : "w-1.5 bg-faint hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <MagneticButton>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-foreground/40 hover:bg-white/5"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
