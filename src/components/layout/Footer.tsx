"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/data";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              {SITE.name}
              <span className="text-iris">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A digital product studio for teams that refuse to ship average.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-start gap-3">
            <p className="mb-1 font-mono text-xs tracking-[0.3em] text-faint uppercase">
              Sitemap
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <p className="mb-1 font-mono text-xs tracking-[0.3em] text-faint uppercase">
              Connect
            </p>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 text-sm text-mint hover:underline"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name} Studio. All rights reserved.</p>
          <p className="font-mono tracking-widest uppercase">
            Built with intent — no templates harmed
          </p>
        </div>
      </div>

      {/* Oversized wordmark sliding up from the fold */}
      <div className="pointer-events-none container-x overflow-hidden pb-2 select-none">
        <motion.p
          initial={{ y: "30%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="font-display text-center text-[19vw] leading-[0.85] font-bold tracking-tighter text-foreground/[0.06]"
        >
          {SITE.name}
        </motion.p>
      </div>
    </footer>
  );
}
