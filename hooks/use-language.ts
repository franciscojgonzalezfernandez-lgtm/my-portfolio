"use client";

import { useEffect, useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState<"german" | "english">("german");
  console.log("Soy useLanguage y tengo: ", language);

  useEffect(() => {
    const savedLanguage = sessionStorage.getItem("portfolioLanguage") as
      | "german"
      | "english"
      | null;

    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      sessionStorage.setItem("portfolioLanguage", "german");
      setLanguage("german");
    }
  }, []);

  // Función para cambiar idioma (opcional, para botones de switch)
  const setLanguageHandler = (newLanguage: "german" | "english") => {
    sessionStorage.setItem("portfolioLanguage", newLanguage);
    console.log("Language switching", newLanguage);
    setLanguage(newLanguage);
  };

  return {
    language,
    setLanguage: setLanguageHandler,
    isGerman: language === "german",
    isEnglish: language === "english",
  };
};
