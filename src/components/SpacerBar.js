import React from "react";
import styled from "styled-components";

const SpacerBar = () => {
  return <BarContainer></BarContainer>;
};

const BarContainer = styled.div`
  margin: 1rem;
  height: 0.5rem;
  width: 6rem;
  border-radius: 10rem;
  background-color: #00ffff;
`;

export default SpacerBar;
