import React from "react";
import styled from "styled-components";

//components
import IntroSection from "../components/IntroSection";
import CardsSection from "../components/CardsSection";

const Services = () => {
  return (
    <ServiceContainer>
      <IntroSection />
      <CardsSection />
      {/* Partners Section */}
    </ServiceContainer>
  );
};

const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Services;
