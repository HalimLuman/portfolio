"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { CONTACT_STEPS } from "@/lib/data";

/** Sets expectations for what happens after the contact form is sent. */
export default function ContactSteps() {
  return (
    <section
      aria-label="What happens next"
      className="relative border-b border-line py-24 sm:py-32"
    >
      <div className="container-x">
        <SectionHeading
          label="What Happens Next"
          title="No black box, no waiting room"
          className="mb-14 max-w-2xl sm:mb-20"
        />

        <ol className="grid gap-6 lg:grid-cols-3">
          {CONTACT_STEPS.map((step, i) => (
            <motion.li
              key={step.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-elevated p-8 transition-colors duration-500 hover:border-mint/30 sm:p-10"
            >
              <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-mint">
                {step.index}
              </span>
              <h3 className="mt-6 font-display text-xl font-medium tracking-tight sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-iris to-mint transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
