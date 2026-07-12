import React from "react";
import { Link } from "wouter";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { GlassCard } from "@/components/ui/GlassCard";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative dark overflow-hidden">
      <BackgroundEffects />
      
      <div className="z-10 w-full max-w-md">
        <GlassCard className="flex flex-col items-center text-center p-12 border-primary/20">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 animate-pulse">
            <FileQuestion size={40} />
          </div>
          
          <h1 className="text-4xl font-display font-bold mb-2">404</h1>
          <h2 className="text-xl text-foreground font-medium mb-4">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/" className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <Home size={18} />
            Back to Home
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}
