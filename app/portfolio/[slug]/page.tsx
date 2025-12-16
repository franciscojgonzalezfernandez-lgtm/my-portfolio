import { notFound } from "next/navigation";
import { projects } from "@/data/projects.data";
import { Card } from "@/components/ui/card";
import { CustomPhotoGallery } from "@/components/CustomPhotoGallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { CustomVideo } from "@/components/high-order-components/CustomVideo";

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
            <h1 className="text-5xl font-bold mb-8 mx-auto">{project.title}</h1>
            {project.videoUrl && (
              <Card className="overflow-hidden mb-8 w-[80%] mx-auto">
                <div className="relative aspect-video bg-muted">
                  <CustomVideo
                    src={project.videoUrl || "/placeholder.svg"}
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-fill"
                  >
                    Your browser does not support the video tag.
                  </CustomVideo>
                </div>
              </Card>
            )}

            <div className="tags my-8 gap-2 flex flex-wrap">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-foreground text-background text-sm rounded-full font-semibold whitespace-nowrap"
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
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                      {project.fullDescription}
                    </div>
                  </div>
                  {project.externalUrl && (
                    <Link href={project.externalUrl} target="blank_">
                      <Button
                        variant="default"
                        className="w-full text-sm py-2 cursor-pointer"
                      >
                        {" "}
                        Try it yourself!
                        <ExternalLink />
                      </Button>
                    </Link>
                  )}
                  {project.gitHubUrl && (
                    <Link
                      href={project.gitHubUrl}
                      target="blank_"
                      className="flex gap-2 justify-end"
                    >
                      {" "}
                      Check out in GitHub <Github />{" "}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
