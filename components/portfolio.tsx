import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/interfaces/project.interface";
import { CustomImage } from "./high-order-components/CustomImage";

interface PortfolioProps {
  projects: Project[];
}

function formatDate(date: string) {
  const partes = date.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);
  if (!partes) return "Formato inválido (esperado: DD-MM-YYYY)";

  const [, dia, mes, año] = partes;
  const fecha = new Date(
    `${año}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`
  );

  if (
    Number(dia) < 1 ||
    Number(dia) > 31 ||
    Number(mes) < 1 ||
    Number(mes) > 12 ||
    isNaN(fecha.getTime())
  ) {
    return "Fecha inválida";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(fecha);
}

export function Portfolio({ projects }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Portfolio</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my skills in web development and
          interface design.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} href={`/portfolio/${project.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <span className="absolute top-0 right-0 z-10 px-3 py-1 text-xs font-semibold rounded bg-gray-600 text-white">
                    {project.projectType}
                  </span>
                  <CustomImage
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 right-3 px-2 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded">
                    {formatDate(project.releaseDate)}
                  </span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-500 text-background text-sm rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
