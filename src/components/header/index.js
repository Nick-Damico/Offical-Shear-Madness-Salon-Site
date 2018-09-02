import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby'
import { ServiceList } from './serviceList';
import bg from '../../images/shearmadness.png';
import logo from '../../images/logo.svg';

const Header = styled.header`
  display: flex;
  position: relative;
  background: ${props => props.theme.linearGradient};
  background: ${props => props.theme.transparentGradient}, url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  text-align: center;
  width: 100%;

  @media (min-width: 430px) {
    padding-top: 80px;
  }
`;

// Styled Components
const MainHeading = styled.h1`
  font-size: 0px;
  @media (min-width: 430px) {
    visibility: hidden;
    height: 0;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const SubHeading = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: ${props => props.theme.colorWhite};
  padding-top: 2rem;
  margin-bottom: 0;
  text-shadow: ${props => props.theme.textShadow};

  @media (min-width: 899px) {
    font-size: 1.5rem;
  }
`;

const Slogan = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colorWhite};
  text-shadow: ${props => props.theme.textShadow};
  letter-spacing: 1px;
  width: 90%;
  max-width: 450px;
  border-bottom: dashed 2px ${props => props.theme.colorWhite};

  @media (min-width: 500px) {
    font-size: 2.2rem;
  }
  @media (min-width: 699px) {
    font-size: 2.4rem;
    max-width: 500px;
  }
  @media (min-width: 899px) {
    font-size: 3rem;
    max-width: 600px;
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
  background-color: rgba(24,224,204,0.5);
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
  max-width: 175px;
`;

export default ({ children }) => (
  <Header>
    <MainHeading>Shear Madness Beauty Salon<Logo src={logo}/></MainHeading>
    <SubHeading>Sevier Counties best full service beauty salon.</SubHeading>
    <Slogan>"Where a Great Haircut is Priceless."</Slogan>
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
