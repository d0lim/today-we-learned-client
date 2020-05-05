import React from "react";
import "./App.css";
import Header from "./Header";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

// const breakpoints = ["360px", "768px", "1024px", "1440px"];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

// const newTheme = {
//   ...theme,
//   breakpoints,
// };

const App = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Header />
  </ThemeProvider>
);

export default App;
