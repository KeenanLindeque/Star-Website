"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart, BookOpen, Monitor, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const features = [
  { icon: BookOpen, title: "Course Catalogue", description: "Browse our full range of professional certification programmes, from project management to specialised technical qualifications." },
  { icon: Monitor, title: "Online Learning", description: "Access course materials, video lectures, assessments, and resources through our integrated learning management system." },
  { icon: ShoppingCart, title: "Simple Checkout", description: "Purchase certifications directly through our secure e-commerce platform powered by Shopify, with multiple payment options." },
  { icon: Award, title: "Digital Credentials", description: "Receive verifiable digital certificates upon completion, recognised by industry bodies and employers worldwide." },
];

const certifications = [
  { name: "Project Management Professional (PMP)", provider: "PMI", category: "Project Management" },
  { name: "PRINCE2 Foundation & Practitioner", provider: "Axelos", category: "Project Management" },
  { name: "Certified ScrumMaster (CSM)", provider: "Scrum Alliance", category: "Agile" },
  { name: "ITIL 4 Foundation", provider: "Axelos", category: "IT Service Management" },
  { name: "Six Sigma Green Belt", provider: "ASQ", category: "Quality Management" },
  { name: "Certified Business Analysis Professional", provider: "IIBA", category: "Business Analysis" },
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
              LMS &amp; Professional Certifications
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              Access world-class professional certifications through our integrated learning management system and e-commerce platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Platform</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4">
              Learn, certify, advance
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-surface"
              >
                <feature.icon size={24} className="text-accent-orange mb-4" />
                <h3 className="text-fg text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Certifications</span>
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-16">
              Available programmes
            </h2>
          </motion.div>
          <div className="flex flex-col">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center justify-between py-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div>
                  <h3 className="text-white text-lg font-medium">{cert.name}</h3>
                  <p className="text-white/50 text-sm mt-1">
                    {cert.provider} &middot; {cert.category}
                  </p>
                </div>
                <ArrowUpRight size={20} className="text-white/40 shrink-0" />
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-accent-orange text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
            >
              Visit our Shopify store
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
