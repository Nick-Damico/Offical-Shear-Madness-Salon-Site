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
    font-family: 'SignPainter',sans-serif;
    box-sizing: border-box;
  }

  p {
    font-family: Raleway, sans-serif;
    font-weight: 400;
  }

`
