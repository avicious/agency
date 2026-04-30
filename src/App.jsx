import { useState } from "react";
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
      <Footer />
    </div>
  );
};

export default App;
