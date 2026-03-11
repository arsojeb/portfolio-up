import React from "react";

const Intro = () => {
  return (
    <section className="pt-28 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up">
            Make{" "}
            <span className="bg-gradient-to-r from-purple-500 to-sky-400 text-transparent bg-clip-text">
              Designs
            </span>{" "}
            That <br />
            Engage, Delight, <br />
            and Connect
          </h1>

          <p className="text-slate-400 max-w-lg mx-auto md:mx-0 animate-fade-up delay-400">
            Hi, I'm{" "}
            <span className="text-sky-400 font-semibold">
              Mohammad Abdur Rahaman
            </span>. I build modern, responsive, and visually engaging web
            experiences using React, Tailwind CSS, and JavaScript.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 justify-center md:justify-start animate-fade-up delay-600">

            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-white font-medium
              bg-gradient-to-r from-purple-500 to-sky-400
              hover:scale-105 hover-pulse transition"
            >
              Hire Me
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition"
            >
              Previous Works →
            </a>

          </div>

          {/* STATS */}
          <div className="flex gap-10 justify-center md:justify-start pt-6 animate-fade-up delay-800">

            <div>
              <h3 className="text-2xl font-bold">15+</h3>
              <p className="text-sm text-slate-400">Projects Done</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-sm text-slate-400">Client Satisfaction</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center animate-slide-up delay-400">

          <div className="relative w-72 h-72 md:w-96 md:h-96">

            {/* Glow Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-sky-400 blur-xl opacity-50"></div>

            {/* Floating Image */}
            <div className="relative rounded-full overflow-hidden shadow-2xl bg-slate-900 animate-float">
              <img
                src="/me.png"
                alt="Mohammad Abdur Rahaman"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Intro;