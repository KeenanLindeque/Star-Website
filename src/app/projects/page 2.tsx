"use client";

import { BranchHero } from "@/components/branch-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionDivider } from "@/components/section-divider";
import { Briefcase, ClipboardList, Users, BarChart3, Target, Settings } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Project Management", description: "Full lifecycle management from inception through to delivery, ensuring milestones are met with precision." },
  { icon: ClipboardList, title: "Strategic Planning", description: "Comprehensive planning frameworks that align objectives, resources, and timelines for optimal outcomes." },
  { icon: Users, title: "Team Augmentation", description: "Skilled professionals embedded within your teams to accelerate delivery and transfer knowledge." },
  { icon: BarChart3, title: "Performance Analytics", description: "Data-driven insights and reporting that track progress and inform decision-making at every stage." },
  { icon: Target, title: "Consultancy", description: "Expert advisory services to help navigate complex challenges and identify new opportunities." },
  { icon: Settings, title: "Process Optimisation", description: "Streamlining workflows and operations to maximise efficiency and reduce overhead." },
];

export default function ProjectsPage() {
  return (
    <>
      <BranchHero
        label="Projects"
        title="Delivering complex initiatives with clarity"
        description="Star Projects provides end-to-end project management, strategic consultancy, and delivery expertise. We turn ambitious visions into tangible results."
      />
      <ServicesGrid services={services} />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our approach</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">Built on rigour, delivered with care</h2>
            <p className="text-muted leading-relaxed mb-4">
              Every project we undertake follows a structured methodology refined over years of practice. We combine industry-leading frameworks with a human-centred approach that keeps stakeholders aligned and outcomes on track.
            </p>
            <p className="text-muted leading-relaxed">
              From initial scoping through to post-delivery review, Star Projects is your trusted partner for initiatives that demand excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
