"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Have a project in mind? I'd love to hear about your idea. Let's work together to create something amazing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="min-w-[200px]">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] bg-transparent">
              Download CV
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2025 Portfolio. Designed and developed with ❤️</p>
          </div>
        </div>
      </div>
    </section>
  )
}
