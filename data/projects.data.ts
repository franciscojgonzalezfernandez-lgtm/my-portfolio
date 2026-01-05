import { Project } from "@/interfaces/project.interface";
import { NEXT_ECOSYSTEM } from "./projects/NextEcosystem.project.data";
import { ECOMMERCE_PLATFORM } from "./projects/EcommercePlattform.project.data";
import { EDITABLE_CMS } from "./projects/EditableCMS.project.data";
import { CALL_TRACKING } from "./projects/CallTrackingSystem.project.data";
import { PERSONAL_PORTFOLIO } from "./projects/PersonalPortfolio.project.data";
import { ADOBE_INTEGRATION } from "./projects/AdobeExperience.project.data";
import { CUSTOMER_PORTAL } from "./projects/CustomerPortal.project.data";

export const projects: Project[] = [
  ECOMMERCE_PLATFORM,
  ADOBE_INTEGRATION,
  EDITABLE_CMS,
  CUSTOMER_PORTAL,
  CALL_TRACKING,
  NEXT_ECOSYSTEM,
  PERSONAL_PORTFOLIO,
];
