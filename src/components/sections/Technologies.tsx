"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import { TECHNOLOGIES } from "@/lib/data";

function TechChip({ name }: { name: string }) {
  return (
    <span className="mx-3 inline-flex cursor-default items-center gap-3 rounded-full border border-line bg-elevated px-6 py-3 font-display text-lg font-medium whitespace-nowrap transition-all duration-300 hover:scale-105 hover:border-mint/40 hover:text-mint sm:px-8 sm:py-4 sm:text-2xl">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-iris" />
      {name}
    </span>
  );
}

export default function Technologies() {
  const half = Math.ceil(TECHNOLOGIES.length / 2);
  const rowA = TECHNOLOGIES.slice(0, half);
  const rowB = TECHNOLOGIES.slice(half);

  return (
    <section aria-label="Technologies" className="relative overflow-hidden py-28 sm:py-40">
      <div className="container-x">
        <SectionHeading
          label="Stack"
          title="Modern tools, mastered"
          align="center"
          className="mb-16 sm:mb-20"
        />
      </div>

      <div className="flex flex-col gap-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <Marquee>
          {rowA.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowB.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </Marquee>
      </div>

      <p className="container-x mt-14 text-center text-sm text-muted">
        Framework-agnostic by principle — we choose the stack your product
        deserves, not the one we feel like using.
      </p>
    </section>
  );
}
