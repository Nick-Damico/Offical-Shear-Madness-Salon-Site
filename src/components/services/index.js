import React from 'react'
import styled from 'styled-components'
import ServiceList from './ServiceList'
import servicesBanner from '../../images/services-banner.svg'
import barnwoodTexture from '../../images/barnwood-texture.jpg'
import bgColor from '../../images/pink-dust.png'

const SERVICES = [
  {
    name: 'Cuts / Styles',
    services: [
      { type: 'Short Clipper Cuts', price: '18' },
      { type: 'Advanced Scissor Cuts', price: '27' },
      { type: 'Kids Haircuts', price: '13.50' },
      { type: 'The Moonshine Man', price: '25' },
    ],
    extra: { type: 'Add a Shampoo & Style', price: '8' },
  },
  {
    name: 'Coloring / Highlights',
    services: [
      { type: 'All Over Color', price: '85' },
      { type: 'Partial Highlight', price: '80', extra: true },
      { type: 'Full Highlight', price: '120', extra: true },
      { type: 'Root Retouch', price: '80' },
      { type: 'Balayage & Ombre', price: '135 - 150' },
    ],
    extra: { type: 'Add a base Color', price: '12' },
  },
  {
    name: 'Bridal Services',
    services: [
      { type: 'Updo & Classic Makeup', price: '125' },
      { type: 'Updo & Airbrush Makeup', price: '150' },
      { type: 'Flower Girl Updo', price: '50' },
    ],
  },
  {
    name: 'Waxing / Hair Removal',
    services: [
      { type: 'Brows on Fleek', price: '12' },
      { type: 'Sayonara Stache', price: '7' },
      { type: 'Chinny Chin Chin', price: '10/12' },
      { type: "ByeBye, Burnin' Love Burns", price: '8' },
      { type: 'The Whole Enchilada', price: '34' },
    ],
  },
]

const Container = styled.div`
  background: url(${barnwoodTexture});
`

const Section = styled.section`
  font-weight: 100;
  background: url(${bgColor});
  box-shadow: 0 6px 12px 8px rgba(32, 51, 50, 0.8);
  border: 4px solid white;
  padding: 30px 0;
  margin: 30px 20px;
  text-align: center;

  @media (min-width: 695px) {
    margin: 50px 40px;
  }
`

const SectionHeading = styled.img`
  width: 300px;
  margin-bottom: 20px;
  @media (min-width: 400px) {
    width: 300px;
  }
`

const Row = styled.div`
  flex-direction: row;
`

const Col = styled.div`
  color: ${props => props.theme.colorWhite};
  flex: 0 0 92%;
  margin: 0 4% 20px 4%;

  @media (min-width: 647px) {
    margin-left: 4%;
    margin-right: 0;
    flex: 0 0 44%;
  }

  /* @media (min-width: 749px) {
    flex: 0 0 28%;
  } */
`

export default () => {
  let serviceLists = SERVICES.map((service, index) => (
    <Col key={`service-${index}`}>
      <ServiceList service={service} />
    </Col>
  ))

  return (
    <Container>
      <Section id="services">
        <SectionHeading src={servicesBanner} alt="Shear Madness Services" />
        <Row className="row">{serviceLists}</Row>
      </Section>
    </Container>
  )
}
