"use client";

import { useRef, useEffect } from "react";

interface ClientsTickerProps {
  clients: string[];
  branchColor?: string;
  label?: string;
}

export function ClientsTicker({
  clients,
  branchColor = "var(--color-fg)",
  label = "Trusted by",
}: ClientsTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf: number;

    const step = () => {
      if (!pausedRef.current) {
        offsetRef.current -= 0.4;
        const half = track.scrollWidth / 2;
        if (Math.abs(offsetRef.current) >= half) offsetRef.current = 0;
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <span className="text-[11px] uppercase tracking-widest text-muted font-medium">
          {label}
        </span>
      </div>

      <div
        className="relative"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 bg-gradient-to-l from-bg to-transparent" />

        <div ref={trackRef} className="flex items-center gap-12 md:gap-16 whitespace-nowrap will-change-transform">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-lg md:text-xl font-semibold tracking-tight shrink-0 transition-colors duration-300 select-none"
              style={{ color: `color-mix(in srgb, ${branchColor} 35%, var(--color-muted))` }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
