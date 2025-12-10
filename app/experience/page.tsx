import { Header } from "@/components/header"
import { Experience } from "@/components/experience"

export const metadata = {
  title: "Experience | Portfolio",
  description: "Professional experience and career history",
}

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <Experience />
    </>
  )
}
