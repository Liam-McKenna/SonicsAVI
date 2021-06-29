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
    <ProjectsContainer>
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
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  margin-top: 1rem;
  width: 70rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 1rem;
`;
export default ProjectCardsSection;
