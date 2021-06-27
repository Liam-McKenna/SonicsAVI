import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact Page</h1>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  margin-left: 5rem;
  @media (max-width: 768px) {
    margin: 0rem 0rem 5rem 0rem;
  }
`;

export default Contact;
