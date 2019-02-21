import React from 'react';
import styled from 'styled-components';

const StylistCard = styled.figure`
  background-color: ${props => props.theme.secondaryColor};
  max-width: 320px;
  min-width: 305px;
  padding: 88px 1% 60px 2%;
  position: relative;
  border: 3px solid ${props => props.theme.colorWhite};
  margin-bottom: calc(1% + 88px);
`;

const StylistCardInner = styled.div`

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
  height: 175px;
  margin: 0 auto;
  width: 175px;
`;

const StylistName = styled.h2`
  color: ${props => props.theme.colorWhite};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0;
`;

const StylistBio = styled.p`
  color: ${props => props.theme.colorWhite};
  margin-bottom: 1rem;
  min-height: 150px;
`;

const SkillsList = styled.ul`
  color: ${props => props.theme.colorWhite};
  list-style: none;
  text-align: center;
`;

const StylistTitle = styled.h3`
  color: ${props => props.theme.colorWhite};
  font-family: Raleway, sans-serif;
  font-size: 1.2rem;
  text-align: center;
  border-bottom: 1px solid white;
`;

const SkillsTitle = styled.h3`
  color: ${props => props.theme.colorWhite};
  font-size: 2rem;
  text-align: center;
  border-bottom: 1px solid white;
`;


export default (props) => {
  const {profilePic, title, name, bio, skills} = props;
  const skillItems = skills.map((skill) => <li key={skill}>{skill}</li>);

  return(
    <StylistCard>
      <StylistPic src={profilePic} alt={`Stylist ${name}`} />
      <StylistCardInner>
        <StylistName>{name}</StylistName>
        <StylistTitle>{title}</StylistTitle>
      </StylistCardInner>
    </StylistCard>
  )
};
