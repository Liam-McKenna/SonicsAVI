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
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0rem 0rem 5rem 0rem;
  }
`;

export default Projects;
