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
      <div className="bottomDetails">
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
  form {
    top: 0;
    width: 65%;
    height: 100%;
    max-width: 1200px;
    max-height: 50vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${secondaryColor};

    margin: 1%;
    text-align: center;
    :focus {
      outline: none;
    }
    input {
      height: 100%;
      width: 98%;
      max-height: 7%;
      background-color: ${primaryColor};
      border-radius: 360px;
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
      min-height: 15%;
      max-height: 400px;
      background-color: ${primaryColor};
      color: white;
      border-radius: 10px;
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
      width: 65%;
      text-align: center;
    }
  }

  .map {
    width: 65%;
    height: 100%;
    max-width: 1200px;
    max-height: 50vh;
    min-height: 220px;
    border-radius: 20px;
    overflow: hidden;
  }

  .bottomDetails {
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    height: 13%;
    justify-content: start;
    padding: 2rem 0rem 1rem 0rem;

    form {
      width: 85%;
      input {
        width: 95%;
      }
      textarea {
        width: 95%;
      }
    }
    .map {
      width: 85%;
    }
    .bottomDetails {
      width: 85%;
    }
  }
`;

export default Contact;
