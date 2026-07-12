import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4 md:px-8 pointer-events-none"
      >
        <div 
          className={cn(
            "flex items-center justify-between w-full max-w-6xl rounded-full px-6 py-3 transition-all duration-500 pointer-events-auto",
            isScrolled ? "glass-nav py-3" : "bg-transparent py-4"
          )}
        >
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollTo(e, "#home")}
            className="font-display font-bold text-xl tracking-tight flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {portfolioData.personal.initials}
            </span>
            <span className="hidden sm:block">{portfolioData.personal.name}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-full",
                  activeSection === link.href.substring(1) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full mx-3"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Resume & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/ashvinkota.pdf"
              download="Ashvin_Kota_Resume.pdf"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]"
            >
              Download Resume
            </a>
            
            <button
              className="md:hidden p-2 text-foreground focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 pt-24 px-4 pb-6 bg-background/95 backdrop-blur-xl md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-4 items-center justify-center flex-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={cn(
                    "text-2xl font-display font-medium py-2 transition-colors",
                    activeSection === link.href.substring(1) ? "text-primary text-gradient" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/ashvinkota.pdf"
                download="Ashvin_Kota_Resume.pdf"
                className="mt-6 inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-full bg-primary text-primary-foreground"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
