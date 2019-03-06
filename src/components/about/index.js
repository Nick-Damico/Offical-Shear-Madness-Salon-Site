import React from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import AboutIntro from './AboutIntro'
import ServiceCardContainer from './ServiceCardContainer'
import StylistCardContainer from './StylistCardContainer'
import StylistCard from './stylistCard'
import StylistPic from '../../images/stylist.png'
import HairdryerSvg from '../../images/hairdryer-graphic.svg'

const About = styled.div`
  background-color: white;
`

const AboutSection = styled.section`
  padding: 150px 0 0 0;
  margin-bottom: -50px;

  @media (min-width: 699px) {
    background-color: white;
    background: url(${HairdryerSvg}) no-repeat;
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
