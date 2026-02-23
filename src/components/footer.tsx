"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const branches = [
  { name: "Projects", href: "/projects", logo: "/logo-projects.svg", logoWhite: "/logo-projects-white.svg", color: "var(--color-branch-projects)" },
  { name: "Training", href: "/training", logo: "/logo-training.svg", logoWhite: "/logo-training-white.svg", color: "var(--color-branch-training)" },
  { name: "Education", href: "/education", logo: "/logo-education.svg", logoWhite: "/logo-education-white.svg", color: "var(--color-branch-education)" },
  { name: "Events", href: "/events", logo: "/logo-events.svg", logoWhite: "/logo-events-white.svg", color: "var(--color-branch-events)" },
];

function StarWatermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 155 130" fill="none" className={className}>
      <path
        d="M153.7 75.5h-35.2c-1.16 0-1.74 1.4-.92 2.22l24.88 24.88c.51.51.51 1.33 0 1.84l-13.02 13.02c-.51.51-1.33.51-1.84 0l-24.89-24.89c-.82-.82-2.22-.24-2.22.92v35.2c0 .72-.58 1.3-1.3 1.3h-18.41c-.72 0-1.3-.58-1.3-1.3v-35.2c0-1.16-1.4-1.74-2.22-.92l-24.89 24.89c-.51.51-1.33.51-1.84 0l-13.02-13.02c-.51-.51-.51-1.33 0-1.84l16.8-16.8c8.74-8.74 19.98-7.66 19.98-7.66v-1.24c0-.77-.63-1.4-1.4-1.4H30.36c-.72 0-1.3-.58-1.3-1.3V56.71c0-.72.58-1.3 1.3-1.3h35.19c1.16 0 1.74-1.4.92-2.22L41.59 28.31c-.51-.51-.51-1.33 0-1.84l13.02-13.02c.51-.51 1.33-.51 1.84 0l24.89 24.89c.82.82 2.22.24 2.22-.92V1.3c0-.72.58-1.3 1.3-1.3h18.41c.72 0 1.3.58 1.3 1.3v35.2c0 1.16 1.4 1.74 2.22.92l24.89-24.89c.51-.51 1.33-.51 1.84 0l13.02 13.02c.51.51.51 1.33 0 1.84L129.73 44.2c-8.74 8.74-19.98 7.66-19.98 7.66v1.35c0 .72.58 1.3 1.3 1.3h46.71c.72 0 1.3.58 1.3 1.3v18.41c0 .72-.58 1.3-1.3 1.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  const activeBranch = branches.find((b) => pathname.startsWith(b.href));
  const footerBg = activeBranch ? activeBranch.color : "var(--color-fg)";

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: footerBg, color: "#ffffff" }}>
      <StarWatermark className="absolute text-white/[0.04] w-[600px] h-[600px] -right-32 -bottom-32 pointer-events-none" />

      {/* CTA strip */}
      <div className="relative" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight mb-2">Ready to get started?</h3>
            <p className="text-white/50 text-sm max-w-md">Disciplined execution, experienced leadership &mdash; let&apos;s deliver something exceptional.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:0114333380"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              011 433 3380
            </a>
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                activeBranch
                  ? "bg-white text-fg hover:bg-white/80"
                  : "bg-accent-orange text-white hover:bg-white hover:text-fg"
              }`}
            >
              Contact us
              <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo + description */}
          <div className="col-span-2 md:col-span-4">
            <Link href={activeBranch ? activeBranch.href : "/"} className="inline-block mb-6">
              <Image
                src={activeBranch ? activeBranch.logoWhite : "/logo-white.svg"}
                alt={activeBranch ? `Star ${activeBranch.name}` : "Star"}
                width={280}
                height={80}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              A multi-disciplinary group delivering training, education, strategic events, and complex project execution.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span className="text-sm text-white/80 font-medium">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                <span className="text-sm text-white/80 font-medium">Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/80"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span className="text-sm text-white/80 font-medium">X / Twitter</span>
              </a>
              <a href="mailto:hello@star.com" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="text-sm text-white/80 font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Branches */}
          <div className="md:col-span-2 md:col-start-5">
            <h4 className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-5 font-semibold">Branches</h4>
            <div className="flex flex-col gap-3">
              {branches.map((branch) => (
                <Link
                  key={branch.href}
                  href={branch.href}
                  className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125" style={{ backgroundColor: branch.color }} />
                  {branch.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-5 font-semibold">Company</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors duration-200">About Us</Link>
              <Link href="/csr" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Social Impact</Link>
              <Link href="/careers" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Careers</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-5 font-semibold">Connect</h4>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Contact Us</Link>
              <Link href="/partnerships" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Work With Us</Link>
              <Link href="/lms" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Online Learning</Link>
            </div>
          </div>

          {/* Discover */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-5 font-semibold">Discover</h4>
            <div className="flex flex-col gap-3">
              <Link href="/articles" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Insights</Link>
              <Link href="/media" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Newsroom</Link>
              <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Legal</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <span className="text-[11px] text-white/35">&copy; 2026 Star Group. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-[11px] text-white/35 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[11px] text-white/35 hover:text-white/60 transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="text-[11px] text-white/35 hover:text-white/60 transition-colors">Ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
