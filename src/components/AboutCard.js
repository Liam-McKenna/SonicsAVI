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
  height: 10rem;
  width: 10rem;
  max-height: 10rem;
  margin: 0.3rem;
  background-color: ${secondaryColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .cardContent {
    width: 100%;
    height: 100%;
    padding: 0rem 0.5rem 0rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      max-height: 70%;
      border-radius: 360px;
    }
    h3 {
      padding: 1px;
      font-size: 14px;
    }
    p {
      font-size: 8px;
    }
  }
  @media (max-width: 750px) {
    height: 10rem;
    width: 10rem;
    margin: 0.5rem;
    .cardContent {
      padding: 0.5rem 1rem 1rem 1rem;
      img {
        max-height: 70%;
        border-radius: 360px;
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
