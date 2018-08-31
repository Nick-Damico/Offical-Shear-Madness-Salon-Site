import { injectGlobal } from "styled-components";
import styledNormalize from 'styled-normalize';
import fontFiles from "../fonts/fonts.js";

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
  }

  body {
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
    margin-top: 0;
    margin-bottom: 1rem;
  }

`
