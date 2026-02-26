"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ClientsTicker } from "@/components/clients-ticker";
import { FeaturedCaseStudies } from "@/components/featured-case-studies";
import { useEffect, useRef, useState } from "react";

const branches = [
  { name: "Training", href: "/training", color: "var(--color-branch-training)", logo: "/logo-training.svg", logoWhite: "/logo-training-white.svg", desc: "Competency-based professional training programs that build practical skills and workforce readiness." },
  { name: "Education", href: "/education", color: "var(--color-branch-education)", logo: "/logo-education.svg", logoWhite: "/logo-education-white.svg", desc: "Academic partnerships, education pathways, and long-term learning programs aligned with national priorities." },
  { name: "Projects", href: "/projects", color: "var(--color-branch-projects)", logo: "/logo-projects.svg", logoWhite: "/logo-projects-white.svg", desc: "Complex government and organizational mandates through structured execution and governance." },
  { name: "Events", href: "/events", color: "var(--color-branch-events)", logo: "/logo-events.svg", logoWhite: "/logo-events-white.svg", desc: "Full-service strategic events from concept development to end-to-end execution." },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } };

function LogoStar({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 155 130" fill="none" className={className} style={style}>
      <path
        d="M153.7 75.5h-35.2c-1.16 0-1.74 1.4-.92 2.22l24.88 24.88c.51.51.51 1.33 0 1.84l-13.02 13.02c-.51.51-1.33.51-1.84 0l-24.89-24.89c-.82-.82-2.22-.24-2.22.92v35.2c0 .72-.58 1.3-1.3 1.3h-18.41c-.72 0-1.3-.58-1.3-1.3v-35.2c0-1.16-1.4-1.74-2.22-.92l-24.89 24.89c-.51.51-1.33.51-1.84 0l-13.02-13.02c-.51-.51-.51-1.33 0-1.84l16.8-16.8c8.74-8.74 19.98-7.66 19.98-7.66v-1.24c0-.77-.63-1.4-1.4-1.4H30.36c-.72 0-1.3-.58-1.3-1.3V56.71c0-.72.58-1.3 1.3-1.3h35.19c1.16 0 1.74-1.4.92-2.22L41.59 28.31c-.51-.51-.51-1.33 0-1.84l13.02-13.02c.51-.51 1.33-.51 1.84 0l24.89 24.89c.82.82 2.22.24 2.22-.92V1.3c0-.72.58-1.3 1.3-1.3h18.41c.72 0 1.3.58 1.3 1.3v35.2c0 1.16 1.4 1.74 2.22.92l24.89-24.89c.51-.51 1.33-.51 1.84 0l13.02 13.02c.51.51.51 1.33 0 1.84L129.73 44.2c-8.74 8.74-19.98 7.66-19.98 7.66v1.35c0 .72.58 1.3 1.3 1.3h46.71c.72 0 1.3.58 1.3 1.3v18.41c0 .72-.58 1.3-1.3 1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

const STAR_PATH = "M153.7 75.5h-35.2c-1.16 0-1.74 1.4-.92 2.22l24.88 24.88c.51.51.51 1.33 0 1.84l-13.02 13.02c-.51.51-1.33.51-1.84 0l-24.89-24.89c-.82-.82-2.22-.24-2.22.92v35.2c0 .72-.58 1.3-1.3 1.3h-18.41c-.72 0-1.3-.58-1.3-1.3v-35.2c0-1.16-1.4-1.74-2.22-.92l-24.89 24.89c-.51.51-1.33.51-1.84 0l-13.02-13.02c-.51-.51-.51-1.33 0-1.84l16.8-16.8c8.74-8.74 19.98-7.66 19.98-7.66v-1.24c0-.77-.63-1.4-1.4-1.4H30.36c-.72 0-1.3-.58-1.3-1.3V56.71c0-.72.58-1.3 1.3-1.3h35.19c1.16 0 1.74-1.4.92-2.22L41.59 28.31c-.51-.51-.51-1.33 0-1.84l13.02-13.02c.51-.51 1.33-.51 1.84 0l24.89 24.89c.82.82 2.22.24 2.22-.92V1.3c0-.72.58-1.3 1.3-1.3h18.41c.72 0 1.3.58 1.3 1.3v35.2c0 1.16 1.4 1.74 2.22.92l24.89-24.89c.51-.51 1.33-.51 1.84 0l13.02 13.02c.51.51.51 1.33 0 1.84L129.73 44.2c-8.74 8.74-19.98 7.66-19.98 7.66v1.35c0 .72.58 1.3 1.3 1.3h46.71c.72 0 1.3.58 1.3 1.3v18.41c0 .72-.58 1.3-1.3 1.3Z";

const armClips = [
  { id: "arm-top", points: "77.5,65 0,0 155,0" },
  { id: "arm-right", points: "77.5,65 155,0 155,130" },
  { id: "arm-bottom", points: "77.5,65 155,130 0,130" },
  { id: "arm-left", points: "77.5,65 0,130 0,0" },
];

function StarArms({ activeArm, colors, className = "" }: { activeArm: number | null; colors: string[]; className?: string }) {
  return (
    <svg viewBox="0 0 155 130" fill="none" className={className}>
      <defs>
        {armClips.map((clip) => (
          <clipPath key={clip.id} id={clip.id}>
            <polygon points={clip.points} />
          </clipPath>
        ))}
      </defs>
      {armClips.map((clip, i) => (
        <g key={clip.id} clipPath={`url(#${clip.id})`}>
          <path
            d={STAR_PATH}
            fill={activeArm === i ? colors[i] : "var(--color-fg)"}
            className="transition-all duration-700 ease-out"
            style={{
              opacity: activeArm === i ? 0.18 : 0.04,
              filter: activeArm === i ? `drop-shadow(0 0 40px ${colors[i]})` : "none",
            }}
          />
        </g>
      ))}
    </svg>
  );
}

const partners = [
  {
    name: "World Economic Forum",
    logo: "/partner-wef.svg",
    headline: "Shaping global workforce policy",
    description: "Collaborating on workforce development initiatives and shaping global education policy through strategic dialogue and knowledge exchange.",
  },
  {
    name: "HRCI",
    logo: "/partner-hrci.svg",
    headline: "Elevating HR standards regionally",
    description: "Delivering internationally recognised HR certification programs that elevate professional standards across the region.",
  },
  {
    name: "AHLEI",
    logo: "/partner-ahlei.svg",
    headline: "Advancing hospitality excellence",
    description: "Providing accredited hospitality training and certification pathways that prepare talent for the tourism and lodging industry.",
  },
];

function PartnersSection() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % partners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hovered]);

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Partners we&apos;re proud of</span>
          <div className="mt-3 overflow-hidden" style={{ height: "2.4em" }}>
            <AnimatePresence mode="wait">
              <motion.h2
                key={partners[active].headline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-2xl md:text-3xl font-medium tracking-tight text-fg"
              >
                {partners[active].headline}
              </motion.h2>
            </AnimatePresence>
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {partners.map((p, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={p.name}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative text-left rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive
                    ? "border-fg/15 bg-fg/[0.03] shadow-sm"
                    : "border-line hover:border-fg/10 bg-transparent"
                }`}
              >
                <div className="p-8 md:p-10 flex flex-col gap-5">
                  <div className="flex items-center justify-center py-6">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={300}
                      height={100}
                      className="h-20 md:h-24 w-auto object-contain transition-[filter] duration-500"
                      style={{ filter: isActive ? "none" : "brightness(0) opacity(0.35)" }}
                    />
                  </div>

                  <p className={`text-[13px] leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-muted" : "text-fg/20 group-hover:text-fg/30"
                  }`}>
                    {p.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [hoveredBranch, setHoveredBranch] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const glowX = useTransform(smoothX, [0, 1], ["30%", "70%"]);
  const glowY = useTransform(smoothY, [0, 1], ["20%", "60%"]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="hero-gradient pt-40 pb-24 relative overflow-hidden">
        <LogoStar
          className="absolute text-fg pointer-events-none"
          style={{
            width: 1000,
            height: 1000,
            top: "40%",
            right: "-12%",
            transform: "translateY(-50%)",
            opacity: 0.035,
            animation: "star-drift 120s linear infinite",
          }}
        />

        {/* Mouse-following radial glow */}
        <motion.div
          className="absolute pointer-events-none w-[600px] h-[600px] rounded-full"
          style={{
            left: glowX,
            top: glowY,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, color-mix(in srgb, var(--color-fg) 6%, transparent) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="h-20 mb-10" />
          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="accent-mark mb-8" />
            <h1 className="text-fg leading-[1.08]" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 500, letterSpacing: "-0.03em" }}>
              Disciplined execution,
              <br />
              measurable impact
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              Star is a multi-disciplinary organisation delivering training, education, strategic events, and complex project execution for governments and organisations.
            </p>
            <div className="mt-10">
              <a href="#branches" onClick={(e) => { e.preventDefault(); document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" }); }} className="group inline-flex items-center gap-3 bg-fg text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-accent-orange cursor-pointer">
                Explore our branches
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ClientsTicker
        clients={["NEOM", "Aramco", "Red Sea Global", "Public Investment Fund", "SABIC", "Qiddiya", "KAUST", "Siemens", "MDLBEAST"]}
        label="Our clients"
      />

      {/* Statement */}
      <section className="dark-section py-32 px-6 relative overflow-hidden">
        <LogoStar
          className="absolute text-white pointer-events-none"
          style={{
            width: 900,
            height: 900,
            top: "50%",
            right: "-40%",
            transform: "translateY(-50%)",
            opacity: 0.04,
            animation: "star-drift 160s linear infinite reverse",
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.blockquote initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <p className="text-white leading-[1.3] tracking-tight" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              <span className="text-accent-orange">&ldquo;</span>
              We partner with public and private sector entities to design, operate, and deliver initiatives that require structure, scale, governance, and measurable impact.
              <span className="text-accent-orange">&rdquo;</span>
            </p>
            <footer className="mt-8 text-subtle text-sm">Star, Est. 2024</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Branches */}
      <section id="branches" className="pt-24 pb-12 md:pt-32 md:pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">What we do</span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-fg mt-3">Meet the Star ecosystem</h2>
          </motion.div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {branches.map((branch, i) => (
                <motion.div
                  key={branch.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    href={branch.href}
                    className="group block relative overflow-hidden rounded-2xl p-7 md:p-8 border bg-bg transition-all duration-500"
                    style={{
                      ["--branch-color" as string]: branch.color,
                      borderColor: hoveredBranch === i ? `color-mix(in srgb, ${branch.color} 40%, transparent)` : "var(--color-line)",
                    }}
                    onMouseEnter={() => setHoveredBranch(i)}
                    onMouseLeave={() => setHoveredBranch(null)}
                  >
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <Image
                        src={branch.logo}
                        alt={`Star ${branch.name}`}
                        width={200}
                        height={56}
                        className="h-12 md:h-14 w-auto"
                      />
                      <ArrowUpRight
                        size={18}
                        className="transition-all duration-300 shrink-0"
                        style={{ color: hoveredBranch === i ? branch.color : "var(--color-line)" }}
                      />
                    </div>

                    <p className="text-sm leading-relaxed transition-colors duration-500" style={{ color: hoveredBranch === i ? `color-mix(in srgb, ${branch.color} 60%, var(--color-fg))` : "var(--color-muted)" }}>
                      {branch.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnersSection />

      <FeaturedCaseStudies />

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-fg text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-10">
              Let&apos;s build something<br />that matters
            </h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contact" className="group inline-flex items-center gap-3 bg-fg text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-accent-orange">
                Get in touch
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-3 border-2 border-line text-fg px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:border-fg">
                Learn more about Star
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
