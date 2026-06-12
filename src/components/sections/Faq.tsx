"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-label="Frequently asked questions" className="relative py-28 sm:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading label="FAQ" title="Answers, before you ask" />
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted">
            Something we missed? Write to us — a real person answers within one
            business day.
          </p>
        </div>

        <div>
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question} className="border-t border-line last:border-b">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span
                      className={cn(
                        "font-display text-lg font-medium tracking-tight transition-colors duration-300 sm:text-xl",
                        open ? "text-mint" : "group-hover:text-mint"
                      )}
                    >
                      {faq.question}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted transition-transform duration-400",
                        open && "rotate-45 text-mint"
                      )}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-7 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
