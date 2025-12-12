import { notFound } from "next/navigation";
import { projects } from "@/data/projects.data";
import { Card } from "@/components/ui/card";
import { CustomPhotoGallery } from "@/components/CustomPhotoGallery";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <h1 className="text-5xl font-bold mb-8">{project.title}</h1>
            {project.videoUrl && (
              <Card className="overflow-hidden mb-8">
                <div className="relative w-full aspect-video bg-muted">
                  <video
                    src={project.videoUrl || "/placeholder.svg"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-fill"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Card>
            )}

            <div className="tags pb-4 gap-2 flex">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-foreground text-background text-sm rounded-full font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-3xl font-bold mb-4">About This Project</h2>
              <div className="grid grid-cols-2 gap-4">
                <CustomPhotoGallery
                  images={project.images}
                  itemName="Project"
                />
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                      {project.fullDescription}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
