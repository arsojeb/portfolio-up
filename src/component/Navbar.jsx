import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-slate-900/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="relative text-lg md:text-xl font-bold tracking-wide select-none
             text-white hover:scale-105 transition-transform duration-300 ease-out
             flex items-center gap-1"
        >
          {/* Initials / Prefix */}
          <span className="text-white">MD.</span>

          {/* Gradient Name */}
          <span
            className="bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 
                   bg-clip-text text-transparent font-extrabold
                   transition-all duration-500 group-hover:tracking-wider"
          >
            ABDUR RAHMAN
          </span>

          {/* Optional small animated underline for navbar */}
          <span
            className="absolute left-0 -bottom-1 w-full h-[2px] bg-sky-400 scale-x-0
                   origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
          ></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative text-gray-300 hover:text-sky-400 transition font-medium
                         after:absolute after:left-0 after:-bottom-1 after:h-0.5
                         after:w-0 after:bg-sky-400 after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center gap-1.5 focus:outline-none"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6 bg-slate-950">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-sky-400 transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
