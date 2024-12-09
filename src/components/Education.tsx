const Education = () => {
  const timeline = [
    {
      year: "2023",
      title: "Master's in Computer Science",
      institution: "Stanford University",
      description:
        "Specialized in Human-Computer Interaction and Software Engineering",
    },
    {
      year: "2021",
      title: "Bachelor's in Software Engineering",
      institution: "MIT",
      description:
        "Focused on UI/UX Design and Full Stack Development",
    },
    {
      year: "2020",
      title: "UI/UX Design Certification",
      institution: "Google",
      description:
        "Professional certification in User Experience Design",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="timeline-item animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <span className="text-accent font-medium">{item.year}</span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-foreground/60 mt-1">{item.institution}</p>
              <p className="text-foreground/60 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;