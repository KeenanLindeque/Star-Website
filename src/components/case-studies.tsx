"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface CaseStudy {
  client: string;
  project: string;
  description: string;
  image: string;
  detail?: string;
  tags?: string[];
}

interface CaseStudiesProps {
  studies: CaseStudy[];
  branchColor?: string;
}

const FIXED_HEIGHT = 520;

export function CaseStudies({ studies, branchColor = "var(--color-fg)" }: CaseStudiesProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const hasInteracted = useRef(false);

  const go = useCallback(
    (dir: 1 | -1) => {
      hasInteracted.current = true;
      setDirection(dir);
      setActive((a) => (a + dir + studies.length) % studies.length);
    },
    [studies.length],
  );

  const study = studies[active];
  const shouldAnimate = hasInteracted.current;

  const openStudy = () => setExpanded(true);
  const closeStudy = () => setExpanded(false);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.div
                key="detail-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={closeStudy}
                  className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium mb-3 transition-colors duration-200 hover:opacity-70"
                  style={{ color: branchColor }}
                >
                  <ArrowLeft size={14} />
                  All case studies
                </button>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{study.project}</h2>
              </motion.div>
            ) : (
              <motion.div
                key="list-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Case studies</span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">Selected work</h2>
              </motion.div>
            )}
          </AnimatePresence>

          {!expanded && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tracking-widest text-muted mr-3">
                {String(active + 1).padStart(2, "0")} / {String(studies.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: `color-mix(in srgb, ${branchColor} 30%, transparent)`,
                  color: branchColor,
                }}
                aria-label="Previous case study"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: branchColor, color: "#fff" }}
                aria-label="Next case study"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Body — fixed height container */}
        <div style={{ minHeight: FIXED_HEIGHT }}>
          <AnimatePresence mode="wait" custom={direction}>
            {expanded ? (
              <motion.div
                key={`detail-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Detail view */}
                <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                  {/* Large image — spans 3 cols, click to advance */}
                  <div className="md:col-span-3">
                    <div
                      className="rounded-2xl overflow-hidden relative cursor-pointer group/img"
                      style={{ height: FIXED_HEIGHT }}
                      onClick={() => { setExpanded(false); go(1); }}
                    >
                      <Image
                        src={study.image}
                        alt={study.project}
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={(e) => { e.stopPropagation(); setExpanded(false); go(-1); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                        aria-label="Previous"
                      >
                        <ArrowLeft size={18} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); go(1); setExpanded(false); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                        aria-label="Next"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Content — spans 2 cols */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: branchColor }}
                      >
                        {study.client}
                      </span>

                      <p className="text-muted text-base leading-relaxed mt-6">
                        {study.description}
                      </p>

                      {study.detail && (
                        <p className="text-muted text-sm leading-relaxed mt-4">
                          {study.detail}
                        </p>
                      )}

                      {study.tags && study.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-8">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full"
                              style={{
                                backgroundColor: `color-mix(in srgb, ${branchColor} 10%, transparent)`,
                                color: branchColor,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Gallery thumbnails */}
                    <div className="grid grid-cols-3 gap-3 mt-8">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-xl overflow-hidden relative"
                          style={{
                            background: `linear-gradient(135deg, color-mix(in srgb, ${branchColor} ${12 - i * 3}%, var(--color-surface)), var(--color-surface))`,
                          }}
                        >
                          <Image
                            src={`https://picsum.photos/seed/${study.client.replace(/\s/g, "")}-${i}/400/400`}
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`card-${active}`}
                custom={direction}
                variants={slideVariants}
                initial={shouldAnimate ? "enter" : false}
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Card view */}
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    height: FIXED_HEIGHT,
                    border: `1px solid color-mix(in srgb, ${branchColor} 12%, transparent)`,
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* Image panel — click to advance */}
                    <div
                      className="relative h-full overflow-hidden cursor-pointer group/img"
                      onClick={() => go(1)}
                    >
                      <Image
                        src={study.image}
                        alt={study.project}
                        fill
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `linear-gradient(135deg, ${branchColor}, transparent)`,
                        }}
                      />
                      {/* Left / Right arrows on image */}
                      <button
                        onClick={(e) => { e.stopPropagation(); go(-1); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                        aria-label="Previous"
                      >
                        <ArrowLeft size={18} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); go(1); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 hover:bg-black/50"
                        aria-label="Next"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>

                    {/* Content panel */}
                    <div className="flex flex-col justify-between p-8 md:p-12 overflow-hidden">
                      <div>
                        <span
                          className="text-xs font-semibold uppercase tracking-widest"
                          style={{ color: branchColor }}
                        >
                          {study.client}
                        </span>

                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug mt-5 mb-4">
                          {study.project}
                        </h3>

                        <p className="text-muted text-base leading-relaxed mb-6 line-clamp-3">
                          {study.description}
                        </p>

                        {study.tags && study.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full"
                                style={{
                                  backgroundColor: `color-mix(in srgb, ${branchColor} 10%, transparent)`,
                                  color: branchColor,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-6" style={{ borderTop: `1px solid var(--color-line)` }}>
                        <button
                          onClick={openStudy}
                          className="group inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-80"
                          style={{ color: branchColor }}
                        >
                          View case study
                          <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dot indicators — only in card view */}
        {!expanded && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {studies.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  hasInteracted.current = true;
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  backgroundColor: i === active ? branchColor : "var(--color-line)",
                }}
                aria-label={`Go to case study ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
