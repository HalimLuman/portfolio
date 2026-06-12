"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ENGAGEMENT_MODELS } from "@/lib/data";

/** Three ways to work with the studio — scoped builds, embedded teams, advisory. */
export default function EngagementModels() {
  return (
    <section
      aria-label="Engagement models"
      className="relative border-y border-line bg-elevated py-28 sm:py-36"
    >
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <SectionHeading
            label="Engagement Models"
            title="Three ways to work with us"
            className="max-w-2xl"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Different problems need different shapes of engagement. All three
            run on the same senior-only, demo-every-week operating system.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {ENGAGEMENT_MODELS.map((model, i) => (
            <motion.article
              key={model.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-base/60 p-8 transition-colors duration-500 hover:border-mint/30 sm:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-iris/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              <div className="relative flex-1">
                <p className="font-mono text-xs tracking-[0.25em] text-mint uppercase">
                  {model.price}
                </p>
                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {model.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {model.description}
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {model.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="relative mt-10 border-t border-line pt-5 font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                Best for · {model.bestFor}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
