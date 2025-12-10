import { Header } from "@/components/header"
import { Portfolio } from "@/components/portfolio"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Portfolio />
      </main>
    </div>
  )
}
