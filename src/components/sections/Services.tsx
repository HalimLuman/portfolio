"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" aria-label="Services" className="relative py-28 sm:py-40">
      <div className="container-x">
        <SectionHeading
          label="Services"
          title="Everything it takes to ship a world-class product"
          className="mb-16 max-w-3xl sm:mb-24"
        />

        <ul>
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-t border-line last:border-b"
            >
              {/* hover wash */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-r from-iris/10 via-transparent to-transparent transition-opacity duration-500",
                  hovered === i ? "opacity-100" : "opacity-0"
                )}
              />
              <div className="relative grid items-center gap-4 py-8 sm:py-10 lg:grid-cols-[80px_1fr_1.2fr_48px]">
                <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-mint">
                  {service.index}
                </span>

                <h3 className="font-display text-2xl font-medium tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-3xl lg:text-4xl">
                  {service.title}
                </h3>

                <div>
                  <p className="max-w-md text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[10px] tracking-widest text-muted uppercase transition-colors duration-300 group-hover:border-iris/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="hidden h-6 w-6 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint lg:block"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
