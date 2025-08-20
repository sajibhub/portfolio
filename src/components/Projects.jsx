import { Github, ExternalLink, Star, Clock, Code, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import socialApp from "../assets/images/social-media.png";
import BkashMerchant from "../assets/images/bkash-merchant.png";
import Weather from "../assets/images/weather.png";
import TelegramBot from "../assets/images/telegram_bot.png";
import SslCommerzImage from "../assets/images/sslcommerz.png";
import unknownpayImage from "../assets/images/unknownpay.png"; 

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectCard = ({ project, index }) => (
  <div
    className={`flex flex-col lg:flex-row items-center group rounded-2xl overflow-hidden transition-all duration-700 ${
      project.featured ? 'bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10' : 'bg-gray-800/50'
    } backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 shadow-lg hover:shadow-2xl transform hover:-translate-y-1`}
  >
    {/* Image Section */}
    <div className={`lg:w-2/5 overflow-hidden ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
      <div className="relative h-64 lg:h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>
    </div>
    
    {/* Content Section */}
    <div className={`lg:w-3/5 p-6 lg:p-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <MacOsButtons />
          <div className="flex items-center gap-2 mb-2">
            {project.featured && (
              <div className="text-emerald-400 text-xs font-mono tracking-wide uppercase">
                Featured Project
              </div>
            )}
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-3 mt-2">
          {project.links.github && (
            <a
              href={project.links.github}
              className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
            </a>
          )}
          <a
            href={project.links.demo}
            className="p-2 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/50 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <Code className="w-4 h-4" />
          <span>{project.tags.length} Technologies</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>Recent Project</span>
        </div>
      </div>
    </div>
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "UnknownPay - Custom Payment Gateway with SDK + API",
      description:
        "A secure, modular payment gateway solution inspired by bKash/SSLCommerz architecture, featuring multi-factor authentication and comprehensive merchant integration capabilities. Built with Node.js, Express.js, MongoDB, and React. Includes official SDK for easy integration.",
      tags: ["Node.js", "Express.js", "MongoDB", "React", "SDK", "Payment Gateway", "OTP", "PIN"],
      links: {
        github: "https://github.com/sajibhub/unknownpay-sdk",
        demo: "https://unknownpay.sajib.xyz/"
      },
      image: unknownpayImage,
      featured: true,
    },
    {
      title: "SocialSphere - A Modern Social Media App",
      description:
        "SocialSphere is a feature-rich social media application that enables users to connect, share content, and interact seamlessly. Built with the latest web technologies, it offers real-time updates, media sharing, and an intuitive UI.",
      tags: ["React", "Node.js", "MongoDB","Socket.IO"],
      links: {
        github: "https://github.com/sajib-bd/social-media",
        demo: "https://matrix-media.vercel.app/",
      },
      image: socialApp,
      featured: true,
    },
    {
      title: "bKash Merchant - Node.js & React Payment Integration",
      description:
        "bKash Merchant is a payment integration app using bKash API that allows merchants to handle payments securely and efficiently. Built with Node.js backend and React frontend to provide smooth transaction management.",
      tags: ["React", "Node.js", "Express", "REST API"],
      links: {
        github: "https://github.com/SajibHub/bkash-merchant",
        demo: "https://bkash-merchant-i3su.vercel.app/",
      },
      image: BkashMerchant,
      featured: false,
    },
    {
      title: "SSLCommerz Payment Gateway Integration",
      description:
        "A complete SSLCommerz sandbox integration using Node.js and Express with a clean HTML/CSS frontend. Users can enter an amount, choose from dynamic payment options (Visa, Mastercard, bKash, Nagad, etc.), and get real-time payment validation and feedback.",
      tags: ["Node.js", "Express", "SSLCommerz", "HTML", "JavaScript"],
      links: {
        github: "https://github.com/SajibHub/sslcommerz",
        demo: "https://sslcommerz.sajib.xyz/"
      },
      image: SslCommerzImage,
      featured: false
    },
    {
      title: "WeatherApp - Real-time Weather Forecast",
      description:
        "WeatherApp provides accurate, real-time weather updates for any location. Built with React and styled with Tailwind CSS, it fetches data from external weather APIs to display current conditions and forecasts with a clean, responsive UI.",
      tags: ["React", "Tailwind CSS", "API"],
      links: {
        github: "https://github.com/SajibHub",
        demo: "https://weather.sajib.xyz/",
      },
      image: Weather,
      featured: false,
    },
    {
      title: "Unknown Wallet Telegram Bot",
      description:
        "A versatile Telegram bot that allows users to get their ID, check balance, set PIN, send money, view transaction history, and earn bonuses via referral. Supports sending money and sending messages seamlessly through the Telegram interface.",
      tags: ["Telegram Bot", "Node.js", "Bot API", "Payment", "Referral System"],
      links: {
        demo: "https://t.me/unknow_wallet_bot",
        github: null,
      },
      image: TelegramBot,
      featured: false,
    },
  ];
  
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Projects – Mohammad Sajib | MERN Stack Portfolio</title>
        <meta name="description" content="Browse full-stack and backend projects developed by Mohammad Sajib using the MERN stack and REST APIs." />
        <meta name="keywords" content="Portfolio, projects, MERN stack, REST API, Node.js, React apps, Sajib work" />
        <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-[#0f1629] via-[#0a0f1f] to-[#050815] text-slate-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkQ0MjU2IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-4000"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-24 z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <span className="text-cyan-400 font-medium">My Work</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Project Showcase
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore my portfolio of full-stack applications, payment solutions, and innovative projects built with modern technologies.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>
          
          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            {[
              { value: "6+", label: "Projects Completed" },
              { value: "2", label: "Featured Projects" },
              { value: "8+", label: "Technologies Used" },
              { value: "1500+", label: "Hours of Coding" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50 hover:bg-gray-800/70 transition-colors duration-300"
              >
                <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <a href="https://github.com/sajibhub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={18} />
                <span>View More on GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
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
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </>
  );
};

export default ProjectShowcase;