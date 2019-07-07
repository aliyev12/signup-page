import React from "react";
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";

const withGlobaleContext = Component => props => (
  <ThemeContext.Consumer>
    {themeContext => (
      <LanguageContext.Consumer>
        {languageContext => (
          <Component
            languageContext={languageContext}
            themeContext={themeContext}
            {...props}
          />
        )}
      </LanguageContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default withGlobaleContext;
