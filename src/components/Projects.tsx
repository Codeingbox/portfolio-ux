import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Organic-Hub",
      description: "A web app for farmers to track real-time local environmental conditions",
      tags: ["All Devices", "Js", "css"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      url: "https://organic-hub.example.com",
    },
    {
      title: "Portfolio Website",
      description: "Analytics dashboard for social media management",
      tags: ["Tailwind.css", "React.js", "Typescript"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      url: "https://portfolio.example.com",
    },
    {
      title: "E-commerce Redesign",
      description: "A modern e-commerce platform with focus on user experience",
      tags: ["UI/UX", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      url: "https://ecommerce.example.com",
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates images using AI models",
      tags: ["Python", "TensorFlow", "React"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      url: "https://ai-image.example.com",
    },
    {
      title: "Social Media Analytics",
      description: "Dashboard for tracking social media performance",
      tags: ["Data Viz", "Next.js", "GraphQL"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      url: "https://analytics.example.com",
    },
    {
      title: "Weather App",
      description: "Real-time weather tracking application",
      tags: ["React Native", "API", "Mobile"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80",
      url: "https://weather.example.com",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fade-down">
          My Projects
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                <div
                  className="glass rounded-2xl overflow-hidden group animate-scale-up hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-foreground/60 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm animate-fade-up"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;