"use client"

import { Header } from "@/components/header"
import { About } from "@/components/about"
import { useState } from "react"

export default function AboutPage() {
  const [mode, setMode] = useState<"professional" | "personal">("professional")

  return (
    <div className={`min-h-screen ${mode === "personal" ? "bg-foreground text-background" : ""}`}>
      <Header />
      <main className="pt-20">
        <About mode={mode} onModeChange={setMode} />
      </main>
    </div>
  )
}
