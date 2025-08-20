import { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Update active link when location changes
  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveLink(path);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  // Calculate gradient position based on mouse
  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <>
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
          background-size: 200% 200%;
        }
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.5),
                        0 0 30px rgba(139, 92, 246, 0.3),
                        0 0 45px rgba(59, 130, 246, 0.2);
          }
          50% { 
            box-shadow: 0 0 25px rgba(99, 102, 241, 0.8), 
                        0 0 35px rgba(139, 92, 246, 0.6),
                        0 0 45px rgba(59, 130, 246, 0.4),
                        0 0 55px rgba(16, 185, 129, 0.3);
          }
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        .nav-link:hover::before {
          left: 100%;
        }
        .nav-indicator {
          position: absolute;
          bottom: 0;
          height: 3px;
          border-radius: 3px;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate-slow {
          animation: rotate 20s linear infinite;
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 10s linear infinite;
        }
        .glow-text {
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.8),
                       0 0 20px rgba(139, 92, 246, 0.6),
                       0 0 30px rgba(59, 130, 246, 0.4);
        }
      `}</style>
      
      <header className={`fixed top-4 left-1/2 transform  -translate-x-1/2 z-50 w-auto transition-all duration-300 ${
        isScrolled ? 'top-2' : 'top-4'
      }`}>
        {/* Interactive Background Orbs */}
        <div className="absolute -inset-8 flex items-center justify-center pointer-events-none">
          <div className="absolute w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-rotate-slow"></div>
          <div className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-rotate-slow animation-delay-1000"></div>
          <div className="absolute w-24 h-24 bg-teal-500/10 rounded-full blur-xl animate-orbit"></div>
        </div>
        
        {/* Mouse-following Glow Effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(99, 102, 241, 0.3), transparent 70%)`
          }}
        ></div>
        
        <div className={`p-[3px] rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 animate-gradient-x shadow-xl transition-all duration-300 ${
          isScrolled ? 'shadow-2xl' : 'shadow-xl'
        }`}>
          <nav className="bg-gray-900/90 overflow-hidden backdrop-blur-lg rounded-full px-6 py-3 flex gap-2 relative">
            {/* Active Link Indicator */}
            <div 
              className="nav-indicator bg-gradient-to-r from-purple-500 to-blue-500"
              style={{
                width: `calc(100% / ${navLinks.length} - 8px)`,
                left: `calc(${navLinks.findIndex(link => link.id === activeLink)} * (100% / ${navLinks.length}) + 4px)`,
              }}
            ></div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-1000"></div>
            
            {/* Navigation Links */}
            {navLinks.map(({ id, icon: Icon, text, path }) => (
              <Link
                key={id}
                to={path}
                onClick={() => setActiveLink(id)}
                className={`nav-link px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm
                  hover:bg-white/10 hover:scale-105 hover:shadow-lg
                  ${activeLink === id 
                    ? "text-white bg-white/10" 
                    : "text-gray-300 hover:text-white"
                  }
                `}
              >
                <Icon 
                  className={`text-lg transition-all duration-300 ${
                    activeLink === id 
                      ? "scale-125 text-blue-400 animate-float glow-text" 
                      : "scale-100"
                  }`} 
                />
                <span className="hidden md:inline">{text}</span>
                
                {/* Active Link Effects */}
                {activeLink === id && (
                  <>
                    <span className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-70 pulse-glow"></span>
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></span>
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                  </>
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-3 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-1 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-pulse"
              style={{ 
                animationDelay: `${i * 0.2}s`,
                opacity: 0.7 - (i * 0.1)
              }}
            ></div>
          ))}
        </div>
        
        {/* Side Accents */}
        <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 flex flex-col gap-2 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 flex flex-col gap-2 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
      </header>
    </>
  );
}