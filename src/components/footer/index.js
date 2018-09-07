import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${props => props.theme.colorWhite};
`;

const Row = styled.div`
`;

const Col = styled.div`
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

const HeadingTitle = styled.h4`
  color: ${props => props.theme.primaryColor};
`;

const FooterText = styled.p`
  color: black;
`;


export default () => {
  return (
    <Footer>
      <Row class="row">
        <Col>
          <HeadingTitle>Shear Madness</HeadingTitle>
          <FooterText>
            We are Sevier Counties best full service beauty salon. We offer
            styles and cuts for everyone both men and women. Coloring, make-up,
            bridal, beards, and more.
          </FooterText>
        </Col>
        <Col>
          <HeadingTitle>Contact</HeadingTitle>
          <FooterText>
            
          </FooterText>
        </Col>
        <Col>
          <HeadingTitle>Follow Us</HeadingTitle>
        </Col>
      </Row>
    </Footer>
  );
};
