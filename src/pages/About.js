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
      <div className="topContainer">
        <h1>Our Team</h1>
        <div className="departmentContainer">
          <div className="operations">Operations</div>
          <div className="sales">Sales</div>
          <div className="engineers">Engineers</div>
        </div>
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
  display: grid;
  grid-template-rows: 1fr 3fr 2fr;
  grid-gap: 1vh 1vh;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;

  .topContainer {
    align-self: end;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .departmentContainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .operations {
        width: 25%;
        margin: 0.3rem;
        padding: 0.2rem 0.5rem 0.2rem 0.5rem;
        color: #0ea3ff;
        border: 1.5px solid#0ea3ff;
        border-radius: 1rem 0rem 0rem 1rem;
        text-align: center;
      }
      .sales {
        width: 25%;
        margin: 0.3rem;
        padding: 0.2rem 0.5rem 0.2rem 0.5rem;
        color: #43f5d5;
        border: 1.5px solid#43f5d5;
        text-align: center;
      }
      .engineers {
        width: 25%;
        margin: 0.3rem;
        padding: 0.2rem 0.5rem 0.2rem 0.5rem;
        color: #f5436e;
        border: 1.5px solid#f5436e;
        border-radius: 0rem 1rem 1rem 0rem;
        text-align: center;
      }
    }
  }

  .cardContainer {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 10vw);
    grid-template-rows: repeat(2, 28vh);
    grid-gap: 1vh 1vh;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .bottomContainer {
    align-self: start;

    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 60vw);
    justify-content: center;
    text-align: center;
    justify-items: center;
    p {
      width: 100%;
    }

    .socials {
      height: 70%;
      width: 20%;
      padding: 10px 0px 0px 0px;

      img {
        height: 100%;
        width: 25%;
      }
    }
  }

  @media (max-width: 750px) {
    height: 100%;
    margin: 1rem 0rem 10rem 0rem;

    .cardContainer {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 10vh);
    }
    .bottomContainer {
      max-height: 450px;
    }
  }
`;

export default About;
