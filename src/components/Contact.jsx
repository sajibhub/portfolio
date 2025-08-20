import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, Github, Linkedin, Twitter, MessageSquare, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = new FormData();
    form.append("access_key", "90f4b8af-e590-42b0-beaf-10b18f66a703");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const result = await response.json();
      
      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: result.message || "There was an error sending your message." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Please try again." });
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Contact – Mohammad Sajib | Hire Node.js Developer</title>
        <meta name="description" content="Contact Mohammad Sajib, Node.js backend and full-stack developer based in Khagrachari, Bangladesh. Available for freelance and remote work." />
        <meta name="keywords" content="Contact Sajib, Node.js developer, MERN contact, freelance developer, hire Sajib" />
        <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
      </Helmet>
      
      <main className="pt-20 lg:pt-0 bg-gradient-to-br from-[#0f1629] via-[#0a0f1f] to-[#050815] text-white min-h-screen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkQ0MjU2IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8 z-10">
          <div className="container mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                <span className="text-blue-400 font-medium">Get In Touch</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Let's Connect
                </span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in-up">
                <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                  <p className="text-gray-300 mb-8">
                    I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-purple-500/10 p-3 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-400 group-hover:text-purple-300 transition-colors">mohammadsajib996@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-pink-500/10 p-3 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                        <MapPin className="w-6 h-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Location</h3>
                        <p className="text-gray-400 group-hover:text-pink-300 transition-colors">Chittagong, Khagrachhari</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <Calendar className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Availability</h3>
                        <p className="text-gray-400 group-hover:text-blue-300 transition-colors">Open for freelance projects</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                  <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Github, href: "https://github.com/sajibhub", color: "text-gray-300" },
                      { icon: Linkedin, href: "https://linkedin.com/in/enough2005", color: "text-blue-400" },
                      { icon: Twitter, href: "https://twitter.com/sajibhub", color: "text-cyan-400" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center ${social.color} hover:bg-gray-700/50 transition-all duration-300 hover:scale-110`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="animate-fade-in-up animation-delay-200">
                <div className="backdrop-blur-lg bg-gray-800/30 p-8 rounded-2xl shadow-xl border border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <MessageSquare className="w-6 h-6 text-blue-400 mr-2" />
                    <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors text-white placeholder-gray-500"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors text-white placeholder-gray-500"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors text-white placeholder-gray-500"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors text-white placeholder-gray-500 resize-none"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                  
                  {/* Status Message */}
                  {status && (
                    <div className={`mt-4 p-4 rounded-lg flex items-center space-x-2 ${
                      status.type === "success" 
                        ? "bg-green-500/20 border border-green-500/30" 
                        : "bg-red-500/20 border border-red-500/30"
                    }`}>
                      {status.type === "success" ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <p className={status.type === "success" ? "text-green-300" : "text-red-300"}>
                        {status.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
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
        .animation-delay-200 {
          animation-delay: 0.2s;
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
    </>
  );
}