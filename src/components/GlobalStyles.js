import { createGlobalStyle } from "styled-components";

//CSS Variables
const primaryColor = "#0E0F1A";
const secondaryColor = "#1d2034";
const heavyBlue = "#00A3FF";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    background: ${primaryColor};
}

h1, h3 {
    color: white;
  }


`;

export default GlobalStyles;
