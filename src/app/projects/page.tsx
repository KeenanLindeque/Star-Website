"use client";

import { BranchHero } from "@/components/branch-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { Briefcase, ClipboardList, Users, BarChart3, Target, Settings } from "lucide-react";

const BRANCH_COLOR = "var(--color-branch-projects)";
const LOGO = "/logo-projects.svg";

const services = [
  { icon: ClipboardList, title: "Methodology & Governance", description: "Stage-gated project management aligned with international standards. Governance structures, milestone mapping, and steering committees." },
  { icon: BarChart3, title: "Tools & Digital Systems", description: "Real-time dashboards, milestone tracking, risk management logs, budget oversight, and client-access portals for full transparency." },
  { icon: Briefcase, title: "Procurement & Vendor Management", description: "Vendor evaluation, tender and RFP support, contract structuring, multi-vendor coordination, and compliance monitoring." },
  { icon: Users, title: "SME Mobilization", description: "Identification and onboarding of subject matter experts, regional partnerships, and project-specific expertise assembly." },
  { icon: Target, title: "Risk & Performance", description: "Risk identification and mitigation planning, performance tracking and reporting, change management and stakeholder alignment." },
  { icon: Settings, title: "Execution & Delivery", description: "Work breakdown structures, resource allocation, milestone delivery, and post-project review and handover." },
];

export default function ProjectsPage() {
  return (
    <>
      <BranchHero
        label="Projects"
        headline="Structured execution for complex mandates"
        description="Star Projects delivers complex government and organizational mandates through structured project management, disciplined execution, and strong governance frameworks."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
      />
      <ServicesGrid services={services} branchColor={BRANCH_COLOR} />
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
    </>
  );
}
