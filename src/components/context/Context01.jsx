import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ChildComponent from "./ChildComponent";

const Context01 = () => {
  const [theme, setTheme] = useState("light"); // Manage theme state

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Pass the current theme as the value of the provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <h1>useContext Example</h1>
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

export default Context01;
