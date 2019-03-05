import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import fontFiles from '../fonts/fonts.js'
import bg from '../images/pink-dust.png'
import arrow from '../images/arrow.svg'

export const theme = {
  fontSignPainter: 'SignPainter',
  primaryColor: '#61B5C1',
  secondaryColor: '#C062DA',
  linearGradient: 'linear-gradient(135deg, #c062da 0%,#61b5c1 100%)',
  transparentGradient:
    'linear-gradient(135deg, rgba(55, 241, 182, 0.2) 20%,rgba(162,0,255,0.3) 60%)',
  darkerGradient:
    'linear-gradient(135deg, rgba(55, 241, 182, 0.60) 20%,rgba(162,0,255,0.6) 60%)',
  colorBlack: '#333',
  colorWhite: '#fff',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.88)',
}

injectGlobal`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,700');
  @font-face {
   font-family: "SignPainter";
   font-style: normal;
   font-weight: normal;
   src: local("Sign Painter"), local("Sign-Painter"), url(${
     fontFiles.SignPainterTTF
   }) format("ttf");
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  body {
    position: relative;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
    font-family: Raleway, sans-serif;
    // background: url(${bg}) repeat;
    background: ${theme.colorWhite};
  }

  p {
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'SignPainter', sans-serif;
    font-weight: lighter;

    margin-top: 0;
    margin-bottom: 1rem;
  }

  .center-text {
    text-align: center;
  }

  // Grid Styles
  .row {
    display: flex;
    flex-flow: row wrap;
    flex: 0 1 auto;
  }

  [class*="div-"] {
    height: 50px;
    width: 50px;
  }

  // Slick-Carousel Styles
  .slick-slide {
    margin: 0 5px;
    display: flex;
    justify-content: stretch;
  }

  .slick-prev:before,
  .slick-next:before {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: 15px;
    content: "" !important;

  }

  .slick-prev:before {
    transform: rotate(180deg);
  }

  // Slick Carousel Review Cards
  .color-even {
    background-color: #C062DA !important;
  }

  .color-odd {
    background-color: #61B5C1 !important;
  }

  .color-even q {
    color: white;
  }

`
