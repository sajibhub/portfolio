import React from "react";
import IconCloud from "./ui/icon-cloud";

const slugs = [
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "firebase",
  "vercel",
  "testinglibrary",
  "git",
  "github",
  "visualstudiocode",
  "linux",
  "windows",
  "postman",
  "debian",
  "tailwindcss",
  "mongodb",
  "redux",
  'vite',
  'redis',
  'supabase',
  'typescript',
  'nextjs',
  'docker',
  'aws',
  'socketdotio',
];

function IconCloudDemo() {
  return (
    <div className="relative flex items-center justify-center w-full py-8 md:py-12 overflow-hidden">
      {/* Background Glow Effect - Smaller */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-[12rem] h-[12rem] md:w-[18rem] md:h-[18rem] bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      {/* Compact Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto p-4 md:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-md border border-gray-700/50 shadow-xl">
        {/* Decorative Elements - Smaller */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-teal-400 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse animation-delay-1500"></div>
        
        {/* Title - Compact */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
            Technology Stack
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Technologies I work with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mt-4"></div>
        </div>
        
        {/* Icon Cloud Container - Zoomed Out */}
        <div className="relative flex items-center justify-center w-full h-[35vh] min-h-[250px] max-h-[400px] rounded-xl bg-gray-900/50 border border-gray-700/50 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          {/* Grid Lines - Reduced Density */}
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]">
            <div className="absolute inset-0 grid grid-cols-[repeat(15,1fr)] opacity-10">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="relative h-full w-full border-r border-blue-500/20"
                />
              ))}
            </div>
            <div className="absolute inset-0 grid grid-rows-[repeat(15,1fr)] opacity-10">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="relative w-full h-full border-b border-blue-500/20"
                />
              ))}
            </div>
          </div>
          
          {/* Icon Cloud - Scaled Down */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="transform scale-75 origin-center">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
          
          {/* Floating Particles - Fewer */}
          {[...Array(8)].map((_, i) => (
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
        </div>
        
        {/* Stats - Compact */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
          {[
            { value: `${slugs.length}`, label: "Technologies" },
            { value: "1+", label: "Years" },
            { value: "20+", label: "Projects" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-3 md:p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="text-xl md:text-2xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Call to Action - Smaller */}
        <div className="text-center mt-6 md:mt-8">
          <button className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm md:text-base">
            View Projects
          </button>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default IconCloudDemo;