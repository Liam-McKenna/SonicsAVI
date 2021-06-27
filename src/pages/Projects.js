import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>projects Page</h1>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  margin-left: 5rem;
  @media (max-width: 768px) {
    margin: 0rem 0rem 5rem 0rem;
  }
`;

export default Projects;
