"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealText from "@/components/ui/RevealText";

type CtaBannerProps = {
  title?: string;
  accent?: string;
  description?: string;
};

/** Closing call-to-action for inner pages — copy varies per page via props. */
export default function CtaBanner({
  title = "Ready to build",
  accent = "something that moves?",
  description = "Tell us where you want to go. We'll reply within one business day with honest thoughts on how to get there.",
}: CtaBannerProps) {
  return (
    <section
      aria-label="Call to action"
      className="relative overflow-hidden border-t border-line bg-elevated py-28 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-iris/15 blur-[140px]"
      />

      <div className="container-x relative flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 font-mono text-xs tracking-[0.3em] text-mint uppercase"
        >
          {"// "}Next step
        </motion.p>

        <h2 className="font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
          <RevealText text={title} />
          <span className="text-gradient">
            <RevealText text={accent} />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-md text-sm leading-relaxed text-muted sm:text-base"
        >
          {description}
        </motion.p>

        <MagneticButton className="mt-12">
          <Link
            href="/contact"
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-foreground px-9 text-sm font-medium text-base transition-colors duration-300 hover:bg-mint"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
