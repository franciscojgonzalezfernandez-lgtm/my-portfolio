"use client";

import { Header } from "@/components/header";
import { About } from "@/components/about";
import { useState } from "react";
import { professional } from "@/data/aboutMe.professional.data";
import { personal } from "@/data/aboutMe.personal.data";

const AboutPage = () => {
  const [mode, setMode] = useState<"professional" | "personal">("professional");

  return (
    <div
      className={`min-h-screen ${
        mode === "personal" ? "bg-foreground text-background" : ""
      }`}
    >
      <main className="pt-20">
        <About
          mode={mode}
          onModeChange={setMode}
          professional={professional}
          personal={personal}
        />
      </main>
    </div>
  );
};

export default AboutPage;
