import { trackExternalClick } from "@/lib/analytics";
import { Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

interface NetworkProps {
  className?: string;
  parent?: string;
}

export const CustomNetworks = ({ className, parent = "" }: NetworkProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        href="https://www.linkedin.com/in/fjgonzalezfernandez/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="LinkedIn Profile"
        onClick={() => {
          trackExternalClick("LinkedIn", parent);
        }}
      >
        <Linkedin className="w-5 h-5" />
      </Link>
      <Link
        href="https://github.com/franciscojgonzalezfernandez-lgtm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
        onClick={() => {
          trackExternalClick("GitHub", parent);
        }}
      >
        <Github className="w-5 h-5" />
      </Link>
      <Link
        href="https://www.youtube.com/@javi-tricker"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="YouTube"
        onClick={() => {
          trackExternalClick("YouTube", parent);
        }}
      >
        <Youtube className="w-5 h-5" />
      </Link>
    </div>
  );
};
