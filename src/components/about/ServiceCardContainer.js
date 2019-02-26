import React, { Component } from 'react'
import CardContainer from 'ServiceCards'

class ServiceCardContainer extends Component {
  constructor() {
    super()
    // IntersectionObserver target element, starts animation
    this.target = document.querySelector('#service-card')
    this.serviceCards = document.querySelectorAll('')

    this.setState = {
      tweenCollection: [],
    }
  }

  initializeObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }
    let observer = new IntersectionObserver(this.animateCards, options)
    observer.observe(this.target)
  }

  componentDidMount() {
    this.initializeObserver();

    let tweenCollection = this.stylistCards.map((card, i) => {
      TweenMax.fromTo(
        card,
        1.2,
        { bottom: -300, opacity: 0 },
        { bottom: 0, opacity: 1, delay: 0.5, ease: Power1.easeOut }
      ).pause()
    })

    this.setState({
      tweenCollection: [...this.tweenCollection, tweenCollection],
    })
  }

  animateCards(entries, self) {
    if (entries[0].intersectionRatio === 1) {
      this.tM1.play()
      this.tM2.play()
      self.unobserve(entries[0].target)
    }
  }
  
  render() {
    return(
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
    )
  }
}

export default ServiceCardContainer
