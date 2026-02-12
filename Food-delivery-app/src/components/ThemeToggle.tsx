import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full border border-gray-300 dark:border-gray-600
                 bg-white dark:bg-gray-800
                 shadow hover:scale-105 transition"
      >
        {dark ? (
          <FaSun className="text-yellow-400 w-5 h-5" />
        ) : (
          <FaMoon className="text-gray-700 w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
