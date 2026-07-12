import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { portfolioData } from "@/data/portfolioData";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work and technical achievements."
        />

        <div className="max-w-3xl mx-auto mt-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full flex"
            >
              {/* Note: using a div wrapper for tilt on desktop */}
              <div className="group w-full perspective-1000">
                <GlassCard 
                  className="h-full flex flex-col justify-between border-white/[0.05] group-hover:border-primary/30 transition-all duration-500 transform-gpu group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:-rotate-y-2 relative overflow-hidden"
                >
                  {/* Subtle top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] text-primary/80 border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/[0.05]">
                      {project.links.live && (
                        <a 
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {!project.links.live && (
                        <span className="text-sm text-muted-foreground italic">Private / Local Project</span>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
