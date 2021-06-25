import React from "react";
import styled from "styled-components";

//components
import IntroSection from "../components/IntroSection";
import CardsSection from "../components/CardsSection";
import PartnersSection from "../components/PartnersSection";

const Services = () => {
  return (
    <ServiceContainer>
      <IntroSection />
      <CardsSection />
      <PartnersSection />
    </ServiceContainer>
  );
};

const ServiceContainer = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Services;
