import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { portfolioData } from "@/data/portfolioData";
import { Code2, LayoutTemplate, Box, Database, Wrench, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 size={24} />,
  "Frontend": <LayoutTemplate size={24} />,
  "Frameworks & Libraries": <Box size={24} />,
  "Databases": <Database size={24} />,
  "Development Tools": <Wrench size={24} />,
  "Additional Interests": <Sparkles size={24} />
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills & Technologies" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full border-white/[0.04] hover:border-primary/20">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {iconMap[skillGroup.category] || <Code2 size={24} />}
                  </div>
                  <h3 className="text-lg font-display font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.15)", color: "rgba(16, 185, 129, 1)" }}
                      className="px-3 py-1.5 text-sm rounded-md bg-white/[0.03] border border-white/[0.08] text-foreground/80 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
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
