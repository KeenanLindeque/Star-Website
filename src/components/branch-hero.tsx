"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BranchHeroProps {
  label: string;
  headline: string;
  description: string;
  branchColor: string;
  logo: string;
  gradientStrength?: number;
}

export function BranchHero({ label, headline, description, branchColor, logo, gradientStrength }: BranchHeroProps) {
  const customGradient = gradientStrength
    ? { background: `linear-gradient(to bottom, color-mix(in srgb, ${branchColor} ${gradientStrength}%, var(--color-bg)) 0%, var(--color-bg) 50%)` }
    : undefined;

  return (
    <section className="hero-gradient pt-40 pb-24 md:pt-48 md:pb-32" style={customGradient}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* Spacer for the floating logo that animates into the nav */}
          <div className="h-20 mb-4" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-[2px]" style={{ backgroundColor: branchColor }} />
            <span className="text-xs uppercase tracking-widest font-semibold text-muted">{label}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted leading-relaxed max-w-lg mb-10"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <button
              className="group inline-flex items-center gap-2.5 text-sm font-medium text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: branchColor }}
            >
              Get in touch
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <button
              className="text-sm font-medium text-muted px-6 py-3 rounded-full border border-line transition-all duration-200 hover:text-white"
              style={{ ["--branch-btn" as string]: branchColor }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = branchColor; e.currentTarget.style.borderColor = branchColor; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ""; e.currentTarget.style.borderColor = ""; }}
            >
              View work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
