"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES } from "@/lib/data";

/** The cultural rules the studio actually runs on. */
export default function Values() {
  return (
    <section aria-label="Studio values" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <SectionHeading
            label="Values"
            title="What we refuse to compromise"
            className="max-w-2xl"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Not poster slogans — the actual tiebreakers we use when a project
            decision gets hard.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-0 lg:grid-cols-2">
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group border-t border-line py-10 lg:[&:nth-last-child(-n+2)]:border-b max-lg:last:border-b"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
