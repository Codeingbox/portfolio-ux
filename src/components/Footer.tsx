import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <footer id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-foreground/60 max-w-md mx-auto">
            I'm always open to new opportunities and interesting projects.
            Let's work together to create something amazing.
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 glass rounded-full hover:bg-white/[0.06] hover:scale-110 transition-all duration-300"
              >
                <social.icon size={24} className="text-accent" />
              </a>
            ))}
          </div>
          <div className="pt-8 mt-8 border-t border-white/[0.05] text-foreground/40 text-sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;