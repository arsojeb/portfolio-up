import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  const position = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      position.current = { x: e.clientX, y: e.clientY };

      // Move inner cursor immediately
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${position.current.x - 8}px, ${
          position.current.y - 8
        }px) rotate(45deg)`; // diamond shape
      }
    };

    // Hover detection
    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);
    const hoverTargets = document.querySelectorAll("a, button");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", moveCursor);

    // Outer cursor animation (rounded square)
    let animationFrame;
    const animateOuter = () => {
      outerPos.current.x += (position.current.x - outerPos.current.x) * 0.2;
      outerPos.current.y += (position.current.y - outerPos.current.y) * 0.2;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x - 15}px, ${
          outerPos.current.y - 15
        }px) scale(${hovering ? 1.5 : 1})`;
      }

      animationFrame = requestAnimationFrame(animateOuter);
    };
    animateOuter();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      cancelAnimationFrame(animationFrame);
    };
  }, [hovering]);

  return (
    <>
      {/* Outer cursor: rounded square */}
      <div
        ref={outerRef}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none
          h-8 w-8 bg-sky-400 rounded-md opacity-50
          transition-transform duration-150 ease-out`}
      />

      {/* Inner cursor: diamond */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none
          h-4 w-4 bg-white"
        style={{ transform: "rotate(45deg)" }}
      />
    </>
  );
};

export default CustomCursor;
