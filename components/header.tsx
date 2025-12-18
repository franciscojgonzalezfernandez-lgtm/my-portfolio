"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { CustomLogo } from "./custom-logo";
import { CustomBackLink } from "./CustomBackLink";
import { CustomNetworks } from "./CustomNetworks";

const TABS = [
  { href: "/about", label: "About me" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/metrics", label: "Metrics" },
  { href: "/contact", label: "Contact" },
] as const;

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  // Auto-scroll al tab activo
  useEffect(() => {
    const activeTab = tabRefs.current[pathname ?? ""];
    const container = tabsContainerRef.current;
    if (!activeTab || !container) return;

    activeTab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [pathname]);

  return (
    <header
      className={`flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-md ${
        scrolled ? " shadow-sm" : ""
      }`}
    >
      <div className="flex items-center justify-between container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center w-40 shrink-0">
          <CustomBackLink />
          <CustomLogo />
        </div>

        <nav className="px-0 sm:pl-6 py-4 flex-1">
          <div className="xs:grid xs:grid-cols-[1fr_4fr] flex items-center">
            {/* wrapper que en desktop empuja todo el nav a la derecha */}
            <div className="flex w-full justify-end">
              {/* NAV + ICONOS */}
              <div className="flex items-center gap-4">
                {/* CONTENEDOR SCROLLEABLE SOLO EN MOBILE */}
                <div
                  ref={tabsContainerRef}
                  className="
            flex items-center gap-6
            max-w-[60vw]
            overflow-x-auto
            sm:max-w-none
            sm:overflow-visible
            scrollbar-none
          "
                >
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

                <CustomNetworks className="hidden sm:flex ml-8 border-l border-border pl-8" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
