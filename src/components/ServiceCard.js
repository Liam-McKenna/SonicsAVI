import React from "react";
import styled from "styled-components";
// import thumbnail_1 from "../img/thumbnail_1.png";

const ServiceCard = ({ name, thumbnail }) => {
  // console.log("Card thumbnail: " + serviceThumbnail);

  return (
    <CardContainer>
      <h3>{name}</h3>
      <div className="grad"></div>
      <img src={require(`../img/${thumbnail}`).default} alt={name} />
    </CardContainer>
  );
};

//CSS Vars
const transitionTime = "200ms ease";

const CardContainer = styled.div`
  position: relative;
  margin: 0.5rem;
  width: 16rem;
  height: 16rem;
  border-radius: 10px;
  overflow: hidden;
  transition: ${transitionTime};

  :hover {
    transform: scale(1.08);
    transition: ${transitionTime};
  }

  h3 {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 1;
    max-width: 85%;
  }
  .grad {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(21, 23, 39, 0) 57.73%,
      #151727 96.08%
    );
  }

  img {
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 9rem;
    height: 9rem;
    h3 {
      font-size: 0.7rem;
      bottom: 0.5rem;
      left: 0.5rem;
    }
  }
`;

export default ServiceCard;
