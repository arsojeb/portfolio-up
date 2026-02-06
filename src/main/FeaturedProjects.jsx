import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React, Tailwind CSS, and animations.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "ar-sojeb.vercel.app",
      githubLink: "https://github.com/arsojeb/portfolio-up.git",
      image: "Screenshot 2026-02-07 015508.png",
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce application with Node.js, Express, MongoDB, and React.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://pappymart.netlify.app/",
      githubLink: "https://github.com/arsojeb/pet-shop-client.git",
      image: "puppymart.png",
    },
    {
      title: "Blood Donation Platform",
      description: "A responsive Blood Donation platform with rich text editor and user authentication.",
      tech: ["React", "Node.js", "Express", "Tailwind CSS"],
      liveLink: "https://bloodsavelife.netlify.app/",
      githubLink: "https://github.com/arsojeb/Blood-Donor-Frontend.git",
      image: "blood_donor.png",
    },
  ];

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
    <section ref={sectionRef} id="projects" className="relative py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-purple-500 to-pink-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Some of the projects I built recently. Click to view live or source code.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-700/50 text-slate-200 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-400 text-slate-900 px-4 py-2 rounded-lg hover:bg-sky-300 hover:scale-105 transition transform duration-300"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-slate-600 text-slate-200 px-4 py-2 rounded-lg hover:border-sky-400 hover:text-sky-400 hover:scale-105 transition transform duration-300"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
