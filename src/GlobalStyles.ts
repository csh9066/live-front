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
    font-family: 'Noto Sans KR', sans-serif;
    /* background-color: #F8F9FA;     */
  }
  
  button {
    border: 0;
    outline: 0;
    background-color: inherit;
  }
  a, a:hover {
    text-decoration: none;
    color: inherit;
  }
  
  strong {
    font-weight: bold;
  }
  
  em {
    font-style: italic;
  }
  
`;

export default GlobalStyles;
