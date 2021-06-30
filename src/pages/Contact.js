import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import dotenv from "dotenv";
import SpacerBar from "../components/SpacerBar";
dotenv.config();

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3i8hi2e",
        "template_v3oeq1a",
        e.target,
        "user_S1wujNYYmrjSXht3V33Pg"
      )
      .then(
        ((result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        })
      );
    e.target.reset();
  }
  console.log(process.env.REACT_APP_GOOGLE_KEY);
  function map() {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 53.2833, lng: -6.3836 }}
      />
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(map));

  return (
    <ContactContainer>
      <form onSubmit={sendEmail}>
        <h1>Contact Us</h1>
        <input type="text" className="" placeholder="Your Name" name="name" />
        <input type="text" placeholder="Company Name" name="companyName" />
        <input type="email" placeholder="Email" name="email" />
        <input type="phone" placeholder="Phone Number" name="phone" />

        <textarea
          placeholder="Your Message"
          rows="20"
          name="message"
        ></textarea>
        <input type="submit" className="submit" value="Send Message" />
      </form>
      <div className="map">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
      <SpacerBar />
      <p>
        Tallaght Business Centre, Unit 30, Whitestown Rd, Tallaght Business
        Park, Dublin 24
        <br /> <br /> +35314902777
      </p>
    </ContactContainer>
  );
};
const secondaryColor = "#1d2034";
const primaryColor = "#0E0F1A";
const ContactContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  form {
    width: 85%;
    height: 100%;
    max-width: 1200px;
    max-height: 520px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background-color: ${secondaryColor};
    padding: 0.5rem;
    margin: 1rem 2rem 2rem 2rem;
    text-align: center;
    :focus {
      outline: none;
    }
    input {
      height: 100%;
      max-height: 40px;
      background-color: ${primaryColor};
      border-radius: 360px;
      padding: 0.5rem;
      margin: 0.5rem;
      color: white;
      border-style: none;
      :focus {
        outline: none;
      }
    }
    textarea {
      height: 100%;
      min-height: 150px;
      max-height: 400px;
      background-color: ${primaryColor};
      color: white;
      border-radius: 10px;
      padding: 0.5rem;
      margin: 0.5rem;
      border-style: none;
      resize: none;
      :focus {
        outline: none;
      }
    }
    .submit {
      background-color: #00a3ff;
    }
  }

  .map {
    width: 85%;
    height: 100%;
    max-width: 1200px;
    max-height: 520px;
    min-height: 320px;
    border-radius: 20px;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    height: 1200px;
    justify-content: start;
    padding-bottom: 25rem;
  }
`;

export default Contact;
