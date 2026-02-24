"use client";

import { motion } from "framer-motion";
import { Users, Target, Globe, Award } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const branches = [
  { name: "Training", logo: "/logo-training.svg", stat: "40+", label: "Training programmes", color: "#0088e0", href: "/training" },
  { name: "Education", logo: "/logo-education.svg", stat: "15+", label: "Academic partnerships", color: "#1d9b1d", href: "/education" },
  { name: "Projects", logo: "/logo-projects.svg", stat: "150+", label: "Projects delivered", color: "#6d8d9c", href: "/projects" },
  { name: "Events", logo: "/logo-events.svg", stat: "200+", label: "Events executed", color: "#9800d1", href: "/events" },
];

const values = [
  { icon: Target, title: "Disciplined Execution", description: "Every initiative follows a structured methodology with complete transparency, accountability, and measurable outcomes." },
  { icon: Users, title: "People First", description: "We invest in our teams, our communities, and the people we serve — building capacity that lasts beyond any single project." },
  { icon: Globe, title: "Global Reach", description: "Operating across 12 countries, we bring international expertise with deep local understanding to every engagement." },
  { icon: Award, title: "Excellence as Standard", description: "We hold ourselves to the highest professional standards, delivering work that sets benchmarks in every sector we touch." },
];

export default function AboutPage() {
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
              About Star
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              A multi-disciplinary group delivering training, education, strategic events, and complex project execution for governments and organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infographic — front and centre with real logos */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">How we work</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4">
              One group, four branches
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((b, i) => (
              <motion.a
                key={b.name}
                href={b.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block rounded-2xl bg-surface p-8 md:p-10 transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-[inset_0_0_0_2px_var(--branch-color)]"
                style={{ ["--branch-color" as string]: b.color, borderLeft: `4px solid ${b.color}` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between mb-6">
                  <Image
                    src={b.logo}
                    alt={`Star ${b.name}`}
                    width={180}
                    height={50}
                    className="h-12 w-auto"
                  />
                  <span className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: b.color }}>
                    {b.stat}
                  </span>
                </div>
                <p className="text-muted text-sm">{b.label}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Big statement text */}
      <section className="dark-section py-28 md:py-36 px-6 relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-white leading-[1.3] tracking-tight" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              <span className="text-accent-orange">&ldquo;</span>
              We partner with public and private sector entities to design, operate, and deliver initiatives that require structure, scale, governance, and measurable impact.
              <span className="text-accent-orange">&rdquo;</span>
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our values</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-16">
              What guides us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-surface"
              >
                <value.icon size={24} className="text-accent-orange mb-4" />
                <h3 className="text-fg text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
