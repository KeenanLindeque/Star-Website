"use client";

import { Suspense } from "react";
import { BranchHero } from "@/components/branch-hero";
import { CaseStudies } from "@/components/case-studies";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";

const BRANCH_COLOR = "var(--color-branch-training)";
const LOGO = "/logo-training.svg";

const caseStudies = [
  {
    client: "Aramco",
    project: "Technical Workforce Upskilling Program",
    description: "Designed and delivered a 12-month technical upskilling program for 800+ engineers across downstream operations, covering safety systems, process optimization, and digital tools.",
    image: "https://picsum.photos/seed/aramco-training/1200/800",
    tags: ["Technical Training", "Energy", "Workforce"],
    slides: [
      { title: "The Brief", content: "Aramco needed to upskill 800+ downstream engineers in safety systems, process optimization, and digital tools within a 12-month window — without disrupting operational output." },
      { title: "Our Approach", content: "We designed a blended curriculum combining classroom instruction with on-site practical labs, organized into modular sprints so engineers could rotate through training without taking entire teams offline." },
      { title: "Delivery", content: "Training was delivered across 6 operational sites simultaneously, with dedicated facilitators embedded at each location and centralized quality assurance ensuring consistency across all cohorts." },
      { title: "Impact", content: "The program achieved a 34% improvement in operational efficiency metrics, a 96% participant satisfaction rate, and became the template for Aramco's ongoing workforce development strategy." },
    ],
  },
  {
    client: "SABIC",
    project: "Leadership Development Academy",
    description: "Built a multi-tier leadership development academy for emerging and senior managers, incorporating coaching, simulations, and 360-degree assessments.",
    image: "https://picsum.photos/seed/sabic-leadership/1200/800",
    tags: ["Leadership", "Corporate", "Assessment"],
    slides: [
      { title: "The Brief", content: "SABIC sought a structured leadership pipeline that could develop emerging managers and prepare senior leaders for executive roles, using data-driven methods over traditional classroom-only programs." },
      { title: "Our Approach", content: "We built a three-tier academy model — emerging leaders, mid-level managers, and senior executives — each with tailored coaching, business simulations, and 360-degree assessment frameworks." },
      { title: "Delivery", content: "Over 18 months, 120 leaders completed the program across all three tiers, with each cohort progressing through a structured 6-month learning journey combining workshops, one-on-one coaching, and peer learning." },
      { title: "Impact", content: "Post-program tracking showed measurable improvement in team performance scores, a 40% increase in internal promotion rates, and leadership readiness benchmarks exceeding initial targets." },
    ],
  },
  {
    client: "Ministry of Education",
    project: "National Educator Training Initiative",
    description: "Nationwide train-the-trainer program equipping 2,000+ educators with modern pedagogical methods, digital literacy, and student engagement strategies.",
    image: "https://picsum.photos/seed/moe-educators/1200/800",
    tags: ["Education", "Government", "Scale"],
    slides: [
      { title: "The Brief", content: "The Ministry of Education needed to rapidly modernize teaching methods across 13 regions, equipping 2,000+ educators with digital literacy and contemporary student engagement strategies." },
      { title: "Our Approach", content: "We developed a train-the-trainer cascade model — certifying master trainers who then delivered standardized content regionally, supported by a central quality assurance team and digital learning platform." },
      { title: "Delivery", content: "Programs ran simultaneously across all 13 regions using a blended delivery model. Localized facilitators adapted content to regional needs while maintaining national curriculum alignment." },
      { title: "Impact", content: "Over 2,000 educators certified in modern pedagogy, with measurable improvements in student engagement scores and a scalable training model now adopted as the national standard." },
    ],
  },
  {
    client: "Siemens",
    project: "Industrial Automation Certification",
    description: "Intensive certification program in industrial automation and control systems for technical staff across three regional facilities.",
    image: "https://picsum.photos/seed/siemens-auto/1200/800",
    tags: ["Certification", "Industrial", "Blended"],
    slides: [
      { title: "The Brief", content: "Siemens required its regional technical staff to earn internationally recognized certifications in PLC programming, SCADA systems, and industrial networking — within aggressive timelines." },
      { title: "Our Approach", content: "We designed an intensive blended certification program combining hands-on lab exercises with structured theory modules, mapped directly to international certification standards and Siemens' internal competency framework." },
      { title: "Delivery", content: "Training was delivered across three regional facilities with dedicated lab environments, real industrial hardware, and examination preparation support including mock assessments and peer study groups." },
      { title: "Impact", content: "Participants achieved a 98% first-attempt pass rate across all certification tracks, with Siemens subsequently expanding the program to two additional facilities." },
    ],
  },
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
        clients={["Aramco", "NEOM", "STC", "SABIC", "Red Sea Global", "Almarai", "Siemens", "Deloitte", "PwC"]}
        branchColor={BRANCH_COLOR}
      />
      <Suspense>
        <CaseStudies studies={caseStudies} branchColor={BRANCH_COLOR} />
      </Suspense>
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
