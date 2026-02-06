import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-start pt-28 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div
            className="relative group w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden
            bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-400
            shadow-2xl animate-slide-up"
          >
            <div
              className="absolute inset-1 rounded-2xl bg-slate-800 shadow-xl
              transition-transform duration-700 ease-out
              group-hover:rotate-2 group-hover:translate-y-1 animate-float"
            >
              <img
                src="/me.png"
                alt="Mohammad Abdur Rahaman"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left space-y-5">

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight
          text-transparent bg-clip-text bg-gradient-to-r
          from-sky-400 via-purple-500 to-pink-400 animate-typing">
            Mohammad <br /> Abdur Rahaman
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-300 animate-fade-up delay-300">
            Frontend Web Developer
          </h2>

          <p className="text-slate-400 max-w-lg leading-relaxed">
            <span className="block animate-fade-up delay-500">
              I design and build modern, responsive, and user-friendly web experiences
            </span>
            <span className="block animate-fade-up delay-700">
              with clean UI, smooth interactions, and scalable frontend architecture.
            </span>
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">

            {/* PRIMARY */}
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2
              rounded-lg bg-sky-400 px-6 py-3 font-medium text-slate-900
              transition-all duration-500 ease-out
              hover:bg-sky-300 hover:scale-105 hover:shadow-xl animate-fade-up delay-900"
            >
              <span>View Projects</span>

              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>

              {/* Glow */}
              <span className="absolute inset-0 rounded-lg bg-sky-400 blur-xl opacity-0 group-hover:opacity-30 transition" />
            </a>

            {/* SECONDARY */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2
              px-7 py-3 rounded-xl font-medium text-slate-200
              border border-slate-600/60 bg-slate-900/40 backdrop-blur-md
              transition-all duration-500 ease-out
              hover:scale-105 hover:text-sky-400 hover:border-sky-400
              animate-fade-up delay-1100"
            >
              <span className="relative z-10">Contact Me</span>

              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>

              <span className="absolute -inset-0.5 rounded-xl
              bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400
              blur opacity-0 group-hover:opacity-25 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
