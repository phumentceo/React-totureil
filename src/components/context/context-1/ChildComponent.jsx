import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ChildComponent = () => {
 
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
        height : "100vh"
      }}
    >
      <p>The current theme is <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>

  );
};

export default ChildComponent;
