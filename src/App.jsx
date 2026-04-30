import { useRef, useState } from "react";
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

  const outlineRef = useRef(null);
  const dotRef = useRef(null);

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
