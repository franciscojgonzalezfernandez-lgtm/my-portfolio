import { sendGAEvent } from "@next/third-parties/google";

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

export function trackExternalClick(label: string, url: string) {
  trackEvent("external_link_click", {
    link_label: label,
    link_url: url,
  });
}

export function trackCvDownload(language?: string) {
  trackEvent("cv_download", {
    language,
  });
}
