"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { WEEKLY_RHYTHM, PROCESS_PRINCIPLES } from "@/lib/data";

/**
 * The day-to-day texture of working with the studio: a weekly rhythm
 * timeline plus the operating principles every engagement runs on.
 */
export default function Collaboration() {
  return (
    <section aria-label="How collaboration works" className="relative py-28 sm:py-40">
      <div className="container-x">
        {/* weekly rhythm */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading label="The Rhythm" title="What a week with us feels like" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-sm text-sm leading-relaxed text-muted sm:text-base"
            >
              The six phases tell you where the project is going. This is what
              it feels like along the way — a steady cadence designed so you
              are never guessing about progress.
            </motion.p>
          </div>

          <ol>
            {WEEKLY_RHYTHM.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6%" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group grid gap-2 border-t border-line py-8 last:border-b sm:grid-cols-[140px_1fr] sm:gap-8"
              >
                <p className="font-mono text-xs tracking-[0.2em] text-faint uppercase transition-colors duration-300 group-hover:text-mint">
                  {item.day}
                </p>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* operating principles */}
        <div className="mt-28 sm:mt-40">
          <SectionHeading
            label="Operating Principles"
            title="The rules we never bend"
            className="mb-14 max-w-2xl sm:mb-20"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_PRINCIPLES.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-elevated p-8 transition-colors duration-500 hover:border-mint/30"
              >
                <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {principle.description}
                </p>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-iris to-mint transition-transform duration-500 group-hover:scale-x-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
