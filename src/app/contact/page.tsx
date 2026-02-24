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

function SpinningStar({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 155 130"
      fill="none"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <path
        d="M153.7 75.5h-35.2c-1.16 0-1.74 1.4-.92 2.22l24.88 24.88c.51.51.51 1.33 0 1.84l-13.02 13.02c-.51.51-1.33.51-1.84 0l-24.89-24.89c-.82-.82-2.22-.24-2.22.92v35.2c0 .72-.58 1.3-1.3 1.3h-18.41c-.72 0-1.3-.58-1.3-1.3v-35.2c0-1.16-1.4-1.74-2.22-.92l-24.89 24.89c-.51.51-1.33.51-1.84 0l-13.02-13.02c-.51-.51-.51-1.33 0-1.84l16.8-16.8c8.74-8.74 19.98-7.66 19.98-7.66v-1.24c0-.77-.63-1.4-1.4-1.4H30.36c-.72 0-1.3-.58-1.3-1.3V56.71c0-.72.58-1.3 1.3-1.3h35.19c1.16 0 1.74-1.4.92-2.22L41.59 28.31c-.51-.51-.51-1.33 0-1.84l13.02-13.02c.51-.51 1.33-.51 1.84 0l24.89 24.89c.82.82 2.22.24 2.22-.92V1.3c0-.72.58-1.3 1.3-1.3h18.41c.72 0 1.3.58 1.3 1.3v35.2c0 1.16 1.4 1.74 2.22.92l24.89-24.89c.51-.51 1.33-.51 1.84 0l13.02 13.02c.51.51.51 1.33 0 1.84L129.73 44.2c-8.74 8.74-19.98 7.66-19.98 7.66v1.35c0 .72.58 1.3 1.3 1.3h46.71c.72 0 1.3.58 1.3 1.3v18.41c0 .72-.58 1.3-1.3 1.3Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

export default function ContactPage() {
  return (
    <div>
      <section className="hero-gradient pt-40 pb-24 px-6 relative overflow-hidden">
        <SpinningStar className="absolute text-fg opacity-[0.04] w-[700px] h-[700px] -right-[10%] top-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
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
