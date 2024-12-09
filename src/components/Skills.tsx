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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <category.icon
                  size={32}
                  className="text-accent group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-foreground/60 hover:text-accent transition-colors duration-200"
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
