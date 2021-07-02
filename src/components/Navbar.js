import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//images and icons
import services from "../img/Services.svg";
import project from "../img/project.svg";
import customerservice from "../img/customer-service.svg";
import team from "../img/team.svg";
import logo from "../img/logoWhite.png";
import phone from "../img/smartphone.svg";
import email from "../img/email.svg";

const Navbar = () => {
  const mailButton = () => {
    const mailto =
      "mailto:mail@gmail.com?subject=Test subject&body=Body content";
    window.location.href = mailto;
  };
  const phoneButton = () => {
    const tel = "tel:083 444 8785";
    window.location.href = tel;
  };

  return (
    <Nav>
      <div className="logo">
        <Link className="navLink" id="page1" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="links">
        <Link className="navLink" id="navLink1" to="/">
          <img src={services} alt="services" />
          <span className="navText">Services</span>
        </Link>
        <Link className="navLink" id="navLink2" to="/projects">
          <img src={project} alt="project" />
          <span className="navText">Projects</span>
        </Link>
        <Link className="navLink" id="navLink3" to="/about">
          <img src={team} alt="team" />
          <span className="navText">About</span>
        </Link>
        <Link className="navLink" id="navLink4" to="/Contact">
          <img src={customerservice} alt="customerservice" />
          <span className="navText">Contact</span>
        </Link>
        <div className="phoneAndEmail" id="navLink5">
          <div className="phoneButton" onClick={phoneButton}>
            <img src={phone} alt="" />
          </div>
          <div className="mailButton" onClick={mailButton}>
            <img src={email} alt="" />
          </div>
        </div>
      </div>
    </Nav>
  );
};

//CSS Variables
const primaryColor = "#0E0F1A";
const secondaryColor = "#1d2034";
const heavyBlue = "#00A3FF";
const transitionTime = "200ms ease";
//styled components
const Nav = styled.div`
  width: 5rem;
  height: 90vh;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .links {
    text-decoration: none;
    transition: ${transitionTime};
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    width: 5rem;
    height: 25rem;
    position: fixed;
    background-color: ${secondaryColor};
    border-radius: 0rem 2rem 2rem 0rem;
    .navText {
      font-weight: bold;
    }
    &:hover {
      transition: ${transitionTime};
      width: 13rem;
      .navLink {
        display: flex;
        flex-direction: row;
      }
      .navText {
        /* display: block; */
        visibility: visible;
        color: white;
        font-weight: bold;
      }
      .phoneAndEmail {
        border-top: 2px solid ${secondaryColor};
        img {
          width: 2rem;
          &:hover {
            width: 3rem;
          }
          &:active {
            width: 1.9rem;
          }
        }
      }
    }
  }

  .navLink {
    transition: ${transitionTime};
    text-decoration: none;
    width: 100%;
    height: 5rem;
    padding: 0rem 0rem 0rem 0.5rem;
    display: flex;
    align-items: center;
    &:hover {
      background-color: ${primaryColor};
      .navText {
        color: ${heavyBlue};
      }
    }
    &:active {
      text-decoration: none;
    }
    img {
      transition: ${transitionTime};
      width: 90%;
      width: 4rem;
      &:hover {
        width: 5rem;
      }
      &:active {
        width: 4rem;
      }
    }
  }

  .navText {
    transition: ${transitionTime};
    visibility: hidden;
    margin-left: 2rem;
  }

  .phoneAndEmail {
    transition: ${transitionTime};
    text-decoration: none;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 2px solid ${primaryColor};
    align-items: center;

    &:hover {
      background-color: ${primaryColor};
      .navText {
        color: ${heavyBlue};
      }
    }
    &:active {
      text-decoration: none;
    }
    img {
      transition: ${transitionTime};
      margin: 0rem 0.5rem 0rem 0.5rem;
      width: 90%;
      height: 100%;
      width: 1.5rem;
      &:hover {
        width: 3rem;
      }
      &:active {
        width: 1.8rem;
      }
    }
    .phoneButton {
      background-color: #38ffac;
      height: 100%;
      width: 100%;
      display: flex;

      justify-content: center;
    }
    .mailButton {
      background-color: #00a3ff;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  //mobile settings
  @media (max-width: 768px) {
    width: 100%;
    bottom: 0;
    display: flex;
    .navText {
      transition: ${transitionTime};
      margin-left: 0rem;
      visibility: visible;
    }
    .links {
      flex-direction: row;
      border-radius: 0;
      height: 6rem;
      width: 100%;
      bottom: 0;
      &:hover {
        transition: ${transitionTime};
        width: 100%;
        .navLink {
          display: flex;
          flex-direction: column;
        }
        .navText {
          visibility: visible;
          color: white;
          font-weight: bold;
        }
      }
    }
    .navLink {
      justify-content: center;
      flex-direction: column;
      height: 6rem;
      padding: 0rem;
      &:hover {
        background-color: ${secondaryColor};
      }

      img {
        width: 0;
        width: 4rem;
        &:hover {
          width: 4.5rem;
        }
        &:active {
          /* width: 4rem; */
        }
      }
    }
    .phoneAndEmail {
      display: none;
    }
    .logo {
      display: none;
    }
  }
`;

export default Navbar;
