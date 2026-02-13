"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  accentColor?: string;
}

/* ─── Animated SVG ring + count-up number ─── */
function StatCard({
  stat,
  accentColor,
  delay,
}: {
  stat: Stat;
  accentColor: string;
  delay: number;
}) {
  const [display, setDisplay] = useState(0);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Ring geometry
  const size = 120;
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  // Count-up
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 70;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * stat.value));
      if (current >= steps) {
        clearInterval(timer);
        setDisplay(stat.value);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, stat.value]);

  // Format large numbers (5000 → 5,000)
  const formatted = display.toLocaleString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center text-center p-6 rounded-2xl border border-transparent transition-all duration-400 cursor-default"
      style={{
        background: hovered ? `color-mix(in srgb, ${accentColor} 6%, transparent)` : "transparent",
        borderColor: hovered ? `color-mix(in srgb, ${accentColor} 20%, transparent)` : "transparent",
      }}
    >
      {/* SVG ring */}
      <div className="relative mb-5">
        <svg width={size} height={size} className="block -rotate-90">
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth={stroke}
          />
          {/* Animated fill */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={accentColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: circumference * 0.05 } : { strokeDashoffset: circumference }}
            transition={{ duration: 2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        {/* Number inside ring */}
        <div className="absolute inset-0 flex items-center justify-center rotate-0">
          <span
            className="font-semibold tracking-tight leading-none"
            style={{ fontSize: stat.value >= 1000 ? "1.25rem" : "1.6rem", color: accentColor }}
          >
            {formatted}
            <span className="text-muted" style={{ fontSize: "0.75em" }}>{stat.suffix || ""}</span>
          </span>
        </div>
      </div>

      {/* Label */}
      <span className="text-sm text-muted leading-snug">{stat.label}</span>

      {/* Decorative dot */}
      <motion.span
        className="block w-1 h-1 rounded-full mt-4"
        style={{ backgroundColor: accentColor }}
        animate={hovered ? { scale: [1, 1.8, 1] } : { scale: 1 }}
        transition={{ duration: 0.6, repeat: hovered ? Infinity : 0, repeatType: "loop" }}
      />
    </motion.div>
  );
}

export function StatsCounter({ stats, accentColor = "var(--color-accent-orange)" }: StatsCounterProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} accentColor={accentColor} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
