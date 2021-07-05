import React from "react";
import styled from "styled-components";
//components
import IntroSection from "../components/IntroSection";
import ProjectCardsSection from "../components/ProjectCardsSection";

const Projects = () => {
  const introTitle = "Projects";
  const introText = " This is guide text for the projects seen below";
  return (
    <ProjectsContainer>
      <IntroSection introTitle={introTitle} introText={introText} />
      <ProjectCardsSection />
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-gap: calc(0.3vh + 0.3vw);
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 0.5fr auto auto 1fr;
  grid-template-areas:
    ". . ."
    ". top . "
    ". projects . "
    ". . .";

  .IntroSection {
    grid-area: top;
  }
  .ProjectCardsSection {
    grid-area: projects;
  }

  @media (max-width: 768px) {
    grid-template-columns: 0.1fr 10fr 0.1fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr;
    grid-gap: calc(1vh + 1vw);
    margin: 0rem 0rem 6rem 0rem;
  }
`;

export default Projects;
