import { Github, Linkedin, Youtube } from "lucide-react";

interface NetworkProps {
  className?: string;
}

export const CustomNetworks = ({ className }: NetworkProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="w-5 h-5" />
      </a>
    </div>
  );
};
