"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * A luminous thread that draws itself from the hero to the foot of the page
 * as you scroll — weaving across the canvas, diving behind solid panels and
 * re-emerging — with a glowing bead riding the tip of the stroke. A faint
 * dotted guide hints at the route still ahead.
 *
 * Mount it as the first child of a `relative` wrapper around the page
 * sections. Sections are positioned, this layer is painted before them, so
 * the thread always runs behind content. Desktop + no-reduced-motion only;
 * it's decoration, not information.
 */
export default function FlowLine() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const guideRef = useRef<SVGPathElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const beadRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const svg = svgRef.current;
    const guide = guideRef.current;
    const path = pathRef.current;
    const bead = beadRef.current;
    const host = root?.parentElement;
    if (!root || !svg || !guide || !path || !bead || !host) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        let length = 1;
        const draw = { p: 0 };

        /** Paint the current progress onto the stroke and the bead. */
        const render = () => {
          const p = draw.p;
          gsap.set(path, { strokeDashoffset: length * (1 - p) });
          const pt = path.getPointAtLength(length * p);
          gsap.set(bead, {
            x: pt.x,
            y: pt.y,
            opacity: p > 0.002 && p < 0.998 ? 1 : 0,
          });
        };

        /** (Re)trace the route to fit the page's current dimensions. */
        const build = () => {
          const w = host.clientWidth;
          const h = host.scrollHeight;
          svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

          const startY = Math.min(h * 0.4, window.innerHeight * 0.82);
          const endY = h - 96;
          const span = endY - startY;
          const turns = Math.max(3, Math.round(span / 1500));
          const seg = span / turns;

          // Swing between the gutters, starting under the hero copy.
          const stops = [0.5];
          for (let i = 1; i <= turns; i++) stops.push(i % 2 ? 0.87 : 0.11);

          let d = `M ${(stops[0] * w).toFixed(1)} ${startY.toFixed(1)}`;
          for (let i = 1; i <= turns; i++) {
            const x0 = stops[i - 1] * w;
            const x1 = stops[i] * w;
            const y0 = startY + (i - 1) * seg;
            const y1 = startY + i * seg;
            // Control points hold their column before swinging across, so
            // each bend reads as a calligraphic stroke, not a uniform sine.
            d +=
              ` C ${x0.toFixed(1)} ${(y0 + seg * 0.6).toFixed(1)}` +
              ` ${x1.toFixed(1)} ${(y1 - seg * 0.6).toFixed(1)}` +
              ` ${x1.toFixed(1)} ${y1.toFixed(1)}`;
          }

          guide.setAttribute("d", d);
          path.setAttribute("d", d);
          length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length });
          render();
        };

        build();

        const tween = gsap.to(draw, {
          p: 1,
          ease: "none",
          onUpdate: render,
          scrollTrigger: {
            trigger: host,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.4,
          },
        });

        // Page height shifts as pinned sections mount, accordions open, etc.
        let raf = 0;
        const ro = new ResizeObserver(() => {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(build);
        });
        ro.observe(host);

        return () => {
          ro.disconnect();
          cancelAnimationFrame(raf);
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      <svg
        ref={svgRef}
        className="h-full w-full"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="flowline-stroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ce8946" stopOpacity="0.85" />
            <stop offset="0.5" stopColor="#e8b377" stopOpacity="0.7" />
            <stop offset="1" stopColor="#ce8946" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="flowline-halo">
            <stop offset="0" stopColor="#e8b377" stopOpacity="0.45" />
            <stop offset="1" stopColor="#e8b377" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* faint dotted route the thread has yet to travel */}
        <path
          ref={guideRef}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="3 8"
        />

        {/* the drawn thread */}
        <path
          ref={pathRef}
          stroke="url(#flowline-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* bead riding the tip */}
        <g ref={beadRef} opacity="0">
          <circle r="18" fill="url(#flowline-halo)" />
          <circle r="3" fill="#e8b377" />
        </g>
      </svg>
    </div>
  );
}
