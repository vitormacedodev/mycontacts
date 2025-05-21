import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f2f2f2;
    padding: 20px;
    display: flex;
    justify-content: center;
  }

  #root {
    max-width: 500px;
    width: 100%;
  }
`;
