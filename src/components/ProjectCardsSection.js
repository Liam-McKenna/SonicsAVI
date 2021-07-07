import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
//components
import ProjectCard from "./ProjectCard";
import ProjectsData from "../api/axios-projects.js";

const ProjectCardsSection = () => {
  //state data for all Projects
  const [projects, setProjects] = useState([]);
  //get all data from DB Axois
  useEffect(() => {
    retrieveProjects();
    console.log("Response: ");
  }, []);

  const retrieveProjects = () => {
    ProjectsData.getAll()
      .then((response) => {
        setProjects(response.data.projects);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <ProjectCardsContainer>
      {projects.map((project) => {
        return (
          <Link
            key={uuidv4()}
            to={"/project/" + project.name}
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              key={uuidv4()}
              projectName={project.name}
              projectThumbnail={project.thumbnail}
              projectTags={project.tags}
            />
          </Link>
        );
      })}
    </ProjectCardsContainer>
  );
};

const ProjectCardsContainer = styled.div`
  grid-area: projects;
  height: 100%;
  width: 100%;
  display: grid;
  /* justify-items: center; */
  align-items: start;
  /* overflow: hidden; */
  grid-gap: calc(0.5vh + 0.5vw);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto auto;
  border-radius: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, minmax(0, 1fr));
    grid-gap: calc(1vh + 1vw);
  }
`;
export default ProjectCardsSection;
