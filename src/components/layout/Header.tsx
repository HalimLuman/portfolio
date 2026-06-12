"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating to a new route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled && !open
            ? "border-b border-line bg-base/70 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight"
            aria-label={`${SITE.name} — home`}
          >
            {SITE.name}
            <span className="text-iris">.</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative text-sm transition-colors duration-300 hover:text-foreground",
                    active ? "text-foreground" : "text-muted"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-mint transition-all duration-300 group-hover:w-full",
                      active ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <MagneticButton className="hidden lg:inline-block">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-base transition-colors duration-300 hover:bg-mint"
              >
                Start a project
              </Link>
            </MagneticButton>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-px w-5 bg-foreground transition-all duration-300",
                  open ? "rotate-45" : "-translate-y-1"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-5 bg-foreground transition-all duration-300",
                  open ? "-rotate-45" : "translate-y-1"
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[75] flex flex-col justify-end bg-elevated px-6 pb-14 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-5xl font-medium tracking-tight text-foreground/90 transition-colors hover:text-mint"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 font-mono text-xs tracking-widest text-muted uppercase"
            >
              {SITE.email}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
