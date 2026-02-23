"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap, Heart } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const perks = [
  { icon: Briefcase, title: "Growth Opportunities", description: "Clear career pathways, mentorship programmes, and cross-branch exposure to accelerate your professional development." },
  { icon: GraduationCap, title: "Continuous Learning", description: "Access to our own training programmes, professional certifications, and education partnerships at no cost." },
  { icon: Heart, title: "Purpose-Driven Work", description: "Join a team that delivers meaningful impact for communities, governments, and organizations across the globe." },
];

const openings = [
  { title: "Senior Project Manager", branch: "Projects", location: "Riyadh, KSA", type: "Full-time" },
  { title: "Training Programme Designer", branch: "Training", location: "Riyadh, KSA", type: "Full-time" },
  { title: "Events Coordinator", branch: "Events", location: "Riyadh, KSA", type: "Full-time" },
  { title: "Education Partnerships Lead", branch: "Education", location: "Remote", type: "Full-time" },
  { title: "Business Development Manager", branch: "Group", location: "Riyadh, KSA", type: "Full-time" },
  { title: "Digital Content Specialist", branch: "Group", location: "Remote", type: "Contract" },
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
              Join a team that values disciplined execution, continuous learning, and meaningful impact. We&apos;re always looking for exceptional people.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Why Star</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-16">
              Build your career with purpose
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-surface"
              >
                <perk.icon size={24} className="text-accent-orange mb-4" />
                <h3 className="text-fg text-lg font-medium mb-3">{perk.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Open positions</span>
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-16">
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
                className="group flex items-center justify-between py-6 cursor-pointer"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div>
                  <h3 className="text-white text-lg font-medium group-hover:text-accent-orange transition-colors">{job.title}</h3>
                  <p className="text-white/50 text-sm mt-1">
                    {job.branch} &middot; {job.location} &middot; {job.type}
                  </p>
                </div>
                <ArrowUpRight size={20} className="text-white/40 group-hover:text-accent-orange transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
          <motion.p {...fadeUp} className="text-white/40 text-sm mt-12">
            Don&apos;t see the right role? Send your CV to{" "}
            <a href="mailto:careers@star.com" className="text-accent-orange hover:underline">careers@star.com</a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
