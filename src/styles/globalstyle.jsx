import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  }
  a { cursor: pointer; text-decoration: none; }
`;

export default GlobalStyle;
