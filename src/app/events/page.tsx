"use client";

import { BranchHero } from "@/components/branch-hero";
import { CaseStudies } from "@/components/case-studies";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";

const BRANCH_COLOR = "var(--color-branch-events)";
const LOGO = "/logo-events.svg";

const caseStudies = [
  { client: "G20 Saudi Secretariat", project: "G20 Leaders Summit — Event Operations", description: "Full operational delivery for a G20 Leaders Summit workstream, including venue management, protocol coordination, media facilitation, and multi-government stakeholder logistics.", detail: "We managed 14 parallel venues, coordinated protocol for 20 heads of state, and facilitated 200+ media accreditations with zero security incidents across the 3-day summit.", image: "https://picsum.photos/seed/g20-summit/1200/800", tags: ["Summit", "Protocol", "Government"] },
  { client: "Saudi Tourism Authority", project: "International Tourism Investment Forum", description: "End-to-end delivery of a flagship investment forum attracting 3,000+ delegates, with sponsorship activation, speaker curation, and immersive experience design.", detail: "The forum generated $2.4B in signed investment commitments, with our team managing everything from venue build-up to a fully produced gala dinner for 800 VIP guests.", image: "https://picsum.photos/seed/sta-forum/1200/800", tags: ["Forum", "Investment", "Tourism"] },
  { client: "MDLBEAST", project: "Soundstorm Festival — VIP Experience", description: "Designed and managed the VIP guest journey for a 700,000-attendee music festival, covering hospitality suites, artist meet-and-greets, and premium access zones.", detail: "Our team designed 6 distinct VIP zones, managed backstage logistics for 80+ international artists, and delivered a seamless guest journey from arrival to after-party.", image: "https://picsum.photos/seed/mdlbeast-vip/1200/800", tags: ["Festival", "VIP", "Experience"] },
  { client: "Ministry of Culture", project: "National Heritage Awards Ceremony", description: "Concept-to-execution delivery of an annual heritage awards ceremony, including creative direction, stage design, live production, and broadcast coordination.", detail: "The ceremony was broadcast live to 4 million viewers, featuring a custom-designed stage, holographic projections, and a curated cultural performance program.", image: "https://picsum.photos/seed/moc-awards/1200/800", tags: ["Awards", "Creative", "Broadcast"] },
];

export default function EventsPage() {
  return (
    <div style={{ ["--branch-highlight" as string]: "var(--color-branch-events)" }}>
      <BranchHero
        label="Events"
        headline="Strategic events, end-to-end"
        description="Star Events is a full-service strategic events partner delivering end-to-end government and corporate events from concept development to execution."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
      />
      <ClientsTicker
        clients={[
          "World Economic Forum",
          "G20 Saudi Secretariat",
          "Saudi Tourism Authority",
          "Expo 2030",
          "MDLBEAST",
          "Diriyah Gate",
          "Formula E",
          "Riyadh Season",
          "Ministry of Culture",
          "KAEC",
        ]}
        branchColor={BRANCH_COLOR}
      />
      <CaseStudies studies={caseStudies} branchColor={BRANCH_COLOR} />
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
    </div>
  );
}
