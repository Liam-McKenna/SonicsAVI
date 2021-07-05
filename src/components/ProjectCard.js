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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  transition: ${transitionTime};
  background-color: ${secondaryColor}50;
  backdrop-filter: blur(1px);

  :hover {
    transform: scale(1.02);
    transition: ${transitionTime};
  }
  h2 {
    margin: 0.5rem 0rem 0rem 0rem;
    text-align: center;
    z-index: 1;
    width: 100%;
    text-decoration: none;
  }
  .tagContainer {
    display: flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    width: 100%;
    margin: calc(0.3vh + 0.3vw);
    p {
      font-size: calc(0.3vh + 0.3vw);
      width: 100%;
      font-weight: bold;
      margin: 0.2rem;
      padding: calc(0.1vh + 0.1vw);
      color: white;
      border-style: solid;
      border-width: calc(0.05vh + 0.05vw);
      border-radius: 20rem;
      transition: ${transitionTime};
      &:hover {
        transform: scale(1.1);
        transition: ${transitionTime};
      }
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
  }
`;
export default ProjectCard;
