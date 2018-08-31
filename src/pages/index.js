import React from 'react';
// Import styled-components Package
import styled from "styled-components";
// Import globalStyles.js uses styled-components { injectGlobal }
import '../css/globalStyles.js';

// Import Components
import Layout from '../components/layout';
import Header from '../components/header/header';
import { ServiceList } from '../components/header/serviceList';

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

const CtaContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 2rem auto;
`;

const CtaText = styled.p`
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.88);
  margin-bottom: 0.5rem;
`;

const AptButton = styled.a`
  background-color: rgba(24,224,204,0.8);
  border-radius: 8px;
  border: 2px solid rgb(175, 64, 205);
  color: white;
  letter-spacing: 1px;
  display: block;
  font-size: 1.4rem;
  font-family: 'SignPainter', sans-serif;
  padding: 8px 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.88);
  width: 90%;
`;

export default () => (
  <Layout>
    <Header>
      <SubHeading>Sevier Counties best full service beauty salon.</SubHeading>
      <Motto>"Where a Great Haircut is Priceless."</Motto>
      <ServiceList>
        <li>Bridal</li>
        <li>Make-Up</li>
      </ServiceList>
      <CtaContainer>
        <CtaText>Make Appointment</CtaText>
        <AptButton>(865) 366-1357</AptButton>
      </CtaContainer>
    </Header>
  </Layout>
);
