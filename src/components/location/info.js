import React from 'react';
import styled from 'styled-components';
import LocationPic from '../../images/SalonLocation.jpg';

const InfoContainer = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  background: ${props => props.theme.darkerGradient}, url(${LocationPic}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  width: 100%;

  @media (min-width: 499px) {
    background-color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.primaryColor};
    width: 50%;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`;

const SecondHeading = styled.h2`
  color: ${props => props.theme.colorWhite};
  margin-bottom: 0;
  font-size: 3rem;
`;

const FourthHeading = styled.h3`
  color: ${props => props.theme.colorWhite};
  margin-bottom: 0;
  font-size: 1.8rem;
`;

const InfoText = styled.p`
  color: ${props => props.theme.colorWhite};
`;

export default () => {
  return (
    <InfoContainer>
      <InfoBlock>
        <SecondHeading>Shear Madness</SecondHeading>
        <FourthHeading>Located in: Govener's Crossing Outlet</FourthHeading>
        <InfoText>
          212 Collier Drive<br />
          SevierVille, TN 37862
        </InfoText>
      </InfoBlock>
      <InfoBlock>
        <SecondHeading>Hours</SecondHeading>
        <InfoText>
          Open: Tuesday - Sunday<br />
          10am - 5pm
          <br />
          Closed: Sunday - Monday
        </InfoText>
      </InfoBlock>
    </InfoContainer>
  );
};
