import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/global-styles";
import { theme } from "styles/theme";
import Root from "./pages/Root";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
