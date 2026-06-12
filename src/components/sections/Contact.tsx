"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealText from "@/components/ui/RevealText";
import { SITE } from "@/lib/data";

const BUDGETS = ["< $25k", "$25k – $80k", "$80k – $200k", "$200k+"];

const inputClasses =
  "w-full border-b border-line bg-transparent py-4 text-base text-foreground placeholder:text-faint transition-colors duration-300 focus:border-mint focus:outline-none";

export default function Contact() {
  const [budget, setBudget] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Frontend-only for now — swap with a server action or API route when a
  // backend/CRM is connected.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden border-t border-line bg-elevated py-28 sm:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-iris/15 blur-[140px]"
      />

      <div className="container-x relative grid gap-20 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-mint uppercase">
            {"// "}Contact
          </p>
          <h2 className="font-display text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl lg:text-7xl">
            <RevealText text="Have an idea" />
            <RevealText text="worth building?" />
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
            Tell us where you want to go. We&apos;ll reply within one business
            day with honest thoughts on how to get there — and whether
            we&apos;re the right team to take you.
          </p>

          <MagneticButton className="mt-12">
            <a
              href={`mailto:${SITE.email}`}
              data-cursor="Email"
              className="group inline-flex items-center gap-3 font-display text-2xl font-medium tracking-tight text-foreground transition-colors hover:text-mint sm:text-3xl"
            >
              {SITE.email}
              <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </MagneticButton>

          <div className="mt-14 flex gap-12 font-mono text-xs tracking-widest text-muted uppercase">
            <div>
              <p className="text-faint">Response time</p>
              <p className="mt-2 text-foreground">&lt; 24 hours</p>
            </div>
            <div>
              <p className="text-faint">Working across</p>
              <p className="mt-2 text-foreground">EU · US · APAC</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-2xl border border-mint/30 bg-base/60 p-12 text-center"
                role="status"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/15">
                  <Check className="h-7 w-7 text-mint" aria-hidden="true" />
                </span>
                <p className="mt-8 font-display text-2xl font-medium tracking-tight">
                  Message received.
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  Thanks for reaching out — a senior member of the team will be
                  in touch within one business day.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-2"
              >
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name *"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Email address *"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="sr-only">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company"
                    className={inputClasses}
                  />
                </div>

                <fieldset className="mt-8">
                  <legend className="mb-4 font-mono text-xs tracking-[0.25em] text-muted uppercase">
                    Project budget
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        aria-pressed={budget === b}
                        className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${
                          budget === b
                            ? "border-mint bg-mint/10 text-mint"
                            : "border-line text-muted hover:border-foreground/30 hover:text-foreground"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-8">
                  <label htmlFor="message" className="sr-only">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project *"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <MagneticButton className="mt-10 self-start">
                  <button
                    type="submit"
                    className="group inline-flex h-14 items-center gap-2 rounded-full bg-foreground px-9 text-sm font-medium text-base transition-colors duration-300 hover:bg-mint"
                  >
                    Send message
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </MagneticButton>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
