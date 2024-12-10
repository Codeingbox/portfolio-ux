const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen section-padding pt-0 md:pt-0 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-7ac9710361452b7cb1d909afbfff982a/"
          className="w-full h-full"
          style={{
            pointerEvents: "all",
            border: "none",
            transform: "scale(1.4) translateX(-30px)",
            transformOrigin: "center center",
            position: "absolute",
            top: "50px",
            left: "0",
            width: "100%",
            height: "calc(100% - 50px)"
          }}
          title="3D Robot Animation"
        />
      </div>

      <div className="container mx-auto relative z-10 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
            <div className="space-y-4">
              <h2 className="text-accent font-medium mb-4 animate-fade-up" style={{ animationDelay: '200ms' }}>Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '400ms' }}>Aryan</h1>
              <p className="text-xl text-foreground/80 animate-fade-up" style={{ animationDelay: '600ms' }}>
                UI/UX Designer & Full Stack Developer
              </p>
            </div>
            <p className="text-foreground/60 leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: '800ms' }}>
              I create beautiful, functional, and user-centered digital
              experiences. With expertise in both design and development, I
              bridge the gap between aesthetics and functionality.
            </p>
            <div className="flex gap-4 animate-fade-up" style={{ animationDelay: '1000ms' }}>
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 glass rounded-lg hover:bg-white/[0.06] transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;