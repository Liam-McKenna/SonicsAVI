import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
//components
import Card from "./Card";
//Database
import ServicesData from "../api/axios-services.js";

const CardsSection = () => {
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
    <CardsContainer>
      {services.map((service) => {
        return (
          <Link key={uuidv4()} to={"/service/" + service.serviceName}>
            <Card
              key={uuidv4()}
              serviceName={service.serviceName}
              serviceThumbnail={service.ServiceThumbnail}
            />
          </Link>
        );
      })}
    </CardsContainer>
  );
};

//CSS Vars

const CardsContainer = styled.div`
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

export default CardsSection;
