"use client";

import { BranchHero } from "@/components/branch-hero";
import { CaseStudies } from "@/components/case-studies";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";

const BRANCH_COLOR = "var(--color-branch-education)";
const LOGO = "/logo-education.svg";

const caseStudies = [
  { client: "KAUST", project: "Graduate Research Pathway Program", description: "Designed a structured research pathway connecting Saudi graduates with international doctoral programs, including mentorship frameworks and institutional agreements.", detail: "We established partnerships with 8 international universities and built a mentorship matching system that paired 200+ graduates with academic supervisors in their research fields.", image: "https://picsum.photos/seed/kaust-research/1200/800", tags: ["Research", "Graduate", "Partnerships"] },
  { client: "British Council", project: "English Language Excellence Initiative", description: "National-scale English language proficiency program serving 1,500+ government-sponsored students preparing for international university admission.", detail: "The initiative achieved a 78% improvement in average IELTS scores across cohorts, with dedicated preparation tracks for STEM, humanities, and business disciplines.", image: "https://picsum.photos/seed/bc-english/1200/800", tags: ["Language", "Government", "Scale"] },
  { client: "University of Oxford", project: "Executive Education Partnership", description: "Co-developed an executive education partnership placing senior professionals into tailored short-course programs at Oxford, with return-to-work alignment.", detail: "Three cohorts of 25 executives completed bespoke programs in strategic leadership, digital transformation, and public policy, with post-program career tracking and institutional feedback loops.", image: "https://picsum.photos/seed/oxford-exec/1200/800", tags: ["Executive", "International", "Advisory"] },
  { client: "Ministry of Education", project: "National Scholarship Management System", description: "End-to-end design and management of a scholarship program covering application processing, university matching, placement tracking, and alumni engagement.", detail: "We processed 4,000+ applications annually, managing placements across 15 countries with real-time academic progress dashboards and automated compliance reporting.", image: "https://picsum.photos/seed/moe-scholarships/1200/800", tags: ["Scholarships", "Management", "Nationwide"] },
];

export default function EducationPage() {
  return (
    <div style={{ ["--branch-highlight" as string]: "var(--color-branch-education)" }}>
      <BranchHero
        label="Learning without limits"
        headline="Pathways, partnerships, and long-term learning"
        description="Star Education develops and manages education pathways, academic partnerships, and long-term learning programs aligned with national and institutional priorities."
        branchColor={BRANCH_COLOR}
        logo={LOGO}
      />
      <ClientsTicker
        clients={[
          { name: "University of Oxford", logo: "/logos/oxford.svg" },
          { name: "Monash University", logo: "/logos/monash.svg" },
          { name: "KAUST", logo: "/logos/kaust.svg" },
          { name: "UNESCO", logo: "/logos/unesco.svg" },
          { name: "British Council", logo: "/logos/british-council.svg" },
          { name: "Imperial College", logo: "/logos/imperial.svg" },
          { name: "GEMS Education", logo: "/logos/gems.svg" },
        ]}
        branchColor={BRANCH_COLOR}
      />
      <CaseStudies studies={caseStudies} branchColor={BRANCH_COLOR} />
      <StatsCounter
        stats={[
          { value: 20, suffix: "+", label: "Academic partnerships" },
          { value: 3000, suffix: "+", label: "Students supported" },
          { value: 15, label: "Programs accredited" },
          { value: 6, label: "Countries" },
        ]}
        accentColor={BRANCH_COLOR}
      />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our mission</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">Bridging professional development with formal education</h2>
            <p className="text-muted leading-relaxed">
              We connect professional development with formal education and international academic partnerships, creating programs that serve both individual advancement and national workforce priorities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
