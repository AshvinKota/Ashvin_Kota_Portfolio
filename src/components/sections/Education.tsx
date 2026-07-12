import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" />

        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ height: '100%' }}
            />
          </div>

          <div className="space-y-12">
            {portfolioData.education.map((edu, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full glass-card border-primary/30 flex items-center justify-center z-10 bg-background group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300">
                    <GraduationCap size={18} className="text-primary" />
                  </div>

                  {/* Content Card - Desktop Left/Right, Mobile Right */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                  >
                    <GlassCard hoverEffect className="relative overflow-visible">
                      {/* Pointer Arrow */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-card border border-white/[0.05] rotate-45 ${isEven ? '-right-[8.5px] border-l-0 border-b-0' : '-left-[8.5px] border-r-0 border-t-0'}`}></div>
                      
                      <div className="text-sm font-mono text-primary mb-2 bg-primary/10 inline-block px-3 py-1 rounded-full">{edu.period}</div>
                      <h4 className="text-xl font-display font-semibold mb-1 text-foreground">{edu.degree}</h4>
                      <div className="text-muted-foreground font-medium mb-3">{edu.institution}</div>
                      <div className="text-sm text-foreground/80 bg-white/[0.05] inline-block px-3 py-1 rounded-md border border-white/[0.05]">{edu.score}</div>
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
