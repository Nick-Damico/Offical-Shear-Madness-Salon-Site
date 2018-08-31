import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: tomato;
   flex-direction: column;
   align-items: center;
   margin: 0 auto 12px auto;
   &:last-child {
     margin-bottom: 0;
   }
`

export default ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);
