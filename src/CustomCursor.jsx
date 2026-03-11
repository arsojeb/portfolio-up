import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  const [hovering, setHovering] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const outer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mouse.current.x - 6}px,${
          mouse.current.y - 6
        }px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll("a, button");

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    let frame;

    const animate = () => {
      outer.current.x += (mouse.current.x - outer.current.x) * 0.15;
      outer.current.y += (mouse.current.y - outer.current.y) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outer.current.x - 20}px,${
          outer.current.y - 20
        }px) scale(${hovering ? 1.8 : 1})`;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      cancelAnimationFrame(frame);
    };
  }, [hovering]);

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
        w-10 h-10 rounded-full
        border border-sky-400/60
        backdrop-blur-sm
        transition-transform duration-200
        shadow-[0_0_15px_rgba(56,189,248,0.6)]"
      />

      {/* Inner Dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
        w-3 h-3 rounded-full
        bg-gradient-to-r from-purple-500 to-sky-400
        shadow-[0_0_10px_rgba(56,189,248,0.8)]"
      />
    </>
  );
};

export default CustomCursor;