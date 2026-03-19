"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { CustomNetworks } from "./CustomNetworks";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { HERO_CONTACT_DATA_ENGLISH } from "@/data/contact.hero.data";
import { HERO_CONTACT_DATA_GERMAN } from "@/data/contact.hero.data.german";
import { Hero } from "./hero";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Contact() {
  const { language } = useLanguageStore();

  const heroData =
    language === "english"
      ? HERO_CONTACT_DATA_ENGLISH
      : HERO_CONTACT_DATA_GERMAN;

  return (
    <section id="contact" className="bg-muted/30">
      <Hero {...heroData} />
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="min-w-[200px]" asChild>
              <a href="mailto:franciscojgonzalezfernandez@gmail.com?subject=Job%20opportunity&body=Hello%20Javi%2C%0D%0A%0D%0A">
                <Mail className="mr-2 h-5 w-5" />
                {language == "english" ? "Send Email" : "E-Mail senden"}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] bg-transparent cursor-pointer"
              asChild
            >
              <a href={`${BASE_PATH}/CV-Javi.pdf`} download="CV-Javi.pdf">
                {language == "english" ? "Download CV" : "CV herunterladen"}
              </a>
            </Button>
          </div>

          <CustomNetworks className="justify-center gap-8" />

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              ©{" "}
              {language == "english"
                ? "2026 Portfolio. Designed and developed with "
                : "2026 Portfolio. Entwickelt und gestaltet mit "}
              ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
