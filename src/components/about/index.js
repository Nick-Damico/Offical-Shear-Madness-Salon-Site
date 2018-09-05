import React from 'react';
import styled from 'styled-components';

import ServiceCard from './serviceCard';
import ImageHair from '../../images/servicePicHair.png';

const AboutSection = styled.section`
    padding: 150px 0;
    width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export default () => (
  <AboutSection>
    <CardContainer>
      <ServiceCard
        title="Hair"
        image={ImageHair}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
              auctor magna nec molestie.Sed blandit eros a
              massa iaculis iaculis. Mauris fringilla
              nisi sit amet orci lacinia."
      />
      <ServiceCard
        title="Make-Up"
        image={ImageHair}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
              auctor magna nec molestie.Sed blandit eros a
              massa iaculis iaculis. Mauris fringilla
              nisi sit amet orci lacinia."
      />
      <ServiceCard
        title="Bridal"
        image={ImageHair}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
              auctor magna nec molestie.Sed blandit eros a
              massa iaculis iaculis. Mauris fringilla
              nisi sit amet orci lacinia."
      />
    </CardContainer>
  </AboutSection>
);
