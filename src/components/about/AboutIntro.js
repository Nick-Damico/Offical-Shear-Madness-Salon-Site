import React, { Component } from 'react'
import styled from 'styled-components'
import { TweenMax, Power1 } from 'gsap/TweenMax'
import bg from '../../images/about-intro-bgv.png'

const AboutIntroSection = styled.section`
  overflow-y: hidden;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  margin: 0 0 -4px 0;
  padding: 40px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 600px) {
  }
`

const AboutText = styled.p`
  max-width: 750px;
  font-size: 0.875rem;
  line-height: 1.5;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 40px;
  @media (min-width: 900px) {
    font-size: 1rem;
    line-height: 1.5;
  }
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
  font-size: 1.7rem;

  @media (min-width: 380px) {
    font-size: 2rem;
  }
`

class AboutIntro extends Component {
  constructor() {
    super()

    this.text = React.createRef()
    this.textCard = React.createRef()
    this.tM1 = null
    this.tM2 = null
    this.animateText = this.animateText.bind(this)
  }

  animateText(entries, self) {
    if (entries[0].intersectionRatio === 1) {
      this.tM1.play()
      this.tM2.play()
      self.unobserve(entries[0].target)
    }
  }

  componentDidMount() {
    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype
    ) {
      // load polyfill now
      let options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }

      this.tM1 = TweenMax.fromTo(
        this.textCard.current,
        1.2,
        { bottom: -300 },
        { bottom: 0, delay: 0.5, ease: Power1.easeOut }
      ).pause()
      this.tM2 = TweenMax.fromTo(
        this.text.current,
        1.3,
        { opacity: 0 },
        { opacity: 1, delay: 1.6 }
      ).pause()

      let observer = new IntersectionObserver(this.animateText, options)
      let target = document.querySelector('#about-intro')
      observer.observe(target)
    }
  }

  render() {
    return (
      <AboutIntroSection id="about-intro">
        <div
          ref={this.textCard}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.87)',
            margin: '0 auto',
            width: '90%',
            maxWidth: '800px',
            position: 'relative',
          }}
        >
          <Heading>Welcome to Shear Madness Salon</Heading>
          <AboutText innerRef={this.text}>
            <FirstCharacter>S</FirstCharacter>
            <ColorText>hear Madness Salon</ColorText> specializes in advanced
            hair cutting, coloring, makeup application, formal & bridal
            services. Our staff bring their own skills and specialties, we stay
            up with current trends, so we can keep you current and looking your
            best. Serving Gatlinburg, Pigeon Forge, Sevierville and all of
            Sevier County. Come here where a great hair cut is priceless.
          </AboutText>
        </div>
      </AboutIntroSection>
    )
  }
}

export default AboutIntro
