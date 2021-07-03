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

        <textarea placeholder="Your Message" name="message"></textarea>
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
      <div className="bottomDetails">
        <SpacerBar />
        <p>
          Tallaght Business Centre, Unit 30, Whitestown Rd, Tallaght Business
          Park, Dublin 24
          <br /> <br /> +35314902777
        </p>
      </div>
    </ContactContainer>
  );
};
const secondaryColor = "#1d2034";
const primaryColor = "#0E0F1A";
const ContactContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 10fr auto 1fr;
  grid-template-areas:
    ". . . ."
    ". contactForm map ."
    ". bottom bottom ."
    ". . . .";

  form {
    grid-area: contactForm;
    width: 100%;
    height: 100%;
    padding: 1em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${secondaryColor};
    text-align: center;
    :focus {
      outline: none;
    }
    input {
      height: 20%;
      width: 98%;
      background-color: ${primaryColor};
      border-radius: 5px;
      padding: 0% 2% 0% 2%;
      margin: 4px;
      color: white;
      border-style: none;
      :focus {
        outline: none;
      }
    }
    textarea {
      height: 100%;
      width: 98%;
      background-color: ${primaryColor};
      color: white;
      border-radius: 5px;
      padding: 2%;
      margin: 4px;
      border-style: none;
      resize: none;
      :focus {
        outline: none;
      }
    }
    .submit {
      background-color: #00a3ff;
      text-align: center;
    }
  }

  .map {
    grid-area: map;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
  }

  .bottomDetails {
    grid-area: bottom;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 2em 3fr 2em;
    grid-template-rows: 2em 1fr 1fr 5em;
    grid-template-areas:
      ". . ."
      ". contactForm ."
      ". map ."
      ". bottom ."
      ". . .";
  }
`;

export default Contact;
