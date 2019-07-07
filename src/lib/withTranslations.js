import React, { useContext } from "react";
import translations from "./translations";
import { LanguageContext } from "../contexts/LanguageContext";

export default Component => props => {
  const { language } = useContext(LanguageContext);
  return <Component {...translations[language]} />;
};
