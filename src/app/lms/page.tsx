"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Award, Star } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const courses = [
  { name: "Project Management Professional (PMP)", provider: "PMI", category: "Project Management", duration: "35 hours", level: "Advanced", color: "#0088e0" },
  { name: "PRINCE2 Foundation & Practitioner", provider: "Axelos", category: "Project Management", duration: "40 hours", level: "Foundation", color: "#6d8d9c" },
  { name: "Certified ScrumMaster (CSM)", provider: "Scrum Alliance", category: "Agile", duration: "16 hours", level: "Foundation", color: "#1d9b1d" },
  { name: "ITIL 4 Foundation", provider: "Axelos", category: "IT Service Management", duration: "24 hours", level: "Foundation", color: "#9800d1" },
  { name: "Six Sigma Green Belt", provider: "ASQ", category: "Quality Management", duration: "30 hours", level: "Intermediate", color: "#0088e0" },
  { name: "Certified Business Analysis Professional", provider: "IIBA", category: "Business Analysis", duration: "35 hours", level: "Advanced", color: "#ff6f2a" },
];

export default function LMSPage() {
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
              Self-Learning
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              Access world-class professional certifications through our integrated learning platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Certifications</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4">
              Available programmes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl bg-surface overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                {/* Thumbnail header */}
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: `${course.color}10` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: `${course.color}18` }} />
                  <div className="relative z-10 text-center">
                    <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${course.color}20`, color: course.color }}>
                      {course.category}
                    </span>
                    <div className="mt-3">
                      <Award size={32} style={{ color: course.color }} className="mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-fg text-base font-medium leading-snug mb-3 group-hover:text-accent-orange transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-muted text-xs mb-4">{course.provider}</p>

                  <div className="flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star size={12} />
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-fg text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-accent-orange"
            >
              Visit our store
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
