import { injectGlobal } from "styled-components";
import styledNormalize from 'styled-normalize';
import fontFiles from "../fonts/fonts.js";

export const theme = {
  fontSignPainter: 'SignPainter',
  primaryColor:    '#61B5C1',
  secondaryColor:  '#C062DA',
  linearGradient:  'linear-gradient(135deg, #c062da 0%,#61b5c1 100%)',
  transparentGradient: 'linear-gradient(135deg, rgba(55, 241, 182, 0.40) 20%,rgba(162,0,255,0.42) 60%)',
  colorBlack:      '#333',
  colorWhite:      '#fff',
  textShadow:      '1px 1px 2px rgba(0, 0, 0, 0.88)',
};

injectGlobal`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');
  @font-face {
   font-family: "SignPainter";
   font-style: normal;
   font-weight: normal;
   src: local("Sign Painter"), local("Sign-Painter"), url(${fontFiles.SignPainterTTF}) format("ttf");
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

`
