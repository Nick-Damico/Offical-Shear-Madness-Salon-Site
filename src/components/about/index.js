import React from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import AboutIntro from './AboutIntro'
import ServiceCardContainer from './ServiceCardContainer'
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

const StylistContainer = styled.div`
  background-color: ${props => props.theme.primaryColor};

  @media (min-width: 699px) {
    background-color: transparent;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 80px auto;
  padding: 1%;
  text-align: center;

  @media (min-width: 699px) {
    text-align: left;
  }
`

const SectionTitle = styled.h3`
  color: blue;
  font-size: 2.2rem;
  color: ${props => props.theme.colorWhite};
`

const CardContainer = styled.div`
  justify-content: space-around;
  &:first-child {
    margin-bottom: 50px;
  }
  &:last-child {
    background-color: ${props => props.theme.primaryColor};
  }

  @media (min-width: 699px) {
    &:last-child {
      background-color: transparent;
    }
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
              bio
              skills
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
          <StylistContainer>
            <TitleContainer>
              <SectionTitle>Stylists</SectionTitle>
            </TitleContainer>
            <CardContainer className="row">
              {data.allStylistsJson.edges.map((edge,index) => (
                <StylistCard
                  key={index}
                  profilePic={StylistPic}
                  name={edge.node.name}
                  title={edge.node.title}
                  bio={edge.node.bio}
                  skills={edge.node.skills}
                />
              ))}
            </CardContainer>
          </StylistContainer>
        </AboutSection>
      </About>
    )}
  />
)
