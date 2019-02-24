import React from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import AboutIntro from './AboutIntro'
import ServiceCard from './ServiceCard'
import StylistCard from './stylistCard'
import HairCircle from '../../images/hair-circle.png'
import MakeupCircle from '../../images/makeup-circle.png'
import BridalCircle from '../../images/bridal-circle.png'
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
          <CardContainer className="row">
            <ServiceCard
              title="Hair"
              image={HairCircle}
              text="We are Sevier Counties best full service beauty salon. We offer styles and cuts for everyone. Coloring, make-up, bridal, beards, and more."
            />
            <ServiceCard
              title="Make-Up"
              image={MakeupCircle}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
    auctor magna nec molestie.Sed blandit eros a
    massa iaculis iaculis. Mauris fringilla
    nisi sit amet orci lacinia."
            />
            <ServiceCard
              title="Bridal"
              image={BridalCircle}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
    auctor magna nec molestie.Sed blandit eros a
    massa iaculis iaculis. Mauris fringilla
    nisi sit amet orci lacinia."
            />
          </CardContainer>

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
