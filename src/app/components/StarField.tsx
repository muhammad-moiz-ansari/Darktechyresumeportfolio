import { motion } from "motion/react";

interface StarFieldProps {
  count?: number;
  className?: string;
}

export function StarField({ count = 50, className = "" }: StarFieldProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
