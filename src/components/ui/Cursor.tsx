"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small dot plus a trailing ring that expands into a
 * labelled disc over elements marked with [data-cursor]. Pointer-fine
 * devices only; the native cursor is never hidden, so this is purely
 * additive and accessibility-neutral.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)"
    ).matches;
    if (!fine) return;
    setEnabled(true);

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;

      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-cursor]"
      );
      if (target) {
        setLabel(target.dataset.cursor ?? "");
        setActive(true);
      } else {
        setActive(false);
      }
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90]">
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-foreground transition-opacity duration-200 ${
          active ? "opacity-0" : "opacity-100"
        }`}
        style={{ marginLeft: -3, marginTop: -3 }}
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0"
        style={{ marginLeft: 0, marginTop: 0 }}
      >
        <div
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 ease-out ${
            active
              ? "h-20 w-20 bg-foreground text-base"
              : "h-8 w-8 border border-foreground/30 bg-transparent"
          }`}
        >
          <span
            className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-opacity duration-200 ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
