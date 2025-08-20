import React from "react";
import { Code2, Layers, Network, Cpu, Calendar, MapPin, Award, Github, Linkedin, Twitter, Mail, ExternalLink, Users, Heart, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  skills = [],
  achievements = []
}) => (
  <div className="group relative overflow-hidden">
    {/* Hexagon background pattern */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGwyMCAxMGwtMjAgMTB6IiBmaWxsPSIjMkQ0MjU2IiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-20" />

    {/* Glowing border */}
    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

    <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-800 shadow-xl transform group-hover:scale-[1.02] transition-all duration-500 ease-in-out">
      {/* Neon line accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Icon with glow effect */}
      <div className="relative mb-4">
        <div className="absolute -inset-2 bg-blue-500 opacity-30 rounded-full blur-lg group-hover:opacity-70 transition-opacity" />
        <Icon className="w-12 h-12 text-blue-400 relative z-10" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium">{company}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-mono text-purple-400">{period}</span>
          </div>
        </div>

        <p className="text-gray-300 border-l-2 border-blue-500 pl-4">
          {description}
        </p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-1">
              <Code2 className="w-4 h-4" /> Key Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-800/50 text-blue-300 rounded-md border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-1">
              <Award className="w-4 h-4" /> Key Achievements
            </h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-4 h-[2px] bg-cyan-500" />
        <div className="absolute top-0 right-0 w-[2px] h-4 bg-cyan-500" />
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 w-4 h-[2px] bg-purple-500" />
        <div className="absolute bottom-0 left-0 w-[2px] h-4 bg-purple-500" />
      </div>
    </div>
  </div>
);

const SocialLink = ({ icon: Icon, href, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/70 hover:scale-105 hover:shadow-lg"
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${color} bg-gray-900/50 group-hover:bg-gray-900/70 transition-colors`}>
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{label}</span>
    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
  </a>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Backend Developer",
      company: "Matrix",
      period: "2024 - Present",
      description:
        "Developed and maintained backend systems using Node.js and Express. Worked with MongoDB for database management. Focused on building scalable, secure, and efficient REST APIs for various applications.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT", "Socket.IO","Passport.js"],
      achievements: [
        "Reduced API response time by 40% through optimization",
        "Implemented real-time features using Socket.IO",
        "Designed database architecture supporting 10K+ concurrent users"
      ]
    },
    {
      icon: Layers,
      title: "Junior Frontend Developer",
      company: "Matrix",
      period: "2023 - 2024",
      description:
        "Gained in-depth knowledge of frontend development concepts, including responsive, mobile-first design and interactive features. Applied logic and best practices using React and Tailwind CSS for building efficient, user-friendly interfaces.",
      skills: ["React", "Tailwind CSS", "Redux", "Responsive Design"],
      achievements: [
        "Improved user engagement by 25% through UI/UX improvements",
        "Collaborated on a team that delivered 5+ major client projects",
        "Reduced page load times by 30% through optimization"
      ]
    },
    {
      icon: Cpu,
      title: "Linux System Administrator",
      company: "Linux",
      period: "2025 - Present",
      description:
        "Worked with Linux systems to manage servers, deploy applications, and ensure optimal system performance. Gained expertise in shell scripting, system monitoring, and troubleshooting. Emphasized automation, security, and efficient use of resources for both development and production environments.",
      skills: ["Linux", "Shell Scripting", "Docker", "AWS", "Security"],
      achievements: [
        "Automated deployment processes reducing manual work by 70%",
        "Implemented security measures preventing potential breaches",
        "Maintained 99.9% uptime for critical production systems"
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/sajibhub", label: "GitHub", color: "text-gray-300" },
    { icon: Linkedin, href: "https://linkedin.com/in/enough2005", label: "LinkedIn", color: "text-blue-400" },
    { icon: Twitter, href: "https://twitter.com/sajibhub", label: "Twitter", color: "text-cyan-400" },
    { icon: Mail, href: "mailto:mohammadsaji996b@gmail.com", label: "Email", color: "text-red-400" }
  ];

  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Experience – Mohammad Sajib | Backend & Full-Stack Projects</title>
        <meta name="description" content="See Mohammad Sajib's professional and freelance experience as a Node.js backend and MERN stack developer." />
        <meta name="keywords" content="Backend experience, freelance developer, Node.js, full-stack, project portfolio, Sajib" />
        <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#0f1629] via-[#0a0f1f] to-[#050815] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />

        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkQ0MjU2IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-4000"></div>

        {/* Content container */}
        <div className="relative container mx-auto px-4 py-24 z-10">
          {/* Section header with cyber effect */}
          <div className="flex flex-col items-center space-y-6 mb-16">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-500 bg-clip-text">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 blur-xl rounded-xl" />
            </div>
            <p className="text-sm md:text-lg text-gray-400 font-medium italic tracking-wide max-w-2xl text-center">
              "Crafting digital experiences through code, innovation, and continuous learning..."
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse animation-delay-500"></div>
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          {/* Experience grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Career Timeline
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {[
                  { year: "2024", title: "Junior Backend Developer", description: "Promoted to backend developer role" },
                  { year: "2024", title: "Junior Frontend Developer", description: "Transitioned to frontend development at MATRIX" },
                  { year: "2025", title: "Linux System Administrator", description: "Started managing Linux systems and servers" },
                ].map((event, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                      <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
                        <div className="text-cyan-400 font-bold">{event.year}</div>
                        <div className="text-white font-semibold">{event.title}</div>
                        <div className="text-gray-400 text-sm mt-1">{event.description}</div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-900"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((link, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index + experiences.length) * 100}ms` }}
                >
                  <SocialLink {...link} />
                </div>
              ))}
            </div>
          </div>

          {/* UnknownPay Collaboration Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Collaboration with UnknownPay
                </h3>

                <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
                  I had the privilege of working with the talented team at UnknownPay to design and develop this portfolio. Their creative vision and technical expertise helped bring my ideas to life, resulting in a stunning digital presence that showcases my skills and experience.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Creative Design</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Technical Expertise</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">Professional Approach</span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://unknownpay.sajib.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span>Visit UnknownPay</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                
              </div>
            </div>
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
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default ExperienceSection;