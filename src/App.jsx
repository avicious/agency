import { useState } from "react";
import {
  Navbar,
  Hero,
  Trusted,
  Services,
  Work,
  Teams,
  Contact,
} from "./components/index";

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
      <Work />
      <Teams />
      <Contact />
    </div>
  );
};

export default App;
