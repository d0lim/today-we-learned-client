import React from "react";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import styled from "@emotion/styled";

type MainTemplateProps = {
  children: React.ReactNode;
};

const bp = ["360px", "768px", "1024px", "1440px"];
let breakpoints = {
  sm: "",
  md: "",
  lg: "",
  xl: "",
};
breakpoints.sm = bp[0];
breakpoints.md = bp[1];
breakpoints.lg = bp[2];
breakpoints.xl = bp[3];

const customTheme = {
  ...theme,
  // breakpoints,
};

const MainTemplate = ({ children }: MainTemplateProps) => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Block>{children}</Block>
  </ThemeProvider>
);

const Block = styled.div``;

export default MainTemplate;
