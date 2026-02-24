"use client";

import { motion } from "framer-motion";
import { CaseStudies } from "@/components/case-studies";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const initiatives = [
  {
    client: "Community Programme",
    project: "Joy of Youth",
    description: "Our flagship youth empowerment programme that creates safe, enriching spaces for young people to develop confidence, creativity, and community connections.",
    detail: "Through mentorship, skills workshops, and social engagement activities, we invest in the next generation of leaders. The programme operates across multiple cities and has reached thousands of young people since its inception.",
    image: "https://picsum.photos/seed/joy-youth/1200/800",
    tags: ["Youth", "Empowerment", "Mentorship"],
  },
  {
    client: "Training Initiative",
    project: "Professional Certification for Top 3 Achievers",
    description: "We sponsor fully-funded professional certifications for the top 3 performing individuals in each of our training cohorts, incentivising excellence and rewarding outstanding talent.",
    detail: "Certifications include PMP, PRINCE2, and other globally recognised qualifications. This initiative has awarded over 120 certifications to date, accelerating careers and driving a culture of achievement across our training programmes.",
    image: "https://picsum.photos/seed/cert-top3/1200/800",
    tags: ["Certification", "Excellence", "Training"],
  },
  {
    client: "Social Impact",
    project: "Training & Employment for People in Need",
    description: "We identify, train, and place individuals from underserved communities into sustainable employment through our end-to-end programme.",
    detail: "Our approach covers skills assessment, competency-based training, job readiness coaching, and direct placement with partner organisations. We work closely with employers to ensure a smooth transition into the workforce and ongoing support.",
    image: "https://picsum.photos/seed/train-employ/1200/800",
    tags: ["Employment", "Skills", "Inclusion"],
  },
  {
    client: "Inclusion Programme",
    project: "Autism Training & Inclusion",
    description: "Our specialised training programme equips individuals on the autism spectrum with practical professional skills and workplace readiness.",
    detail: "We partner with employers to create inclusive hiring pathways, ensuring meaningful and supported employment opportunities. The programme includes customised training modules, on-the-job coaching, and ongoing support for both employees and employers.",
    image: "https://picsum.photos/seed/autism-inclusion/1200/800",
    tags: ["Autism", "Inclusion", "Employment"],
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
              Social Impact
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              At Star, impact extends beyond our commercial work. We are committed to uplifting communities, creating opportunity, and driving meaningful social change.
            </p>
          </motion.div>
        </div>
      </section>

      <CaseStudies studies={initiatives} branchColor="#ff6f2a" />

      <section className="dark-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Partner with us for social impact
            </h2>
            <p className="text-white/60 leading-relaxed mb-10">
              We are always looking for organisations, funders, and individuals who share our commitment to creating opportunity and driving positive change.
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
