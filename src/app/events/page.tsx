"use client";

import { BranchHero } from "@/components/branch-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { Calendar, Mic2, MapPin, Ticket, Sparkles, Camera } from "lucide-react";

const BRANCH_COLOR = "var(--color-branch-events)";
const LOGO = "/logo-events.svg";

const services = [
  { icon: Calendar, title: "Strategy & Planning", description: "Concept and positioning, agenda design, budgeting, timeline planning, KPI definition and outcome alignment." },
  { icon: Sparkles, title: "Creative & Experience Design", description: "Creative direction and theming, branding, stage and spatial design, and guest journey planning." },
  { icon: MapPin, title: "Production & Technical", description: "Venue sourcing, audio-visual and staging, exhibition build-up, show calling and live management." },
  { icon: Mic2, title: "Guest & Protocol Management", description: "Invitations and registration, VIP and protocol management, speaker coordination, on-site hospitality." },
  { icon: Ticket, title: "Sponsorship & Partnerships", description: "Sponsorship packaging, partner coordination, brand visibility management, and sponsor activations." },
  { icon: Camera, title: "Operations & Compliance", description: "On-site operations, health and safety, permits and insurance, contingency planning and risk management." },
];

export default function EventsPage() {
  return (
    <>
      <BranchHero
        label="Events"
        headline="Strategic events, end-to-end"
        description="Star Events is a full-service strategic events partner delivering end-to-end government and corporate events from concept development to execution."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
      />
      <ServicesGrid services={services} branchColor={BRANCH_COLOR} />
      <StatsCounter
        stats={[
          { value: 60, suffix: "+", label: "Events delivered" },
          { value: 25000, suffix: "+", label: "Attendees hosted" },
          { value: 200, suffix: "+", label: "Speakers curated" },
          { value: 10, label: "Countries" },
        ]}
        accentColor={BRANCH_COLOR}
      />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">What we deliver</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">High-impact events aligned with institutional objectives</h2>
            <p className="text-muted leading-relaxed">
              Forums, summits, award ceremonies, trade shows, exhibitions, corporate stakeholder events, and bespoke purpose-built gatherings &mdash; designed and operated to deliver measurable outcomes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
