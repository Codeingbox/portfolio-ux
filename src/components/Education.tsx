const Education = () => {
  const timeline = [
    {
      year: "2022-On Going",
      title: "Bachelor's in Software Engineering",
      institution: "Sharda University",
      description:
        "Focused on Software Development and CS related skills",
    },
    {
      year: "2022",
      title: "Senior Schooling",
      institution: "Laxmi Public School",
      description:
        "Completed senior secondary education with a major in Science",
    },
    {
      year: "2020",
      title: "HighSchool Schooling",
      institution: "Williamsburg Charter HighSchool",
      description:
        "Completed high secondary education",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading gradient-text">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="timeline-item animate-fade-up glass p-6 rounded-xl mb-8 hover:bg-white/[0.08] glass-hover"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <span className="text-accent font-medium inline-block mb-2 animate-fade-up" 
                style={{ animationDelay: `${index * 200 + 100}ms` }}>
                {item.year}
              </span>
              <h3 className="text-xl font-semibold mt-2 animate-fade-up gradient-text" 
                style={{ animationDelay: `${index * 200 + 200}ms` }}>
                {item.title}
              </h3>
              <p className="text-foreground/60 mt-1 animate-fade-up" 
                style={{ animationDelay: `${index * 200 + 300}ms` }}>
                {item.institution}
              </p>
              <p className="text-foreground/60 mt-2 animate-fade-up hover:text-foreground/80 transition-colors duration-300" 
                style={{ animationDelay: `${index * 200 + 400}ms` }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;