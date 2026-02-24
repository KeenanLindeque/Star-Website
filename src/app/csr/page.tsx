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
    image: "https://picsum.photos/seed/joy-youth/1200/800",
    tags: ["Youth", "Empowerment", "Mentorship"],
    slides: [
      { title: "The Vision", content: "Joy of Youth was founded on the belief that every young person deserves a safe, enriching space to develop confidence, creativity, and meaningful community connections." },
      { title: "What We Do", content: "Through mentorship, skills workshops, and social engagement activities, we create structured programmes that help young people discover their potential and build lasting relationships." },
      { title: "How It Works", content: "The programme operates across multiple cities with trained facilitators, age-appropriate curricula, and regular community events that bring young people together in supportive environments." },
      { title: "The Difference", content: "Since inception, Joy of Youth has reached thousands of young people, with many alumni going on to become mentors themselves — creating a self-sustaining cycle of youth investment." },
    ],
  },
  {
    client: "Training Initiative",
    project: "Professional Certification for Top 3 Achievers",
    description: "We sponsor fully-funded professional certifications for the top 3 performing individuals in each of our training cohorts, incentivising excellence and rewarding outstanding talent.",
    image: "https://picsum.photos/seed/cert-top3/1200/800",
    tags: ["Certification", "Excellence", "Training"],
    slides: [
      { title: "The Vision", content: "We believe outstanding effort deserves tangible recognition. This initiative rewards the top 3 performers in every training cohort with fully-funded professional certifications." },
      { title: "What We Do", content: "Certifications include PMP, PRINCE2, and other globally recognised qualifications — selected based on each individual's career trajectory and professional development goals." },
      { title: "How It Works", content: "Performance is assessed through a combination of coursework, practical assessments, and peer evaluations. The top 3 achievers receive full sponsorship for their chosen certification, including preparation support." },
      { title: "The Difference", content: "Over 120 certifications awarded to date, accelerating careers and driving a culture of achievement across all our training programmes. Many recipients have gone on to leadership roles." },
    ],
  },
  {
    client: "Social Impact",
    project: "Training & Employment for People in Need",
    description: "We identify, train, and place individuals from underserved communities into sustainable employment through our end-to-end programme.",
    image: "https://picsum.photos/seed/train-employ/1200/800",
    tags: ["Employment", "Skills", "Inclusion"],
    slides: [
      { title: "The Vision", content: "Everyone deserves a path to meaningful employment. We identify, train, and place individuals from underserved communities into sustainable careers through a structured end-to-end programme." },
      { title: "What We Do", content: "Our approach covers skills assessment, competency-based training, job readiness coaching, and direct placement with partner organisations — ensuring participants are truly workforce-ready." },
      { title: "How It Works", content: "We work closely with employers to create tailored placement pathways, ensuring a smooth transition into the workforce with ongoing support for both the new employee and the employer." },
      { title: "The Difference", content: "Hundreds of individuals have been placed into stable employment through this programme, with retention rates significantly exceeding industry averages for similar initiatives." },
    ],
  },
  {
    client: "Inclusion Programme",
    project: "Autism Training & Inclusion",
    description: "Our specialised training programme equips individuals on the autism spectrum with practical professional skills and workplace readiness.",
    image: "https://picsum.photos/seed/autism-inclusion/1200/800",
    tags: ["Autism", "Inclusion", "Employment"],
    slides: [
      { title: "The Vision", content: "We believe in creating workplaces where neurodiversity is valued. Our specialised programme equips individuals on the autism spectrum with practical professional skills and workplace readiness." },
      { title: "What We Do", content: "The programme includes customised training modules designed around individual strengths, on-the-job coaching, and ongoing support for both employees and their employers." },
      { title: "How It Works", content: "We partner directly with employers to create inclusive hiring pathways, providing sensitivity training for teams, workspace accommodations guidance, and dedicated support throughout the placement." },
      { title: "The Difference", content: "Meaningful and supported employment opportunities for individuals who are often overlooked — proving that inclusive workplaces benefit everyone through diverse perspectives and dedicated talent." },
    ],
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
