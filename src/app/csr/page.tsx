"use client";

import { motion } from "framer-motion";
import { Heart, Award, Briefcase, Puzzle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const initiatives = [
  {
    icon: Heart,
    title: "Joy of Youth",
    description: "Our flagship youth empowerment programme that creates safe, enriching spaces for young people to develop confidence, creativity, and community connections. Through mentorship, skills workshops, and social engagement activities, we invest in the next generation of leaders.",
    color: "#ff6f2a",
  },
  {
    icon: Award,
    title: "Professional Certification for Top 3 Achievers",
    description: "We sponsor fully-funded professional certifications for the top 3 performing individuals in each of our training cohorts. This incentivises excellence and ensures outstanding talent is recognised and rewarded with credentials that advance their careers.",
    color: "#0088e0",
  },
  {
    icon: Briefcase,
    title: "Training & Employment for People in Need",
    description: "We identify, train, and place individuals from underserved communities into sustainable employment. Our end-to-end programme covers skills assessment, competency-based training, job readiness coaching, and direct placement with partner organisations.",
    color: "#1d9b1d",
  },
  {
    icon: Puzzle,
    title: "Autism Training & Inclusion",
    description: "Our specialised training programme equips individuals on the autism spectrum with practical professional skills and workplace readiness. We partner with employers to create inclusive hiring pathways, ensuring meaningful and supported employment opportunities.",
    color: "#9800d1",
  },
];

export default function CSRPage() {
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
              Corporate Social Responsibility
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              At Star, impact extends beyond our commercial work. We are committed to uplifting communities, creating opportunity, and driving meaningful social change.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our initiatives</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4">
              Making a difference, one programme at a time
            </h2>
          </motion.div>

          <div className="space-y-8">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-surface p-8 md:p-10"
              >
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: item.color }} />
                <div className="flex items-start gap-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="text-fg text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Partner with us for social impact
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">
              We are always looking for organisations, funders, and individuals who share our commitment to creating opportunity and driving positive change. Reach out to explore how we can work together.
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
