"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const initiatives = [
  {
    title: "Joy of Youth",
    client: "Community Programme",
    description: "Our flagship youth empowerment programme that creates safe, enriching spaces for young people to develop confidence, creativity, and community connections.",
    detail: "Through mentorship, skills workshops, and social engagement activities, we invest in the next generation of leaders. The programme operates across multiple cities and has reached thousands of young people since its inception.",
    color: "#ff6f2a",
    tags: ["Youth", "Empowerment", "Mentorship"],
  },
  {
    title: "Professional Certification for Top 3 Achievers",
    client: "Training Initiative",
    description: "We sponsor fully-funded professional certifications for the top 3 performing individuals in each of our training cohorts.",
    detail: "This incentivises excellence and ensures outstanding talent is recognised and rewarded with credentials that advance their careers. Certifications include PMP, PRINCE2, and other globally recognised qualifications.",
    color: "#0088e0",
    tags: ["Certification", "Excellence", "Training"],
  },
  {
    title: "Training & Employment for People in Need",
    client: "Social Impact",
    description: "We identify, train, and place individuals from underserved communities into sustainable employment.",
    detail: "Our end-to-end programme covers skills assessment, competency-based training, job readiness coaching, and direct placement with partner organisations. We work closely with employers to ensure a smooth transition into the workforce.",
    color: "#1d9b1d",
    tags: ["Employment", "Skills", "Inclusion"],
  },
  {
    title: "Autism Training & Inclusion",
    client: "Inclusion Programme",
    description: "Our specialised training programme equips individuals on the autism spectrum with practical professional skills and workplace readiness.",
    detail: "We partner with employers to create inclusive hiring pathways, ensuring meaningful and supported employment opportunities. The programme includes customised training modules, on-the-job coaching, and ongoing support.",
    color: "#9800d1",
    tags: ["Autism", "Inclusion", "Employment"],
  },
];

export default function CSRPage() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setActive((a) => (a + dir + initiatives.length) % initiatives.length);
    setExpanded(false);
  };

  const item = initiatives[active];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div>
      <section className="hero-gradient pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="h-20 mb-10" />
          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="accent-mark mb-8" />
            <h1
              className="text-fg leading-[1.08]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 500, letterSpacing: "-0.03em" }}
            >
              Social Impact
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              At Star, impact extends beyond our commercial work. We are committed to uplifting communities, creating opportunity, and driving meaningful social change.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with nav */}
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
                    onClick={() => setExpanded(false)}
                    className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium mb-3 transition-colors duration-200 hover:opacity-70"
                    style={{ color: item.color }}
                  >
                    <ArrowLeft size={14} />
                    All initiatives
                  </button>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{item.title}</h2>
                </motion.div>
              ) : (
                <motion.div
                  key="list-header"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our initiatives</span>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-3">Making a difference</h2>
                </motion.div>
              )}
            </AnimatePresence>

            {!expanded && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-widest text-muted mr-3">
                  {String(active + 1).padStart(2, "0")} / {String(initiatives.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => go(-1)}
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{ borderColor: `${item.color}40`, color: item.color }}
                  aria-label="Previous"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => go(1)}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: item.color, color: "#fff" }}
                  aria-label="Next"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Card */}
          <div style={{ minHeight: 360 }}>
            <AnimatePresence mode="wait" custom={direction}>
              {expanded ? (
                <motion.div
                  key={`detail-${active}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl p-8 md:p-12"
                  style={{ backgroundColor: `${item.color}08`, border: `1px solid ${item.color}20` }}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: item.color }}>{item.client}</span>
                  <p className="text-muted text-base leading-relaxed mt-6">{item.description}</p>
                  <p className="text-muted text-sm leading-relaxed mt-4">{item.detail}</p>
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-8">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full"
                          style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key={`card-${active}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="rounded-3xl overflow-hidden"
                    style={{ border: `1px solid ${item.color}20` }}
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Color panel */}
                      <div
                        className="p-10 md:p-14 flex flex-col justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">{item.client}</span>
                        <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-tight leading-snug mt-4">
                          {item.title}
                        </h3>
                      </div>

                      {/* Content panel */}
                      <div className="flex flex-col justify-between p-8 md:p-12">
                        <div>
                          <p className="text-muted text-base leading-relaxed mb-6">
                            {item.description}
                          </p>
                          {item.tags && (
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full"
                                  style={{ backgroundColor: `${item.color}10`, color: item.color }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="pt-6 mt-6" style={{ borderTop: "1px solid var(--color-line)" }}>
                          <button
                            onClick={() => setExpanded(true)}
                            className="group inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-80"
                            style={{ color: item.color }}
                          >
                            Learn more
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

          {/* Dot indicators */}
          {!expanded && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {initiatives.map((ini, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    backgroundColor: i === active ? ini.color : "var(--color-line)",
                  }}
                  aria-label={`Go to initiative ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="dark-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Partner with us for social impact
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">
              We are always looking for organisations, funders, and individuals who share our commitment to creating opportunity and driving positive change.
            </p>
            <a
              href="mailto:csr@star.com"
              className="inline-flex items-center gap-3 bg-accent-orange text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
            >
              Get involved
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
