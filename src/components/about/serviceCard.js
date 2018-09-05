import React from 'react';
import styled from 'styled-components';

const ServiceCard = styled.article`
  background-color: ${props => props.theme.primaryColor};
  max-width: 350px;
  min-width: 300px;
  padding: 88px 1% 1% 2%;
  position: relative;
  border: 3px solid ${props => props.theme.colorWhite};
`;

const ServiceCardTitleDiv   = styled.div`
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

const ServiceCardTitle = styled.h2`
  color: ${props => props.theme.colorWhite};
  font-size: 3rem;
`;

const ServiceCardText  = styled.p `
  color: ${props => props.theme.colorWhite};
`;

export default (props) => {
  const {title, image, text} = props;
  console.log(props.image);
  return(
    <ServiceCard>
      <ServiceCardTitleDiv style={{ background: `url(${image}) no-repeat center` }}>
        <ServiceCardTitle>{title}</ServiceCardTitle>
      </ServiceCardTitleDiv>
      <ServiceCardText>{text}</ServiceCardText>
    </ServiceCard>
  )
};
