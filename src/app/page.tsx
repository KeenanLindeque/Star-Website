"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StatsCounter } from "@/components/stats-counter";

const branches = [
  { name: "Projects", href: "/projects", color: "var(--color-branch-projects)", logo: "/logo-projects.svg", logoMono: "/logo-projects-mono.svg", desc: "Complex government and organizational mandates through structured execution and governance." },
  { name: "Training", href: "/training", color: "var(--color-branch-training)", logo: "/logo-training.svg", logoMono: "/logo-training-mono.svg", desc: "Competency-based professional training programs that build practical skills and workforce readiness." },
  { name: "Education", href: "/education", color: "var(--color-branch-education)", logo: "/logo-education.svg", logoMono: "/logo-education-mono.svg", desc: "Academic partnerships, education pathways, and long-term learning programs aligned with national priorities." },
  { name: "Events", href: "/events", color: "var(--color-branch-events)", logo: "/logo-events.svg", logoMono: "/logo-events-mono.svg", desc: "Full-service strategic events from concept development to end-to-end execution." },
];

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Spacer for the floating logo — outside animation so it stays aligned */}
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

      {/* Statement */}
      <section className="dark-section py-32 px-6">
        <div className="max-w-6xl mx-auto">
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
                  className="group block relative overflow-hidden rounded-xl transition-all duration-400"
                  style={{ ["--branch-color" as string]: branch.color }}
                >
                  {/* Background tint on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400 rounded-xl"
                    style={{ backgroundColor: branch.color }}
                  />
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: branch.color }}
                  />

                  <div className="relative flex items-start md:items-center justify-between gap-6 py-8 pl-0 group-hover:pl-8 transition-all duration-400" style={{ borderBottom: "1px solid var(--color-line)" }}>
                    <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1 flex-col md:flex-row">
                      {/* Logo: default visible, monochrome on hover */}
                      <div className="relative h-20 md:h-24">
                        <Image
                          src={branch.logo}
                          alt={`Star ${branch.name}`}
                          width={320}
                          height={90}
                          className="h-20 md:h-24 w-auto transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <Image
                          src={branch.logoMono}
                          alt=""
                          width={320}
                          height={90}
                          className="h-20 md:h-24 w-auto absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <p className="text-muted text-sm leading-relaxed md:ml-auto md:max-w-xs md:text-right">{branch.desc}</p>
                    </div>
                    <ArrowUpRight size={20} className="text-muted transition-colors duration-300 group-hover:text-[var(--branch-color)] mt-1 md:mt-0 shrink-0" />
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
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
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
