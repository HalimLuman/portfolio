"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { WORK_ARCHIVE } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Table-style index of smaller engagements that don't get a full case study. */
export default function WorkArchive() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      aria-label="Project archive"
      className="relative border-y border-line bg-elevated py-28 sm:py-36"
    >
      <div className="container-x">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <SectionHeading
            label="Archive"
            title="More launches from the log"
            className="max-w-2xl"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Not every project gets a case study. Every one of them got the same
            standard of care.
          </p>
        </div>

        <ul>
          {WORK_ARCHIVE.map((project, i) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-t border-line last:border-b"
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-r from-iris/10 via-transparent to-transparent transition-opacity duration-500",
                  hovered === i ? "opacity-100" : "opacity-0"
                )}
              />
              <div className="relative grid items-baseline gap-2 py-6 sm:py-7 lg:grid-cols-[1.1fr_1fr_1.2fr_72px]">
                <h3 className="font-display text-xl font-medium tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-2xl">
                  {project.title}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                  {project.category}
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  {project.outcome}
                </p>
                <p className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-mint lg:text-right">
                  {project.year}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
