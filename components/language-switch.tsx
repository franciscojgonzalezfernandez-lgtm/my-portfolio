"use client";

import { trackEvent } from "@/lib/analytics";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useCallback } from "react";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguageStore();
  const handleClick = useCallback((language: string) => {
    trackEvent("language_switch", {
      language,
    });
    setLanguage(language === "english" ? "english" : "german");
  }, [setLanguage]);

  return (
    <div className="flex items-center gap-1 text-xs">
      <button
        onClick={() => handleClick("english")}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          language === "english"
            ? "bg-foreground text-background font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => handleClick("german")}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          language === "german"
            ? "bg-foreground text-background font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        DE
      </button>
    </div>
  );
}
