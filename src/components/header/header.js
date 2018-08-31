import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby'

const Header = styled.header`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export default ({ children }) => (
  <Header>
    {children}
  </Header>
);
