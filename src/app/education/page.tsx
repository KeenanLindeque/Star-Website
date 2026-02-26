"use client";

import { Suspense } from "react";
import { BranchHero } from "@/components/branch-hero";
import { CaseStudies } from "@/components/case-studies";
import { SectionDivider } from "@/components/section-divider";
import { StatsCounter } from "@/components/stats-counter";
import { ClientsTicker } from "@/components/clients-ticker";

const BRANCH_COLOR = "var(--color-branch-education)";
const LOGO = "/logo-education.svg";

const caseStudies = [
  {
    client: "KAUST",
    project: "Graduate Research Pathway Program",
    description: "Designed a structured research pathway connecting Saudi graduates with international doctoral programs, including mentorship frameworks and institutional agreements.",
    image: "https://picsum.photos/seed/kaust-research/1200/800",
    tags: ["Research", "Graduate", "Partnerships"],
    slides: [
      { title: "The Brief", content: "KAUST needed a structured pipeline to connect high-potential Saudi graduates with international doctoral programs, removing barriers around applications, mentorship, and institutional alignment." },
      { title: "Our Approach", content: "We established partnerships with 8 international universities and designed a mentorship matching system that paired graduates with academic supervisors based on research interests and career goals." },
      { title: "Delivery", content: "Over 200 graduates were matched with supervisors across partner institutions. We managed the full lifecycle from candidate screening and application support through to placement confirmation and onboarding." },
      { title: "Impact", content: "The pathway has become KAUST's primary mechanism for international research placements, with acceptance rates 3x higher than unstructured applications and strong alumni engagement." },
    ],
  },
  {
    client: "British Council",
    project: "English Language Excellence Initiative",
    description: "National-scale English language proficiency program serving 1,500+ government-sponsored students preparing for international university admission.",
    image: "https://picsum.photos/seed/bc-english/1200/800",
    tags: ["Language", "Government", "Scale"],
    slides: [
      { title: "The Brief", content: "The British Council required a national-scale English proficiency program to prepare 1,500+ government-sponsored students for international university admission within strict timelines." },
      { title: "Our Approach", content: "We designed dedicated preparation tracks for STEM, humanities, and business disciplines — each with targeted vocabulary, academic writing, and test strategy modules aligned to IELTS requirements." },
      { title: "Delivery", content: "Programs were delivered across multiple centers with standardized content, regular practice examinations, and individualized progress tracking to ensure no student fell behind." },
      { title: "Impact", content: "The initiative achieved a 78% improvement in average IELTS scores across all cohorts, with over 90% of students meeting their target band requirements for university admission." },
    ],
  },
  {
    client: "University of Oxford",
    project: "Executive Education Partnership",
    description: "Co-developed an executive education partnership placing senior professionals into tailored short-course programs at Oxford, with return-to-work alignment.",
    image: "https://picsum.photos/seed/oxford-exec/1200/800",
    tags: ["Executive", "International", "Advisory"],
    slides: [
      { title: "The Brief", content: "Oxford sought a regional partner to identify and prepare senior professionals for bespoke short-course executive programs, ensuring candidates could apply learning directly to their roles." },
      { title: "Our Approach", content: "We co-designed three program tracks — strategic leadership, digital transformation, and public policy — each with pre-program assessments and post-program return-to-work action plans." },
      { title: "Delivery", content: "Three cohorts of 25 executives completed the programs, with our team managing candidate selection, visa logistics, pre-departure briefings, and post-program career tracking." },
      { title: "Impact", content: "Participants reported measurable improvements in strategic decision-making, with institutional feedback loops enabling continuous refinement of program content for future cohorts." },
    ],
  },
  {
    client: "Ministry of Education",
    project: "National Scholarship Management System",
    description: "End-to-end design and management of a scholarship program covering application processing, university matching, placement tracking, and alumni engagement.",
    image: "https://picsum.photos/seed/moe-scholarships/1200/800",
    tags: ["Scholarships", "Management", "Nationwide"],
    slides: [
      { title: "The Brief", content: "The Ministry needed a comprehensive scholarship management system to handle 4,000+ annual applications, university matching across 15 countries, and full placement lifecycle tracking." },
      { title: "Our Approach", content: "We designed an end-to-end system covering application processing, eligibility assessment, university matching algorithms, placement tracking dashboards, and alumni engagement programs." },
      { title: "Delivery", content: "The system was deployed nationally with real-time academic progress dashboards, automated compliance reporting, and a dedicated support team managing placements across 15 countries." },
      { title: "Impact", content: "Processing time reduced by 60%, placement accuracy improved significantly, and the automated reporting framework became the Ministry's standard for all scholarship programs." },
    ],
  },
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
        clients={["University of Oxford", "Monash University", "KAUST", "UNESCO", "British Council", "Imperial College", "GEMS Education"]}
        branchColor={BRANCH_COLOR}
      />
      <Suspense>
        <CaseStudies studies={caseStudies} branchColor={BRANCH_COLOR} />
      </Suspense>
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
