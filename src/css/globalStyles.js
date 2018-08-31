import { injectGlobal } from "styled-components";
import styledNormalize from 'styled-normalize';
import fontFiles from "../fonts/fonts.js";

injectGlobal`
  ${styledNormalize}
  
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

`
