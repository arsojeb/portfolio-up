import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const GroupProject = () => {
  const projects = [
    {
      title: "EduPortal",
      description:
        "EduPortal is a school management platform that streamlines administrative and academic tasks, providing an intuitive interface for students, teachers, and administrators.",
      tech: ["React", "Node.js", "Express", "Mongoose", "TypeScript", "Tailwind CSS", "ShadCN UI"],
      liveLink: "https://edu-portal-topaz.vercel.app/",
      githubLink: "https://github.com/shohanur-abc/EduPortal.git",
      image: "Group-Project.png",
    },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="group-projects"
      className="pt-24 pb-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Group Projects
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Collaborative projects built with modern web technologies in a team environment.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
              className={`group relative rounded-2xl overflow-hidden
              bg-gray-800/60 backdrop-blur-md border border-gray-700
              hover:border-green-400
              shadow-lg hover:shadow-green-400/20
              transition-all duration-700
              transform
              ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover 
                  transition duration-700 
                  group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-700 text-gray-200 px-3 py-1 rounded-md 
                      hover:bg-green-400 hover:text-black transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm
                    bg-gradient-to-r from-green-400 to-blue-500
                    px-4 py-2 rounded-lg text-white
                    hover:scale-110 hover:shadow-lg
                    transition duration-300"
                  >
                    Live <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm
                    border border-gray-600 px-4 py-2 rounded-lg
                    text-gray-300 hover:text-green-400 hover:border-green-400
                    hover:scale-110 transition duration-300"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute -inset-1 rounded-2xl 
              bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 
              opacity-0 blur-xl 
              group-hover:opacity-30 
              transition duration-700 pointer-events-none"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupProject;