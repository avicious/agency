import { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Hero,
  Trusted,
  Services,
  Work,
  Teams,
  Contact,
  Footer,
} from "./components/index";
import { Toaster } from "react-hot-toast";

const App = () => {
  // Fetching theme from local storage for persistance
  const getTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";

  const [theme, setTheme] = useState(getTheme);

  // Adding ref for custom cursor
  const outlineRef = useRef(null);
  const dotRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Replacing cursor with a custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${mouse.current.x - 20}px, ${mouse.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Toaster />
      <Hero />
      <Trusted />
      <Services />
      <Work />
      <Teams />
      <Contact />
      <Footer theme={theme} />

      {/* Custom Cursor Ring*/}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-9999"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>

      {/* Custom Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-9999"
      ></div>
    </div>
  );
};

export default App;
