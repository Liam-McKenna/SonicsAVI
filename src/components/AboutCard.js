import React from "react";
import styled from "styled-components";

const AboutCard = ({ color, img, name, text }) => {
  const border = {
    border: `1.5px solid ${color}`,
  };
  return (
    <AboutCardContainer style={border}>
      <div className="cardContent">
        <img src={img} alt="" className="profile" />
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </AboutCardContainer>
  );
};

const secondaryColor = "#1d2034";
const AboutCardContainer = styled.div`
  margin: 1rem;
  width: 12rem;
  height: 12rem;
  background-color: ${secondaryColor};
  border-radius: 20px;
  border-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cardContent {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      border-radius: 360px;
    }
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 10px;
    }
  }
  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
    margin: 0.5rem;
    .cardContent {
      padding: 1rem 1rem 1rem 1rem;
      img {
        width: 95%;
      }
      h3 {
        font-size: 12px;
      }
      p {
        font-size: 8px;
      }
    }
  }
`;

export default AboutCard;
