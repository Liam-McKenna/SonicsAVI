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
      <div className="extra"></div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  align-content: start;
  /* justify-content: center; */
  /* justify-items: center; */
  grid-gap: calc(0.3vh + 0.3vw);
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows:
    minmax(0, 1fr)
    auto
    auto
    minmax(0, 1fr);
  grid-template-areas:
    ". . . "
    ". top . "
    ". projects . "
    ". . . ";

  @media (max-width: 768px) {
    grid-template-columns: 0.1fr 10fr 0.1fr;
    grid-template-rows: 100px auto;
    grid-gap: calc(1vh + 1vw);
    margin: 0rem 0rem auto 0rem;
    grid-template-areas:
    /* ". . ." */
      ". top . "
      ". projects . ";
    /* ". . ."; */
  }
`;

export default Projects;
