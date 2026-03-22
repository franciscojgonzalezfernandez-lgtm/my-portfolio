"use client";

import React, { createContext, useContext } from "react";

type Messages = Record<string, string>;

const IntlContext = createContext<{
  locale: string;
  messages: Messages;
} | null>(null);

export function IntlProviderClient({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Messages;
}) {
  return (
    <IntlContext.Provider value={{ locale, messages }}>
      {children}
    </IntlContext.Provider>
  );
}

export function useIntl() {
  const ctx = useContext(IntlContext);
  if (!ctx) return { locale: "en", t: (k: string) => k };
  return {
    locale: ctx.locale,
    t: (key: string) => ctx.messages[key] ?? key,
  };
}
