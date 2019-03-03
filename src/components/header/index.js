import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import { TweenMax } from 'gsap/TweenMax'
import bg from '../../images/shear_madness_header_v2.jpg'
import bgSmall from '../../images/shear_madness_header-small.jpg'
import logo from '../../images/logo.svg'

const Header = styled.header`
  display: flex;
  position: relative;
  background: ${props => props.theme.linearGradient};
  background: ${props => props.theme.transparentGradient}, url(${bgSmall});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 96vh;
  min-height: 400px;
  /* max-height: 690px; */
  text-align: center;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;

  @media (min-width: 430px) {
    padding-top: 80px;
  }

  @media (min-width: 600px) {
    background: ${props => props.theme.transparentGradient}, url(${bg}) center;
    background-size: cover;
  }
`

// Styled Components
const MainHeading = styled.h1`
  font-size: 0px;
  @media (min-width: 430px) {
    visibility: hidden;
    height: 0;
  }
`

const Logo = styled.img`
  width: 300px;
  @media (min-width: 429px) {
    width: 150px;
  }
`

const SubHeading = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: ${props => props.theme.colorWhite};
  padding-top: 2rem;
  margin-bottom: 0;
  text-shadow: ${props => props.theme.textShadow};

  @media (min-width: 899px) {
    font-size: 1.5rem;
  }
`

const Slogan = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colorWhite};
  text-shadow: ${props => props.theme.textShadow};
  letter-spacing: 1px;
  width: 100%;
  max-width: 450px;
  border-bottom: dashed 2px ${props => props.theme.colorWhite};

  @media (min-width: 500px) {
    font-size: 2.2rem;
  }
  @media (min-width: 699px) {
    font-size: 2.4rem;
    max-width: 500px;
  }
  @media (min-width: 899px) {
    font-size: 3rem;
    max-width: 600px;
  }
`

const ServiceList = styled.ul`
  background-color: rgba(245, 245, 245, 0.8);
  border-radius: 10px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
  max-width: 400px;
  padding: 5px;
  width: 100%;
`

const ServiceItem = styled.li`
  color: ${props => props.theme.primaryColor};
  font-size: 1.2rem;
  position: relative;

  &:nth-child(n + 2):before {
    content: '';
    border-radius: 50%;
    box-shadow: 0px 1px 2px black;
    position: absolute;
    left: -20px;
    top: 12px;
    display: block;
    width: 6px;
    height: 6px;
    background-color: ${props => props.theme.secondaryColor};
  }
`

const CtaContainer = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 2rem auto;
`

const CtaText = styled.p`
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.88);
  margin-bottom: 0.5rem;
`

const AptButton = styled.a`
  background-color: rgba(24, 224, 204, 0.5);
  border-radius: 8px;
  border: 2px solid rgb(175, 64, 205);
  color: white;
  letter-spacing: 1px;
  display: block;
  font-size: 1.4rem;
  font-family: 'SignPainter', sans-serif;
  padding: 8px 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.88);
  width: 100%;
  max-width: 175px;
`
const textContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

class MainHeader extends Component {
  constructor() {
    super()

    this.textContainer = null
    this.CTA = React.createRef()
  }

  componentDidMount() {
    TweenMax.fromTo(
      this.textContainer,
      1.3,
      { opacity: 0 },
      { opacity: 1, delay: 2 }
    )
    TweenMax.fromTo(
      this.CTA.current,
      1,
      { opacity: 0, bottom: -15 },
      { opacity: 1, bottom: 0, delay: 3.3 }
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                slogan
              }
            }
          }
        `}
        render={data => (
          <Header id="home" className="main-header">
            <MainHeading>
              {data.site.siteMetadata.title}
              <Logo src={logo} alt="Shear Madness Beauty Salon" />
            </MainHeading>
            <div style={textContainer} ref={div => (this.textContainer = div)}>
              <SubHeading>
                Sevier Counties best full service beauty salon.
              </SubHeading>
              <Slogan>{data.site.siteMetadata.slogan}</Slogan>
              <ServiceList>
                <ServiceItem>Hair</ServiceItem>
                <ServiceItem>Make-up</ServiceItem>
                <ServiceItem>Bridal</ServiceItem>
                <ServiceItem>Tanning</ServiceItem>
              </ServiceList>
            </div>
            <CtaContainer innerRef={this.CTA}>
              <CtaText>Make Appointment</CtaText>
              <AptButton>(865) 366-1357</AptButton>
            </CtaContainer>
          </Header>
        )}
      />
    )
  }
}

export default MainHeader
