"use client";

import { useEffect, useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState<"german" | "english">("german");

  useEffect(() => {
    // Comprobar si existe en sessionStorage
    const savedLanguage = sessionStorage.getItem("portfolioLanguage") as
      | "german"
      | "english"
      | null;

    if (savedLanguage) {
      // Si existe, usar la guardada
      setLanguage(savedLanguage);
    } else {
      // Si no existe, setear por defecto a alemán y guardarlo
      sessionStorage.setItem("portfolioLanguage", "german");
      setLanguage("german");
    }
  }, []);

  // Función para cambiar idioma (opcional, para botones de switch)
  const setLanguageHandler = (newLanguage: "german" | "english") => {
    sessionStorage.setItem("portfolioLanguage", newLanguage);
    setLanguage(newLanguage);
  };

  return {
    language,
    setLanguage: setLanguageHandler,
    isGerman: language === "german",
    isEnglish: language === "english",
  };
};
