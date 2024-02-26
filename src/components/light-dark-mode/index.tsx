import React from "react";
import useLocalStrorage from "./useLocalStrorage";
import "./theme.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStrorage("theme", "dark");

  /**
   * Permet de changer le theme dark/light mode
   */
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
