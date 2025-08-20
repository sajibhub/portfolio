import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, Briefcase, Code, Palette, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            opacity: Math.random() * 0.5 + 0.2,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
            opacity: [null, Math.random() * 0.8 + 0.2],
            transition: {
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
          }}
        />
      ))}
    </div>
  );
};

const FloatingOrbs = () => {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-4000"></div>
    </>
  );
};

export default function EnhancedPortfolioCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(135deg, #0f1629, #1e293b, #0f1729)",
        "linear-gradient(135deg, #1e293b, #334155, #1e293b)",
        "linear-gradient(135deg, #0f1729, #1e293b, #0f1629)",
      ],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  const skills = [
    "UI/UX Design", "Figma", "Adobe XD", "Prototyping", 
    "User Research", "Wireframing", "Design Systems"
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:elebaharet@gmail.com", label: "Email" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0f1629] via-[#1e293b] to-[#0f172a] p-4 md:p-8 flex items-center justify-center overflow-hidden relative"
      animate={controls}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      <Particles />
      <FloatingOrbs />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl grid lg:grid-cols-[1fr,1.5fr] gap-8 relative z-10"
      >
        {/* Profile Card */}
        <Card
          className="p-8 flex flex-col items-center text-center shadow-2xl rounded-2xl backdrop-blur-lg bg-gray-800/50 border border-cyan-500/20 overflow-hidden relative"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Profile Image */}
          <motion.div
            className="relative z-10 w-64 h-64 mb-6 group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <img
              src="/placeholder.svg?height=256&width=256"
              alt="Profile"
              className="rounded-full relative z-10 w-full h-full object-cover border-4 border-gray-700 group-hover:border-cyan-400 transition-colors duration-300"
            />
            
            {/* Status Indicator */}
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800"></div>
          </motion.div>
          
          {/* Name and Title */}
          <motion.h1
            className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Elena Baharet Frank
          </motion.h1>
          
          <motion.p
            className="text-lg text-cyan-400 mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Visual Designer
          </motion.p>
          
          <motion.a
            href="mailto:elebaharet@gmail.com"
            className="text-gray-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Mail className="w-4 h-4" />
            elebaharet@gmail.com
          </motion.a>
          
          {/* Location */}
          <motion.div
            className="flex items-center justify-center gap-1 text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <MapPin className="w-4 h-4" />
            <span>San José, Costa Rica</span>
          </motion.div>
          
          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              className="mt-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <TooltipProvider key={social.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.label}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </motion.div>
        </Card>
        
        {/* Info Section */}
        <div className="space-y-8">
          {/* Tabs */}
          <Card
            className="p-1 shadow-xl rounded-2xl backdrop-blur-lg bg-gray-800/50 border border-cyan-500/20 overflow-hidden"
          >
            <div className="flex space-x-1">
              {[
                { id: "about", label: "About Me" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`flex-1 py-3 px-4 rounded-xl text-center font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </Card>
          
          {/* Tab Content */}
          <Card
            className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-gray-800/50 border border-cyan-500/20 overflow-hidden"
          >
            {/* About Me Tab */}
            {activeTab === "about" && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    About Me
                  </h2>
                  <Badge
                    variant="secondary"
                    className="flex items-center bg-green-900/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium"
                  >
                    <CheckCircle className="mr-1 h-4 w-4" />
                    Open to work
                  </Badge>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Visual Designer with 7+ years of experience. I'm all about crafting user-friendly interfaces that are functional and visually compelling.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Born and raised in the beautiful Costa Rica. When I'm not busy designing, you'll likely find me playing some board games, deep into my Animal Crossing or cooking some mouthwatering Arepas.
                </p>
              </motion.div>
            )}
            
            {/* Experience Tab */}
            {activeTab === "experience" && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Latest Roles
                </h2>
                {[
                  {
                    title: "UI Designer",
                    company: "Specialized Bicycle",
                    icon: Briefcase
                  },
                  {
                    title: "Interaction Designer",
                    company: "Critical Mass / On-Site Apple",
                    icon: Code
                  }
                ].map((role, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <role.icon className="w-8 h-8 text-gray-200" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-xl text-gray-100">
                        {role.title}
                      </h3>
                      <p className="text-lg text-gray-400">{role.company}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Skills Tab */}
            {activeTab === "skills" && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-full text-cyan-300 font-medium"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(6, 182, 212, 0.2)",
                        borderColor: "rgba(6, 182, 212, 0.5)"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-200 mb-4">Main Tools</h3>
                  <div className="flex justify-between">
                    {[
                      { name: "Figma", icon: Palette },
                      { name: "Sketch", icon: Palette },
                      { name: "Photoshop", icon: Palette },
                      { name: "Framer", icon: Code },
                    ].map((tool, index) => (
                      <TooltipProvider key={tool.name}>
                        <Tooltip>
                          <TooltipTrigger>
                            <motion.div
                              className="text-center"
                              whileHover={{ y: -5 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                              <motion.div
                                className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-2 shadow-lg"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <tool.icon className="w-8 h-8 text-gray-200" />
                              </motion.div>
                              <span className="text-sm text-gray-400">
                                {tool.name}
                              </span>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Proficient in {tool.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </Card>
          
          {/* Contact Card */}
          <Card
            className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-gray-800/50 border border-cyan-500/20 overflow-hidden"
          >
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Get In Touch
            </h2>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>elebaharet@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 (506) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>San José, Costa Rica</span>
              </div>
              
              <Button
                className="mt-6 w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
              >
                Send Message
              </Button>
            </motion.div>
          </Card>
        </div>
      </motion.div>
      
      {/* Custom Styles */}
      <style jsx global>{`
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </motion.div>
  );
}