import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{children}</div>;
};
