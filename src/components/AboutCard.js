import React from "react";
import styled from "styled-components";

const AboutCard = ({ color, img, name, text }) => {
  const border = {
    border: `2.0px solid ${color}`,
  };
  return (
    <AboutCardContainer>
      <div className="cardContent">
        <img style={border} src={img} alt="" className="profile" />
        <div className="textContainer">
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
      </div>
    </AboutCardContainer>
  );
};

const secondaryColor = "#1d2034";
const AboutCardContainer = styled.div`
  align-self: center;
  width: min(100%);
  height: min(100%);

  background-color: ${secondaryColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .cardContent {
    width: 100%;
    max-width: 100%;
    height: 90%;
    padding: 0rem 0.3rem 0rem 0.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* object-position: center; */
      border-radius: 100%;
    }

    .textContainer {
      text-align: center;
      width: 100%;
      h3 {
        font-size: 1vw;
      }
      p {
        font-size: 0.5vw;
      }
    }
  }
  @media (max-width: 750px) {
    .cardContent {
      padding: 0.5rem 1rem 1rem 1rem;
      img {
        /* max-height: 70%; */
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
