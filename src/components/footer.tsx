"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const branches = [
  { name: "Projects", href: "/projects", logo: "/logo-projects.svg", color: "var(--color-branch-projects)" },
  { name: "Training", href: "/training", logo: "/logo-training.svg", color: "var(--color-branch-training)" },
  { name: "Education", href: "/education", logo: "/logo-education.svg", color: "var(--color-branch-education)" },
  { name: "Events", href: "/events", logo: "/logo-events.svg", color: "var(--color-branch-events)" },
];

export function Footer() {
  const pathname = usePathname();
  const activeBranch = branches.find((b) => b.href === pathname);
  const stripeColor = activeBranch ? activeBranch.color : "var(--color-accent-orange)";

  return (
    <footer className="dark-section relative">
      {/* Top accent stripe — branch-colored on branch pages, orange on home */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: stripeColor }}
      />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.svg" alt="Star" width={100} height={34} className="h-6 w-auto" />
            </Link>
            <p className="text-subtle text-sm leading-relaxed max-w-xs">
              A multi-disciplinary group delivering training, education, strategic events, and complex project execution for governments and organizations.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-[11px] uppercase tracking-widest text-subtle mb-5 font-medium">Branches</h4>
            <div className="flex flex-col gap-3">
              {branches.map((branch) => (
                <Link
                  key={branch.href}
                  href={branch.href}
                  className="text-sm text-subtle transition-colors duration-200 nav-branch-link"
                  style={{ ["--branch-hover" as string]: branch.color }}
                >
                  Star {branch.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-widest text-subtle mb-5 font-medium">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@star.com" className="text-sm text-subtle hover:text-white transition-colors duration-200">Email</a>
              <a href="#" className="text-sm text-subtle hover:text-white transition-colors duration-200">Twitter / X</a>
              <a href="#" className="text-sm text-subtle hover:text-white transition-colors duration-200">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <span className="text-xs text-subtle">&copy; 2026 Star Group. All rights reserved.</span>
          <span className="text-xs text-subtle">Built with precision.</span>
        </div>
      </div>
    </footer>
  );
}
