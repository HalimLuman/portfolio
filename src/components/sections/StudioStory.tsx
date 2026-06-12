"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { STUDIO_TIMELINE } from "@/lib/data";

/** The studio's origin story alongside a year-by-year timeline. */
export default function StudioStory() {
  return (
    <section aria-label="Studio story" className="relative py-28 sm:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading label="The Story" title="Built by people who got tired of agencies" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex max-w-md flex-col gap-5 text-sm leading-relaxed text-muted sm:text-base"
          >
            <p>
              Kinetiq started in 2015 with a simple frustration: agency work
              was staffed by juniors, managed by telephone, and measured in
              hours instead of outcomes. We thought the inverse should exist —
              a studio where every person on the project has shipped for a
              decade, and where the team you meet on the first call is the
              team that does the work.
            </p>
            <p>
              A decade later that is still the whole playbook. No sales layer,
              no bait-and-switch staffing, no growth-at-all-costs headcount.
              Just a deliberately small group of senior designers and
              engineers who would rather keep a client for five years than win
              five new ones.
            </p>
          </motion.div>
        </div>

        <ol>
          {STUDIO_TIMELINE.map((milestone, i) => (
            <motion.li
              key={milestone.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[80px_1fr] gap-6 border-t border-line py-8 last:border-b sm:gap-10"
            >
              <p className="font-display text-2xl font-medium tracking-tight text-faint transition-colors duration-300 group-hover:text-mint sm:text-3xl">
                {milestone.year}
              </p>
              <p className="self-center text-sm leading-relaxed text-muted sm:text-base">
                {milestone.event}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
