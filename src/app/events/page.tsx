"use client";

import { BranchHero } from "@/components/branch-hero";
import { CaseStudies } from "@/components/case-studies";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";

const BRANCH_COLOR = "var(--color-branch-events)";
const LOGO = "/logo-events.svg";

const caseStudies = [
  {
    client: "G20 Saudi Secretariat",
    project: "G20 Leaders Summit — Event Operations",
    description: "Full operational delivery for a G20 Leaders Summit workstream, including venue management, protocol coordination, media facilitation, and multi-government stakeholder logistics.",
    image: "https://picsum.photos/seed/g20-summit/1200/800",
    tags: ["Summit", "Protocol", "Government"],
    slides: [
      { title: "The Brief", content: "The G20 Saudi Secretariat needed full operational delivery for a Leaders Summit workstream — covering 14 parallel venues, protocol for 20 heads of state, and 200+ media accreditations." },
      { title: "Our Approach", content: "We deployed a multi-tier operations team with dedicated venue managers, protocol officers, and media liaisons, all coordinated through a centralized command center with real-time communications." },
      { title: "Delivery", content: "Over 3 days, we managed venue logistics, VIP movements, media facilitation, and security coordination simultaneously across all 14 venues with zero incidents or protocol breaches." },
      { title: "Impact", content: "Zero security incidents across the entire summit. The operational framework we developed was recognized as a benchmark and has since been referenced for subsequent international events in the Kingdom." },
    ],
  },
  {
    client: "Saudi Tourism Authority",
    project: "International Tourism Investment Forum",
    description: "End-to-end delivery of a flagship investment forum attracting 3,000+ delegates, with sponsorship activation, speaker curation, and immersive experience design.",
    image: "https://picsum.photos/seed/sta-forum/1200/800",
    tags: ["Forum", "Investment", "Tourism"],
    slides: [
      { title: "The Brief", content: "The Saudi Tourism Authority required end-to-end delivery of a flagship investment forum — from sponsorship activation and speaker curation to immersive experience zones for 3,000+ delegates." },
      { title: "Our Approach", content: "We designed the forum as a blend of structured investment sessions and immersive tourism experiences, with curated networking opportunities and a VIP track for high-value investors." },
      { title: "Delivery", content: "Our team managed everything from venue build-up and AV production to a fully produced gala dinner for 800 VIP guests, with real-time delegate engagement tracking throughout." },
      { title: "Impact", content: "The forum generated $2.4B in signed investment commitments and established itself as the Kingdom's premier tourism investment event, with confirmed plans for annual continuation." },
    ],
  },
  {
    client: "MDLBEAST",
    project: "Soundstorm Festival — VIP Experience",
    description: "Designed and managed the VIP guest journey for a 700,000-attendee music festival, covering hospitality suites, artist meet-and-greets, and premium access zones.",
    image: "https://picsum.photos/seed/mdlbeast-vip/1200/800",
    tags: ["Festival", "VIP", "Experience"],
    slides: [
      { title: "The Brief", content: "MDLBEAST needed a premium VIP experience layer for their 700,000-attendee Soundstorm festival — covering hospitality suites, artist meet-and-greets, and exclusive access zones." },
      { title: "Our Approach", content: "We designed 6 distinct VIP zones, each with a unique theme and service tier, and created a seamless guest journey from arrival through to after-party with dedicated concierge support." },
      { title: "Delivery", content: "Our team managed backstage logistics for 80+ international artists, real-time guest flow management, and premium F&B operations across all VIP zones simultaneously over 3 festival days." },
      { title: "Impact", content: "VIP guest satisfaction exceeded 95%, with MDLBEAST reporting record premium ticket sales and requesting an expanded VIP program for the following year's edition." },
    ],
  },
  {
    client: "Ministry of Culture",
    project: "National Heritage Awards Ceremony",
    description: "Concept-to-execution delivery of an annual heritage awards ceremony, including creative direction, stage design, live production, and broadcast coordination.",
    image: "https://picsum.photos/seed/moc-awards/1200/800",
    tags: ["Awards", "Creative", "Broadcast"],
    slides: [
      { title: "The Brief", content: "The Ministry of Culture required concept-to-execution delivery of a nationally televised heritage awards ceremony, with creative direction, stage design, and live broadcast coordination." },
      { title: "Our Approach", content: "We developed a creative concept blending traditional heritage elements with contemporary stage technology, including holographic projections and a curated cultural performance program." },
      { title: "Delivery", content: "The ceremony was produced with a custom-designed stage, full broadcast infrastructure, and coordinated live performances — managed by our team from rehearsals through to the final broadcast." },
      { title: "Impact", content: "The ceremony was broadcast live to 4 million viewers, received widespread acclaim for its production quality, and was renewed as an annual event under our continued management." },
    ],
  },
];

export default function EventsPage() {
  return (
    <div style={{ ["--branch-highlight" as string]: "var(--color-branch-events)" }}>
      <BranchHero
        label="Moments that matter"
        headline="Strategic events, end-to-end"
        description="Star Events is a full-service strategic events partner delivering end-to-end government and corporate events from concept development to execution."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
      />
      <ClientsTicker
        clients={["World Economic Forum", "MDLBEAST", "Formula E", "Diriyah Gate"]}
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
