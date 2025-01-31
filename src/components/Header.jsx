import{ useState } from "react";
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

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    { id: "experience", icon: FaBriefcase, text: "Experience", path: "/experience" },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 animate-gradient-x shadow-xl">
        <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-3 flex gap-2">
          {navLinks.map(({ id, icon: Icon, text, path }) => (
            <Link
              key={id}
              to={path}
              onClick={() => setActiveLink(id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm
                hover:bg-white/10 hover:scale-105 hover:shadow-lg
                ${activeLink === id ? "bg-white/20 text-white" : "text-gray-300 hover:text-white"}
              `}
            >
              <Icon className={`text-lg transition-transform ${activeLink === id ? "scale-125" : "scale-100"}`} />
              <span className="hidden md:inline">{text}</span>
            </Link>
          ))}
        </nav>
      </div>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
