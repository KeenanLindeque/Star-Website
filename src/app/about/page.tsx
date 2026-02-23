"use client";

import { motion } from "framer-motion";
import { Users, Target, Globe, Award, Briefcase, GraduationCap, Calendar, BookOpen } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const values = [
  { icon: Target, title: "Disciplined Execution", description: "Every initiative follows a structured methodology with complete transparency, accountability, and measurable outcomes." },
  { icon: Users, title: "People First", description: "We invest in our teams, our communities, and the people we serve — building capacity that lasts beyond any single project." },
  { icon: Globe, title: "Global Reach", description: "Operating across 12 countries, we bring international expertise with deep local understanding to every engagement." },
  { icon: Award, title: "Excellence as Standard", description: "We hold ourselves to the highest professional standards, delivering work that sets benchmarks in every sector we touch." },
];

const leadership = [
  { name: "Executive Leadership", description: "Our executive team brings decades of combined experience across government advisory, management consulting, and large-scale programme delivery." },
  { name: "Operations", description: "A dedicated operations team ensures seamless delivery across all branches, managing resources, timelines, and quality assurance." },
  { name: "Strategy & Growth", description: "Our strategy division identifies new opportunities, builds partnerships, and ensures Star remains at the forefront of industry evolution." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="hero-gradient pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="h-20 mb-10" />
          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="accent-mark mb-8" />
            <h1
              className="text-fg leading-[1.08]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 500, letterSpacing: "-0.03em" }}
            >
              About Star Group
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              A multi-disciplinary group delivering training, education, strategic events, and complex project execution for governments and organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Our story</span>
              <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-6">
                Built on expertise, driven by impact
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                Star Group was founded with a clear purpose: to bridge the gap between ambition and execution. We partner with public and private sector entities to design, operate, and deliver initiatives that require structure, scale, governance, and measurable impact.
              </p>
              <p className="text-muted leading-relaxed">
                Our four branches — Projects, Training, Education, and Events — operate as an integrated ecosystem, allowing us to deliver comprehensive solutions that address the full lifecycle of organizational and governmental mandates.
              </p>
              <p className="text-muted leading-relaxed">
                From mega-project governance to professional certification programmes, from academic partnerships to world-class event execution, Star Group brings disciplined methodology and experienced leadership to every engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infographic — Star ecosystem */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">How we work</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4">
              One group, four branches
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Briefcase, name: "Projects", stat: "150+", label: "delivered", color: "#6d8d9c", href: "/projects" },
              { icon: GraduationCap, name: "Training", stat: "40+", label: "programmes", color: "#0088e0", href: "/training" },
              { icon: BookOpen, name: "Education", stat: "15+", label: "partnerships", color: "#1d9b1d", href: "/education" },
              { icon: Calendar, name: "Events", stat: "200+", label: "executed", color: "#9800d1", href: "/events" },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.a
                  key={b.name}
                  href={b.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group block rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-lg cursor-pointer bg-surface"
                  style={{ borderTop: `3px solid ${b.color}` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: `${b.color}12` }}
                  >
                    <Icon size={22} color={b.color} />
                  </div>
                  <span className="block text-3xl md:text-4xl font-semibold tracking-tight leading-none mb-1" style={{ color: b.color }}>
                    {b.stat}
                  </span>
                  <span className="block text-xs text-muted mb-4">{b.label}</span>
                  <span className="block text-sm font-medium text-fg">Star {b.name}</span>
                </motion.a>
              );
            })}
          </div>

          <motion.p {...fadeUp} className="text-center text-muted text-sm mt-12 max-w-lg mx-auto">
            Our branches operate as an integrated ecosystem — sharing expertise, resources, and governance across every engagement.
          </motion.p>
        </div>
      </section>

      <section className="dark-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Our values</span>
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-16">
              What guides us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <value.icon size={24} className="text-accent-orange mb-4" />
                <h3 className="text-white text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp}>
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Leadership</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-16">
              Our teams
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((team, i) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-surface"
              >
                <h3 className="text-fg text-lg font-medium mb-3">{team.name}</h3>
                <p className="text-muted text-sm leading-relaxed">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
