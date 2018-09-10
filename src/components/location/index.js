import React from 'react';
import styled from 'styled-components';
import Info from './info';

import InteriorPic from '../../images/salon-interior.jpg';

const LocationContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 499px) {
    height: 500px;
    flex-direction: row;
  }
`;

const PhotoBlock = styled.div`
  display: none;

  @media (min-width: 499px) {
    display: block;
    width: 50%;
    background-color: ${props => props.theme.secondaryColor};
    background: ${props => props.theme.transparentGradient}, url(${InteriorPic}) no-repeat center;
    background-size: cover;
  }
`;

export default () => {
  return (
    <LocationContainer>
      <Info />
      <PhotoBlock />
    </LocationContainer>
  );
};
