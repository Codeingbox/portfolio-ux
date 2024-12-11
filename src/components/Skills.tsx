import { Code2, Palette, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Wireframes Designing", "Prototyping", "User Research"],
    },
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "WordPress"],
    },
    {
      title: "Backend Development",
      icon: Wrench,
      skills: ["Node.js", "Python", "MySQL", "PostgreSQL", "QA Testing(Beginner)"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-heading gradient-text">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-8 glass-hover group animate-scale-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <category.icon
                  size={32}
                  className="text-accent group-hover:scale-110 transition-transform duration-500 animate-float"
                />
                <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="text-foreground/60 hover:text-accent transition-colors duration-300 animate-fade-up pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-accent before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-all hover:translate-x-2"
                    style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;