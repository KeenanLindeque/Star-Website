"use client";

import { BranchHero } from "@/components/branch-hero";
import { CaseStudies } from "@/components/case-studies";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";

const BRANCH_COLOR = "var(--color-branch-projects)";
const LOGO = "/logo-projects.svg";

const caseStudies = [
  { client: "NEOM", project: "Infrastructure Program Management Office", description: "End-to-end PMO setup and execution for a multi-billion dollar infrastructure program spanning urban planning, logistics, and utilities delivery across a greenfield megaproject.", detail: "Our team embedded within the NEOM project structure, establishing governance frameworks, risk registers, and milestone tracking systems that served as the backbone for cross-functional coordination across 12 workstreams.", image: "https://picsum.photos/seed/neom-pmo/1200/800", tags: ["PMO", "Infrastructure", "Governance"] },
  { client: "Red Sea Global", project: "Vendor Procurement & Coordination", description: "Design and implementation of a centralized procurement framework managing 40+ vendors across hospitality, marine, and sustainability workstreams.", detail: "We built a unified vendor evaluation and onboarding process, implemented compliance monitoring dashboards, and coordinated multi-vendor delivery schedules across three distinct geographic zones.", image: "https://picsum.photos/seed/rsg-procurement/1200/800", tags: ["Procurement", "Multi-vendor", "Compliance"] },
  { client: "Qiddiya", project: "Entertainment District Delivery", description: "Structured project delivery for a flagship entertainment district including stakeholder alignment, risk management, and milestone-based reporting.", detail: "From concept through handover, we managed the delivery of a 200,000 sqm entertainment precinct, aligning international design consultants with local contractors under a single governance umbrella.", image: "https://picsum.photos/seed/qiddiya-ent/1200/800", tags: ["Execution", "Risk Management", "Reporting"] },
  { client: "Public Investment Fund", project: "Portfolio Governance Framework", description: "Development of a governance and performance tracking framework for a portfolio of national strategic projects, enabling centralized oversight and accountability.", detail: "We designed a portfolio-level KPI architecture with automated reporting pipelines, enabling the PIF leadership team to monitor progress, budget variance, and risk exposure across 25+ concurrent initiatives.", image: "https://picsum.photos/seed/pif-governance/1200/800", tags: ["Governance", "Portfolio", "Strategy"] },
];

export default function ProjectsPage() {
  return (
    <div style={{ ["--branch-highlight" as string]: "var(--color-branch-projects)" }}>
      <BranchHero
        label="Projects"
        headline="Structured execution for complex mandates"
        description="Star Projects delivers complex government and organizational mandates through structured project management, disciplined execution, and strong governance frameworks."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
        gradientStrength={22}
      />
      <ClientsTicker
        clients={[
          "NEOM",
          "Red Sea Global",
          "Qiddiya",
          "ROSHN",
          "Public Investment Fund",
          "Aramco",
          "Ministry of Defense",
          "ACWA Power",
          "Lucid Motors",
          "The Line",
        ]}
        branchColor={BRANCH_COLOR}
      />
      <CaseStudies studies={caseStudies} branchColor={BRANCH_COLOR} />
      <StatsCounter
        stats={[
          { value: 150, suffix: "+", label: "Projects delivered" },
          { value: 35, label: "Active clients" },
          { value: 8, label: "Countries" },
          { value: 99, suffix: "%", label: "On-time delivery" },
        ]}
        accentColor={BRANCH_COLOR}
      />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our approach</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">Multi-stakeholder initiatives, delivered with oversight</h2>
            <p className="text-muted leading-relaxed">
              We are entrusted with initiatives that require oversight, compliance, procurement management, and performance control. Every project follows a structured methodology with complete transparency and accountability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
