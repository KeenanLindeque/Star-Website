"use client";

import { BranchHero } from "@/components/branch-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionDivider } from "@/components/section-divider";
import { Calendar, Mic2, MapPin, Ticket, Sparkles, Camera } from "lucide-react";

const services = [
  { icon: Calendar, title: "Conference Management", description: "End-to-end planning and execution of conferences that inform, connect, and inspire audiences." },
  { icon: Mic2, title: "Speaker Curation", description: "Access to a global network of thought leaders, innovators, and industry experts for compelling programming." },
  { icon: MapPin, title: "Venue & Logistics", description: "Seamless venue sourcing, logistics management, and on-the-day coordination for flawless events." },
  { icon: Ticket, title: "Exhibition Design", description: "Immersive exhibition spaces and installations that tell stories and create memorable brand experiences." },
  { icon: Sparkles, title: "Experiential Events", description: "Bespoke experiential activations that engage audiences and create lasting impressions." },
  { icon: Camera, title: "Content Capture", description: "Professional photography, videography, and live streaming to extend your event\u2019s reach and legacy." },
];

export default function EventsPage() {
  return (
    <>
      <BranchHero
        label="Events"
        title="Creating moments that resonate"
        description="Star Events curates conferences, exhibitions, and gatherings that bring people together, spark ideas, and leave lasting impressions."
      />
      <ServicesGrid services={services} />
      <SectionDivider />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our craft</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">Every detail, intentional</h2>
            <p className="text-muted leading-relaxed mb-4">
              An exceptional event is the sum of a thousand well-considered details. From the initial concept through to post-event analysis, Star Events brings meticulous planning, creative ambition, and flawless execution to every gathering.
            </p>
            <p className="text-muted leading-relaxed">
              Whether it\u2019s an intimate roundtable or a large-scale conference, we create experiences that people remember.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
