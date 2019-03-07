import React from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import AboutIntro from './AboutIntro'
import ServiceCardContainer from './ServiceCardContainer'
import StylistCardContainer from './StylistCardContainer'
import HairdryerSVG from '../../images/hairdryer-graphic.svg'
import HairdryerSVGSmall from '../../images/hairdryer-graphic-small.svg'

const About = styled.div`
  background-color: white;
`

const AboutSection = styled.section`
  padding: 150px 0 0 0;
  margin-bottom: -50px;
  background-color: white;
  background: url(${HairdryerSVGSmall}) no-repeat;
  background-size: cover;
  background-position-x: 40%;
  background-position-y: 15px;

  @media (min-width: 599px ) {
    background-position-x: 60%;
  }

  @media (min-width: 799px) {
    background-color: white;
    background: url(${HairdryerSVG}) no-repeat;
    background-size: cover;
    background-position-x: 18px;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allStylistsJson {
          edges {
            node {
              name
              title
            }
          }
        }
      }
    `}
    render={data => (
      <About id="about">
        <AboutIntro />
        <AboutSection>
        <ServiceCardContainer />
        <StylistCardContainer data={data} />
        </AboutSection>
      </About>
    )}
  />
)
