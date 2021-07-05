import { createGlobalStyle } from "styled-components";
import bg from "../img/bg.svg";
//CSS Variables
const primaryColor = "#0E0F1A";
// const secondaryColor = "#1d2034";
// const heavyBlue = "#00A3FF";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    background-color: ${primaryColor};
    background-image: url(${bg});

}


//Dynamic font sizes
h1{
    font-size: calc(1.8vh + 1.8vw);
    color: white;
}
 h2 , h3, span, p, input{
    color: white;
    font-size: calc(.5vh + .5vw);
  }

  @media (max-width: 750px) {
    h1{
    font-size: calc(2.5vh + 2.5vw);
    color: white;
}
 h2 , h3, span, p, input, textarea{
    color: white;
    font-size: calc(.8vh + .8vw);
  }
  }


`;

export default GlobalStyles;
