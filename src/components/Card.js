import React from "react";
import styled from "styled-components";

const Card = ({ serviceName, serviceThumbnail }) => {
  // console.log("Card thumbnail: " + serviceThumbnail);

  return (
    <CardContainer>
      <h3>{serviceName}</h3>
      <div className="grad"></div>
      <img
        src={require(`../img/${serviceThumbnail}`).default}
        alt={serviceName}
      />
    </CardContainer>
  );
};

//CSS Vars
const transitionTime = "200ms ease";

const CardContainer = styled.div`
  position: relative;
  margin: 0.5rem;
  width: 14rem;
  height: 14rem;
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
`;

export default Card;
