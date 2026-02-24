"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Slide {
  title: string;
  content: string;
}

export interface CaseStudy {
  client: string;
  project: string;
  description: string;
  image: string;
  slides: Slide[];
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
  const [slideIndex, setSlideIndex] = useState(0);
  const hasInteracted = useRef(false);

  const go = useCallback(
    (dir: 1 | -1) => {
      hasInteracted.current = true;
      setDirection(dir);
      setActive((a) => (a + dir + studies.length) % studies.length);
      setSlideIndex(0);
    },
    [studies.length],
  );

  const study = studies[active];
  const shouldAnimate = hasInteracted.current;
  const totalSlides = study.slides.length;
  const currentSlide = study.slides[slideIndex];

  const openStudy = () => { setExpanded(true); setSlideIndex(0); };
  const closeStudy = () => setExpanded(false);

  const goSlide = (dir: 1 | -1) => {
    const next = slideIndex + dir;
    if (next < 0 || next >= totalSlides) return;
    setSlideIndex(next);
  };

  const slideImages = [
    study.image,
    `https://picsum.photos/seed/${study.client.replace(/\s/g, "")}-0/1200/800`,
    `https://picsum.photos/seed/${study.client.replace(/\s/g, "")}-1/1200/800`,
    `https://picsum.photos/seed/${study.client.replace(/\s/g, "")}-2/1200/800`,
  ];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const arrowOutline = (
    <button
      onClick={() => expanded ? goSlide(-1) : go(-1)}
      disabled={expanded ? slideIndex === 0 : false}
      className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105 shrink-0 disabled:opacity-20"
      style={{
        borderColor: `color-mix(in srgb, ${branchColor} 30%, transparent)`,
        color: branchColor,
      }}
      aria-label="Previous"
    >
      <ArrowLeft size={18} />
    </button>
  );

  const arrowFilled = (
    <button
      onClick={() => expanded ? goSlide(1) : go(1)}
      disabled={expanded ? slideIndex === totalSlides - 1 : false}
      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shrink-0 disabled:opacity-20"
      style={{ backgroundColor: branchColor, color: "#fff" }}
      aria-label="Next"
    >
      <ArrowRight size={18} />
    </button>
  );

  return (
    <section className="py-24 md:py-32">
      {/* Header — constrained */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-end justify-between">
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

          <div className="flex items-center gap-2">
            {!expanded && (
              <span className="text-xs font-semibold tracking-widest text-muted mr-3">
                {String(active + 1).padStart(2, "0")} / {String(studies.length).padStart(2, "0")}
              </span>
            )}
            {expanded && (
              <span className="text-xs font-semibold tracking-widest text-muted mr-3">
                {String(slideIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Body — full width with arrows outside */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Left arrow */}
          <div className="hidden md:flex">{arrowOutline}</div>

          {/* Card */}
          <div className="flex-1" style={{ minHeight: FIXED_HEIGHT }}>
            <AnimatePresence mode="wait" custom={direction}>
              {expanded ? (
                <motion.div
                  key={`detail-${active}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="grid md:grid-cols-5 gap-0 rounded-3xl overflow-hidden" style={{ height: FIXED_HEIGHT, border: `1px solid color-mix(in srgb, ${branchColor} 12%, transparent)` }}>
                    {/* Large image — spans 3 cols, changes with slide */}
                    <div className="md:col-span-3 relative h-full overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={slideIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={slideImages[slideIndex]}
                            alt={`${study.project} — ${currentSlide.title}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `linear-gradient(135deg, ${branchColor}, transparent)`,
                        }}
                      />
                      {/* Slide dots on image */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                        {study.slides.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setSlideIndex(i)}
                            className="transition-all duration-300 rounded-full"
                            style={{
                              width: i === slideIndex ? 20 : 6,
                              height: 6,
                              backgroundColor: i === slideIndex ? "#fff" : "rgba(255,255,255,0.4)",
                            }}
                            aria-label={`Slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content — spans 2 cols, changes with slide */}
                    <div className="md:col-span-2 flex flex-col p-8 md:p-10 overflow-hidden">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest shrink-0"
                        style={{ color: branchColor }}
                      >
                        {study.client}
                      </span>

                      {/* Slide text — fixed height area so thumbnails don't move */}
                      <div className="flex-1 min-h-0 overflow-hidden relative mt-2">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={slideIndex}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0"
                          >
                            <span
                              className="block text-[11px] uppercase tracking-widest font-medium mb-3"
                              style={{ color: branchColor }}
                            >
                              {currentSlide.title}
                            </span>
                            <p className="text-fg text-sm md:text-base leading-relaxed">
                              {currentSlide.content}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Gallery thumbnails — all 4, click to jump */}
                      <div className="grid grid-cols-4 gap-2 shrink-0 pt-4">
                        {slideImages.map((src, i) => (
                          <button
                            key={i}
                            onClick={() => setSlideIndex(i)}
                            className="aspect-square rounded-lg overflow-hidden relative transition-all duration-200 hover:opacity-90"
                            style={{
                              opacity: i === slideIndex ? 1 : 0.5,
                              outline: i === slideIndex ? `2px solid ${branchColor}` : "2px solid transparent",
                              outlineOffset: -2,
                            }}
                          >
                            <Image
                              src={src.includes("1200/800") ? src.replace("1200/800", "400/400") : `${src}?w=400&h=400&fit=crop`}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </button>
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
                      {/* Image panel */}
                      <div className="relative h-full overflow-hidden">
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

          {/* Right arrow */}
          <div className="hidden md:flex">{arrowFilled}</div>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-6">
          {arrowOutline}
          {arrowFilled}
        </div>
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
    </section>
  );
}
