import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
    const location = useLocation();
    
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Mohammad SAJIB</title>
                <meta
                    name="description"
                    content="Sorry, the page you are looking for does not exist. Please return to the homepage or explore other sections."
                />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
            </Helmet>
            
            <main className="flex flex-col items-center justify-center pt-20 lg:pt-0 bg-gradient-to-br from-[#0f1629] via-[#0a0f1f] to-[#050815] text-white min-h-screen relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
                
                {/* Animated background grid */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkQ0MjU2IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
                
                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
                
                {/* Glitch Effect */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-[20rem] font-bold text-red-500/5 opacity-20">
                        404
                    </div>
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
                    {/* Animated 404 Text */}
                    <div className="relative mb-8">
                        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter">
                            <span className="relative inline-block">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                    404
                                </span>
                                {/* Glitch Effect */}
                                <span className="absolute top-0 left-0 text-red-500 opacity-30 animate-glitch-1">404</span>
                                <span className="absolute top-0 left-0 text-blue-500 opacity-30 animate-glitch-2">404</span>
                            </span>
                        </h1>
                        
                        {/* Animated underline */}
                        <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mt-4 overflow-hidden">
                            <div className="h-full bg-white rounded-full animate-progress-bar"></div>
                        </div>
                    </div>
                    
                    {/* Error Message */}
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Oops! Page Not Found
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                    </div>
                    
                    {/* Error Code */}
                    <div className="inline-block px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg mb-10">
                        <code className="text-sm text-gray-400">
                            Error: {location.pathname} not found
                        </code>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/"
                            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(56,189,246,0.7)]"
                        >
                            <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500">
                                <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                                    <Home className="w-5 h-5" />
                                    <span>Go to Homepage</span>
                                </span>
                            </span>
                        </Link>
                        
                        <button
                            onClick={() => window.history.back()}
                            className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_-5px_rgba(156,163,175,0.5)]"
                        >
                            <span className="block w-full px-8 py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                                <span className="relative flex items-center justify-center gap-2 text-gray-300 font-semibold group-hover:text-white">
                                    <ArrowLeft className="w-5 h-5" />
                                    <span>Go Back</span>
                                </span>
                            </span>
                        </button>
                    </div>
                    
                    {/* Helpful Links */}
                    <div className="mt-12">
                        <h3 className="text-lg font-semibold mb-4 text-gray-300">You might be looking for:</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { label: "Home", path: "/" },
                                { label: "About", path: "/about" },
                                { label: "Skills", path: "/skills" },
                                { label: "Projects", path: "/projects" },
                                { label: "Experience", path: "/experience" },
                                { label: "Contact", path: "/contact" }
                            ].map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.path}
                                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-800/70 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: 0.7 - (i * 0.03)
                        }}
                    ></div>
                ))}
                
                {/* Custom Styles */}
                <style jsx global>{`
                    @keyframes glitch-1 {
                        0%, 100% { transform: translate(0); }
                        20% { transform: translate(-2px, 2px); }
                        40% { transform: translate(-2px, -2px); }
                        60% { transform: translate(2px, 2px); }
                        80% { transform: translate(2px, -2px); }
                    }
                    @keyframes glitch-2 {
                        0%, 100% { transform: translate(0); }
                        20% { transform: translate(2px, -2px); }
                        40% { transform: translate(2px, 2px); }
                        60% { transform: translate(-2px, -2px); }
                        80% { transform: translate(-2px, 2px); }
                    }
                    .animate-glitch-1 {
                        animation: glitch-1 2s infinite;
                    }
                    .animate-glitch-2 {
                        animation: glitch-2 3s infinite;
                    }
                    @keyframes progress-bar {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    .animate-progress-bar {
                        animation: progress-bar 2s infinite;
                    }
                    @keyframes pulse-slow {
                        0%, 100% { opacity: 0.2; transform: scale(1); }
                        50% { opacity: 0.1; transform: scale(1.1); }
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 8s ease-in-out infinite;
                    }
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                `}</style>
            </main>
        </>
    );
}