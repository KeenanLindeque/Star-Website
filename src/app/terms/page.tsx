"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const sections = [
  {
    title: "Data Privacy Policy",
    content: [
      "Star is committed to protecting the privacy and security of personal data. We collect, process, and store personal information only as necessary to deliver our services and meet legal obligations.",
      "We implement appropriate technical and organisational measures to safeguard personal data against unauthorised access, alteration, disclosure, or destruction. Data is retained only for as long as necessary to fulfil the purposes for which it was collected.",
      "Individuals have the right to access, correct, or request deletion of their personal data. To exercise these rights, please contact our data protection team at privacy@star.com.",
    ],
  },
  {
    title: "Cookie Policy",
    content: [
      "Our website uses cookies to enhance user experience, analyse site traffic, and support the functionality of our services. Cookies are small text files stored on your device when you visit our site.",
      "We use essential cookies required for site functionality, performance cookies to understand how visitors interact with our site, and optional marketing cookies used only with your consent.",
      "You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect your experience on our website.",
    ],
  },
  {
    title: "Ethics Policy",
    content: [
      "Star operates with the highest standards of integrity, transparency, and ethical conduct. All employees, contractors, and partners are expected to uphold these standards in every interaction.",
      "We have zero tolerance for bribery, corruption, fraud, or any form of unethical behaviour. Our ethics framework covers conflicts of interest, fair dealing, confidentiality, and responsible use of company resources.",
      "We encourage the reporting of any concerns through our confidential ethics hotline. All reports are investigated thoroughly, and whistleblowers are protected from retaliation under our whistleblower protection policy.",
    ],
  },
  {
    title: "Terms of Use",
    content: [
      "By accessing and using the Star website and services, you agree to be bound by these terms and conditions. All content on this site, including text, graphics, logos, and software, is the property of Star and is protected by applicable intellectual property laws.",
      "Star reserves the right to modify, suspend, or discontinue any aspect of its services at any time. We are not liable for any damages arising from the use or inability to use our services.",
      "These terms are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in the courts of competent jurisdiction in Johannesburg.",
    ],
  },
  {
    title: "Acceptable Use",
    content: [
      "Users of Star services and platforms agree not to use them for any unlawful purpose, to transmit harmful or offensive content, or to attempt to gain unauthorised access to our systems.",
      "We reserve the right to suspend or terminate access to our services for any user who violates these terms or engages in conduct that we reasonably believe is detrimental to other users or to Star.",
    ],
  },
];

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mt-8 max-w-xl">
              Our policies on data privacy, cookies, ethics, and terms of use. Last updated February 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Saudi compliance banner */}
      <section className="py-12 px-6" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="flex items-start gap-5 md:items-center md:gap-6">
            <div className="w-11 h-11 rounded-xl bg-fg flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h3 className="text-fg text-base font-medium mb-1">Fully compliant with Saudi data protection regulations</h3>
              <p className="text-muted text-sm leading-relaxed">
                Star operates in full compliance with the Kingdom of Saudi Arabia&apos;s Personal Data Protection Law (PDPL) and all applicable data governance frameworks. We ensure the privacy, confidentiality, and security of all personal data processed across our operations, applying the highest standards of data protection to every engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-fg text-2xl font-medium tracking-tight mb-6" style={{ borderBottom: "1px solid var(--color-line)", paddingBottom: "1rem" }}>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, j) => (
                  <p key={j} className="text-muted text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
