"use client";

import { motion } from "framer-motion";
import { Download, Mic, Newspaper, Monitor, Camera, ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const logoAssets = [
  { name: "Star Group Logo (Dark)", format: "SVG / PNG", file: "/logo-dark.svg" },
  { name: "Star Group Logo (White)", format: "SVG / PNG", file: "/logo-white.svg" },
  { name: "Star Projects Logo", format: "SVG / PNG", file: "/logo-projects.svg" },
  { name: "Star Training Logo", format: "SVG / PNG", file: "/logo-training.svg" },
  { name: "Star Education Logo", format: "SVG / PNG", file: "/logo-education.svg" },
  { name: "Star Events Logo", format: "SVG / PNG", file: "/logo-events.svg" },
];

const features = [
  {
    icon: Monitor,
    type: "Conference",
    title: "Saudi Vision 2030 Project Delivery Summit",
    description: "Star Group presented on structured governance frameworks for mega-project delivery at the annual PD Summit in Riyadh.",
    date: "January 2026",
  },
  {
    icon: Mic,
    type: "Podcast",
    title: "The Future of Professional Training — Gulf Business Radio",
    description: "Our Training division discussed competency-based approaches and the evolution of workforce readiness in the GCC region.",
    date: "December 2025",
  },
  {
    icon: Newspaper,
    type: "Newspaper",
    title: "Star Group Expands Operations Across 12 Countries",
    description: "Featured in Business Day covering Star's strategic expansion and growing portfolio of government and enterprise mandates.",
    date: "November 2025",
  },
  {
    icon: Camera,
    type: "Magazine",
    title: "Inside Star Events: How Strategic Events Drive National Transformation",
    description: "An exclusive feature in Event Manager Magazine profiling Star Events' approach to large-scale strategic event delivery.",
    date: "October 2025",
  },
  {
    icon: Mic,
    type: "Podcast",
    title: "Building Inclusive Workforces — The Impact Hour",
    description: "Star's CSR team shared insights on autism training programmes and inclusive employment strategies on this popular impact-focused podcast.",
    date: "September 2025",
  },
  {
    icon: Monitor,
    type: "Conference",
    title: "EdTech Africa 2025 — Keynote Address",
    description: "Star Education delivered the keynote on academic partnerships and digital learning pathways at Africa's largest education technology conference.",
    date: "August 2025",
  },
];

export default function MediaPage() {
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
              Media &amp; News
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              Download our brand assets, and explore where Star Group has been featured — from conferences and podcasts to newspapers and magazines.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Brand assets</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4">
              Downloadable logos
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {logoAssets.map((logo, i) => (
              <motion.a
                key={logo.name}
                href={logo.file}
                download
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-surface hover:bg-fg transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-bg flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  <Download size={18} className="text-muted group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-fg text-sm font-medium group-hover:text-white transition-colors">{logo.name}</h3>
                  <p className="text-subtle text-xs mt-0.5 group-hover:text-white/50 transition-colors">{logo.format}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Featured in</span>
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mt-4">
              Conferences, podcasts &amp; press
            </h2>
          </motion.div>
          <div className="space-y-6">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex items-start gap-6 p-6 rounded-2xl transition-all duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                  <item.icon size={20} className="text-accent-orange" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-accent-orange font-medium">{item.type}</span>
                    <span className="text-white/30 text-xs">{item.date}</span>
                  </div>
                  <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
                <ArrowUpRight size={18} className="text-white/30 shrink-0 mt-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
