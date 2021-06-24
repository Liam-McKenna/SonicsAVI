import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//images and icons
import services from "../img/Services.svg";
import project from "../img/project.svg";
import customerservice from "../img/customer-service.svg";
import team from "../img/team.svg";
import logo from "../img/logoWhite.png";

const Navbar = () => {
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
  position: fixed;
  z-index: 10;

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
    height: 20rem;
    position: fixed;
    background-color: ${secondaryColor};
    border-radius: 0rem 2rem 2rem 0rem;
    &:hover {
      transition: ${transitionTime};
      width: 16rem;
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
    /* display: none; */
    visibility: hidden;
    padding: 1rem;
    list-style: none;
  }
`;

export default Navbar;
