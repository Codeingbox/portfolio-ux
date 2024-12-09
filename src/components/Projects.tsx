const Projects = () => {
  const projects = [
    {
      title: "E-commerce Redesign",
      description: "A modern e-commerce platform with focus on user experience",
      tags: ["UI/UX", "React", "Node.js"],
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      tags: ["Dashboard", "Vue.js", "D3.js"],
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Mobile Banking App",
      description: "Fintech application with focus on security and usability",
      tags: ["Mobile", "React Native", "Firebase"],
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group animate-fade-up hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;