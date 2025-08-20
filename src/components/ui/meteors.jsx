"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20,
  className,
  color = "slate-500",
  trailColor = "slate-500",
  minSize = 0.5,
  maxSize = 2,
  minTrailLength = 50,
  maxTrailLength = 150,
  minDuration = 2,
  maxDuration = 10,
  direction = "top",
  glow = false,
  randomDirection = false,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const generateMeteorStyle = () => {
      const size = Math.random() * (maxSize - minSize) + minSize;
      const trailLength = Math.random() * (maxTrailLength - minTrailLength) + minTrailLength;
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      const delay = Math.random() * 1 + 0.2;

      let top, left, rotation;

      if (randomDirection) {
        const directions = ["top", "right", "bottom", "left"];
        const selectedDirection = directions[Math.floor(Math.random() * directions.length)];
        
        switch (selectedDirection) {
          case "top":
            top = -5;
            left = Math.floor(Math.random() * window.innerWidth);
            rotation = 215;
            break;
          case "right":
            top = Math.floor(Math.random() * window.innerHeight);
            left = window.innerWidth + 5;
            rotation = 305;
            break;
          case "bottom":
            top = window.innerHeight + 5;
            left = Math.floor(Math.random() * window.innerWidth);
            rotation = 35;
            break;
          case "left":
            top = Math.floor(Math.random() * window.innerHeight);
            left = -5;
            rotation = 125;
            break;
        }
      } else {
        switch (direction) {
          case "top":
            top = -5;
            left = Math.floor(Math.random() * window.innerWidth);
            rotation = 215;
            break;
          case "right":
            top = Math.floor(Math.random() * window.innerHeight);
            left = window.innerWidth + 5;
            rotation = 305;
            break;
          case "bottom":
            top = window.innerHeight + 5;
            left = Math.floor(Math.random() * window.innerWidth);
            rotation = 35;
            break;
          case "left":
            top = Math.floor(Math.random() * window.innerHeight);
            left = -5;
            rotation = 125;
            break;
          default:
            top = -5;
            left = Math.floor(Math.random() * window.innerWidth);
            rotation = 215;
        }
      }

      return {
        top: `${top}px`,
        left: `${left}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size}px`,
        trailLength: `${trailLength}px`,
        rotation: `${rotation}deg`,
      };
    };

    const styles = Array.from({ length: number }, generateMeteorStyle);
    setMeteorStyles(styles);
  }, [number, minSize, maxSize, minTrailLength, maxTrailLength, minDuration, maxDuration, direction, randomDirection]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute block",
            "animate-meteor",
            glow && "drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]",
            className
          )}
          style={{
            top: style.top,
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
            width: style.width,
            height: style.height,
            transform: `rotate(${style.rotation})`,
          }}
        >
          {/* Meteor Head */}
          <span
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
              glow && "animate-pulse"
            )}
            style={{
              width: style.width,
              height: style.height,
              backgroundColor: `var(--meteor-color, rgb(100 116 139))`,
            }}
          />
          
          {/* Meteor Tail */}
          <div
            className="absolute top-1/2 left-1/2 -translate-y-1/2"
            style={{
              width: style.trailLength,
              height: "1px",
              background: `linear-gradient(to right, var(--meteor-color, rgb(100 116 139)), transparent)`,
              transform: `translateX(-100%) rotate(${style.rotation})`,
            }}
          />
          
          {/* Glow Effect */}
          {glow && (
            <>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm"
                style={{
                  width: `calc(${style.width} * 2)`,
                  height: `calc(${style.height} * 2)`,
                  backgroundColor: `var(--meteor-color, rgb(100 116 139))`,
                  opacity: 0.5,
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"
                style={{
                  width: `calc(${style.width} * 3)`,
                  height: `calc(${style.height} * 3)`,
                  backgroundColor: `var(--meteor-color, rgb(100 116 139))`,
                  opacity: 0.3,
                }}
              />
            </>
          )}
        </span>
      ))}
      
      {/* CSS Variables for dynamic colors */}
      <style jsx>{`
        :root {
          --meteor-color: ${color === "slate-500" ? "rgb(100 116 139)" : color};
          --trail-color: ${trailColor === "slate-500" ? "rgb(100 116 139)" : trailColor};
        }
      `}</style>
    </>
  );
};

export default Meteors;