import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b0c2a] via-[#1b1d3b] to-[#0b0c2a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div className="flex flex-col items-start space-y-4">
          <a href="/" className="text-2xl font-bold tracking-wide text-white">
            MD.<span className="text-sky-400">ABDUR RAHMAN</span>
          </a>
          <p className="text-slate-400 max-w-xs">
            Frontend Developer passionate about building modern, responsive, and scalable web applications.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="mailto:abdurrahaman7042@gmail.com" className="hover:text-sky-400 transition">
              <FaEnvelope size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-abdur-rahaman" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/arsojeb" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://www.facebook.com/wizard003" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-3 text-sky-400">Quick Links</h3>
          <a href="#about" className="hover:text-sky-400 transition">About</a>
          <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
          <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-3 text-sky-400">Contact</h3>
          <p>Email: <a href="mailto:abdurrahaman7042@gmail.com" className="hover:text-sky-400 transition">abdurrahaman7042@gmail.com</a></p>
          <p>Location: <span className="text-slate-400">Bangladesh</span></p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} MD. Abdur Rahman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
