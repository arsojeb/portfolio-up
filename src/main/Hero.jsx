import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 md:px-12 overflow-hidden">

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Image / Photo */}
        <div className="flex justify-center md:justify-start">
          <div
            className="relative group w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-transparent
                       bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-400 shadow-2xl
                       transform scale-90 opacity-0 animate-slide-up transition-transform duration-700 ease-out hover:scale-105"
          >
            {/* Floating Inner Photo */}
            <div
              className="absolute inset-0 rounded-2xl bg-slate-800 shadow-2xl
                         transform transition-transform duration-1000 ease-in-out
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

        {/* Text Content */}
        <div className="text-center md:text-left space-y-4">

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 drop-shadow-lg animate-typing">
            Mohammad <br />
            Abdur Rahaman
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl font-semibold text-slate-300 animate-float-slow opacity-0 animate-fade-up delay-500 drop-shadow-md">
            Frontend Web Developer
          </h2>

          {/* Description */}
          <p className="text-slate-400 max-w-lg leading-relaxed">
            <span className="block opacity-0 animate-fade-up delay-700">
              I design and build modern, responsive, and user-friendly web experiences
            </span>
            <span className="block opacity-0 animate-fade-up delay-900">
              with clean UI, smooth interactions, and scalable frontend architecture.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg
                         bg-sky-400 px-6 py-3 font-medium text-slate-900
                         opacity-0 animate-fade-up delay-1100 hover:bg-sky-300 hover:shadow-lg hover:scale-105
                         transition transform duration-500 ease-out hover-pulse"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg
                         border border-slate-600 px-6 py-3 font-medium text-slate-200
                         opacity-0 animate-fade-up delay-1300 hover:border-sky-400 hover:text-sky-400 hover:shadow-lg hover:scale-105
                         transition transform duration-500 ease-out hover-pulse"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
