import React from "react";
import styled from "styled-components";

//images
import eva from "../img/profiles/eva.png";
import ken from "../img/profiles/ken.png";
import rim from "../img/profiles/rim.png";
import steven from "../img/profiles/steven.png";

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
      <h1>About Sonics</h1>
      <SpacerBar />
      <p>
        This is a placeholder text for an extensive text area detailing the
        nitty gritty of sonics and why sonics is a good company to do AV stuff
        etc etc
      </p>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  p {
    width: 700px;
    max-width: 85%;
    text-align: center;
  }
`;

export default About;
