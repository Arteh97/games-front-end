import React from "react";
import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   setTheme((currTheme) => (currTheme === "light" ? "light" : "dark"));
  // };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
