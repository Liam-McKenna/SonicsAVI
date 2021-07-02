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
  /* align-self: center; */
  width: min(100%);
  aspect-ratio: 1/1;
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
  }

  img {
    width: 85%;
    height: 85%;
    object-fit: cover;
    /* object-position: center; */
    border-radius: 100%;
  }

  .textContainer {
    text-align: center;
    width: 100%;
  }
  h3 {
    font-size: 1rem;
  }
  p {
    font-size: 0.5rem;
  }

  @media (max-width: 1140px) {
    h3 {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 750px) {
    img {
      width: 85%;
      height: 85%;
    }
    h3 {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
`;

export default AboutCard;
