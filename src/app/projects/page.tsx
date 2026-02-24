"use client";

import { BranchHero } from "@/components/branch-hero";
import { CaseStudies } from "@/components/case-studies";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";

const BRANCH_COLOR = "var(--color-branch-projects)";
const LOGO = "/logo-projects.svg";

const caseStudies = [
  {
    client: "NEOM",
    project: "Infrastructure Program Management Office",
    description: "End-to-end PMO setup and execution for a multi-billion dollar infrastructure program spanning urban planning, logistics, and utilities delivery across a greenfield megaproject.",
    image: "https://picsum.photos/seed/neom-pmo/1200/800",
    tags: ["PMO", "Infrastructure", "Governance"],
    slides: [
      { title: "The Brief", content: "NEOM required a fully operational PMO to coordinate a multi-billion dollar infrastructure program spanning urban planning, logistics, and utilities delivery across a greenfield megaproject site." },
      { title: "Our Approach", content: "We embedded within the NEOM project structure, establishing governance frameworks, risk registers, and milestone tracking systems to serve as the backbone for cross-functional coordination across 12 workstreams." },
      { title: "Delivery", content: "Our team deployed on-site, building real-time dashboards, standardized reporting templates, and escalation protocols that enabled the program leadership to maintain visibility across all active workstreams." },
      { title: "Impact", content: "The PMO became the central coordination layer for the entire infrastructure program, reducing decision-making delays by 45% and establishing governance standards adopted across other NEOM programs." },
    ],
  },
  {
    client: "Red Sea Global",
    project: "Vendor Procurement & Coordination",
    description: "Design and implementation of a centralized procurement framework managing 40+ vendors across hospitality, marine, and sustainability workstreams.",
    image: "https://picsum.photos/seed/rsg-procurement/1200/800",
    tags: ["Procurement", "Multi-vendor", "Compliance"],
    slides: [
      { title: "The Brief", content: "Red Sea Global needed a unified procurement framework to manage 40+ vendors across hospitality, marine, and sustainability workstreams — replacing fragmented, workstream-specific processes." },
      { title: "Our Approach", content: "We designed a centralized vendor evaluation and onboarding process with compliance monitoring dashboards, standardized contract templates, and coordinated multi-vendor delivery scheduling." },
      { title: "Delivery", content: "The framework was deployed across three distinct geographic zones, with our team managing vendor compliance, delivery coordination, and performance tracking through a single integrated platform." },
      { title: "Impact", content: "Procurement cycle time reduced by 35%, vendor compliance rates increased to 97%, and the framework became the organizational standard for all future procurement activity." },
    ],
  },
  {
    client: "Qiddiya",
    project: "Entertainment District Delivery",
    description: "Structured project delivery for a flagship entertainment district including stakeholder alignment, risk management, and milestone-based reporting.",
    image: "https://picsum.photos/seed/qiddiya-ent/1200/800",
    tags: ["Execution", "Risk Management", "Reporting"],
    slides: [
      { title: "The Brief", content: "Qiddiya required structured project delivery for a 200,000 sqm flagship entertainment precinct — aligning international design consultants with local contractors under tight deadlines." },
      { title: "Our Approach", content: "We established a single governance umbrella covering stakeholder alignment, risk management, and milestone-based reporting, ensuring all parties worked from a unified delivery plan." },
      { title: "Delivery", content: "From concept through handover, we managed the full delivery lifecycle — coordinating design reviews, construction milestones, quality inspections, and commissioning across all precinct zones." },
      { title: "Impact", content: "The entertainment district was delivered on schedule with zero critical defects at handover, and the governance model was adopted as Qiddiya's standard for subsequent precinct developments." },
    ],
  },
  {
    client: "Public Investment Fund",
    project: "Portfolio Governance Framework",
    description: "Development of a governance and performance tracking framework for a portfolio of national strategic projects, enabling centralized oversight and accountability.",
    image: "https://picsum.photos/seed/pif-governance/1200/800",
    tags: ["Governance", "Portfolio", "Strategy"],
    slides: [
      { title: "The Brief", content: "PIF needed a portfolio-level governance framework to provide centralized oversight, accountability, and performance tracking across 25+ concurrent national strategic initiatives." },
      { title: "Our Approach", content: "We designed a portfolio-level KPI architecture with automated reporting pipelines, enabling leadership to monitor progress, budget variance, and risk exposure from a single dashboard." },
      { title: "Delivery", content: "The framework was implemented with custom-built reporting tools, standardized data collection processes, and regular governance cadences that kept all initiative leads aligned and accountable." },
      { title: "Impact", content: "PIF leadership gained real-time visibility across the entire portfolio, reducing reporting overhead by 50% and enabling proactive risk intervention before issues escalated." },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ ["--branch-highlight" as string]: "var(--color-branch-projects)" }}>
      <BranchHero
        label="Delivering what others can't"
        headline="Structured execution for complex mandates"
        description="Star Projects delivers complex government and organizational mandates through structured project management, disciplined execution, and strong governance frameworks."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
        gradientStrength={22}
      />
      <ClientsTicker
        clients={["NEOM", "Red Sea Global", "Qiddiya", "ROSHN", "Public Investment Fund", "Aramco", "ACWA Power", "Lucid Motors"]}
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
