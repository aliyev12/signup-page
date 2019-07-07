import React from "react";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Test from "./Test";

export default () => (
  <ThemeProvider>
    <LanguageProvider>
      <PageContent>
        <Navbar />
        <Form />
        <Test />
      </PageContent>
    </LanguageProvider>
  </ThemeProvider>
);
