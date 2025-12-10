import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { projects } from "@/components/portfolio"
import { Card } from "@/components/ui/card"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background border border-foreground text-foreground text-sm rounded-full font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Card className="overflow-hidden mb-12">
              <div className="relative w-full aspect-video bg-muted">
                <img
                  src={project.videoUrl || "/placeholder.svg"}
                  alt={`${project.title} demo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">About This Project</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.fullDescription}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
