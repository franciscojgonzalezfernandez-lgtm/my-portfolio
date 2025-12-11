import { Header } from "@/components/header";
import { Portfolio } from "@/components/portfolio";

import { projects } from "@/data/projects.data";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Portfolio projects={projects} />
      </main>
    </div>
  );
}
