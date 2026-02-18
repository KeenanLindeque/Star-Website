"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const branches = [
  { name: "Projects", href: "/projects", logo: "/logo-projects.svg", logoWhite: "/logo-projects-white.svg", color: "var(--color-branch-projects)" },
  { name: "Training", href: "/training", logo: "/logo-training.svg", logoWhite: "/logo-training-white.svg", color: "var(--color-branch-training)" },
  { name: "Education", href: "/education", logo: "/logo-education.svg", logoWhite: "/logo-education-white.svg", color: "var(--color-branch-education)" },
  { name: "Events", href: "/events", logo: "/logo-events.svg", logoWhite: "/logo-events-white.svg", color: "var(--color-branch-events)" },
];

export function Footer() {
  const pathname = usePathname();
  const activeBranch = branches.find((b) => pathname.startsWith(b.href));

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: activeBranch ? activeBranch.color : "var(--color-fg)",
        color: "#ffffff",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href={activeBranch ? activeBranch.href : "/"} className="inline-block mb-6">
              <Image
                src={activeBranch ? activeBranch.logoWhite : "/logo-white.svg"}
                alt={activeBranch ? `Star ${activeBranch.name}` : "Star"}
                width={280}
                height={80}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A multi-disciplinary group delivering training, education, strategic events, and complex project execution for governments and organizations.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[11px] uppercase tracking-widest text-white/50 mb-5 font-medium">Branches</h4>
            <div className="flex flex-col gap-3">
              {branches.map((branch) => (
                <Link
                  key={branch.href}
                  href={branch.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  Star {branch.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest text-white/50 mb-5 font-medium">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@star.com" className="text-sm text-white/70 hover:text-white transition-colors duration-200">Email</a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-200">Twitter / X</a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-200">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <span className="text-xs text-white/50">&copy; 2026 Star Group. All rights reserved.</span>
          <span className="text-xs text-white/50">Built with precision.</span>
        </div>
      </div>
    </footer>
  );
}
