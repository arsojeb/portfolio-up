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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-slate-900/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="group relative text-lg md:text-xl font-bold tracking-wide flex items-center gap-1"
        >
          <span className="text-white">MD.</span>

          <span
            className="bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400 
            bg-clip-text text-transparent font-extrabold
            transition-all duration-300 group-hover:tracking-wider"
          >
            ABDUR RAHAMAN
          </span>

          {/* underline */}
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-400
            transition-all duration-300 group-hover:w-full"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative text-gray-300 hover:text-sky-400 transition font-medium
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
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
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6 bg-slate-950">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-lg text-gray-300 hover:text-sky-400 transition"
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