"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  className?: string;
  align?: "left" | "center";
};

/** Eyebrow label + large display title, both revealed on scroll. */
export default function SectionHeading({
  label,
  title,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-5 font-mono text-xs tracking-[0.3em] uppercase text-mint"
      >
        {"// "}
        {label}
      </motion.p>
      <RevealText
        text={title}
        as="h2"
        className="font-display text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl"
      />
    </div>
  );
}
