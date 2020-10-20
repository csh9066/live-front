import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font: inherit;
  }
  body {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    background-color: #F8F9FA;
  }
  
  button {
    border: 0;
    outline: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
