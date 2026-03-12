import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React, Tailwind CSS, and animations.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://ar-sojeb.vercel.app",
      githubLink: "https://github.com/arsojeb/portfolio-up.git",
      image: "/Screenshot 2026-02-07 015508.png",
    },
    {
      title: "E-commerce App",
      description:
        "A full-stack e-commerce application with Node.js, Express, MongoDB, and React.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://pappymart.netlify.app/",
      githubLink: "https://github.com/arsojeb/pet-shop-client.git",
      image: "/puppymart.png",
    },
    {
      title: "Blood Donation Platform",
      description:
        "A responsive Blood Donation platform with authentication and admin dashboard.",
      tech: ["React", "Node.js", "Express", "Tailwind CSS"],
      liveLink: "https://bloodsavelife.netlify.app/",
      githubLink: "https://github.com/arsojeb/Blood-Donor-Frontend.git",
      image: "/blood_donor.png",
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="pt-24 pb-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A selection of projects I've recently built using modern web
            technologies.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative rounded-2xl overflow-hidden
              bg-slate-900/60 backdrop-blur-md border border-slate-700
              hover:border-sky-400
              shadow-lg hover:shadow-sky-400/20
              transition-all duration-500
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-md"
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
                    bg-gradient-to-r from-purple-500 to-sky-400
                    px-4 py-2 rounded-lg text-white
                    hover:scale-105 transition"
                  >
                    Live <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm
                    border border-slate-600 px-4 py-2 rounded-lg
                    text-slate-300 hover:text-sky-400 hover:border-sky-400
                    transition"
                  >
                    Code <FaGithub />
                  </a>

                </div>

              </div>

              {/* HOVER GLOW */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 opacity-0 blur-lg group-hover:opacity-20 transition duration-500 pointer-events-none"></div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;