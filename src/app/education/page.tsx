"use client";

import { BranchHero } from "@/components/branch-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { GraduationCap, BookMarked, School, Globe, PenTool, Library } from "lucide-react";

const BRANCH_COLOR = "var(--color-branch-education)";
const LOGO = "/logo-education.svg";

const services = [
  { icon: GraduationCap, title: "Education Pathway Design", description: "Structured learning pathways aligned with national and institutional priorities for long-term impact." },
  { icon: School, title: "University Partnerships", description: "International university partnerships and institutional representation connecting learners to global opportunities." },
  { icon: BookMarked, title: "Scholarship Programs", description: "Scholarship program design and management, from application frameworks to placement support." },
  { icon: Globe, title: "Student Placement", description: "Student application support, placement coordination, and academic progress tracking across institutions." },
  { icon: PenTool, title: "Return-to-Work Alignment", description: "Strategies that bridge academic completion with professional re-entry and career development." },
  { icon: Library, title: "Academic Advisory", description: "Education advisory and academic program coordination for institutions and government bodies." },
];

export default function EducationPage() {
  return (
    <>
      <BranchHero
        label="Education"
        headline="Pathways, partnerships, and long-term learning"
        description="Star Education develops and manages education pathways, academic partnerships, and long-term learning programs aligned with national and institutional priorities."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
      />
      <ServicesGrid services={services} branchColor={BRANCH_COLOR} />
      <StatsCounter
        stats={[
          { value: 20, suffix: "+", label: "Academic partnerships" },
          { value: 3000, suffix: "+", label: "Students supported" },
          { value: 15, label: "Programs accredited" },
          { value: 6, label: "Countries" },
        ]}
        accentColor={BRANCH_COLOR}
      />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our mission</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">Bridging professional development with formal education</h2>
            <p className="text-muted leading-relaxed">
              We connect professional development with formal education and international academic partnerships, creating programs that serve both individual advancement and national workforce priorities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
