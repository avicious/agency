import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const getTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";

  const [theme, setTheme] = useState(getTheme);

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
