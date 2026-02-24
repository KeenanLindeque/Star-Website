"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ClientsTicker } from "@/components/clients-ticker";
import { useEffect, useRef } from "react";

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
                  className="group block relative overflow-hidden rounded-2xl border-2 border-transparent transition-all duration-300 hover:border-[var(--branch-color)]"
                  style={{ ["--branch-color" as string]: branch.color }}
                >
                  <div className="relative flex items-start md:items-center justify-between gap-6 py-8 px-4 group-hover:px-8 transition-all duration-300" style={{ borderBottom: "1px solid var(--color-line)" }}>
                    <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1 flex-col md:flex-row">
                      <div className="relative h-20 md:h-24">
                        <Image
                          src={branch.logo}
                          alt={`Star ${branch.name}`}
                          width={320}
                          height={90}
                          className="h-20 md:h-24 w-auto"
                        />
                      </div>
                      <p className="text-muted text-sm leading-relaxed md:ml-auto md:max-w-xs md:text-right transition-colors duration-300">{branch.desc}</p>
                    </div>
                    <ArrowUpRight size={20} className="text-line transition-colors duration-300 group-hover:text-[var(--branch-color)] mt-1 md:mt-0 shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our partners</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 leading-tight">
              Strategic alliances that<br />drive impact
            </h2>
          </motion.div>

          {/* Exclusive Partners */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-accent-orange">Exclusive Partners</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["AHLEI", "British Council", "University of Oxford"].map((partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative group p-6 md:p-8 rounded-2xl border-2 border-accent-orange/20 bg-accent-orange/[0.03] hover:border-accent-orange/40 transition-all duration-300"
                >
                  <span className="absolute top-4 right-4 text-[8px] uppercase tracking-widest font-bold text-accent-orange/50">Exclusive</span>
                  <span className="text-fg text-lg md:text-xl font-semibold tracking-tight">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Partners */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-fg/40">Strategic Partners</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Siemens", "Coursera", "Pearson", "City & Guilds"].map((partner, i) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group p-6 rounded-2xl border border-line hover:border-fg/20 transition-all duration-300"
                >
                  <span className="text-fg text-base font-semibold tracking-tight">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Accreditation & Affiliations */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-fg/40">Accreditations &amp; Affiliations</span>
              <div className="flex-1 h-px bg-line" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {["TVTC", "HRDF", "NCAAA", "ETEC", "Saudi Tourism Authority"].map((org, i) => (
                <motion.div
                  key={org}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center justify-center p-4 rounded-xl bg-surface hover:bg-white transition-all duration-200 text-center"
                >
                  <span className="text-sm font-semibold text-muted">{org}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-fg text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6">
              Let&apos;s build something<br />that matters
            </h2>
            <p className="text-muted text-base md:text-lg max-w-md mx-auto mb-10">
              Whether it&apos;s a training programme, a national event, or a complex project — we&apos;re ready.
            </p>
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
