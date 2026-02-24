"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const openings = [
  { title: "Senior Project Manager", branch: "Projects", location: "Riyadh, KSA", type: "Full-time", color: "#6d8d9c" },
  { title: "Training Programme Designer", branch: "Training", location: "Riyadh, KSA", type: "Full-time", color: "#0088e0" },
  { title: "Events Coordinator", branch: "Events", location: "Riyadh, KSA", type: "Full-time", color: "#9800d1" },
  { title: "Education Partnerships Lead", branch: "Education", location: "Remote", type: "Full-time", color: "#1d9b1d" },
  { title: "Business Development Manager", branch: "Group", location: "Riyadh, KSA", type: "Full-time", color: "var(--color-fg)" },
  { title: "Digital Content Specialist", branch: "Group", location: "Remote", type: "Contract", color: "var(--color-fg)" },
];

export default function CareersPage() {
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
              Careers at Star
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              We&apos;re always looking for exceptional people. Explore our current openings below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Open positions</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4">
              Current openings
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {openings.map((job, i) => (
              <motion.a
                key={job.title}
                href={`mailto:careers@star.com?subject=Application: ${job.title}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center justify-between py-6 cursor-pointer border-b border-line"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-10 rounded-full shrink-0" style={{ backgroundColor: job.color }} />
                  <div>
                    <h3 className="text-fg text-lg font-medium group-hover:text-accent-orange transition-colors">{job.title}</h3>
                    <p className="text-muted text-sm mt-1">
                      Star {job.branch} &middot; {job.location} &middot; {job.type}
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-muted group-hover:text-accent-orange transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-muted text-sm mt-12">
            Don&apos;t see the right role? Send your CV to{" "}
            <a href="mailto:careers@star.com" className="text-accent-orange hover:underline">careers@star.com</a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
