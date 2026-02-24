"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Home, ArrowUpRight, X } from "lucide-react";

const branches = [
  { name: "Projects", href: "/projects", logo: "/logo-projects.svg", logoWhite: "/logo-projects-white.svg", color: "var(--color-branch-projects)", desc: "Complex mandates & governance" },
  { name: "Training", href: "/training", logo: "/logo-training.svg", logoWhite: "/logo-training-white.svg", color: "var(--color-branch-training)", desc: "Professional skills programmes" },
  { name: "Education", href: "/education", logo: "/logo-education.svg", logoWhite: "/logo-education-white.svg", color: "var(--color-branch-education)", desc: "Academic pathways & partnerships" },
  { name: "Events", href: "/events", logo: "/logo-events.svg", logoWhite: "/logo-events-white.svg", color: "var(--color-branch-events)", desc: "Strategic event execution" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Social Impact", href: "/csr" },
  { name: "Careers", href: "/careers" },
];

const connectLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Work With Us", href: "/partnerships" },
  { name: "Online Learning", href: "/lms" },
];

const discoverLinks = [
  { name: "Insights", href: "/articles" },
  { name: "Newsroom", href: "/media" },
  { name: "Legal", href: "/terms" },
];

const allSecondaryLinks = [...companyLinks, ...connectLinks, ...discoverLinks];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const activeBranch = branches.find((b) => b.href === pathname);
  const darkPages = ["/careers"];
  const isDarkPage = darkPages.includes(pathname);
  const currentLogo = activeBranch ? activeBranch.logo : isDarkPage ? "/logo-white.svg" : "/logo-dark.svg";

  const SCROLL_END = 220;
  const logoTop = useTransform(scrollY, [0, SCROLL_END], [160, 12]);
  const logoHeight = useTransform(scrollY, [0, SCROLL_END], [80, 40]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > SCROLL_END * 0.8);
  });

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [menuOpen, closeMenu]);

  useEffect(() => { closeMenu(); }, [pathname, closeMenu]);

  return (
    <>
      {/* Floating logo — hidden when menu is open */}
      {!menuOpen && (
        <motion.div className="fixed left-0 right-0 z-[60] pointer-events-none" style={{ top: logoTop }}>
          <div className="max-w-6xl mx-auto px-6">
            <Link href="/" className="inline-block pointer-events-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentLogo}
                  src={currentLogo}
                  alt="Star"
                  style={{ height: logoHeight }}
                  className="w-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </Link>
          </div>
        </motion.div>
      )}

      {/* Top nav bar — hidden when menu is open */}
      {!menuOpen && (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isDarkPage
              ? scrolled ? "bg-fg/95 backdrop-blur-md shadow-sm" : "bg-transparent"
              : scrolled ? "bg-bg/95 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
          style={scrolled ? { borderBottom: isDarkPage ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--color-line)" } : undefined}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="w-[220px]" />

              {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-1">
                <Link
                  href="/"
                  className={`p-2 rounded-full transition-all duration-200 ${
                    pathname === "/" ? "bg-accent-orange" : isDarkPage ? "bg-transparent hover:bg-white/10" : "bg-transparent hover:bg-surface/60"
                  }`}
                  aria-label="Home"
                >
                  <Home size={16} strokeWidth={pathname === "/" ? 2.5 : 1.75} style={{ color: pathname === "/" ? "#ffffff" : isDarkPage ? "rgba(255,255,255,0.6)" : "var(--color-muted)" }} />
                </Link>
                {branches.map((branch) => {
                  const isActive = pathname === branch.href;
                  return (
                    <Link
                      key={branch.href}
                      href={branch.href}
                      className={`text-[13px] px-4 py-2 rounded-full transition-all duration-200 nav-branch-link ${
                        isActive ? "font-medium text-white" : isDarkPage ? "text-white/60" : "text-muted"
                      }`}
                      style={{ ["--branch-hover" as string]: branch.color, ...(isActive ? { backgroundColor: branch.color } : {}) }}
                    >
                      {branch.name}
                    </Link>
                  );
                })}
                <div className={`w-px h-4 mx-2 ${isDarkPage ? "bg-white/20" : "bg-line"}`} />
                <button
                  onClick={toggleMenu}
                  className={`w-9 h-9 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                    isDarkPage
                      ? allSecondaryLinks.some((l) => l.href === pathname) ? "text-white bg-white/10" : "text-white/60 hover:text-white hover:bg-white/10"
                      : allSecondaryLinks.some((l) => l.href === pathname) ? "text-fg bg-surface" : "text-muted hover:text-fg hover:bg-surface"
                  }`}
                  aria-label="Menu"
                >
                  <span className="flex flex-col gap-[3px]">
                    <span className="block w-3.5 h-[1.5px] bg-current rounded-full" />
                    <span className="block w-2.5 h-[1.5px] bg-current rounded-full" />
                  </span>
                </button>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={toggleMenu}
                className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isDarkPage ? "hover:bg-white/10" : "hover:bg-surface"}`}
                aria-label="Menu"
              >
                <div className="w-4 flex flex-col gap-[5px]">
                  <span className={`block w-full h-[1.5px] transition-all duration-300 origin-center ${isDarkPage ? "bg-white" : "bg-fg"}`} />
                  <span className={`block w-full h-[1.5px] transition-all duration-300 ${isDarkPage ? "bg-white" : "bg-fg"}`} />
                  <span className={`block w-full h-[1.5px] transition-all duration-300 origin-center ${isDarkPage ? "bg-white" : "bg-fg"}`} />
                </div>
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Full-screen mega menu overlay — white */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] overflow-y-auto bg-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header bar */}
            <div className="fixed top-0 left-0 right-0 z-[110] bg-bg/95 backdrop-blur-md" style={{ borderBottom: "1px solid var(--color-line)" }}>
              <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" onClick={closeMenu}>
                  <Image src="/logo-dark.svg" alt="Star" width={160} height={48} className="h-8 w-auto" />
                </Link>
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:bg-line transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={18} className="text-fg" />
                </button>
              </div>
            </div>

            {/* Menu content */}
            <motion.div
              className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                {/* Left — Branches with logos */}
                <div className="md:col-span-7">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-muted font-semibold mb-6">
                    Our branches
                  </span>
                  <div className="space-y-1">
                    {branches.map((branch, i) => (
                      <motion.div
                        key={branch.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={branch.href}
                          onClick={closeMenu}
                          className="group relative flex items-center gap-5 py-5 md:py-6 rounded-xl px-4 -mx-4 transition-all duration-300 overflow-hidden"
                        >
                          <div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ backgroundColor: branch.color }}
                          />
                          <div className="relative flex items-center gap-5 w-full">
                            <Image
                              src={branch.logo}
                              alt={`Star ${branch.name}`}
                              width={200}
                              height={56}
                              className="h-10 md:h-12 w-auto shrink-0 group-hover:opacity-0 transition-opacity duration-300"
                            />
                            <Image
                              src={branch.logoWhite}
                              alt=""
                              width={200}
                              height={56}
                              className="h-10 md:h-12 w-auto shrink-0 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              aria-hidden
                            />
                            <span className="hidden md:block text-sm text-muted group-hover:text-white/70 ml-auto max-w-[200px] text-right transition-colors duration-300">{branch.desc}</span>
                            <ArrowUpRight size={18} className="text-line group-hover:text-white/60 transition-all duration-300 shrink-0" />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right — Company / Connect / Discover */}
                <div className="md:col-span-5 md:border-l md:pl-8" style={{ borderColor: "var(--color-line)" }}>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { label: "Company", links: companyLinks, delay: 0.3 },
                      { label: "Connect", links: connectLinks, delay: 0.35 },
                      { label: "Discover", links: discoverLinks, delay: 0.4 },
                    ].map((group) => (
                      <motion.div
                        key={group.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: group.delay, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <span className="block text-[10px] uppercase tracking-[0.15em] text-muted font-semibold mb-5">
                          {group.label}
                        </span>
                        <div className="flex flex-col gap-1">
                          {group.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeMenu}
                              className={`block py-2 text-sm transition-colors duration-200 ${
                                pathname === link.href ? "text-accent-orange font-medium" : "text-fg/60 hover:text-accent-orange"
                              }`}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Get in touch + socials */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                    className="mt-10 pt-8"
                    style={{ borderTop: "1px solid var(--color-line)" }}
                  >
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-muted font-semibold mb-4">Get in touch</span>
                    <a href="tel:0114333380" className="flex items-center gap-3 text-fg/60 hover:text-accent-orange transition-colors duration-200 group mb-5">
                      <span className="w-8 h-8 rounded-full bg-surface group-hover:bg-accent-orange flex items-center justify-center shrink-0 transition-colors duration-300">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fg group-hover:text-white transition-colors">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-fg group-hover:text-accent-orange transition-colors">011 433 3380</span>
                    </a>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href="#" className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-fg transition-all duration-300 leading-none">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-fg group-hover:text-white transition-colors shrink-0"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        <span className="text-[13px] font-medium text-fg group-hover:text-white transition-colors">LinkedIn</span>
                      </a>
                      <a href="#" className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-fg transition-all duration-300 leading-none">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-fg group-hover:text-white transition-colors shrink-0"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        <span className="text-[13px] font-medium text-fg group-hover:text-white transition-colors">Instagram</span>
                      </a>
                      <a href="#" className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-fg transition-all duration-300 leading-none">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-fg group-hover:text-white transition-colors shrink-0" style={{ marginTop: "-1px" }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        <span className="text-[13px] font-medium text-fg group-hover:text-white transition-colors">X</span>
                      </a>
                      <a href="mailto:hello@star.com" className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-fg transition-all duration-300 leading-none">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fg group-hover:text-white transition-colors shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <span className="text-[13px] font-medium text-fg group-hover:text-white transition-colors">Email</span>
                      </a>
                    </div>

                    {/* Brand assets shortcut */}
                    <a
                      href="/media#brand-assets"
                      onClick={closeMenu}
                      className="group flex items-center gap-3 mt-5 text-fg/60 hover:text-accent-orange transition-colors duration-200"
                    >
                      <span className="w-8 h-8 rounded-full bg-surface group-hover:bg-accent-orange flex items-center justify-center shrink-0 transition-colors duration-300">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fg group-hover:text-white transition-colors">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-fg group-hover:text-accent-orange transition-colors">Download brand assets</span>
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Bottom bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-16 pt-6"
                style={{ borderTop: "1px solid var(--color-line)" }}
              >
                <span className="text-[11px] text-subtle">&copy; 2026 Star Group. All rights reserved.</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
