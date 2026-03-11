import React, { useEffect, useRef, useState } from "react";
import { FaAward } from "react-icons/fa";

const Achievement = () => {
  const achievements = [
    {
      title: "Complete Web Development Course",
      description:
        "Successfully completed a full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB while building multiple real-world projects.",
      issuer: "Programming Hero",
      date: "March 2026",
      image: "achive.png",
      tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
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
    <section ref={sectionRef} id="achievement" className="relative py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-purple-500 to-pink-400">
            My Achievements
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Milestones in my journey as a web developer. Hover on the card to see details.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {achievements.map((ach, index) => (
            <div
              key={ach.title}
              className={`group relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/50 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Full Picture */}
              <img
                src={ach.image}
                alt={ach.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{ach.title}</h3>
                <p className="text-slate-300 text-base mb-3">{ach.description}</p>
                <p className="text-slate-400 text-sm mb-4">
                  {ach.issuer} | {ach.date}
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {ach.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-slate-700/50 text-slate-200 px-3 py-1.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-sky-400 text-slate-900 px-6 py-3 rounded-xl hover:bg-sky-300 hover:scale-110 transition transform duration-300 text-lg font-semibold"
                >
                  View <FaAward />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;