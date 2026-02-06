import React, { useEffect, useState, useRef } from "react";

// Hook to count up numbers
const useCountUp = (target, duration = 1200, startCount = 0) => {
  const [count, setCount] = useState(startCount);
  useEffect(() => {
    let start = startCount;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration, startCount]);
  return count;
};

// Hook for scroll animation trigger
const useInView = (ref, threshold = 0.2) => {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [ref, threshold]);
  return isVisible;
};

// SkillBar component
const SkillBar = ({ name, level, trigger }) => {
  const count = useCountUp(trigger ? level : 0);
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-slate-300">{name}</span>
        <span className="text-sky-400 font-semibold">{count}%</span>
      </div>
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 rounded-full transition-all duration-1000"
          style={{ width: `${count}%` }}
        ></div>
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef();
  const inView = useInView(sectionRef);

  const features = [
    { title: "Frontend Focus", desc: "UI, UX & interaction design" },
    { title: "Responsive Design", desc: "Mobile-first & adaptive layouts" },
    { title: "Clean Code", desc: "Readable & scalable structure" },
    { title: "Fast Learner", desc: "Always improving skills" },
  ];

  const journey = [
    { year: "2024", text: "Started learning HTML & web development fundamentals" },
    { year: "2025", text: "Built multiple frontend projects using React, JavaScript & Tailwind CSS" },
    { year: "2026", text: "Focused on animations, UI polish, and real-world applications" },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "UI/UX Design", level: 80 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pt-20 pb-28 px-6 md:px-12 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT: Story & Skills */}
        <div className={`space-y-8 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400">
            About Me
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            I’m <span className="text-sky-400 font-semibold">Mohammad Abdur Rahaman</span>, a frontend-focused developer who enjoys crafting clean, responsive, and visually engaging user interfaces.
          </p>

          <p className="text-slate-400 leading-relaxed">
            I work mainly with <span className="text-slate-200 font-medium">React, Tailwind CSS, and modern JavaScript</span>, focusing on smooth interactions, scalability, and performance.
          </p>

          <p className="text-slate-400 leading-relaxed">
            I believe great UI is a balance of design, usability, and speed. I’m constantly improving through real-world projects and learning industry best practices.
          </p>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} trigger={inView} />
            ))}
          </div>
        </div>

        {/* RIGHT: Floating Photo + Feature Cards */}
        <div className="grid grid-cols-1 gap-6">

          {/* Floating Photo */}
          <div className="flex justify-center mb-6">
            <div className={`relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-transparent bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-400 shadow-2xl transform transition-all duration-1000 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <div className="absolute inset-0 rounded-3xl bg-slate-800 shadow-2xl transform transition-transform duration-1000 ease-in-out hover:rotate-3 hover:translate-y-2">
                <img src="/web.jpg" alt="Mohammad Abdur Rahaman" className="w-full h-full object-cover rounded-3xl" />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={item.title}
                className={`group relative rounded-2xl p-6 bg-slate-900/50 backdrop-blur-md border border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-lg font-semibold text-sky-400">{item.title}</h3>
                <p className="mt-2 text-slate-400 text-sm">{item.desc}</p>
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-30 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400"></div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Journey Timeline */}
      <div className={`max-w-3xl mx-auto px-6 md:px-12 py-24 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <h3 className="text-2xl font-bold text-center text-slate-200 mb-10">My Journey</h3>
        <div className="relative border-l border-slate-700 pl-8 space-y-10">
          {journey.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-2.5 top-1 w-5 h-5 bg-sky-400 rounded-full shadow-lg animate-ping-slow"></span>
              <h4 className="text-sky-400 font-semibold">{item.year}</h4>
              <p className="text-slate-400 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
