import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-br from-[#0f1629] via-[#0a0f1f] to-[#050815] text-white py-20 md:py-32 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 justify-center relative z-10">
        {/* Content Section */}
        <div className="content max-w-2xl text-center lg:text-left">
          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-[#4ECCA3] text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              WHO I AM?
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#4ECCA3]/50 rounded-full"></span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ECCA3] to-transparent rounded-full mx-auto lg:mx-0"></div>
          </div>
          
          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Hey! I’m <span className="text-[#4ECCA3] font-semibold">Mohammad Sajib</span> — a dedicated <span className="text-blue-400 font-semibold">Backend Developer</span> with a strong focus on performance, scalability, and real-time functionality. I specialize in building powerful APIs, structuring reliable databases, and creating seamless backend systems.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              My main tech stack includes:
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { name: 'Node.js', url: 'https://nodejs.org/en/' },
                { name: 'Express', url: 'https://expressjs.com/' },
                { name: 'MongoDB', url: 'https://www.mongodb.com/' },
                { name: 'Mongoose', url: 'https://mongoosejs.com/' },
                { name: 'Firebase', url: 'https://firebase.google.com/' },
                { name: 'Socket.IO', url: 'https://socket.io/' },
                { name: 'Redis', url: 'https://redis.io/' },
                { name: 'Supabase', url: 'https://supabase.com/' },
                { name: 'React', url: 'https://reactjs.org/' },
                { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' }
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-[#4ECCA3] font-medium transition-all duration-300 hover:bg-[#4ECCA3]/10 hover:border-[#4ECCA3]/50 hover:scale-105 hover:shadow-[0_0_10px_-2px_rgba(78,204,163,0.3)]"
                >
                  {tech.name}
                </a>
              ))}
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              I'm passionate about <span className="text-blue-400 font-semibold">real-time applications</span>, <span className="text-blue-400 font-semibold">API design</span>, <span className="text-blue-400 font-semibold">authentication systems</span>, and <span className="text-blue-400 font-semibold">transaction-safe backend architectures</span>. I love solving complex logic problems, optimizing queries, and ensuring data integrity.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="https://github.com/sajibhub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#4ECCA3] to-blue-500 text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(78,204,163,0.5)]"
            >
              View My Work
              <i className="fas fa-arrow-right transform transition-transform duration-500 group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="image-container relative">
          {/* Image Frame */}
          <div className="relative">
            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-[#4ECCA3]/30 rounded-2xl transform rotate-3 scale-105"></div>
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-2xl transform -rotate-3 scale-105"></div>
            
            {/* Main Image */}
            <img
              src={profileImage}
              alt="Mohammad Sajib - Backend Developer"
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover shadow-2xl relative z-10 transform transition-transform duration-500 hover:scale-105"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#4ECCA3] to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-20">
              <i className="fas fa-code"></i>
              <span className="font-semibold">Backend Expert</span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#4ECCA3]/20 backdrop-blur-sm border border-[#4ECCA3]/30 flex items-center justify-center">
            <i className="fas fa-terminal text-[#4ECCA3]"></i>
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
            <i className="fas fa-database text-blue-400"></i>
          </div>
          
          {/* New Tech Icons */}
          <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center">
            <i className="fas fa-bolt text-purple-400"></i>
          </div>
          <div className="absolute top-1/2 -right-8 w-10 h-10 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center">
            <i className="fas fa-fire text-red-400"></i>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
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
    </section>
  );
};

export default AboutMe;