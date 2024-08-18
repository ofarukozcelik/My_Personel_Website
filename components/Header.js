import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between text-white px-20 py-8 h-16 mt-12 bg-transparen">
      <span></span>
      <button
        className="px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
};

export default Header;
 