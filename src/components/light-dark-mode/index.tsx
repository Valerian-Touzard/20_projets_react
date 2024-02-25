import React from "react";
import useLocalStrorage from "./useLocalStrorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStrorage("theme", "dark");

  const handleToggleTheme= () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  console.log(theme);
  

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
