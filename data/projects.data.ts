import { Project } from "@/interfaces/project.interface";
import { NEXT_ECOSYSTEM } from "./projects/NextEcosystem.project.data";
import { ECOMMERCE_PLATFORM } from "./projects/EcommercePlattform.project.data";
import { EDITABLE_CMS } from "./projects/EditableCMS.project.data";
import { CALL_TRACKING } from "./projects/CallTrackingSystem.project.data";
import { PERSONAL_PORTFOLIO } from "./projects/PersonalPortfolio.project.data";
import { ADOBE_INTEGRATION } from "./projects/AdobeExperience.project.data";
import { CUSTOMER_PORTAL } from "./projects/CustomerPortal.project.data";
import { TRADING_ALGORITHM } from "./projects/TradingAlgorithm.project.data";
import { BETTER_AUTH_SHOWCASE } from "./projects/BetterAuth.project.data";

// FULL_STACK_CALENDAR (data/projects/FullStackCalendar.data.ts) is intentionally
// not listed: the project is hidden from the site. Re-add it here to bring back
// the portfolio card, its /portfolio/full-stack-calendar page and its sitemap entry.
export const projects: Project[] = [
  BETTER_AUTH_SHOWCASE,
  PERSONAL_PORTFOLIO,
  ECOMMERCE_PLATFORM,
  ADOBE_INTEGRATION,
  EDITABLE_CMS,
  NEXT_ECOSYSTEM,
  CUSTOMER_PORTAL,
  TRADING_ALGORITHM,
  CALL_TRACKING,
];
