"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/data";
import { preloaderState } from "@/lib/preloader-state";

/**
 * Entry preloader: a counter sweeps 0→100 while the wordmark settles,
 * then the curtain lifts to reveal the page. Skipped entirely for
 * reduced-motion users.
 */
export default function Preloader() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const finish = () => {
      preloaderState.done = true;
      setDone(true);
    };
    if (reduced) {
      finish();
      return;
    }
    const start = performance.now();
    const duration = 1400;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out so the counter decelerates into 100
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(finish, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden="true"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-end justify-between bg-base p-8 sm:p-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-2xl font-semibold tracking-tight"
          >
            {SITE.name}
            <span className="text-iris">.</span>
          </motion.span>
          <span className="font-mono text-6xl font-medium tabular-nums text-muted sm:text-8xl">
            {count}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
