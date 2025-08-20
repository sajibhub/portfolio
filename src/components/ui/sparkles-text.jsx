"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SparklesText = ({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
  sparkleSize = 21,
  animationDuration = 0.8,
  animationRepeat = Infinity,
  animationDelay = 0,
  textClassName,
  glow = false,
  pulse = false,
  gradient = false,
  underline = false,
  ...props
}) => {
  const [sparkles, setSparkles] = useState([]);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const generateSparkle = () => {
      if (!containerRef.current) return null;
      
      const rect = containerRef.current.getBoundingClientRect();
      const padding = 20; // Padding to keep sparkles within bounds
      
      const sparkleX = `${Math.random() * (rect.width - padding * 2) + padding}px`;
      const sparkleY = `${Math.random() * (rect.height - padding * 2) + padding}px`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 2 + animationDelay;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 10 + 5;
      const rotationSpeed = Math.random() * 100 + 50;
      const id = `${sparkleX}-${sparkleY}-${Date.now()}-${Math.random()}`;
      
      return { id, x: sparkleX, y: sparkleY, color, delay, scale, lifespan, rotationSpeed };
    };

    const initializeSparkles = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateSparkle).filter(Boolean);
      setSparkles(newSparkles);
    };

    const updateSparkles = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((sparkle) => {
          if (sparkle.lifespan <= 0) {
            return generateSparkle();
          } else {
            return { ...sparkle, lifespan: sparkle.lifespan - 0.1 };
          }
        })
      );
    };

    if (dimensions.width > 0 && dimensions.height > 0) {
      initializeSparkles();
      const interval = setInterval(updateSparkles, 100);
      return () => clearInterval(interval);
    }
  }, [colors.first, colors.second, sparklesCount, animationDelay, dimensions]);

  const getTextStyles = () => {
    const styles = {};
    
    if (gradient) {
      styles.background = `linear-gradient(135deg, ${colors.first}, ${colors.second})`;
      styles.WebkitBackgroundClip = "text";
      styles.WebkitTextFillColor = "transparent";
      styles.backgroundClip = "text";
    }
    
    if (glow) {
      styles.textShadow = `0 0 10px ${colors.first}40, 0 0 20px ${colors.second}40`;
    }
    
    return styles;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-block",
        pulse && "animate-pulse",
        className
      )}
      {...props}
      style={{
        "--sparkles-first-color": `${colors.first}`,
        "--sparkles-second-color": `${colors.second}`,
      }}
    >
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            {...sparkle}
            size={sparkleSize}
            duration={animationDuration}
            repeat={animationRepeat}
          />
        ))}
        <strong 
          className={cn(
            "relative z-10",
            textClassName,
            underline && "border-b-2 border-current pb-1"
          )}
          style={getTextStyles()}
        >
          {text}
        </strong>
        
        {/* Additional glow layer */}
        {glow && (
          <motion.div
            className="absolute inset-0 -z-10 rounded-lg blur-xl opacity-50"
            style={{
              background: `radial-gradient(circle, ${colors.first}20, ${colors.second}20, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </span>
    </div>
  );
};

const Sparkle = ({ 
  id, 
  x, 
  y, 
  color, 
  delay, 
  scale, 
  lifespan,
  rotationSpeed,
  size = 21,
  duration = 0.8,
  repeat = Infinity
}) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [0, rotationSpeed, rotationSpeed * 2],
      }}
      transition={{ 
        duration, 
        repeat,
        delay,
        ease: "easeInOut"
      }}
      width={size}
      height={size}
      viewBox="0 0 21 21"
      style={{
        filter: "drop-shadow(0 0 3px currentColor)",
      }}
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  );
};

export default SparklesText;