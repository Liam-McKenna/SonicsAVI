import React from "react";
import styled from "styled-components";

const SpacerBar = () => {
  return <BarContainer></BarContainer>;
};

const BarContainer = styled.div`
  margin: 0.3vh;
  min-height: 0.3rem;
  height: 0.3rem;
  width: 4rem;
  border-radius: 10rem;
  background-color: #00ffff;
`;

export default SpacerBar;
