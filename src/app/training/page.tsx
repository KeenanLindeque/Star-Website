"use client";

import { BranchHero } from "@/components/branch-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { BookOpen, Award, Monitor, UserCheck, Layers, Lightbulb } from "lucide-react";

const BRANCH_COLOR = "var(--color-branch-training)";
const LOGO = "/logo-training.svg";

const services = [
  { icon: BookOpen, title: "Technical & Professional Training", description: "Structured programs building practical skills aligned with sector and organizational requirements." },
  { icon: Award, title: "Leadership Development", description: "Leadership and supervisory development programs for emerging and senior professionals." },
  { icon: Layers, title: "Sector-Specific Programs", description: "Skill development programs tailored to specific industry sectors and regulatory environments." },
  { icon: Monitor, title: "Corporate Training Solutions", description: "Custom-designed training solutions for organizations seeking measurable workforce improvement." },
  { icon: Lightbulb, title: "Short Courses & Workshops", description: "Intensive short courses and workshops focused on rapid skill acquisition and practical application." },
  { icon: UserCheck, title: "Blended Delivery", description: "Flexible blended and in-person training delivery models designed for maximum accessibility and impact." },
];

export default function TrainingPage() {
  return (
    <>
      <BranchHero
        label="Training"
        headline="Building practical skills and workforce readiness"
        description="Star Training designs and delivers structured professional training programs that are competency-based, outcome-driven, and aligned with sector needs."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
      />
      <ServicesGrid services={services} branchColor={BRANCH_COLOR} />
      <StatsCounter
        stats={[
          { value: 40, suffix: "+", label: "Programs delivered" },
          { value: 5000, suffix: "+", label: "Professionals trained" },
          { value: 96, suffix: "%", label: "Satisfaction rate" },
          { value: 12, label: "Industry sectors" },
        ]}
        accentColor={BRANCH_COLOR}
      />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our focus</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">Competency-based, outcome-driven</h2>
            <p className="text-muted leading-relaxed">
              Every program we deliver is designed around measurable competency outcomes. We focus on practical skills that translate directly to workplace performance and organizational capability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
