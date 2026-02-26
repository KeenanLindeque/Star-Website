"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FeaturedStudy {
  client: string;
  project: string;
  description: string;
  image: string;
  branch: string;
  branchColor: string;
  branchHref: string;
  studyIndex: number;
}

const featured: FeaturedStudy[] = [
  {
    client: "Aramco",
    project: "Technical Workforce Upskilling Program",
    description: "A 12-month upskilling program for 800+ engineers across downstream operations.",
    image: "https://picsum.photos/seed/aramco-training/1200/800",
    branch: "Training",
    branchColor: "var(--color-branch-training)",
    branchHref: "/training",
    studyIndex: 0,
  },
  {
    client: "University of Oxford",
    project: "Executive Education Partnership",
    description: "Tailored short-course programs for senior professionals with return-to-work alignment.",
    image: "https://picsum.photos/seed/oxford-exec/1200/800",
    branch: "Education",
    branchColor: "var(--color-branch-education)",
    branchHref: "/education",
    studyIndex: 2,
  },
  {
    client: "NEOM",
    project: "Infrastructure Program Management Office",
    description: "End-to-end PMO for a multi-billion dollar greenfield megaproject.",
    image: "https://picsum.photos/seed/neom-pmo/1200/800",
    branch: "Projects",
    branchColor: "var(--color-branch-projects)",
    branchHref: "/projects",
    studyIndex: 0,
  },
  {
    client: "G20 Saudi Secretariat",
    project: "G20 Leaders Summit",
    description: "Full operational delivery across 14 venues for 20 heads of state.",
    image: "https://picsum.photos/seed/g20-summit/1200/800",
    branch: "Events",
    branchColor: "var(--color-branch-events)",
    branchHref: "/events",
    studyIndex: 0,
  },
];

const AUTO_INTERVAL = 7000;

export function FeaturedCaseStudies() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const router = useRouter();
  const [progressKey, setProgressKey] = useState(0);

  const advance = useCallback((to?: number) => {
    setActive((a) => to !== undefined ? to : (a + 1) % featured.length);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => advance(), AUTO_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [advance]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => advance(), AUTO_INTERVAL);
  }, [advance]);

  const handleGo = useCallback(
    (dir: 1 | -1) => {
      resetTimer();
      setActive((a) => (a + dir + featured.length) % featured.length);
      setProgressKey((k) => k + 1);
    },
    [resetTimer],
  );

  const handleDot = useCallback(
    (i: number) => {
      resetTimer();
      advance(i);
    },
    [resetTimer, advance],
  );

  const study = featured[active];

  const handleViewStudy = () => {
    router.push(`${study.branchHref}?cs=${study.studyIndex}#case-studies`);
  };

  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Featured work</span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">Case studies</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleGo(-1)}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{
                borderColor: `color-mix(in srgb, ${study.branchColor} 30%, transparent)`,
                color: study.branchColor,
              }}
              aria-label="Previous"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => handleGo(1)}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: study.branchColor, color: "#fff" }}
              aria-label="Next"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Card */}
        <div className="relative" style={{ height: 340 }}>
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div
                className="rounded-2xl overflow-hidden cursor-pointer group h-full relative"
                onClick={handleViewStudy}
              >
                {/* Full background image */}
                <Image
                  src={study.image}
                  alt={study.project}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.03]"
                />

                {/* Gradient overlay using branch color */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to right, color-mix(in srgb, ${study.branchColor} 90%, black) 0%, color-mix(in srgb, ${study.branchColor} 70%, black) 50%, transparent 100%)`,
                    opacity: 0.92,
                  }}
                />

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="px-10 md:px-14 max-w-xl">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-white/50">
                        Star {study.branch}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-white/50">
                        {study.client}
                      </span>
                    </div>

                    <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight leading-snug mb-3">
                      {study.project}
                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                      {study.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 group-hover:text-white group-hover:gap-3">
                      View case study
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Progress bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex">
                  {featured.map((f, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); handleDot(i); }}
                      className="flex-1 h-1 relative transition-opacity duration-300"
                      style={{ opacity: i === active ? 1 : 0.3 }}
                      aria-label={`Study ${i + 1}`}
                    >
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: f.branchColor, opacity: 0.3 }}
                      />
                      {i === active && (
                        <motion.div
                          key={progressKey}
                          className="absolute inset-y-0 left-0"
                          style={{ backgroundColor: "#fff" }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
