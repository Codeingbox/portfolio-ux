import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto">
        <div
          className={`glass rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-500 animate-fade-down ${
            isScrolled ? "shadow-lg" : ""
          }`}
        >
          <a href="#" className="text-2xl font-bold text-accent hover:scale-105 transition-transform duration-300">
            AKP
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-accent transition-all duration-300 hover:scale-105 animate-fade-down"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-foreground/80 hover:text-accent transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 animate-fade-down">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-accent transition-colors duration-200 animate-fade-down"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;