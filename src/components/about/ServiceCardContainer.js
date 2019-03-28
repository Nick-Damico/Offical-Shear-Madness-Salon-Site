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
          text="We offer a great variety of hair services, from a simple shampoo
          & style to advanced hair cutting. We're very well versed in all color
          techniques as well... We can cover those pesky grays or give you that perfect balayagé you've
          been wanting. We pride ourselves in staying current, so come let us give you the
          hair you'll love to wear."
        />
        <ServiceCard
          title="Make-Up"
          image={MakeupCircle}
          text="Natural Face, or Full Glam? Either way, we've got you covered, literaly.
          We do regular makeup set to last All day. We also offer airbrush makeup applications. Airbrush
          is great for more coverage or troubled skin. Regardless of the application you choose, you'll
          be ready for any event."
        />
        <ServiceCard
          title="Bridal"
          image={BridalCircle}
          text="Come let us doll you up on your big day! We know this day can be stressful on a bride,
          and we're here to help ease the 'Get Ready' process. We'll take the classic, the vintage,
          the belle, and even the boujéé. We want you to feel beautiful on your special day. Call to book
          your hair and makeup appointment with us today!"
        />
      </CardContainer>
    )
  }
}

export default ServiceCardContainer
