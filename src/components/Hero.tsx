import { useEffect, useRef } from "react";

const Hero = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Adjust iframe pointer events for smoother interaction
    const handleMouseMove = (event) => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const rect = iframe.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // Normalize X (-1 to 1)
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1; // Normalize Y (-1 to 1)

      // Update iframe transform for subtle 3D perspective
      iframe.style.transform = `scale(1.4) translateX(${x * 10}px) translateY(${y * 10}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen section-padding pt-0 md:pt-0 relative overflow-hidden"
    >
      {/* Spline container */}
      <div className="absolute inset-0 z-0">
        <iframe
          ref={iframeRef}
          src="https://my.spline.design/nexbotrobotcharacterconcept-7ac9710361452b7cb1d909afbfff982a/"
          className="w-full h-full"
          style={{
            pointerEvents: "none", // Allow smoother mouse interactions
            border: "none",
            transform: "scale(1.4)",
            transformOrigin: "center center",
            position: "absolute",
            top: "50px", // Adds space above the robot
            left: "0",
            width: "100%",
            height: "calc(100% - 50px)", // Maintains proper scaling
            transition: "transform 0.1s ease-out", // Smooth transition for cursor tracking
          }}
          title="3D Robot Animation"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
            <div>
              <h2 className="text-accent font-medium mb-4">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Aryan</h1>
              <p className="text-xl text-foreground/80">
                UI/UX Designer & Full Stack Developer
              </p>
            </div>
            <p className="text-foreground/60 leading-relaxed max-w-lg">
              I create beautiful, functional, and user-centered digital
              experiences. With expertise in both design and development, I
              bridge the gap between aesthetics and functionality.
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
