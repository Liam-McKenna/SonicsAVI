import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//Database
import ServicesData from "../api/axios-services.js";
//components
import ImageGallery from "../components/ImageGallery";

const ServiceFocus = () => {
  //currentUrl
  const history = useHistory();
  const url = history.location.pathname.replace("/service/", "");
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
        setService(response.data.services[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ServiceFocusContainer>
      <ImageGallery service={service} />
      <h1>{service.serviceName}</h1>
    </ServiceFocusContainer>
  );
};

const ServiceFocusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ServiceFocus;
