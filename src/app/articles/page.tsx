"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const featured = {
  title: "The Future of Project Management in Saudi Arabia's Vision 2030",
  category: "Report",
  date: "February 2026",
  description: "An in-depth analysis of how mega-projects are reshaping governance frameworks and creating new standards for project delivery across the Kingdom.",
  tags: ["Projects", "Governance", "KSA"],
};

const articles = [
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
    description: "Star's comprehensive annual report covering project outcomes, training impact metrics, CSR initiatives, and financial performance.",
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
              Insights, research, and thought leadership from across Star. Explore our publications on project delivery, training innovation, and social impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured article */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group block mb-16"
          >
            <div className="relative rounded-2xl overflow-hidden bg-fg p-10 md:p-14">
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-accent-orange text-white">
                    {featured.category}
                  </span>
                  <span className="text-white/30 text-xs flex items-center gap-1.5">
                    <Calendar size={11} />
                    {featured.date}
                  </span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-white/50 text-sm md:text-base leading-relaxed mb-6 max-w-lg">{featured.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-white/25 font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={24} className="absolute top-10 right-10 md:top-14 md:right-14 text-white/20 group-hover:text-accent-orange transition-colors duration-300" />
              <svg viewBox="0 0 155 130" fill="none" className="absolute -right-12 -bottom-12 w-[300px] h-[300px] text-white/[0.03] pointer-events-none">
                <path d="M153.7 75.5h-35.2c-1.16 0-1.74 1.4-.92 2.22l24.88 24.88c.51.51.51 1.33 0 1.84l-13.02 13.02c-.51.51-1.33.51-1.84 0l-24.89-24.89c-.82-.82-2.22-.24-2.22.92v35.2c0 .72-.58 1.3-1.3 1.3h-18.41c-.72 0-1.3-.58-1.3-1.3v-35.2c0-1.16-1.4-1.74-2.22-.92l-24.89 24.89c-.51.51-1.33.51-1.84 0l-13.02-13.02c-.51-.51-.51-1.33 0-1.84l16.8-16.8c8.74-8.74 19.98-7.66 19.98-7.66v-1.24c0-.77-.63-1.4-1.4-1.4H30.36c-.72 0-1.3-.58-1.3-1.3V56.71c0-.72.58-1.3 1.3-1.3h35.19c1.16 0 1.74-1.4.92-2.22L41.59 28.31c-.51-.51-.51-1.33 0-1.84l13.02-13.02c.51-.51 1.33-.51 1.84 0l24.89 24.89c.82.82 2.22.24 2.22-.92V1.3c0-.72.58-1.3 1.3-1.3h18.41c.72 0 1.3.58 1.3 1.3v35.2c0 1.16 1.4 1.74 2.22.92l24.89-24.89c.51-.51 1.33-.51 1.84 0l13.02 13.02c.51.51.51 1.33 0 1.84L129.73 44.2c-8.74 8.74-19.98 7.66-19.98 7.66v1.35c0 .72.58 1.3 1.3 1.3h46.71c.72 0 1.3.58 1.3 1.3v18.41c0 .72-.58 1.3-1.3 1.3Z" fill="currentColor"/>
              </svg>
            </div>
          </motion.a>

          {/* Article list */}
          <div className="space-y-0 divide-y divide-line">
            {articles.map((article, i) => (
              <motion.a
                key={article.title}
                href="#"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 cursor-pointer"
              >
                <div className="flex items-center gap-3 md:w-48 shrink-0">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-accent-orange">
                    {article.category}
                  </span>
                  <span className="text-subtle text-xs flex items-center gap-1">
                    <Calendar size={10} />
                    {article.date}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-fg text-lg font-medium group-hover:text-accent-orange transition-colors duration-200 mb-1">{article.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{article.description}</p>
                </div>

                <div className="shrink-0 hidden md:flex items-center">
                  <div className="w-10 h-10 rounded-full border border-line group-hover:border-accent-orange group-hover:bg-accent-orange flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={16} className="text-muted group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
