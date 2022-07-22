import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    overflow: hidden;
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  }
  body{
    font-family: AppleGothicNeoB, AppleSDGothicNeoEB, AppleSDGothicNeoH, AppleSDGothicNeoH, AppleSDGothicNeoL, AppleSDGothicNeoM, Jalnan;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }
  a { cursor: pointer; text-decoration: none; }
  button {
    all: unset;
  }
  form {
    all: unset;
  }
  input {
    all: unset;
  }
  @font-face {
    font-family: "AppleSDGothicNeoB";
    font-weight: 200;
    src: url("/fonts/AppleSDGothicNeoB.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoEB";
    font-weight: 200;
    src: url("/fonts/AppleSDGothicNeoEB.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoH";
    font-weight: 200;
    src: url("/fonts/AppleSDGothicNeoH.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoL";
    font-weight: 200;
    src: url("/fonts/AppleSDGothicNeoL.ttf") format("truetype");
  }
  @font-face {
    font-family: "AppleSDGothicNeoM";
    font-weight: 200;
    src: url("/fonts/AppleSDGothicNeoM.ttf") format("truetype");
  }
  @font-face {
    font-family: "Jalnan";
    font-weight: 200;
    src: url("/fonts/Jalnan.ttf") format("truetype");
  }
`;

export default GlobalStyle;
