import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../assets/css/tomorrow.css";
import Meteors from "./ui/meteors";
import PortfolioPage from "./PortfolioPage";
import SparklesText from "./ui/sparkles-text";
import { FlipWords } from "./ui/flip-words";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// Enhanced Animated Grid with 3D effect
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
          {/* Vertical lines */}
          <div className="absolute inset-0 grid grid-cols-[repeat(60,1fr)] opacity-15">
            {[...Array(60)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="relative h-full w-full border-r border-cyan-400/20"
                style={{
                  animation: `gridPulse ${3 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                  transform: `translateZ(${Math.random() * 20}px)`,
                }}
              />
            ))}
          </div>
          {/* Horizontal lines */}
          <div className="absolute inset-0 grid grid-rows-[repeat(60,1fr)] opacity-15">
            {[...Array(60)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="relative w-full h-full border-b border-cyan-400/20"
                style={{
                  animation: `gridPulse ${3 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                  transform: `translateZ(${Math.random() * 20}px)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating Orbs Component
const FloatingOrbs = () => {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
    </>
  );
};

// Custom Keyframes for Tailwind
const CustomStyles = () => (
  <style jsx global>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(-10px) translateX(-10px); }
      75% { transform: translateY(15px) translateX(5px); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.1; transform: scale(1.1); }
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 8s ease-in-out infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
    .gradient-border {
      position: relative;
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(45, 212, 191, 0.3));
      border-radius: 1rem;
      padding: 2px;
      box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
    }
    .code-window {
      border-radius: 0.75rem;
      overflow: hidden;
      backdrop-filter: blur(10px);
      background: rgba(9, 17, 33, 0.7);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(56, 189, 248, 0.2);
      transform: perspective(1000px) rotateX(5deg);
      transition: transform 0.6s ease;
    }
    .code-window:hover {
      transform: perspective(1000px) rotateX(0deg) translateY(-10px);
    }
    .window-header {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      background: rgba(15, 23, 42, 0.7);
      border-bottom: 1px solid rgba(56, 189, 248, 0.2);
    }
    .window-dot {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    .typing-effect {
      position: relative;
      display: inline-block;
    }
    .typing-effect::after {
      content: '|';
      position: absolute;
      right: -10px;
      animation: blink 1.5s infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .gradient-text {
      background: linear-gradient(90deg, #38bdf8, #2dd4bf, #818cf8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 200% auto;
      animation: shimmer 3s linear infinite;
    }
    @keyframes shimmer {
      to { background-position: 200% center; }
    }
    .flip-words-text {
      color: #38bdf8 !important;
    }
    .btn-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }
  `}</style>
);

export default function Hero() {
  const words = [
    "Backend Specialist & API Architect",
    "Node.js & Express Aficionado",
    "Real-Time Apps & Scalable Systems",
    "Linux & DevOps Enthusiast",
  ];
  const [code] = useState(`
const profile = {
    name: 'Mohammad Sajib',
    title: 'Backend Specialist | Real-Time Architect',
    skills: [
        'Node.js', 'Express', 'MongoDB',
        'Mongoose', 'Firebase', 'Socket.IO',
        'Supabase', 'Redis',
        'Docker', 'REST API', 'AWS',
        'Linux', 'Git', 'Tailwind',
    ],
    currentFocus: 'Building distributed systems & real-time applications',
    passion: 'Designing microservices & scalable architectures',
    goals: 'Contributing to open-source & cloud-native solutions',
    motivation: 'Creating seamless experiences through robust backends'
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  const location = useLocation();

  return (
    <>
      <CustomStyles />
      <Helmet>
        <title>Mohammad Sajib | Backend Architect & Real-Time Systems Expert</title>
        <meta name="description" content="Backend Architect specializing in Node.js, real-time systems, and scalable infrastructure. Creating robust solutions for modern applications." />
        <meta name="keywords" content="Mohammad Sajib, Backend Architect, Node.js, Real-Time Systems, Microservices, DevOps, Cloud Native" />
        <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
        {/* Font Awesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      <main className="pt-20 lg:pt-[0rem] bg-gradient-to-br from-[#0f1629] via-[#0a0f1f] to-[#050815] text-white min-h-screen overflow-hidden">
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
          <AnimatedGrid />
          <FloatingOrbs />

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors
              number={15}
              color="blue-500"
              trailColor="cyan-500"
              minSize={1}
              maxSize={3}
              randomDirection={true}
              minDuration={3}
              maxDuration={8}
              glow={true} />
          </div>

          {/* Main content container */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0 gap-12 lg:gap-0">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              {/* Decorative elements */}
              <div className="absolute hidden lg:block -top-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute hidden lg:block top-40 -right-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse animation-delay-500"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse animation-delay-1000"></div>
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  Welcome to my digital universe
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <div className="mb-2">
                    <SparklesText text="Hello" gradient={true}
                      underline={true}
                      sparklesCount={15}
                      className="text-4xl sm:text-5xl lg:text-6xl" />
                  </div>
                  <span className="relative inline-block">
                    I'm
                    <span className="typing-effect gradient-text text-5xl sm:text-6xl lg:text-8xl">
                      {" "}Mohammad Sajib
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <i className="fas fa-rocket text-blue-400 animate-bounce"></i>
                </div>
                <span className="text-lg sm:text-xl text-blue-400 font-medium">
                  <FlipWords className="text-blue-400" words={words} underline={true} cursor={true} colors={true} glow={true} />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-12 max-w-2xl">
                <p className="text-lg sm:text-xl text-gray-300/90 leading-relaxed">
                  Crafting high-performance backend solutions with Node.js, architecting real-time systems, and building scalable cloud-native applications. Passionate about clean code, efficient APIs, and robust infrastructure.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 animate__animated animate__fadeInUp animate__delay-2s">
                {/* View Projects Button */}
                <a
                  href="https://github.com/sajibhub"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 p-0.5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.7)]"
                >
                  <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500">
                    <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                      <span>View Projects</span>
                      <div className="btn-icon">
                        <i className="fas fa-arrow-right transform transition-all duration-500 group-hover:translate-x-1"></i>
                      </div>
                    </span>
                  </span>
                </a>

                {/* Contact Button */}
                <a
                  href="https://drive.google.com/uc?export=download&id=1CxgzpGeNj5zU36Fp7f3zEgorWWr4YX4c"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)]"
                >
                  <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-semibold group-hover:text-white">
                      <span>Get Resume</span>
                      <div className="btn-icon">
                        <i className="fas fa-file-download transform transition-all duration-500 group-hover:-translate-y-1"></i>
                      </div>
                    </span>
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-8 animate__animated animate__fadeIn animate__delay-3s">
                {['github', 'linkedin', 'twitter', 'dribbble'].map((platform) => (
                  <a
                    key={platform}
                    href={`https://${platform}.com/sajibhub`}
                    className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:scale-110"
                    aria-label={platform}
                  >
                    <i className={`fab fa-${platform} text-gray-400 group-hover:text-blue-400`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInRight animate__delay-0.5s animate-float">
              <div className="gradient-border">
                <div className="code-window">
                  <div className="window-header">
                    <div className="flex gap-2">
                      <div className="window-dot bg-red-500"></div>
                      <div className="window-dot bg-yellow-500"></div>
                      <div className="window-dot bg-green-500"></div>
                    </div>
                    <span className="ml-3 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code text-blue-400"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript p-5 max-h-[500px] overflow-auto">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center animate__animated animate__fadeInUp animate__delay-1s">
                {['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Redis', 'Socket.IO', 'Firebase', 'Supabase', 'Linux'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats Section */}
              <div className="mt-10 grid grid-cols-3 gap-4 animate__animated animate__fadeInUp animate__delay-1.5s">
                {[
                  { value: '1+', label: 'Years Experience' },
                  { value: '20+', label: 'Projects Completed' },
                  { value: '7+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/30">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <PortfolioPage />
      </main>
    </>
  );
}