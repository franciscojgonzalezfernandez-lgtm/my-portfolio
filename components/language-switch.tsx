"use client";

import { useLanguage } from "@/hooks/use-language";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-xs">
      <button
        onClick={() => setLanguage("english")}
        className={`px-2 py-1 rounded transition-colors ${
          language === "english"
            ? "bg-foreground text-background font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => setLanguage("german")}
        className={`px-2 py-1 rounded transition-colors ${
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
