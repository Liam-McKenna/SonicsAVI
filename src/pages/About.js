import React from "react";
import styled from "styled-components";

//images
import eva from "../img/profiles/eva.png";
import ken from "../img/profiles/ken.png";
import rim from "../img/profiles/rim.png";
import steven from "../img/profiles/steven.png";
import facebook from "../img/socials/facebook.svg";
import youtube from "../img/socials/youtube.svg";
import linkedin from "../img/socials/linkedin.svg";

//components
import SpacerBar from "../components/SpacerBar";
import AboutCard from "../components/AboutCard";

const About = () => {
  //CSS Variables
  const opsColor = "#0EA3FF";
  const salesColor = "#43F5D5";
  const engineersColor = "#F5436E";
  return (
    <AboutContainer>
      <h1>Our Team</h1>
      <div className="departmentContainer">
        <div className="operations">Operations</div>
        <div className="sales">Sales</div>
        <div className="engineers">Engineers</div>
      </div>

      <div className="cardContainer">
        <AboutCard
          color={opsColor}
          img={steven}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={opsColor}
          img={rim}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={opsColor}
          img={ken}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={opsColor}
          img={eva}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={salesColor}
          img={eva}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={salesColor}
          img={rim}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={engineersColor}
          img={steven}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={engineersColor}
          img={ken}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={engineersColor}
          img={rim}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={engineersColor}
          img={steven}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={engineersColor}
          img={ken}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
        <AboutCard
          color={engineersColor}
          img={rim}
          name="Steven McKenna"
          text="Managing Director - SEO"
        />
      </div>

      <div className="bottomContainer">
        <h1>About Sonics</h1>
        <SpacerBar />
        <p>
          This is a placeholder text for an extensive text area detailing the
          nitty gritty of sonics and why sonics is a good company to do AV stuff
          etc etc
        </p>

        <div className="socials">
          <img src={facebook} alt="fb" />
          <img src={youtube} alt="yt" />
          <img src={linkedin} alt="li" />
        </div>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  h1 {
    font-size: 4rem;
  }
  .departmentContainer {
    display: flex;
    flex-direction: row;
    .operations {
      margin: 0.3rem;
      padding: 0.2rem 0.5rem 0.2rem 0.5rem;
      color: #0ea3ff;
      border: 1.5px solid#0ea3ff;
      border-radius: 1rem 0rem 0rem 1rem;
    }
    .sales {
      margin: 0.3rem;
      padding: 0.2rem 0.5rem 0.2rem 0.5rem;
      color: #43f5d5;
      border: 1.5px solid#43f5d5;
    }
    .engineers {
      margin: 0.3rem;
      padding: 0.2rem 0.5rem 0.2rem 0.5rem;
      color: #f5436e;
      border: 1.5px solid#f5436e;
      border-radius: 0rem 1rem 1rem 0rem;
    }
  }

  .cardContainer {
    width: 100%;
    height: auto;
    max-width: 1000px;
    padding: 0rem 5rem 0rem 5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .bottomContainer {
    width: 720px;
    max-width: 85%;
    height: 100%;
    max-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    .socials {
      padding: 1rem;
      img {
        width: 5rem;
        height: 3rem;
      }
    }
  }

  @media (max-width: 750px) {
    height: 100%;
    margin: 1rem 0rem 10rem 0rem;

    .cardContainer {
      padding: 0rem;
    }
    .bottomContainer {
      max-height: 450px;
    }
  }
`;

export default About;
