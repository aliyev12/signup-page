import React, { Component, createContext } from "react";

const ThemeContext = createContext();

export class ThemeProvider extends Component {
  state = {
    isDarkMode: true
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
