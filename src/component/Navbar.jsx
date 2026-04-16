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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 md:px-6">
      {/* Main Navbar */}
      <div
        className={`max-w-7xl mx-auto h-16 rounded-2xl border transition-all duration-500
        ${
          scrolled
            ? "bg-white/10 border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/20"
            : "bg-white/5 border-white/10 backdrop-blur-xl"
        }`}
      >
        <div className="px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="group relative flex items-center gap-2 select-none"
          >
            <span
              className="text-white/70 text-sm md:text-base font-semibold tracking-[0.35em]
              uppercase transition-all duration-300 group-hover:text-white"
            >
              MD.
            </span>

            <span
              className="relative text-xl sm:text-2xl md:text-3xl font-black uppercase
              bg-gradient-to-r from-sky-300 via-purple-400 via-pink-400 to-sky-300
              bg-[length:200%_200%] bg-clip-text text-transparent
              drop-shadow-[0_0_15px_rgba(168,85,247,0.35)]
              transition-all duration-500 group-hover:scale-105"
            >
              ABDUR RAHAMAN
            </span>

            {/* Glow */}
            <span
              className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30
              bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500
              transition-all duration-500 -z-10"
            />

            {/* Underline */}
            <span
              className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full
              bg-gradient-to-r from-sky-400 via-purple-500 to-pink-400
              transition-all duration-500 group-hover:w-full"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-3">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/80
                hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-3 transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="rounded-2xl border border-white/10 bg-white/10
          backdrop-blur-2xl shadow-xl"
        >
          <nav className="flex flex-col items-center gap-3 py-5">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="w-[90%] text-center py-3 rounded-xl text-white/80
                hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;