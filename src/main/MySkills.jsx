import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const MySkills = () => {
  const skills = {
    frontend: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-5 h-5" />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-5 h-5" />, level: 85 },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-5 h-5" />, level: 80 },
      { name: "React", icon: <FaReact className="text-sky-400 w-5 h-5" />, level: 75 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 w-5 h-5" />, level: 85 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-5 h-5" />, level: 70 },
      { name: "Express.js", icon: <SiExpress className="text-gray-400 w-5 h-5" />, level: 65 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-5 h-5" />, level: 60 },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-red-500 w-5 h-5" />, level: 85 },
      { name: "GitHub", icon: <FaGithub className="text-gray-300 w-5 h-5" />, level: 85 },
    ],
  };

  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400">
            My Skills
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, list], index) => (
            <div
              key={category}
              className={`group rounded-2xl p-8 bg-slate-900/50 backdrop-blur-md border border-slate-700 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 capitalize text-gradient">
                {category}
              </h3>

              <div className="space-y-6">
                {list.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-slate-200 font-medium transition group-hover:text-sky-400">
                        {skill.icon} <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>

                    {/* Skill Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 transition-all duration-1500 ease-out"
                        style={{ width: visible ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
