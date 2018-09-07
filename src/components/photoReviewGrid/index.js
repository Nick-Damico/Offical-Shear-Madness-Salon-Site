import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.section`
  display: grid;
  background-color: ${props => props.theme.colorWhite};
  grid-column-gap: 20px;
  grid-row-gap: 24px;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 3fr 3fr 2fr 4fr;
  min-height: 580px;
  padding: 10px 0;

  .div-1 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 3;
    width: 100%;
    height: 100%;
  }

  .div-2 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 6;
    width: 100%;
    height: 100%;
  }

  .div-3 {
    grid-column: 3 / span 1;
    grid-row: 1 / span 2;
    width: 100%;
    height: 100%;
  }

  .div-4 {
    grid-column: 4 / span 1;
    grid-row: 1 / span 3;
    width: 100%;
    height: 100%;
  }

  .div-5 {
    grid-column: 3 / span 1;
    grid-row: 3 / span 2;
    background-color: crimson;
    width: 100%;
    height: 100%;
  }

  .div-6 {
    grid-column: 1 / span 1;
    grid-row: 4 / span 3;
    width: 100%;
    height: 100%;
  }

  .div-7 {
    grid-column: 3 / span 1;
    grid-row: 5 / span 2;
    width: 100%;
    height: 100%;
  }

  .div-8 {
    grid-column: 4 / span 1;
    grid-row: 4 / span 3;
    width: 100%;
    height: 100%;
  }

`;

// Grid is a 4 row / 4 column Grid
export default () => {
  return (
    <GridContainer>
      <div className="div-1"></div>
      <div className="div-2"></div>
      <div className="div-3"></div>
      <div className="div-4"></div>
      <div className="div-5"></div>
      <div className="div-6"></div>
      <div className="div-7"></div>
      <div className="div-8"></div>
    </GridContainer>
  );
};
