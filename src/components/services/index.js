import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: ${props => props.theme.secondaryColor};
  min-height: 350px;
  padding-top: 40px;
`;

const SectionHeading = styled.h2`
  color: ${props => props.theme.colorWhite};
  font-size: 3rem;
  text-align: center;
`;

const Row = styled.div`
  flex-direction: row;
`;

const Col = styled.div`
  color: ${props => props.theme.colorWhite};
  flex: 0 0 92%;
  margin: 0 4% 20px 4%;

  @media (min-width: 499px) {
    margin-left: 4%;
    margin-right: 0;
    flex: 0 0 44%;
  }

  @media (min-width: 749px) {
    flex: 0 0 28%;
  }
`;

const ColHeading = styled.h3`
  color: ${props => props.theme.colorWhite};
  font-size: 2rem;
  text-align: center;
  border-bottom: 2px solid ${props => props.theme.colorWhite};
`;

const ServiceList = styled.ul`
  color: ${props => props.theme.colorWhite};
  list-style: none;
  text-align: center;
`;

const ServiceItem = styled.li`

`;

export default () => {
  return (
    <Section>
      <SectionHeading>Shear Madness Services</SectionHeading>
      <Row className="row">
        <Col>
          <ColHeading>Cuts / Styles</ColHeading>
          <ServiceList>
            <ServiceItem>Item1</ServiceItem>
            <ServiceItem>Item2</ServiceItem>
            <ServiceItem>Item3</ServiceItem>
          </ServiceList>
        </Col>
        <Col>
          <ColHeading>Coloring</ColHeading>
          <ServiceList>
            <ServiceItem>Item1</ServiceItem>
            <ServiceItem>Item2</ServiceItem>
            <ServiceItem>Item3</ServiceItem>
          </ServiceList>
        </Col>
        <Col>
          <ColHeading>Bridal</ColHeading>
          <ServiceList>
            <ServiceItem>Item1</ServiceItem>
            <ServiceItem>Item2</ServiceItem>
            <ServiceItem>Item3</ServiceItem>
          </ServiceList>
        </Col>
      </Row>
    </Section>
  )
}
