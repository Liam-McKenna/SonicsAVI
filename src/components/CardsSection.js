import React from "react";
import styled from "styled-components";
//components
import Card from "./Card";

const CardsSection = () => {
  return (
    <CardsContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardsContainer>
  );
};

//CSS Vars
const secondaryColor = "#1d2034";

const CardsContainer = styled.div`
  width: 70rem;
  max-width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${secondaryColor};
  border-radius: 1rem;
`;

export default CardsSection;
