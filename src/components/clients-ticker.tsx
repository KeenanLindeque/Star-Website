"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
}

interface ClientsTickerProps {
  clients: Client[];
  branchColor?: string;
  label?: string;
}

export function ClientsTicker({
  clients,
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

        <div ref={trackRef} className="flex items-center gap-14 md:gap-20 whitespace-nowrap will-change-transform">
          {doubled.map((client, i) => (
            <div key={`${client.name}-${i}`} className="shrink-0 flex items-center h-10 md:h-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
                className="h-8 md:h-10 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
