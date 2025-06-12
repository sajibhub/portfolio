import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import { Code2, Database, Cpu, Cloud } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <Icon className={`w-8 h-8 ${color}`} />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        "React",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        "Node.js",
        "MongoDB",
        "REST APIs",
      ],
    },

    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: ["Git", "Linux"],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        "VS Code",
        "Redux",
        "Firebase",
        "Vercel",
        "Vite",
      ],
    },
  ];

  const location = useLocation()

  return (
    <>
      <Helmet>
        <title>Skills – Mohammad Sajib | JavaScript, React, Node.js Expert</title>
        <meta name="description" content="Discover the technical skills of Mohammad Sajib, including JavaScript, React, Express.js, MongoDB, and more." />
        <meta name="keywords" content="JavaScript, React, Node.js, MongoDB, Express.js, MERN skills, Sajib skills" />
        <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
      </Helmet>
      <main className="pt-20 lg:pt-0 bg-[#0f1629] text-white min-h-screen">
        <section className="container mx-auto px-4 py-16">
          <div className="flex justify-center items-center">
            <IconCloudDemo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default SkillsSection;
