import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: auto;
    max-width: 520px;
    overflow-x: hidden;
    min-height: 100%;

    background-color: #1F1F20;
    color: #FFF;

    @media (min-width: 520px) {
      border-right: 1px solid rgba(255, 255, 255, 0.16);
      border-left: 1px solid rgba(255, 255, 255, 0.16);
    }
  }
`;

export default GlobalStyle;
