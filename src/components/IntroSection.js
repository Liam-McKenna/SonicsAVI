import React from "react";
import styled from "styled-components";

const IntroSection = ({ introTitle, introText }) => {
  return (
    <IntroContainer>
      <div className="introSection">
        <h2>{introTitle}</h2>
        <div className="separatorBar"></div>
        <p>{introText}</p>
      </div>
    </IntroContainer>
  );
};

//CSS Varibles
const secondaryColor = "#1d2034";
const BrightBlue = "#00FFFF";

const IntroContainer = styled.div`
  grid-area: top;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${secondaryColor}50;
  border-radius: 1rem;
  position: relative;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);

  /* content: ""; */

  .introSection {
    width: 100%;
    padding: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .separatorBar {
      margin: 1rem;
      width: 2.5rem;
      height: 0.25rem;
      background-color: ${BrightBlue};
      border-radius: 10rem;
    }
  }
`;

export default IntroSection;
