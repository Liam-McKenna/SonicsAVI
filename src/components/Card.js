import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <CardContainer>
      <h1>Card</h1>
    </CardContainer>
  );
};

//CSS Vars
const secondaryColor = "#1d2034";

const CardContainer = styled.div`
  margin: 0.5rem;
  width: 14rem;
  height: 14rem;
  background-color: red;
`;

export default Card;
