import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: tomato;
   flex-direction: column;
   align-items: center;
   margin: 0 auto 12px auto;
   padding: 0 1rem 0 1rem;
   &:last-child {
     margin-bottom: 0;
   }
`

export default ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);
