"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, Youtube } from "lucide-react";
import { CustomLogo } from "./custom-logo";
import { CustomBackLink } from "./CustomBackLink";

const TABS = [
  { href: "/about", label: "About me" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  // Auto-scroll al tab activo (especialmente útil en mobile)
  useEffect(() => {
    const activeTab = tabRefs.current[pathname ?? ""];
    if (!activeTab) return;

    activeTab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between overflow-x-hidden">
          <div className="flex justify-between items-center w-40">
            <CustomBackLink />
            <CustomLogo />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-8 overflow-x-auto scrollbar-none sm:overflow-visible">
              {TABS.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  ref={(el) => {
                    tabRefs.current[tab.href] = el;
                  }}
                  className={`whitespace-nowrap text-sm font-medium transition-colors ${
                    isActive(tab.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            {/* ICONOS SOCIALES */}
            <div className="hidden sm:flex items-center gap-4 ml-4 border-l border-border pl-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
