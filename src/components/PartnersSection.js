import React from "react";
import styled from "styled-components";
import SpacerBar from "./SpacerBar";
//logo images
import avocor_logo from "../img/partnerlogos/avocor_logo.png";
import Helvar_logo from "../img/partnerlogos/Helvar_Logo.png";
import kramer_logo from "../img/partnerlogos/kramer_logo.png";
import LG_logo from "../img/partnerlogos/LG_logo.png";
import Logitech_logo from "../img/partnerlogos/Logitech_logo.png";
import NEC_logo from "../img/partnerlogos/NEC_logo.png";
import sein_logo from "../img/partnerlogos/sein_logo.png";
import xo2_logo from "../img/partnerlogos/xo2_logo.png";
import zoom_logo from "../img/partnerlogos/zoom_logo.png";

const PartnersSection = () => {
  return (
    <PartnersContainer>
      <h2>Our Partners</h2>
      <SpacerBar />
      <div className="partnerLogos">
        <div className="logoWrapper">
          <img src={avocor_logo} alt="" />
        </div>
        <div className="logoWrapper">
          <img src={Helvar_logo} alt="" />
        </div>
        <div className="logoWrapper">
          <img src={kramer_logo} alt="" />
        </div>
        <div className="logoWrapper">
          <img src={LG_logo} alt="" />
        </div>
        <div className="logoWrapper">
          <img src={Logitech_logo} alt="" />
        </div>
        <div className="logoWrapper">
          <img src={NEC_logo} alt="" />
        </div>
        <div className="logoWrapper">
          <img src={sein_logo} alt="" />
        </div>
        <div className="logoWrapper">
          <img src={xo2_logo} alt="" />
        </div>
        <div className="logoWrapper">
          <img src={zoom_logo} alt="" />
        </div>
      </div>
    </PartnersContainer>
  );
};

const PartnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    width: 100%;
    text-align: center;
  }

  .partnerLogos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .logoWrapper {
    }

    img {
      width: 6rem;
      margin: 0rem 1rem 0rem 1rem;
    }
  }
`;

export default PartnersSection;
