"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Home } from "lucide-react";

const branches = [
  { name: "Projects", href: "/projects", logo: "/logo-projects.svg", color: "var(--color-branch-projects)" },
  { name: "Training", href: "/training", logo: "/logo-training.svg", color: "var(--color-branch-training)" },
  { name: "Education", href: "/education", logo: "/logo-education.svg", color: "var(--color-branch-education)" },
  { name: "Events", href: "/events", logo: "/logo-events.svg", color: "var(--color-branch-events)" },
];

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const activeBranch = branches.find((b) => b.href === pathname);
  const currentLogo = activeBranch ? activeBranch.logo : "/logo-dark.svg";

  // Scroll range for the logo animation
  const SCROLL_START = 0;
  const SCROLL_END = 220;

  // Logo animates from hero position/size to nav position/size
  // Hero: top 160px, height 80px  →  Nav: centered in h-16 (64px), height 40px → top 12px
  const logoTop = useTransform(scrollY, [SCROLL_START, SCROLL_END], [160, 12]);
  const logoHeight = useTransform(scrollY, [SCROLL_START, SCROLL_END], [80, 40]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > SCROLL_END * 0.8);
  });

  return (
    <>
      {/* Floating logo — scroll-linked from hero to nav */}
      <motion.div
        className="fixed left-0 right-0 z-[60] pointer-events-none"
        style={{ top: logoTop }}
      >
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

      {/* Nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-bg/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        style={scrolled ? { borderBottom: "1px solid var(--color-line)" } : undefined}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Spacer where the logo sits when scrolled */}
            <div className="w-[220px]" />

            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={`p-2 rounded-full transition-all duration-200 ${
                  pathname === "/" ? "text-fg bg-surface" : "text-muted hover:text-fg hover:bg-surface/60"
                }`}
                aria-label="Home"
              >
                <Home size={16} strokeWidth={pathname === "/" ? 2.5 : 1.75} />
              </Link>
              {branches.map((branch) => {
                const isActive = pathname === branch.href;
                return (
                  <Link
                    key={branch.href}
                    href={branch.href}
                    className={`text-[13px] px-4 py-2 rounded-full transition-all duration-200 nav-branch-link ${
                      isActive ? "font-medium text-white" : "text-muted"
                    }`}
                    style={{ ["--branch-hover" as string]: branch.color, ...(isActive ? { backgroundColor: branch.color } : {}) }}
                  >
                    {branch.name}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface transition-colors"
              aria-label="Menu"
            >
              <div className="w-4 flex flex-col gap-[5px]">
                <span className={`block w-full h-[1.5px] bg-fg transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`block w-full h-[1.5px] bg-fg transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-full h-[1.5px] bg-fg transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-bg"
              style={{ borderTop: "1px solid var(--color-line)" }}
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`block text-xl py-2 font-medium transition-colors ${
                    pathname === "/" ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  Home
                </Link>
                {branches.map((branch, i) => (
                  <motion.div
                    key={branch.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (i + 1) * 0.04 }}
                  >
                    <Link
                      href={branch.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block text-xl py-2 font-medium transition-colors nav-branch-link ${
                        pathname === branch.href ? "" : "text-muted"
                      }`}
                      style={{ ["--branch-hover" as string]: branch.color, ...(pathname === branch.href ? { color: branch.color } : {}) }}
                    >
                      {branch.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
