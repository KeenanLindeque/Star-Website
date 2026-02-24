"use client";

import { motion } from "framer-motion";
import { Handshake, FileCheck, Users, ArrowRight, Check } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const registrationSteps = [
  { step: "01", title: "Submit Expression of Interest", description: "Complete our online registration form with your company details, capabilities, and relevant experience." },
  { step: "02", title: "Documentation Review", description: "Our procurement team reviews your submission, verifying credentials, certifications, and compliance documentation." },
  { step: "03", title: "Due Diligence", description: "We conduct background verification, reference checks, and assess alignment with our quality and ethics standards." },
  { step: "04", title: "Approval & Onboarding", description: "Approved partners and vendors are onboarded to our system and become eligible for engagement opportunities." },
];

const partnerTypes = [
  { icon: Handshake, title: "Strategic Partnerships", description: "Collaborate with Star on large-scale projects, co-deliver training programmes, or jointly pursue government and enterprise mandates." },
  { icon: FileCheck, title: "Vendor Registration", description: "Register as an approved vendor to supply goods, services, or specialised expertise to Star and its branches." },
  { icon: Users, title: "Subcontracting", description: "Join our network of pre-qualified subcontractors for project delivery, event management, training facilitation, and consulting." },
];

export default function PartnershipsPage() {
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
              Partnerships &amp; Opportunities
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              Partner with Star or register as a vendor. We believe in building long-term relationships founded on trust, quality, and mutual growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types — first */}
      <section className="dark-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Opportunities</span>
            <h2 className="text-white text-3xl md:text-4xl font-medium tracking-tight mt-4">
              Ways to work with us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <type.icon size={24} className="text-accent-orange mb-4" />
                <h3 className="text-white text-lg font-medium mb-3">{type.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process Timeline — second */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Process</span>
            <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4">
              Registration process
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-line origin-top md:-translate-x-px"
            />

            <div className="space-y-12 md:space-y-16">
              {registrationSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-20 md:pl-0 md:max-w-[calc(50%-48px)] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-accent-orange text-sm font-semibold">Step {item.step}</span>
                    <h3 className="text-fg text-lg font-medium mt-2 mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-fg flex items-center justify-center shrink-0 z-10"
                  >
                    <Check size={20} className="text-white" />
                  </motion.div>

                  {/* Spacer for other side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeUp} className="mt-16 text-center">
            <a
              href="mailto:partnerships@star.com"
              className="inline-flex items-center gap-3 bg-fg text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-accent-orange"
            >
              Register your interest
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
