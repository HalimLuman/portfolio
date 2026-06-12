"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/ui/RevealText";
import { preloaderState } from "@/lib/preloader-state";

type PageHeroProps = {
  label: string;
  title: string;
  /** optional second title line rendered in the accent gradient */
  accent?: string;
  description: string;
  meta?: { label: string; value: string }[];
};

/**
 * Compact above-the-fold intro for inner pages — eyebrow, display title,
 * standfirst, and an optional mono meta row. Times its entrance around the
 * preloader on hard loads, exactly like the home hero.
 */
export default function PageHero({
  label,
  title,
  accent,
  description,
  meta,
}: PageHeroProps) {
  const entryDelay = preloaderState.done ? 0.15 : 1.8;

  return (
    <section aria-label={`${label} intro`} className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-10%] h-[420px] w-[640px] rounded-full bg-iris/10 blur-[140px]"
      />

      <div className="container-x relative pt-40 pb-16 sm:pt-48 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: entryDelay, duration: 0.7, ease: "easeOut" }}
          className="mb-7 font-mono text-xs tracking-[0.35em] text-mint uppercase"
        >
          {"// "}
          {label}
        </motion.p>

        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02] font-medium tracking-tight">
          <RevealText text={title} immediate delay={entryDelay + 0.1} />
          {accent && (
            <span className="text-gradient">
              <RevealText text={accent} immediate delay={entryDelay + 0.25} />
            </span>
          )}
        </h1>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-x-16 gap-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: entryDelay + 0.55, duration: 0.8, ease: "easeOut" }}
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {description}
          </motion.p>

          {meta && meta.length > 0 && (
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: entryDelay + 0.7, duration: 0.8, ease: "easeOut" }}
              className="flex gap-12 font-mono text-xs tracking-widest uppercase"
            >
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-faint">{item.label}</dt>
                  <dd className="mt-2 text-foreground">{item.value}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>
      </div>
    </section>
  );
}
