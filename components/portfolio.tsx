import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with shopping cart and payment gateway integration.",
    image: "/modern-ecommerce-website.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    fullDescription: `A comprehensive e-commerce solution built with modern technologies. This platform features a robust shopping cart system, secure payment processing through Stripe, and a fully responsive design. 
    
    The backend utilizes PostgreSQL for data management, ensuring fast and reliable performance. The admin panel allows for easy product management, order tracking, and customer analytics.`,
    videoUrl: "/ecommerce-platform-demo-video.jpg",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Interactive dashboard for data visualization and real-time analytics.",
    image: "/analytics-dashboard.png",
    tags: ["React", "Chart.js", "D3.js", "Node.js", "MongoDB"],
    fullDescription: `A powerful analytics dashboard that provides real-time insights into business metrics. Built with React and powered by Chart.js and D3.js for stunning data visualizations.
    
    The dashboard connects to MongoDB for fast data retrieval and includes customizable widgets, exportable reports, and role-based access control.`,
    videoUrl: "/analytics-dashboard-demo-video.jpg",
  },
  {
    slug: "creative-portfolio",
    title: "Creative Portfolio",
    description: "Portfolio website with smooth animations and minimalist design.",
    image: "/minimalist-portfolio.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    fullDescription: `A stunning portfolio website showcasing creative work with smooth, buttery animations powered by Framer Motion. The minimalist design puts the focus on the content while maintaining visual interest.
    
    Built with Next.js for optimal performance and deployed on Vercel for instant global delivery. Features include dynamic routing, optimized images, and SEO-friendly structure.`,
    videoUrl: "/portfolio-website-demo-video.jpg",
  },
  {
    slug: "mobile-app",
    title: "Mobile App",
    description: "Responsive mobile application for task management and productivity.",
    image: "/mobile-task-management-app.png",
    tags: ["React Native", "Firebase", "Redux", "UI/UX"],
    fullDescription: `A cross-platform mobile application designed for task management and productivity enhancement. Built with React Native for both iOS and Android platforms.
    
    Firebase integration provides real-time synchronization across devices, while Redux manages complex state efficiently. Features include push notifications, offline mode, and collaborative task lists.`,
    videoUrl: "/mobile-task-app-demo-video.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Portfolio</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my skills in web development and interface design.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} href={`/portfolio/${project.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-background border border-foreground text-foreground text-xs rounded-full font-semibold"
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
  )
}
