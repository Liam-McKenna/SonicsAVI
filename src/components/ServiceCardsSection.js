import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
//components
import ServiceCard from "./ServiceCard";
//Database
import ServicesData from "../api/axios-services.js";

const ServiceCardsSection = () => {
  //state data for all Services
  const [services, setServices] = useState([]);
  //get all data from DB Axois
  useEffect(() => {
    retrieveServices();
  }, []);

  const retrieveServices = () => {
    ServicesData.getAll()
      .then((response) => {
        setServices(response.data.services);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ServiceCardsContainer>
      {services.map((service) => {
        return (
          <Link key={uuidv4()} to={"/service/" + service.name}>
            <ServiceCard
              key={uuidv4()}
              name={service.name}
              thumbnail={service.thumbnail}
            />
          </Link>
        );
      })}
    </ServiceCardsContainer>
  );
};

//CSS Vars

const ServiceCardsContainer = styled.div`
  grid-area: services;
  width: 100%;
  display: grid;
  grid-gap: calc(0.5vh + 0.5vw);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border-radius: 1rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: calc(1vh + 1vw);
  }
`;

export default ServiceCardsSection;
