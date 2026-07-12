import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { portfolioData } from "@/data/portfolioData";

export function About() {
  return (
    <section id="about" className="py-24 relative px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="A passionate developer building scalable solutions."
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full border-primary/10">
            <h3 className="text-2xl font-display font-medium mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {portfolioData.personal.about}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 sm:gap-12 pt-6 border-t border-white/[0.05]">
              <div>
                <span className="text-sm text-primary font-medium tracking-wider uppercase mb-2 block">Degree</span>
                <span className="text-xl font-display font-semibold text-foreground">BCA Graduate</span>
              </div>
              <div className="w-px h-12 bg-white/[0.1] hidden sm:block"></div>
              <div>
                <span className="text-sm text-primary font-medium tracking-wider uppercase mb-2 block">Academic</span>
                <span className="text-xl font-display font-semibold text-foreground">8.05 CGPA</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
