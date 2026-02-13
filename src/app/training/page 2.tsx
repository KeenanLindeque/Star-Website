"use client";

import { BranchHero } from "@/components/branch-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionDivider } from "@/components/section-divider";
import { BookOpen, Award, Monitor, UserCheck, Layers, Lightbulb } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Professional Workshops", description: "Intensive, hands-on workshops designed to build practical skills and accelerate professional growth." },
  { icon: Award, title: "Certification Programmes", description: "Accredited programmes that validate expertise and open doors to new career opportunities." },
  { icon: Monitor, title: "Digital Learning", description: "Online and blended learning experiences that combine flexibility with high-quality instruction." },
  { icon: UserCheck, title: "Executive Coaching", description: "One-to-one and group coaching for senior leaders seeking to sharpen their strategic edge." },
  { icon: Layers, title: "Bespoke Programmes", description: "Custom-designed training solutions tailored to your organisation\u2019s unique needs and objectives." },
  { icon: Lightbulb, title: "Innovation Labs", description: "Immersive sessions that foster creative thinking, problem-solving, and a culture of innovation." },
];

export default function TrainingPage() {
  return (
    <>
      <BranchHero
        label="Training"
        title="Elevating skills, transforming teams"
        description="Star Training delivers professional development programmes and workshops that build capability, confidence, and lasting impact."
      />
      <ServicesGrid services={services} />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our philosophy</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">Learning that sticks</h2>
            <p className="text-muted leading-relaxed mb-4">
              We design every programme around the principle that real learning happens through doing. Our trainers are practitioners first, bringing lived experience and current expertise to every session.
            </p>
            <p className="text-muted leading-relaxed">
              Whether you need to upskill a team of ten or a workforce of ten thousand, Star Training delivers measurable results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
