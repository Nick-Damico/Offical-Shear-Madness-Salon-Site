import React from 'react';
// Import styled-components Package
import styled from "styled-components";
// Import globalStyles.js uses styled-components { injectGlobal }
import '../css/globalStyles.js';

// Import Components
import Layout from '../components/layout';
import Header from '../components/header';

// Styled Components
const SubHeading = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: white;
  font-size: ;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.88);
`;

const Motto = styled.h3`
  font-size: 1.5rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.88);
  letter-spacing: 1px;
  border-bottom: dashed 2px white;

  @media (min-width: 500px) {
    font-size: 2.2rem;
  }
`;

export default () => (
  <Layout>
    <Header>
      <SubHeading>Sevier Counties best full service beauty salon.</SubHeading>
      <Motto>"Where a Great Haircut is Priceless."</Motto>
    </Header>
  </Layout>
);
