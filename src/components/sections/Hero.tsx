import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Code, Terminal, Database, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { GlassCard } from "../ui/GlassCard";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href: string) => {
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
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start z-10 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-top-2 duration-500 delay-150 fill-mode-both">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              {portfolioData.personal.availability}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4 animate-in fade-in slide-in-from-top-2 duration-500 delay-200 fill-mode-both">
            Hi, I'm <br />
            <span className="text-gradient">{portfolioData.personal.name}</span>
          </h1>

          <div className="h-12 md:h-16 mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium text-muted-foreground"
              >
                {portfolioData.personal.roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-xl mb-10 animate-in fade-in slide-in-from-top-2 duration-500 delay-300 fill-mode-both">
            {portfolioData.personal.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-top-2 duration-500 delay-500 fill-mode-both">
            <button 
              onClick={() => scrollTo('#projects')}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              View My Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 rounded-full glass-button font-medium text-foreground hover:bg-white/[0.1] hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex items-center gap-4 animate-in fade-in duration-500 delay-700 fill-mode-both">
            <a href={portfolioData.personal.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-button text-muted-foreground hover:text-primary hover:border-primary/50">
              <Github size={20} />
            </a>
            <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-button text-muted-foreground hover:text-primary hover:border-primary/50">
              <Linkedin size={20} />
            </a>
            <a href={portfolioData.personal.socials.email} className="p-3 rounded-full glass-button text-muted-foreground hover:text-primary hover:border-primary/50">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative hidden lg:flex justify-center items-center h-[500px] animate-in fade-in zoom-in-95 duration-700 delay-200 fill-mode-both">
          {/* Main central card */}
          <GlassCard className="w-80 h-80 z-20 flex flex-col justify-center items-center border-primary/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
            <Code size={64} className="text-primary mb-6 animate-pulse" />
            <div className="font-mono text-sm text-primary/80">&lt;developer&gt;</div>
            <div className="font-mono text-xl text-foreground font-bold mt-2">const build = true;</div>
            <div className="font-mono text-sm text-primary/80 mt-2">&lt;/developer&gt;</div>
          </GlassCard>

          {/* Floating elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 z-30"
          >
            <GlassCard className="p-4 rounded-2xl flex items-center gap-3 border-secondary/30">
              <Database size={24} className="text-secondary-foreground" />
              <span className="font-medium text-sm">Data Science</span>
            </GlassCard>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 z-30"
          >
            <GlassCard className="p-4 rounded-2xl flex items-center gap-3 border-blue-500/30">
              <Terminal size={24} className="text-blue-400" />
              <span className="font-medium text-sm">Python / Django</span>
            </GlassCard>
          </motion.div>

          <motion.div 
            animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 -right-4 z-10"
          >
            <GlassCard className="p-4 rounded-2xl flex items-center gap-3 border-purple-500/30">
              <Cpu size={24} className="text-purple-400" />
              <span className="font-medium text-sm">AI & ML</span>
            </GlassCard>
          </motion.div>
          
          {/* Orbital rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.03] z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-white/[0.02] z-0" />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in fade-in duration-700 delay-1000 fill-mode-both">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-white/[0.1] relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
