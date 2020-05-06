import React from "react";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import styled from "@emotion/styled";

type MainTemplateProps = {
  children: React.ReactNode;
};

const customTheme = {
  ...theme,
};

const MainTemplate = ({ children }: MainTemplateProps) => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Block>{children}</Block>
  </ThemeProvider>
);

const Block = styled.div``;

export default MainTemplate;
