"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const articles = [
  {
    title: "The Future of Project Management in Saudi Arabia's Vision 2030",
    category: "Report",
    date: "February 2026",
    description: "An in-depth analysis of how mega-projects are reshaping governance frameworks and creating new standards for project delivery across the Kingdom.",
    tags: ["Projects", "Governance", "KSA"],
  },
  {
    title: "Competency-Based Training: Why Traditional Approaches Fall Short",
    category: "Article",
    date: "January 2026",
    description: "Exploring the shift from knowledge-based to competency-based training models and their measurable impact on workforce readiness.",
    tags: ["Training", "Education"],
  },
  {
    title: "Strategic Events as Catalysts for National Transformation",
    category: "Article",
    date: "December 2025",
    description: "How large-scale strategic events drive economic development, cultural exchange, and international positioning for emerging economies.",
    tags: ["Events", "Strategy"],
  },
  {
    title: "Building Inclusive Workforces: A Guide for Organisations",
    category: "Report",
    date: "November 2025",
    description: "Practical frameworks for creating inclusive hiring practices, with a focus on neurodiversity and accessible workplace design.",
    tags: ["CSR", "Inclusion"],
  },
  {
    title: "Digital Transformation in Professional Certification",
    category: "Article",
    date: "October 2025",
    description: "How digital platforms and LMS technology are revolutionising access to professional certifications and continuing education.",
    tags: ["LMS", "Digital"],
  },
  {
    title: "Annual Impact Report 2025",
    category: "Report",
    date: "September 2025",
    description: "Star Group's comprehensive annual report covering project outcomes, training impact metrics, CSR initiatives, and financial performance.",
    tags: ["Annual Report", "Impact"],
  },
];

export default function ArticlesPage() {
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
              Articles &amp; Reports
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              Insights, research, and thought leadership from across Star Group. Explore our publications on project delivery, training innovation, and social impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <motion.a
                key={article.title}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group block p-8 rounded-2xl bg-surface hover:bg-accent-orange transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] uppercase tracking-widest font-medium px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-accent-orange"
                    style={{ backgroundColor: "var(--color-line)", color: "var(--color-muted)" }}
                  >
                    {article.category}
                  </span>
                  <ArrowUpRight size={18} className="text-muted group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-fg text-xl font-medium mb-3 group-hover:text-white transition-colors">{article.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4 group-hover:text-white/60 transition-colors">{article.description}</p>
                <div className="flex items-center gap-2 text-subtle text-xs group-hover:text-white/40 transition-colors">
                  <Calendar size={12} />
                  {article.date}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
