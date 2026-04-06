"use client";

import { Suspense } from "react";
import { AnalyticsTracker } from "@/components/analytics-tracker";

export function AnalyticsWrapper() {
  return (
    <Suspense>
      <AnalyticsTracker />
    </Suspense>
  );
}
