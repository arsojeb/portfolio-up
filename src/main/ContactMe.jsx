import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#0b0c2a] to-[#1b1d3b] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 mb-4">
          Contact Me
        </h2>
        <p className="text-slate-400 mb-12">
          Get in touch via email or connect with me on social platforms.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://linkedin.com/in/mohammad-abdur-rahaman"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-slate-800 hover:bg-sky-400 hover:text-slate-900 transition transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/arsojeb"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-slate-800 hover:bg-sky-400 hover:text-slate-900 transition transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://facebook.com/wizard003"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-full bg-slate-800 hover:bg-sky-400 hover:text-slate-900 transition transform hover:scale-110"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Send Email Button */}
        <a
          href="mailto:abdurrahaman7042@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold
                     bg-linear-to-r from-sky-400 via-purple-500 to-pink-400
                     text-slate-900 text-lg
                     hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50
                     transition transform duration-300"
        >
          📧 Send Email
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
