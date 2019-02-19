import React from 'react'
import styled from 'styled-components'
import bg from '../../images/about-intro-bgv.png'

const AboutIntroSection = styled.section`
  background: url(${bg}) no-repeat center;
  background-size: cover;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 4px solid ${props => props.theme.secondaryColor};

  @media (min-width: 600px) {

  }
`

const AboutText = styled.p`
  max-width: 750px;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 20px;
`

const FirstCharacter = styled.span`
  color: ${props => props.theme.secondaryColor};
  float: left;
  font-family: Georgia;
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
`

const ColorText = styled.span`
  color: ${props => props.theme.secondaryColor};
`

const Heading = styled.h2`
  text-align: center;
  color: ${props => props.theme.primaryColor};
  font-size: 2rem;
`

export default props => {
  return (
    <AboutIntroSection id="about-intro">
      <div style={{backgroundColor: 'rgba(255, 255, 255, 0.87)', margin: '0 auto', width: '90%', maxWidth: '800px'}}>
      <Heading>Welcome to Shear Madness Salon</Heading>
      <AboutText>
        <FirstCharacter>S</FirstCharacter>
        <ColorText>hear Madness Salon</ColorText> specializes in advanced hair
        cutting, coloring, & styling. We are experts in bridal services with
        many packages and make up applications for all formal events. We
        consistently deliver precision haircuts and expert color services to
        our clientele. Our staff bring their own skills and specialties, making
        our work creative, exciting and individually tailored to each client.
      </AboutText>
      </div>
    </AboutIntroSection>
  )
}
