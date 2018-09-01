import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby'
import { ServiceList } from './serviceList';

const Header = styled.header`
  display: flex;
  background: ${props => props.theme.linearGradient};
  text-align: center;
  flex-direction: column;
  width: 100%;
`;

// Styled Components
const SubHeading = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: ${props => props.theme.colorWhite};
  text-shadow: ${props => props.theme.textShadow};
`;

const Motto = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colorWhite};
  text-shadow: ${props => props.theme.textShadow};
  letter-spacing: 1px;
  border-bottom: dashed 2px ${props => props.theme.colorWhite};

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

export default ({ children }) => (
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
);
