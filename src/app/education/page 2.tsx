"use client";

import { BranchHero } from "@/components/branch-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionDivider } from "@/components/section-divider";
import { GraduationCap, BookMarked, School, Globe, PenTool, Library } from "lucide-react";

const services = [
  { icon: GraduationCap, title: "Academic Programmes", description: "Structured degree and diploma pathways developed in partnership with leading educational institutions." },
  { icon: BookMarked, title: "Curriculum Design", description: "Research-backed curriculum development that meets accreditation standards and prepares learners for the real world." },
  { icon: School, title: "Institutional Partnerships", description: "Strategic collaborations with universities and colleges to expand access and enhance educational offerings." },
  { icon: Globe, title: "International Programmes", description: "Cross-border educational initiatives that bring world-class learning to diverse communities." },
  { icon: PenTool, title: "Assessment & Accreditation", description: "Robust assessment frameworks and accreditation support that uphold the highest academic standards." },
  { icon: Library, title: "Research & Development", description: "Applied research initiatives that advance knowledge and inform best practices in education." },
];

export default function EducationPage() {
  return (
    <>
      <BranchHero
        label="Education"
        title="Shaping futures through knowledge"
        description="Star Education builds structured learning pathways, curricula, and academic partnerships that create lasting impact for learners and institutions alike."
      />
      <ServicesGrid services={services} />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our mission</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">Education as a force for change</h2>
            <p className="text-muted leading-relaxed mb-4">
              We believe that access to quality education is the single most powerful lever for individual and societal progress. Star Education works at the intersection of academia, industry, and community to create programmes that are rigorous, relevant, and transformative.
            </p>
            <p className="text-muted leading-relaxed">
              From curriculum design to institutional partnerships, we bring a systems-level perspective to everything we do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
