import { sendGAEvent } from "@next/third-parties/google";
import { url } from "inspector/promises";

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params?: EventParams) {
  sendGAEvent("event", name, params ?? {});
}

export function trackProjectClick(projectSlug: string, projectType?: string) {
  trackEvent("select_portfolio_project", {
    project_slug: projectSlug,
    project_type: projectType,
  });
}

export function trackExternalClick(label: string, from: string) {
  trackEvent("external_link_click", {
    link_label: label,
    link_from: from,
  });
}

export function trackCvDownload(language?: string) {
  trackEvent("cv_download", {
    language,
  });
}

export function trackVideoEvent(
  name:
    | "video_click"
    | "video_play"
    | "video_pause"
    | "video_progress"
    | "video_complete"
    | "video_unmute",
  params?: EventParams,
) {
  trackEvent(name, params);
}
