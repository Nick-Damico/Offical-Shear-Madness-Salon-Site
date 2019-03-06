import React from 'react'
import styled from 'styled-components'

const ServiceCardDiv = styled.article`
  background-color: ${props => props.theme.primaryColor};
  max-width: 350px;
  /* min-width: 300px; */
  width: 98%;
  padding: 88px 1% 1% 2%;
  position: relative;
  border: 3px solid ${props => props.theme.colorWhite};
  margin-bottom: calc(1% + 88px);

  @media (min-width: 499px) {
    width: 48%;
  }
  @media (min-width: 799px) {
    width: 31.3333333%;
  }
`

const ServiceCardTitleDiv = styled.div`
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
`

const ServiceCardTitle = styled.h2`
  color: ${props => props.theme.colorWhite};
  font-size: 3rem;
`

const ServiceCardText = styled.p`
  color: ${props => props.theme.colorWhite};
  margin-top: 2%;

  font-size: 0.875rem;
  line-height: 1.5;

  padding-bottom: 20px;
  @media (min-width: 900px) {
    font-size: 16px;
    line-height: 1.5
  }
`

const ServiceCard = ({title, image, text}) => {
    return (
      <ServiceCardDiv className="service-card">
        <ServiceCardTitleDiv
          style={{ background: `url(${image}) no-repeat center` }}
        >
          <ServiceCardTitle>{title}</ServiceCardTitle>
        </ServiceCardTitleDiv>
        <ServiceCardText>{text}</ServiceCardText>
      </ServiceCardDiv>
    )
}

export default ServiceCard
