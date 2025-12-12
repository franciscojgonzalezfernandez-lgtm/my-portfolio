import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const neededBackLink = (path: string): Boolean => {
  return path.split("/").length > 2;
};

const getBackLink = (
  path: string
): { backLink: string; backLinkTitle: string } => {
  const segments = path.split("/");
  segments.pop();
  const backLink = segments.join("/");
  const backLinkTitle = segments.pop() || "";
  return { backLink, backLinkTitle };
};

export const CustomBackLink = () => {
  const pathname = usePathname();
  if (!neededBackLink(pathname)) return null;
  return (
    <Link
      href={getBackLink(pathname).backLink}
      title={`Back to ${getBackLink(pathname).backLinkTitle}`}
      className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
    >
      <ArrowLeftIcon />
    </Link>
  );
};
