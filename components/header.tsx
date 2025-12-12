"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Linkedin, Github, Youtube, ArrowLeftIcon } from "lucide-react";
import { CustomLogo } from "./custom-logo";
import { CustomBackLink } from "./CustomBackLink";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center w-40">
            <CustomBackLink />
            <CustomLogo />
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              about me
            </Link>
            <Link
              href="/experience"
              className={`text-sm font-medium transition-colors ${
                isActive("/experience")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              experience
            </Link>
            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors ${
                isActive("/portfolio")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              portfolio
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              contact
            </Link>

            <div className="flex items-center gap-4 ml-4 border-l border-border pl-4">
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
