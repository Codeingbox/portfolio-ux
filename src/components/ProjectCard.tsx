import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    url: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="glass rounded-2xl overflow-hidden group animate-scale-up card-hover"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors transform hover:scale-125 duration-300"
          >
            <ExternalLink className="w-8 h-8 animate-bounce" />
          </a>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </a>
        <p className="text-foreground/60 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm animate-fade-up hover:bg-accent/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${(index * 100) + (tagIndex * 50)}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;