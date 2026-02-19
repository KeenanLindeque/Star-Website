"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";
import { useEffect, useRef } from "react";

const branches = [
  { name: "Projects", href: "/projects", color: "var(--color-branch-projects)", logo: "/logo-projects.svg", logoWhite: "/logo-projects-white.svg", desc: "Complex government and organizational mandates through structured execution and governance." },
  { name: "Training", href: "/training", color: "var(--color-branch-training)", logo: "/logo-training.svg", logoWhite: "/logo-training-white.svg", desc: "Competency-based professional training programs that build practical skills and workforce readiness." },
  { name: "Education", href: "/education", color: "var(--color-branch-education)", logo: "/logo-education.svg", logoWhite: "/logo-education-white.svg", desc: "Academic partnerships, education pathways, and long-term learning programs aligned with national priorities." },
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

export default function Home() {
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
              Star is a multi-disciplinary group delivering training, education, strategic events, and complex project execution for governments and organizations.
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
        clients={[
          "NEOM",
          "Aramco",
          "Red Sea Global",
          "G20 Saudi Secretariat",
          "Public Investment Fund",
          "SABIC",
          "Qiddiya",
          "Ministry of Education",
          "KAUST",
          "British Council",
          "Siemens",
          "MDLBEAST",
          "University of Oxford",
        ]}
        label="Our partners"
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
            <footer className="mt-8 text-subtle text-sm">Star Group, Est. 2024</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Branches */}
      <section id="branches" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our branches</span>
          </motion.div>
          <div className="flex flex-col">
            {branches.map((branch, i) => (
              <motion.div key={branch.href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link
                  href={branch.href}
                  className="group block relative overflow-hidden rounded-2xl transition-all duration-400"
                  style={{ ["--branch-color" as string]: branch.color }}
                >
                  {/* Full branch-color background on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                    style={{ backgroundColor: branch.color }}
                  />

                  <div className="relative flex items-start md:items-center justify-between gap-6 py-8 px-0 group-hover:px-8 transition-all duration-400" style={{ borderBottom: "1px solid var(--color-line)" }}>
                    <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1 flex-col md:flex-row">
                      {/* Color logo (default) */}
                      <div className="relative h-20 md:h-24">
                        <Image
                          src={branch.logo}
                          alt={`Star ${branch.name}`}
                          width={320}
                          height={90}
                          className="h-20 md:h-24 w-auto transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <Image
                          src={branch.logoWhite}
                          alt=""
                          width={320}
                          height={90}
                          className="h-20 md:h-24 w-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <p className="text-muted text-sm leading-relaxed md:ml-auto md:max-w-xs md:text-right transition-colors duration-300 group-hover:text-white/80">{branch.desc}</p>
                    </div>
                    <ArrowUpRight size={20} className="text-muted transition-colors duration-300 group-hover:text-white mt-1 md:mt-0 shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <StatsCounter stats={[
        { value: 150, suffix: "+", label: "Projects delivered" },
        { value: 40, suffix: "+", label: "Training programmes" },
        { value: 12, label: "Countries reached" },
        { value: 98, suffix: "%", label: "Client satisfaction" },
      ]} />

      {/* CTA */}
      <section className="pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, color-mix(in srgb, var(--color-fg) 4%, transparent) 0%, transparent 70%)",
            }}
          />
        </div>
        <LogoStar
          className="absolute text-fg pointer-events-none"
          style={{
            width: 350,
            height: 350,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.03,
            animation: "star-drift 80s linear infinite, star-pulse 6s ease-in-out infinite",
          }}
        />
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-fg tracking-tight mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 500 }}>Ready to get started?</h2>
          <p className="text-muted mb-10 max-w-md mx-auto">Disciplined execution, experienced leadership, and advanced digital systems &mdash; let&apos;s deliver something exceptional.</p>
          <Link href="mailto:hello@star.com" className="group inline-flex items-center gap-3 bg-fg text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-accent-orange">
            Start a conversation
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
