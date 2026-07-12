import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="mt-12 relative">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="border-primary/20 relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 mt-1">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Building2 size={16} className="text-primary/70" />
                          {exp.company}
                        </span>
                        <span className="hidden sm:inline text-white/[0.2]">•</span>
                        <span className="flex items-center gap-1.5 text-sm font-mono">
                          <Calendar size={14} className="text-primary/70" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 ml-2 md:ml-16">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground/90">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 glow-pulse" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 ml-2 md:ml-16">
                  {exp.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-md bg-white/[0.03] border border-white/[0.08] text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
