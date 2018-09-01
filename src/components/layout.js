import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from '../css/globalStyles.js';

const Wrapper = styled.div`
  display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   width: 100%;
   max-width: 1200px;
   &:last-child {
     margin-bottom: 0;
   }
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      { children }
    </Wrapper>
  </ThemeProvider>
);
