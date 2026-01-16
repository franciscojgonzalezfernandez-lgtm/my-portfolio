"use client";
import { Project } from "@/interfaces/project.interface";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CustomPhotoGallery } from "./CustomPhotoGallery";
import { CustomVideo } from "./high-order-components/CustomVideo";
import { Card } from "./ui/card";
import { useLanguageStore } from "@/stores/useLanguageStore";
import parse from "html-react-parser";

interface ProjectProps {
  project: Project;
}

export const ProjectContent = ({ project }: ProjectProps) => {
  const { language } = useLanguageStore();
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <h1 className="text-5xl font-bold mb-8 mx-auto">
              {language == "english" ? project.title : project.titleGerman}
            </h1>
            {project.videoUrl && (
              <Card className="overflow-hidden mb-8 w-full mx-auto">
                <div className="relative aspect-video bg-muted">
                  <CustomVideo
                    src={project.videoUrl || "/placeholder.svg"}
                    poster={project.images[1]}
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
              <h2 className="text-3xl font-bold mb-4">
                {language == "english"
                  ? "About This Project"
                  : "Über dieses Projekt"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <CustomPhotoGallery
                  images={project.images}
                  itemName="Project"
                />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                      {language == "english"
                        ? parse(project.fullDescription)
                        : parse(project.fullDescriptionGerman)}
                    </div>
                  </div>
                  {project.externalUrl && (
                    <Link href={project.externalUrl} target="blank_">
                      <Button
                        variant="default"
                        className="w-full text-sm py-2 cursor-pointer"
                      >
                        {" "}
                        {language == "english"
                          ? "Try it yourself!"
                          : "Probiere es selbst aus!"}
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
                      {language == "english"
                        ? "Check out in GitHub"
                        : "Auf GitHub anschauen"}{" "}
                      <Github />{" "}
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
};
