import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/80 origin-left z-50 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
        style={{ scaleX }}
      />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Ambient Gradient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Top Right Primary Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] mix-blend-screen" />
        
        {/* Bottom Left Secondary Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/30 blur-[150px] mix-blend-screen" />
        
        {/* Center subtle glow */}
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[100px] mix-blend-screen" />
      </div>

      {/* Custom Cursor Glow (Desktop Only) */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-[-1] hidden md:block"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5,
        }}
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
    </>
  );
}
