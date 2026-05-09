"use client";
import { useRef } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { trackEvent } from "@/lib/analytics";
import type { HeroData } from "@/interfaces/hero.interface";

interface IntroCoverProps {
  data_english: HeroData;
  data_german: HeroData;
}

const COVER_SRC = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/intro-cover.webp`;

export const IntroCover = ({ data_english, data_german }: IntroCoverProps) => {
  const { language } = useLanguageStore();
  const selected = language === "english" ? data_english : data_german;
  const { role1, role1Description } = selected;
  const ctaLabel =
    language === "english" ? "Watch my intro" : "Mein Video ansehen";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="intro-cover"
      ref={ref}
      className="relative w-full h-[50vh] min-h-[420px] overflow-hidden"
    >
      <img
        src={COVER_SRC}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance drop-shadow-lg"
            >
              {role1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.25,
              }}
              className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-xl drop-shadow"
            >
              {role1Description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
            >
              <Link
                href="/about"
                onClick={() => trackEvent("hero_cta_click", { target: "about" })}
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-3.5 text-base md:text-lg font-semibold shadow-xl transition-transform duration-300 hover:scale-[1.03] focus-visible:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <Play className="w-4 h-4 fill-current" />
                </span>
                {ctaLabel}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
