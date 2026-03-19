import { Project } from "@/interfaces/project.interface";
import { NEXT_ECOSYSTEM } from "./projects/NextEcosystem.project.data";
import { ECOMMERCE_PLATFORM } from "./projects/EcommercePlattform.project.data";
import { EDITABLE_CMS } from "./projects/EditableCMS.project.data";
import { CALL_TRACKING } from "./projects/CallTrackingSystem.project.data";
import { PERSONAL_PORTFOLIO } from "./projects/PersonalPortfolio.project.data";
import { ADOBE_INTEGRATION } from "./projects/AdobeExperience.project.data";
import { CUSTOMER_PORTAL } from "./projects/CustomerPortal.project.data";
import { TRADING_ALGORITHM } from "./projects/TradingAlgorithm.project.data";
import { FULL_STACK_CALENDAR } from "./projects/FullStackCalendar.data";

export const projects: Project[] = [
  FULL_STACK_CALENDAR,
  PERSONAL_PORTFOLIO,
  ECOMMERCE_PLATFORM,
  ADOBE_INTEGRATION,
  EDITABLE_CMS,
  NEXT_ECOSYSTEM,
  CUSTOMER_PORTAL,
  TRADING_ALGORITHM,
  CALL_TRACKING,
];
