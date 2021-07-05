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
  height: 100vh;
  width: 100%;
  display: grid;
  grid-gap: calc(0.3vh + 0.3vw);
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 0.5fr auto 1fr auto 1fr;
  grid-template-areas:
    ". . ."
    ". top . "
    ". services . "
    ". partners ."
    ". . .";
  @media (max-width: 768px) {
    grid-template-columns: 0.1fr 4fr 0.1fr;
    grid-template-rows: 0.5fr auto 1fr auto 1fr;
    grid-gap: calc(1vh + 1vw);
    margin: 0rem 0rem 6rem 0rem;
  }
`;

export default Services;
