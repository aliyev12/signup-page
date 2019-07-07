import React, { Component } from "react";
import withGlobaleContext from "./contexts/GlobalContextHOC";

class Test extends Component {
  render() {
    const { languageContext, themeContext } = this.props;
    return (
      <div style={{ color: themeContext.isDarkMode ? "white" : "black" }}>
        ================================
        <div>Language: {languageContext.language}</div>
        <div>Dark Mode: {JSON.stringify(themeContext.isDarkMode)}</div>
        ================================
      </div>
    );
  }
}

export default withGlobaleContext(Test);
