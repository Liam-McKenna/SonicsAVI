import React from "react";
import styled from "styled-components";
import SpacerBar from "./SpacerBar";

const PartnersSection = () => {
  return (
    <PartnersContainer>
      <h2>Our Partners</h2>
      <SpacerBar />
      <div className="partnerLogos"></div>
    </PartnersContainer>
  );
};

const PartnersContainer = styled.div`
  h2 {
    width: 100%;
    text-align: center;
  }
`;

export default PartnersSection;
