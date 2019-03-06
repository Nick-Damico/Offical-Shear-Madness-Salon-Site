import React from 'react';
import styled from 'styled-components';

const StylistCard = styled.figure`
  background-color: ${props => props.theme.secondaryColor};
  max-width: 350px;
  width: 98%;
  padding: 88px 1% 40px 1%;
  position: relative;
  border: 3px solid ${props => props.theme.colorWhite};
  margin-bottom: calc(1% + 88px);

  @media (min-width: 499px) {
    width: 48%;
  }
  @media (min-width: 799px) {
    width: 31.3333333%;
  }
`;

const StylistCardInner = styled.div`
  text-align: center;
`;

const StylistPic = styled.img`
  display: flex;
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: -85px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 3px solid ${props => props.theme.colorWhite};
  border-radius: 50%;

  margin: 0 auto;
  width: 150px;
`;

const StylistName = styled.h2`
  position: relative;
  display: inline-block;
  width: 180px;
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.secondaryColor};
  font-size: 2.5rem;
  text-align: center;
  z-index: 100;
  margin: 0 auto ;
`;

const StylistTitle = styled.h3`
  color: ${props => props.theme.colorWhite};
  font-family: Raleway, sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
`;

const Hr = styled.hr`
  position: relative;
  top: -70px;
  z-index: 80;
  border: 0;
  height: 2px;
  width: 90%;
  margin: 0 auto;
  background-image: -webkit-linear-gradient(
    left,
    #f0f0f0,
    ${props => props.theme.secondaryColor},
    #f0f0f0
  );
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
`


export default (props) => {
  const {profilePic, title, name} = props;

  return(
    <StylistCard>
      <StylistPic src={profilePic} alt={`Stylist ${name}`} />
      <StylistCardInner>
        <StylistName>{name}</StylistName>
        <StylistTitle>{title}</StylistTitle>
        <Hr />
      </StylistCardInner>
    </StylistCard>
  )
};
