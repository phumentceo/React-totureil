import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ChildComponent from "./ChildComponent";

const Context01 = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <h1>useContext Example</h1>
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

export default Context01;
