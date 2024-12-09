const Hero = () => {
  return (
    <section id="home" className="min-h-screen section-padding pt-32 md:pt-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div>
              <h2 className="text-accent font-medium mb-4">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                John Doe
              </h1>
              <p className="text-xl text-foreground/80">
                UI/UX Designer & Full Stack Developer
              </p>
            </div>
            <p className="text-foreground/60 leading-relaxed max-w-lg">
              I create beautiful, functional, and user-centered digital experiences.
              With expertise in both design and development, I bridge the gap between
              aesthetics and functionality.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors duration-200"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 glass rounded-lg hover:bg-white/[0.06] transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="h-[500px] animate-fade-up">
            <iframe
              src="https://my.spline.design/nexbotrobotcharacterconcept-7ac9710361452b7cb1d909afbfff982a/"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;