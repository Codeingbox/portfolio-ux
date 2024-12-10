import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-up">Get in Touch</h2>
          <p className="text-foreground/60 max-w-md mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            I'm always open to new opportunities and interesting projects.
            Let's work together to create something amazing.
          </p>
          <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 glass rounded-full hover:bg-white/[0.06] hover:scale-110 transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <social.icon size={24} className="text-accent group-hover:rotate-12 transition-transform duration-300" />
              </a>
            ))}
          </div>
          <div className="pt-8 mt-8 border-t border-white/[0.05] text-foreground/40 text-sm animate-fade-up" style={{ animationDelay: '800ms' }}>
            © {new Date().getFullYear()} Aryan Kumar Pandey. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;