import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//Database
import ServicesData from "../api/axios-services.js";
//components
import ImageGallery from "../components/ImageGallery";
import SpacerBar from "../components/SpacerBar";

const ServiceFocus = () => {
  //currentUrl
  const history = useHistory();
  const url = history.location.pathname.replace("/service/", "");
  // console.log(url);
  //state data for selected Service
  const [service, setService] = useState([]);
  //get all data from DB Axois
  // console.log(service);

  useEffect(() => {
    retrieveService();
  }, []);

  const retrieveService = () => {
    ServicesData.getByName(url)
      .then((response) => {
        console.log(response);
        setService(response.data.services[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ServiceFocusContainer>
      <ImageGallery gallery={service} />
      <h1>{service.name}</h1>
      <SpacerBar />
      <span className="serviceText">
        {service.text &&
          service.text.split("<br />").map((str) => (
            <p>
              {str}
              <br />
              <br />
            </p>
          ))}
      </span>
      <h2>Related Projects</h2>
      <SpacerBar />

      {/* TO DO - build project card and reuse here */}
      <div className="projectsSection">
        <div className="project">projectCard</div>
        <div className="project">projectCard</div>
        <div className="project">projectCard</div>
      </div>
    </ServiceFocusContainer>
  );
};

const ServiceFocusContainer = styled.div`
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

export default ServiceFocus;
