import React from "react";
import styled from "styled-components";

const AboutCard = ({ color, img, name, text }) => {
  const border = {
    border: `3.0px solid ${color}`,
  };
  return (
    <AboutCardContainer>
      <div className="cardContent">
        <img style={border} src={img} alt="" className="profile" />
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </AboutCardContainer>
  );
};

const secondaryColor = "#1d2034";
const AboutCardContainer = styled.div`
  margin: 0.5rem;
  width: 15%;
  height: 20vh;
  max-width: 200px;
  max-height: 220px;

  background-color: ${secondaryColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cardContent {
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 95%;
      max-width: 20vh;
      border-radius: 360px;
    }
    h3 {
      padding: 2px;
      font-size: 14px;
    }
    p {
      font-size: 10px;
    }
  }
  @media (max-width: 750px) {
    width: 40%;
    height: 40%;
    margin: 0.5rem;
    .cardContent {
      padding: 0.5rem 1rem 1rem 1rem;
      img {
        width: 95%;
        max-width: 95%;
      }
      h3 {
        font-size: 10px;
        text-align: center;
      }
      p {
        font-size: 8px;
        text-align: center;
      }
    }
  }
`;

export default AboutCard;
