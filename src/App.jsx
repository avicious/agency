import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Services from "./components/Services";

const App = () => {
  const getTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";

  const [theme, setTheme] = useState(getTheme);

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Trusted />
      <Services />
    </div>
  );
};

export default App;
