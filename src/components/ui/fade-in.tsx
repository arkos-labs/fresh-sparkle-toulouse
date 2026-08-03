import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
}: FadeInProps) {
  const directionOffset = 30;
  
  const getInitialY = () => {
    if (direction === "up") return directionOffset;
    if (direction === "down") return -directionOffset;
    return 0;
  };

  const getInitialX = () => {
    if (direction === "left") return directionOffset;
    if (direction === "right") return -directionOffset;
    return 0;
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: getInitialY(), 
        x: getInitialX() 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
