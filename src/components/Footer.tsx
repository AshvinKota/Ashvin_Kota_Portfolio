import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/[0.05] mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm font-medium">
          Designed & Built by <span className="text-foreground">{portfolioData.personal.name}</span>
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors bg-white/[0.02] rounded-full border border-white/[0.05] hover:border-primary/50"
          >
            <Github size={18} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors bg-white/[0.02] rounded-full border border-white/[0.05] hover:border-primary/50"
          >
            <Linkedin size={18} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={portfolioData.personal.socials.email}
            className="p-2 text-muted-foreground hover:text-primary transition-colors bg-white/[0.02] rounded-full border border-white/[0.05] hover:border-primary/50"
          >
            <Mail size={18} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
