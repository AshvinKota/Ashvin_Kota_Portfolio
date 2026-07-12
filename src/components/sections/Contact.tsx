import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlassCard } from "../ui/GlassCard";
import { portfolioData } from "@/data/portfolioData";
import { MapPin, Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus("submitting");
    
    // Simulate API call since there is no backend
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after a while
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Let's Work Together" />

        <div className="grid lg:grid-cols-5 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col"
          >
            <GlassCard className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {portfolioData.contact.message}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Location</div>
                      <div className="text-foreground">{portfolioData.personal.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium">Email</div>
                      <a href={portfolioData.personal.socials.email} className="text-foreground hover:text-primary transition-colors">
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.05] flex gap-4">
                <a href={portfolioData.personal.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/[0.03] border border-white/[0.05] rounded-lg hover:border-primary/50 hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/[0.03] border border-white/[0.05] rounded-lg hover:border-primary/50 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                    <input 
                      id="name"
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full bg-white/[0.02] border ${errors.name ? 'border-red-500/50' : 'border-white/[0.1] focus:border-primary/50'} rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                    <input 
                      id="email"
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full bg-white/[0.02] border ${errors.email ? 'border-red-500/50' : 'border-white/[0.1] focus:border-primary/50'} rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject (Optional)</label>
                  <input 
                    id="subject"
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-white/[0.02] border border-white/[0.1] focus:border-primary/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="Opportunity Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full bg-white/[0.02] border ${errors.message ? 'border-red-500/50' : 'border-white/[0.1] focus:border-primary/50'} rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none`}
                    placeholder="Hello, I'd like to talk about..."
                  />
                  {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={status === "submitting" || status === "success"}
                  className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        Send Message <Send size={18} />
                      </motion.div>
                    )}
                    {status === "submitting" && (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                        Sending...
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        Sent Successfully <CheckCircle2 size={18} />
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                        Failed to Send <AlertCircle size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
