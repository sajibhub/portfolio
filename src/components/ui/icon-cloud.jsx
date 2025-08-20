"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "relative",
    },
  },
  options: {
    reverse: true,
    depth: 1.2,
    wheelZoom: true,
    imageScale: 2.5,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.01,
    dragControl: true,
    dragThreshold: 3,
    freezeActive: true,
    shape: "sphere",
    zoom: 1.1,
    pinchZoom: true,
  },
};

export const renderCustomIcon = (icon, theme, imageArray) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;
  
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 48,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
      className: "transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]",
    },
  });
};

export default function IconCloud({
  iconSlugs = [],
  imageArray = [],
  className = "",
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (iconSlugs.length > 0) {
      setLoading(true);
      setError(null);
      
      fetchSimpleIcons({ slugs: iconSlugs })
        .then(setData)
        .catch((err) => {
          console.error("Error fetching icons:", err);
          setError("Failed to load icons");
        })
        .finally(() => setLoading(false));
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "dark")
    );
  }, [data, theme]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center w-full h-96 ${className}`}>
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin-reverse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center w-full h-96 ${className}`}>
        <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
          <div className="text-red-400 text-lg mb-2">⚠️ {error}</div>
          <div className="text-gray-400">Please refresh the page</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-96 ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 rounded-2xl"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-500"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 bg-teal-400 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse animation-delay-1500"></div>
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.7 - (i * 0.05)
          }}
        ></div>
      ))}
      
      {/* Icon Cloud */}
      <div className="relative z-10 w-full h-full">
        <Cloud {...cloudProps}>
          {renderedIcons}
          {imageArray &&
            imageArray.length > 0 &&
            imageArray.map((image, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
              >
                <img
                  height="48"
                  width="48"
                  alt="Custom icon"
                  src={image}
                  className="rounded-lg"
                />
              </a>
            ))}
        </Cloud>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1s linear infinite;
        }
      `}</style>
    </div>
  );
}