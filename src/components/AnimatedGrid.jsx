import React, { useEffect, useRef } from "react";

const AnimatedGrid = ({ color = "blue", density = 40, opacity = 20 }) => {
  const gridRef = useRef(null);
  
  useEffect(() => {
    // Add CSS animation keyframes if they don't exist
    if (!document.getElementById('grid-animation-styles')) {
      const style = document.createElement('style');
      style.id = 'grid-animation-styles';
      style.innerHTML = `
        @keyframes gridPulse {
          0%, 100% { opacity: ${opacity * 0.005}; }
          50% { opacity: ${opacity * 0.01}; }
        }
        @keyframes gridFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gridGlow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5); }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Cleanup on unmount
    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [opacity]);

  // Generate grid lines with more efficient approach
  const renderGridLines = () => {
    const lines = [];
    const animationDuration = 3 + Math.random() * 2;
    
    // Vertical lines
    for (let i = 0; i < density; i++) {
      lines.push(
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${(i / density) * 100}%`,
            background: `linear-gradient(to bottom, transparent, var(--grid-color, rgba(59, 130, 246, 0.1)), transparent)`,
            animation: `gridPulse ${animationDuration}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `translateZ(${Math.random() * 20}px)`,
          }}
        />
      );
    }
    
    // Horizontal lines
    for (let i = 0; i < density; i++) {
      lines.push(
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${(i / density) * 100}%`,
            background: `linear-gradient(to right, transparent, var(--grid-color, rgba(59, 130, 246, 0.1)), transparent)`,
            animation: `gridPulse ${animationDuration}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `translateZ(${Math.random() * 20}px)`,
          }}
        />
      );
    }
    
    // Add some floating particles
    for (let i = 0; i < density / 4; i++) {
      lines.push(
        <div
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `var(--grid-color, rgba(59, 130, 246, 0.3))`,
            animation: `gridFloat ${5 + Math.random() * 5}s ease-in-out infinite, gridGlow ${3 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: `0 0 ${5 + Math.random() * 10}px var(--grid-color, rgba(59, 130, 246, 0.3))`,
          }}
        />
      );
    }
    
    return lines;
  };

  // Map color names to actual color values
  const getColorValue = (colorName) => {
    const colors = {
      blue: "rgba(59, 130, 246, 0.1)",
      purple: "rgba(139, 92, 246, 0.1)",
      teal: "rgba(20, 184, 166, 0.1)",
      pink: "rgba(236, 72, 153, 0.1)",
      cyan: "rgba(6, 182, 212, 0.1)",
      green: "rgba(34, 197, 94, 0.1)",
    };
    return colors[colorName] || colors.blue;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        ref={gridRef}
        className="relative w-full h-full"
        style={{
          // Set CSS variable for color
          "--grid-color": getColorValue(color),
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Grid Container with Mask */}
        <div 
          className="absolute inset-0"
          style={{
            maskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
            WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        >
          {/* Grid Lines */}
          {renderGridLines()}
          
          {/* Center Glow Effect */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(circle, var(--grid-color, rgba(59, 130, 246, 0.2)), transparent 70%)`,
              animation: "gridPulse 4s ease-in-out infinite",
            }}
          />
          
          {/* Corner Accents */}
          {[
            { top: "10%", left: "10%" },
            { top: "10%", right: "10%" },
            { bottom: "10%", left: "10%" },
            { bottom: "10%", right: "10%" },
          ].map((pos, i) => (
            <div
              key={`corner-${i}`}
              className="absolute w-16 h-16 rounded-full opacity-20 pointer-events-none"
              style={{
                ...pos,
                background: `radial-gradient(circle, var(--grid-color, rgba(59, 130, 246, 0.2)), transparent 70%)`,
                animation: `gridPulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedGrid;