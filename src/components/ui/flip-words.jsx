"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({ 
  words, 
  duration = 3000, 
  className,
  direction = "up",
  animationType = "spring",
  stagger = 0.05,
  letterStagger = 0.03,
  wordStagger = 0.2,
  colors = false,
  glow = false,
  underline = false,
  highlight = false,
  cursor = true,
  cursorColor = "text-blue-500",
  loop = true,
  pauseOnHover = false,
  startOnMount = true,
  onWordChange,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(startOnMount);

  const startAnimation = useCallback(() => {
    if (!loop && currentWordIndex === words.length - 1) return;
    
    const nextIndex = (currentWordIndex + 1) % words.length;
    setCurrentWordIndex(nextIndex);
    setIsAnimating(true);
    
    if (onWordChange) {
      onWordChange(words[nextIndex], nextIndex);
    }
  }, [currentWordIndex, words, loop, onWordChange]);

  useEffect(() => {
    if (!isAnimating && !isPaused && isVisible) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, isPaused, isVisible, duration, startAnimation]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const getExitAnimation = () => {
    switch (direction) {
      case "down":
        return { opacity: 0, y: 40, x: 0, filter: "blur(8px)", scale: 0.8, position: "absolute" };
      case "left":
        return { opacity: 0, x: -40, y: 0, filter: "blur(8px)", scale: 0.8, position: "absolute" };
      case "right":
        return { opacity: 0, x: 40, y: 0, filter: "blur(8px)", scale: 0.8, position: "absolute" };
      case "fade":
        return { opacity: 0, filter: "blur(8px)", scale: 0.8, position: "absolute" };
      case "up":
      default:
        return { opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2, position: "absolute" };
    }
  };

  const getEnterAnimation = () => {
    switch (direction) {
      case "down":
        return { opacity: 0, y: -10, x: 0 };
      case "left":
        return { opacity: 0, x: 10, y: 0 };
      case "right":
        return { opacity: 0, x: -10, y: 0 };
      case "fade":
        return { opacity: 0, scale: 0.8 };
      case "up":
      default:
        return { opacity: 0, y: 10, x: 0 };
    }
  };

  const getTransition = () => {
    if (animationType === "spring") {
      return {
        type: "spring",
        stiffness: 100,
        damping: 10,
      };
    } else if (animationType === "tween") {
      return {
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      };
    } else {
      return {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      };
    }
  };

  const getColorClasses = (index) => {
    if (!colors) return "";
    const colorClasses = [
      "text-blue-400",
      "text-purple-400",
      "text-pink-400",
      "text-cyan-400",
      "text-green-400",
      "text-yellow-400",
      "text-red-400",
      "text-indigo-400",
    ];
    return colorClasses[index % colorClasses.length];
  };

  const currentWord = words[currentWordIndex];

  return (
    <div 
      className={cn(
        "relative inline-block",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
        mode="wait"
      >
        <motion.div
          initial={getEnterAnimation()}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
          }}
          transition={getTransition()}
          exit={getExitAnimation()}
          className={cn(
            "z-10 inline-block relative text-left px-2",
            getColorClasses(currentWordIndex),
            glow && "drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]",
            highlight && "bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1 rounded-md"
          )}
          key={currentWord}
        >
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * wordStagger,
                duration: 0.3,
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * wordStagger + letterIndex * letterStagger,
                    duration: 0.2,
                  }}
                  className={cn(
                    "inline-block",
                    underline && "border-b-2 border-blue-500"
                  )}
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
          
          {/* Cursor */}
          {cursor && (
            <motion.span
              className={cn(
                "inline-block w-0.5 h-6 bg-current ml-1 align-middle",
                cursorColor
              )}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Progress Indicator */}
      {colors && (
        <div className="flex gap-1 mt-2">
          {words.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                index === currentWordIndex 
                  ? "w-4 bg-blue-500" 
                  : "w-1 bg-gray-600"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};