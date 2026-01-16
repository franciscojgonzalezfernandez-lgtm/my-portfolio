"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { CustomLogo } from "./custom-logo";
import { CustomNetworks } from "./CustomNetworks";
import { TABS } from "@/data/page.tabs.data";
import { useLanguageStore } from "@/stores/useLanguageStore";

export const Footer = () => {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { language } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path: string) => pathname === path;

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <CustomLogo />
            <p className="text-sm text-muted-foreground">
              {language == "english" && "Building exceptional Web Applications"}
              {language == "german" && "Ausnahme-Web-Anwendungen entwickeln"}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {TABS.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(tab.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {language == "english" ? tab.label : tab.labelGerman}
              </Link>
            ))}
          </nav>

          <CustomNetworks />
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            {language == "english"
              ? "All rights reserved."
              : "Alle Rechte vorbehalten"}
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-8 right-8 bg-accent text-accent-foreground rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
