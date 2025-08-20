import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import { Code2, Database, Cpu, Cloud, Zap, Server, Layers, Terminal } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SkillCard = ({ icon: Icon, title, skills, color, delay }) => (
  <Card 
    className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden group relative"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Decorative corner elements */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-blue-500/10 rounded-bl-full"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-transparent to-purple-500/10 rounded-tr-full"></div>
    
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg bg-gray-700/50 group-hover:bg-gray-700 transition-colors duration-300`}>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            animation="pulse"
            className="bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const location = useLocation();
  
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        "React",
        "Redux",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST APIs",
        "GraphQL",
        "Socket.io",
        "JWT",
        "passport.js",
        "Crypto"
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "AWS",
        "Vercel",
        "Firebase",
        "Supabase",
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        "VS Code",
        "Postman",
        "MongoDB Compass",
        "Redis",
        "Vite",
        "NPM/Yarn",
        "ESLint",
        "Prettier",
      ],
    },
  ];

  // Additional skill categories for a more comprehensive view
  const additionalCategories = [
    {
      icon: Zap,
      title: "Real-Time Systems",
      color: "text-yellow-400",
      skills: [
        "Socket.IO",
        "WebSockets",
        "Firebase Realtime DB",
        "Server-Sent Events",
        "WebRTC",
      ],
    },
    {
      icon: Server,
      title: "Database Technologies",
      color: "text-purple-400",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Firebase Firestore",
        "Supabase",
      ],
    },
    {
      icon: Layers,
      title: "State Management",
      color: "text-teal-400",
      skills: [
        "Redux",
        "Zustand",
      ],
    },
    {
      icon: Terminal,
      title: "Testing & QA",
      color: "text-red-400",
      skills: [
        
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Skills – Mohammad Sajib | JavaScript, React, Node.js Expert</title>
        <meta name="description" content="Discover the technical skills of Mohammad Sajib, including JavaScript, React, Express.js, MongoDB, and more." />
        <meta name="keywords" content="JavaScript, React, Node.js, MongoDB, Express.js,Socket.io, socket, MERN skills, Sajib skills" />
        <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
      </Helmet>
      
      <main className="pt-20 lg:pt-0 bg-gradient-to-br from-[#0f1629] via-[#0a0f1f] to-[#050815] text-white min-h-screen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        <section className="container mx-auto px-4 py-16 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Technical Skills
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              My expertise spans across modern web technologies, with a focus on building scalable, performant applications.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full mx-auto mt-6"></div>
          </div>
          
          {/* Icon Cloud */}
          <div className="flex justify-center items-center mb-16">
            <IconCloudDemo />
          </div>
          
          {/* Main Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SkillCard
                  icon={category.icon}
                  title={category.title}
                  skills={category.skills}
                  color={category.color}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
          
          {/* Additional Skills Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Specialized Expertise
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalCategories.map((category, index) => (
                <div 
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index + skillCategories.length) * 100}ms` }}
                >
                  <SkillCard
                    icon={category.icon}
                    title={category.title}
                    skills={category.skills}
                    color={category.color}
                    delay={(index + skillCategories.length) * 100}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Progress Section */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-center mb-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Proficiency Level
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "JavaScript/TypeScript", level: 95 },
                { name: "React/Next.js", level: 90 },
                { name: "Node.js/Express", level: 90 },
                { name: "MongoDB/SQL", level: 80 },
                { name: "REST APIs", level: 99 },
                { name: "Cloud/DevOps", level: 75 },
              ].map((skill, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${(index + skillCategories.length + additionalCategories.length) * 100}ms` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Styles */}
        <style jsx global>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0;
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
};

export default SkillsSection;