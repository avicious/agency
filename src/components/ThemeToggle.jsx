import assets from "../assets/assets";

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            src={assets.sun_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="light"
            onClick={() => setTheme("light")}
          />
        ) : (
          <img
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="dark"
            onClick={() => setTheme("dark")}
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
