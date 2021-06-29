import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

//components

const ProjectCard = ({ projectName, projectThumbnail, projectTags }) => {
  return (
    <ProjectCardContainer>
      <h2>{projectName}</h2>
      <div className="tagContainer" key={uuidv4()}>
        {projectTags.map((tag) => {
          return (
            <p key={uuidv4()} className="tag" style={{ color: tag.color }}>
              {tag.name}
            </p>
          );
        })}
      </div>

      <img
        src={require(`../img/${projectThumbnail}`).default}
        alt={projectName}
      />
    </ProjectCardContainer>
  );
};

//CSS Vars
const transitionTime = "200ms ease";
const secondaryColor = "#1d2034";

const projectorColor = "#FF6388";
const speakerColor = "#00FFFF";
const touchscreenColor = "#60FFC6";
const mnoitorsColor = "#E374FF";
const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0.5rem;
  width: 22rem;
  text-decoration: none;
  height: 20rem;
  border-radius: 10px;
  overflow: hidden;
  transition: ${transitionTime};
  background-color: ${secondaryColor};

  :hover {
    transform: scale(1.05);
    transition: ${transitionTime};
  }
  h2 {
    margin: 0.5rem 0rem 0rem 0rem;
    text-align: center;
    bottom: 1rem;
    left: 1rem;
    z-index: 1;
    width: 100%;
    text-decoration: none;
  }
  .tagContainer {
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 80%;
    margin: 0.5rem;
    p {
      font-size: 11px;
      font-weight: bold;
      margin: 0.2rem;
      padding: 0.2rem 0.3rem 0.2rem 0.3rem;
      color: white;
      border-style: solid;
      border-width: 2px;
      border-radius: 20rem;
    }
  }
  img {
    height: 100%;
    width: 120%;
  }

  @media (max-width: 768px) {
    width: 18rem;
  }
`;
export default ProjectCard;
