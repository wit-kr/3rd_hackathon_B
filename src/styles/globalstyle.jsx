import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  }
  body{
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }
  a { cursor: pointer; text-decoration: none; }
  button {
    all: unset;
  }
`;

export default GlobalStyle;
