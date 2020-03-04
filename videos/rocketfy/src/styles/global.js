import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 14px sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  button{
    cursor: pointer;
    border: 0;
  }
`;