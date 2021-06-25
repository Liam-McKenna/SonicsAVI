import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import arrow from "../img/right-arrow.svg";

const ImageGallery = ({ service }) => {
  //useState
  const [thumbnailPath, setThumbnailPath] = useState("");
  const [galleryPaths, setGalleryPaths] = useState([]);
  //useRef
  const modelRef = useRef(null);

  // if the data isn't available(service.ServiceThumbnail),
  // we'll delay our functions to require images. Require can't be called if the paths aren't statically available.
  // useEffect triggers on any updates to the 'service' prop.
  useEffect(() => {
    if (service.ServiceThumbnail) {
      getImagePaths();
    }
  }, [service]);

  const getImagePaths = () => {
    try {
      console.log(service.ServiceThumbnail);
      setThumbnailPath(service.ServiceThumbnail);
      console.log(thumbnailPath);

      setGalleryPaths(
        service.ServiceGallery.map((img) => {
          return require(`../img/${img}`).default;
        })
      );
    } catch (e) {
      console.error(e);
    }
  };

  //
  const imgSelectEventHandler = (e) => {
    setThumbnailPath(e.target.getAttribute("src"));
  };

  const modalEventHandler = () => {
    console.log(modelRef.current.className);
    if (modelRef.current.className === "modalContainerOff") {
      modelRef.current.className = "modalContainerOff modalContainerOn";
      // console.log("turn On");
    } else {
      // console.log("turn off");
      modelRef.current.className = "modalContainerOff";
    }
  };

  return (
    <ImageGalleryContainer>
      <div className="galleryContainer">
        <div className="galleryControl">
          <img src={arrow} alt="" className="left" />
          <div className="galleryImages">
            {" "}
            {galleryPaths.map((path) => {
              return (
                <img
                  src={path}
                  alt=""
                  className="galleryImg"
                  onClick={imgSelectEventHandler}
                />
              );
            })}{" "}
          </div>
          <img src={arrow} alt="" className="right" />
        </div>

        <img
          src={thumbnailPath}
          alt=""
          id="thumbnail"
          onClick={modalEventHandler}
        />
      </div>

      <div
        className="modalContainerOff"
        id="ModalContainer"
        ref={modelRef}
        onClick={modalEventHandler}
      >
        <span class="close">&times;</span>
        <img className="modalImg" src={thumbnailPath} alt="" />
      </div>
    </ImageGalleryContainer>
  );
};

const ImageGalleryContainer = styled.div`
  width: 100%;

  .galleryContainer {
    height: 40vh;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
    }

    .galleryControl {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;

      justify-content: center;
      align-items: center;

      .galleryImages {
        display: flex;
        margin: 0.3rem;
      }

      .galleryImg {
        height: 3rem;
        width: 3rem;
        margin: 0rem 0.3rem 0rem 0.3rem;
        /* object-fit: contain; */
      }

      .left {
        height: 3rem;
        width: 3rem;
        transform: rotate(180deg);
        color: red;
      }
      .right {
        height: 3rem;
        width: 3rem;
      }
    }
  }

  .modalContainerOff {
    display: none;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */

    .modalImg {
      margin: auto;
      display: block;
      max-height: 90vh;
      max-width: 90vh;
      /* max-width: 700px; */
    }
  }

  .modalContainerOn {
    display: block;
  }
`;

export default ImageGallery;
