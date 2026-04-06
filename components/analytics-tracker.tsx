"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!window.gtag) return;

    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (!url || lastTrackedUrl.current === url) return;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_path: url,
      page_location: window.location.href,
    });

    lastTrackedUrl.current = url;
  }, [pathname, searchParams]);

  return null;
}
