import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
//Database
import ProjectsData from "../api/axios-projects.js";
//components
import ImageGallery from "../components/ImageGallery";
import SpacerBar from "../components/SpacerBar";

const ProjectFocus = () => {
  //currentUrl
  const history = useHistory();
  const url = history.location.pathname.replace("/project/", "");
  //state data for selected Service
  const [project, setProject] = useState([]);
  //get all data from DB Axois
  // console.log(service);

  useEffect(() => {
    retrieveProject();
    console.log(project);
  }, []);

  const retrieveProject = () => {
    ProjectsData.getByName(url)
      .then((response) => {
        console.log(response);
        setProject(response.data.projects[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ProjectFocusContainer>
      <ImageGallery gallery={project} />
      <h1>{project.name}</h1>
      <SpacerBar />
      <span className="serviceText">
        {project.text &&
          project.text.split("<br />").map((str) => (
            <p key={uuidv4()}>
              {str}
              <br />
              <br />
            </p>
          ))}
      </span>
    </ProjectFocusContainer>
  );
};

const ProjectFocusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .serviceText {
    max-width: 90rem;
    padding: 0rem 1.5rem 0rem 1.5rem;
    text-align: center;
  }

  h1 {
    padding: 1rem 0rem 0rem 0rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    margin: 0rem 0rem 5rem 0rem;
  }
`;

export default ProjectFocus;
