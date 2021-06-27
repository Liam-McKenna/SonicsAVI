import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <h1>About Page</h1>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  margin-left: 5rem;
  @media (max-width: 768px) {
    margin: 0rem 0rem 5rem 0rem;
  }
`;

export default About;
