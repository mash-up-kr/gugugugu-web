import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    max-width: 520px;
    overflow-x: hidden;
    min-height: 100%;

    background-color: #1F1F20;
    color: #FFF;
  }
`;

export default GlobalStyle;
