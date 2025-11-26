import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "FinTech Dashboard",
    description: "AI-powered financial analytics platform for modern investors",
    image: "https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2Mzk2NjcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Node.js", "AI/ML", "PostgreSQL"],
    demoLink: "#"
  },
  {
    title: "HealthTech SaaS",
    description: "Patient management system with telemedicine integration",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc2Mzk3ODUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Next.js", "TypeScript", "WebRTC", "MongoDB"],
    demoLink: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "Headless commerce solution with real-time inventory",
    image: "https://images.unsplash.com/photo-1705909770198-7e83c24e1616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2NDAwMzc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Vue.js", "Stripe", "GraphQL", "Redis"],
    demoLink: "#"
  },
  {
    title: "AI Content Studio",
    description: "Generate marketing content with advanced language models",
    image: "https://images.unsplash.com/photo-1761223956849-c6912f2179aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFpJTIwbmV1cmFsfGVufDF8fHx8MTc2NDAwNDEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "OpenAI", "Python", "FastAPI"],
    demoLink: "#"
  },
  {
    title: "Project Management Tool",
    description: "Collaborative workspace with real-time synchronization",
    image: "https://images.unsplash.com/photo-1620393470010-fd62b8ab841d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGRpZ2l0YWwlMjBncmFkaWVudHxlbnwxfHx8fDE3NjQwMDQxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "Socket.io", "Node.js", "MySQL"],
    demoLink: "#"
  },
  {
    title: "Analytics Platform",
    description: "Real-time data visualization and business intelligence",
    image: "https://images.unsplash.com/photo-1544036261-f15767f4ae45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXR0ZXJuJTIwYmx1ZXxlbnwxfHx8fDE3NjQwMDQxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "D3.js", "Python", "BigQuery"],
    demoLink: "#"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F3A93]">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Real projects. Real results. See how we've helped startups turn their ideas into successful digital products.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-[#1F3A93] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#1F3A93]/10 text-[#1F3A93] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {/* <Button
                  variant="outline"
                  className="w-full border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93] hover:text-white group/btn"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  <span>View Live Demo</span>
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more of our work?
          </p>
          <Button
            size="lg"
            className="bg-[#8A2BE2] hover:bg-[#7209c7] text-white px-8"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
