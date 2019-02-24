import React, { Component } from 'react'
import styled from 'styled-components'
import { TweenMax, Power1 } from 'gsap/TweenMax'

const ServiceCardDiv = styled.article`
  background-color: ${props => props.theme.primaryColor};
  max-width: 350px;
  min-width: 300px;
  padding: 88px 1% 1% 2%;
  position: relative;
  border: 3px solid ${props => props.theme.colorWhite};
  margin-bottom: calc(1% + 88px);
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
`

class ServiceCard extends Component {
  render() {
    const { title, image, text } = this.props

    return (
      <ServiceCardDiv id="service-card">
        <ServiceCardTitleDiv
          style={{ background: `url(${image}) no-repeat center` }}
        >
          <ServiceCardTitle>{title}</ServiceCardTitle>
        </ServiceCardTitleDiv>
        <ServiceCardText>{text}</ServiceCardText>
      </ServiceCardDiv>
    )
  }
}

export default ServiceCard
