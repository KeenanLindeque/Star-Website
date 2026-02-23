"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: "011 433 3380", href: "tel:0114333380" },
  { icon: Mail, label: "Email", value: "hello@star.com", href: "mailto:hello@star.com" },
  { icon: MapPin, label: "Office", value: "Johannesburg, South Africa", href: undefined },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 08:00 – 17:00", href: undefined },
];

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              Get in touch with our team. We&apos;re here to discuss how Star can support your next initiative.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <span className="text-[11px] uppercase tracking-widest text-muted font-medium">Get in touch</span>
              <h2 className="text-fg text-3xl md:text-4xl font-medium tracking-tight mt-4 mb-8">
                Let&apos;s start a conversation
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="icon-box shrink-0">
                      <item.icon size={18} className="text-muted" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-muted font-medium">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="block text-fg text-lg font-medium hover:text-accent-orange transition-colors mt-1">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-fg text-lg font-medium mt-1">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="bg-surface rounded-2xl p-8 md:p-10">
                <h3 className="text-fg text-xl font-medium mb-6">Send us a message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-muted font-medium block mb-2">Full name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-bg border border-line text-fg text-sm outline-none focus:border-accent-orange transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-muted font-medium block mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-bg border border-line text-fg text-sm outline-none focus:border-accent-orange transition-colors" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-widest text-muted font-medium block mb-2">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-bg border border-line text-fg text-sm outline-none focus:border-accent-orange transition-colors resize-none" placeholder="Tell us about your project or enquiry..." />
                  </div>
                  <button type="submit" className="w-full bg-fg text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-accent-orange">
                    Send message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
