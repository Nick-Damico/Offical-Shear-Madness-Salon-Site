import React, { Component } from 'react'
import { TweenMax, Power1 } from 'gsap/TweenMax'
import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import HairCircle from '../../images/hair-circle.png'
import MakeupCircle from '../../images/makeup-circle.png'
import BridalCircle from '../../images/bridal-circle.png'

const CardContainer = styled.div`
  display: flex;
  flew-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  &:last-child {
    background-color: ${props => props.theme.primaryColor};
  }

  @media (min-width: 699px) {
    &:last-child {
      background-color: transparent;
    }
  }

  @media (min-width: 799px) {
    &:first-child {
      margin-bottom: 50px;
    }
  }
`

class ServiceCardContainer extends Component {
  constructor() {
    super()
    // Target trigger element for animating .service-card's
    this.target = null
    this.tweenCollection = []
    this.animateCards = this.animateCards.bind(this)
  }

  initializeObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    this.target = document.querySelector('#service-card__container')
    let observer = new IntersectionObserver(this.animateCards, options)

    observer.observe(this.target)
  }

  componentDidMount() {
    let nodesArray = [].slice.call(document.querySelectorAll('.service-card'))
    this.initializeObserver()

    nodesArray.forEach((card, i) => {
      this.tweenCollection = TweenMax.staggerFromTo(
        nodesArray,
        1,
        { bottom: -50, opacity: 0 },
        {
          bottom: 0,
          opacity: 1,
          ease: Power1.easeOut,
          paused: true,
        },
        0.5
      )
    })
  }

  animateCards(entries, self) {
    let tweenCollection = this.tweenCollection

    if (entries[0].intersectionRatio > 0.5) {
      tweenCollection.forEach(tween => tween.play())
      self.unobserve(this.target)
    }
  }

  render() {
    return (
      <CardContainer id="service-card__container">
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
    )
  }
}

export default ServiceCardContainer
