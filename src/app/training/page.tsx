"use client";

import { BranchHero } from "@/components/branch-hero";
import { CaseStudies } from "@/components/case-studies";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";

const BRANCH_COLOR = "var(--color-branch-training)";
const LOGO = "/logo-training.svg";

const caseStudies = [
  { client: "Aramco", project: "Technical Workforce Upskilling Program", description: "Designed and delivered a 12-month technical upskilling program for 800+ engineers across downstream operations, covering safety systems, process optimization, and digital tools.", detail: "The program combined classroom instruction with on-site practical labs, resulting in a 34% improvement in operational efficiency metrics and a 96% participant satisfaction rate.", image: "https://picsum.photos/seed/aramco-training/1200/800", tags: ["Technical Training", "Energy", "Workforce"] },
  { client: "SABIC", project: "Leadership Development Academy", description: "Built a multi-tier leadership development academy for emerging and senior managers, incorporating coaching, simulations, and 360-degree assessments.", detail: "Over 18 months, 120 leaders completed the program across three tiers. Post-program tracking showed measurable improvement in team performance scores and internal promotion rates.", image: "https://picsum.photos/seed/sabic-leadership/1200/800", tags: ["Leadership", "Corporate", "Assessment"] },
  { client: "Ministry of Education", project: "National Educator Training Initiative", description: "Nationwide train-the-trainer program equipping 2,000+ educators with modern pedagogical methods, digital literacy, and student engagement strategies.", detail: "Delivered across 13 regions simultaneously using a blended model, with localized facilitators supported by a centralized content and quality assurance team.", image: "https://picsum.photos/seed/moe-educators/1200/800", tags: ["Education", "Government", "Scale"] },
  { client: "Siemens", project: "Industrial Automation Certification", description: "Intensive certification program in industrial automation and control systems for technical staff across three regional facilities.", detail: "Participants earned internationally recognized certifications in PLC programming, SCADA systems, and industrial networking, with a 98% first-attempt pass rate.", image: "https://picsum.photos/seed/siemens-auto/1200/800", tags: ["Certification", "Industrial", "Blended"] },
];

export default function TrainingPage() {
  return (
    <div style={{ ["--branch-highlight" as string]: "var(--color-branch-training)" }}>
      <BranchHero
        label="Skill-building that sticks"
        headline="Building practical skills and workforce readiness"
        description="Star Training designs and delivers structured professional training programs that are competency-based, outcome-driven, and aligned with sector needs."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
      />
      <ClientsTicker
        clients={[
          { name: "Aramco", logo: "/logos/aramco.svg" },
          { name: "NEOM", logo: "/logos/neom.svg" },
          { name: "STC", logo: "/logos/stc.svg" },
          { name: "SABIC", logo: "/logos/sabic.svg" },
          { name: "Red Sea Global", logo: "/logos/red-sea-global.svg" },
          { name: "Almarai", logo: "/logos/almarai.svg" },
          { name: "Siemens", logo: "/logos/siemens.svg" },
          { name: "Deloitte", logo: "/logos/deloitte.svg" },
          { name: "PwC", logo: "/logos/pwc.svg" },
        ]}
        branchColor={BRANCH_COLOR}
      />
      <CaseStudies studies={caseStudies} branchColor={BRANCH_COLOR} />
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
    </div>
  );
}
