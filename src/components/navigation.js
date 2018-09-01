import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  background: ${props => props.theme.primaryColor};
  height: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

export class Navigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Nav>
      </Nav>
    )
  };
};
