import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TechCarousel } from "@/components/tech-carousel"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TechCarousel />
      </main>
    </div>
  )
}
