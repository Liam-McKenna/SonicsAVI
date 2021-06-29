import React from "react";
import styled from "styled-components";

//components
import IntroSection from "../components/IntroSection";
import ServiceCardsSection from "../components/ServiceCardsSection";
import PartnersSection from "../components/PartnersSection";

const Services = () => {
  const introTitle = "Audio Visual Installations & Services.";
  const introText =
    " This is an introduction into the services offered by Sonics AVI which inludes this and that. Make extraordinary technology decisions with veteran experience. something else about Sonics services";
  return (
    <ServiceContainer>
      <IntroSection introTitle={introTitle} introText={introText} />
      <ServiceCardsSection />
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
  @media (max-width: 768px) {
    margin: 0rem 0rem 6rem 0rem;
  }
`;

export default Services;
