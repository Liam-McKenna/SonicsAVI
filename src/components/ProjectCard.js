import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

//components

const ProjectCard = ({ projectName, projectThumbnail, projectTags }) => {
  return (
    <ProjectCardContainer>
      <h3>{projectName}</h3>
      <div className="grad"></div>
      <img
        src={require(`../img/projects/${projectThumbnail}`).default}
        alt={projectName}
      />
      {projectTags.map((tag) => {
        return (
          <div className="tagContainer" key={uuidv4()}>
            <p className="tag">{tag}</p>
          </div>
        );
      })}
    </ProjectCardContainer>
  );
};

//CSS Vars
const transitionTime = "200ms ease";
const ProjectCardContainer = styled.div`
  position: relative;
  margin: 0.5rem;
  width: 22rem;

  height: 16rem;
  border-radius: 10px;
  overflow: hidden;
  transition: ${transitionTime};

  :hover {
    transform: scale(1.05);
    transition: ${transitionTime};
  }
  h3 {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    z-index: 1;
    max-width: 85%;
  }
  img {
    height: 100%;
  }
`;
export default ProjectCard;
