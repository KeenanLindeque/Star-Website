"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services: Service[];
  branchColor?: string;
}

export function ServicesGrid({ title, subtitle, services, branchColor = "var(--color-fg)" }: ServicesGridProps) {
  const [active, setActive] = useState(0);
  const hasInteracted = useRef(false);

  const prev = () => { hasInteracted.current = true; setActive((a) => (a === 0 ? services.length - 1 : a - 1)); };
  const next = () => { hasInteracted.current = true; setActive((a) => (a === services.length - 1 ? 0 : a + 1)); };
  const select = (i: number) => { hasInteracted.current = true; setActive(i); };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const ActiveIcon = services[active].icon;
  const shouldAnimate = hasInteracted.current;

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">{title}</h2>
            {subtitle && <p className="text-muted text-base max-w-lg">{subtitle}</p>}
          </motion.div>
        )}

        {/* ─── Main showcase panel ─── */}
        <div
          className="rounded-3xl overflow-hidden mb-8"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, ${branchColor} 8%, var(--color-bg)), color-mix(in srgb, ${branchColor} 3%, var(--color-bg)))`,
            border: `1px solid color-mix(in srgb, ${branchColor} 15%, transparent)`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-0 min-h-[320px] md:min-h-[360px]">
            {/* Left: large icon + index */}
            <div className="flex flex-col items-center justify-center p-10 md:p-16 relative overflow-hidden">
              <div
                className="absolute w-48 h-48 rounded-full opacity-[0.07]"
                style={{ backgroundColor: branchColor }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={shouldAnimate ? { opacity: 0, scale: 0.8, rotate: -10 } : false}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: branchColor }}
                >
                  <ActiveIcon className="w-9 h-9 text-white" strokeWidth={1.5} />
                </motion.div>
              </AnimatePresence>
              <span
                className="mt-4 text-xs font-semibold tracking-widest"
                style={{ color: branchColor }}
              >
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
            </div>

            {/* Right: content */}
            <div className="flex flex-col justify-center p-8 md:py-16 md:px-12 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3
                    className="text-2xl md:text-3xl font-semibold tracking-tight mb-4"
                    style={{ color: branchColor }}
                  >
                    {services[active].title}
                  </h3>
                  <p className="text-muted text-base leading-relaxed">
                    {services[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Nav arrows */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{
                    borderColor: `color-mix(in srgb, ${branchColor} 30%, transparent)`,
                    color: branchColor,
                  }}
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: branchColor, color: "var(--color-white)" }}
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Thumbnail strip ─── */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isCurrent = i === active;
            return (
              <button
                key={service.title}
                onClick={() => select(i)}
                className="flex flex-col items-center gap-2 rounded-xl px-3 py-4 transition-all duration-300 text-center"
                style={{
                  border: `1px solid ${isCurrent ? branchColor : "var(--color-line)"}`,
                  backgroundColor: isCurrent
                    ? `color-mix(in srgb, ${branchColor} 8%, var(--color-bg))`
                    : "transparent",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
                  style={{
                    backgroundColor: isCurrent ? branchColor : "var(--color-surface)",
                    color: isCurrent ? "var(--color-white)" : "var(--color-muted)",
                  }}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <span
                  className="text-[11px] font-medium leading-tight transition-colors duration-300"
                  style={{ color: isCurrent ? branchColor : "var(--color-muted)" }}
                >
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
