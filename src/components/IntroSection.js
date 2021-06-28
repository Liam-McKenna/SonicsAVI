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
  width: 70rem;
  max-width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${secondaryColor};
  border-radius: 1rem;
  /* margin-left: 5rem; */

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

    p {
      max-width: 50rem;
    }
  }
`;

export default IntroSection;
