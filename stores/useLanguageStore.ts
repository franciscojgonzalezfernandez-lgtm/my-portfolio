// stores/useLanguageStore.ts (COMPLETO)
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"; // ← PERSISTENCIA AUTOMÁTICA

interface LanguageState {
  language: "german" | "english";
  setLanguage: (lang: "german" | "english") => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "german",
      setLanguage: (newLanguage) => set({ language: newLanguage }),
    }),
    {
      name: "portfolio-language",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
