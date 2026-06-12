"use client";

import { motion } from "framer-motion";
import { Gem, Users, Zap, Infinity as InfinityIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { REASONS } from "@/lib/data";

const ICONS = [Gem, Users, Zap, InfinityIcon];

export default function WhyUs() {
  return (
    <section id="studio" aria-label="Why choose us" className="relative py-28 sm:py-40">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              label="Why Kinetiq"
              title="Most agencies build software. We build conviction."
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-md text-base leading-relaxed text-muted"
            >
              The difference between a vendor and a partner is who loses sleep
              over your launch. We measure ourselves on the outcomes your board
              cares about — not billable hours.
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {REASONS.map((reason, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-line bg-elevated p-8 transition-colors duration-500 hover:border-mint/30"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-iris/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-base">
                      <Icon className="h-5 w-5 text-mint" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
