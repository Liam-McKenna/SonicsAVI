import { React, useState, useEffect } from "react";
import styled from "styled-components";
import arrow from "../img/right-arrow.svg";

const ImageGallery = ({ service }) => {
  const [imagePath, setImagePath] = useState("");
  const [galleryPaths, setGalleryPaths] = useState([]);

  useEffect(() => {
    if (service.ServiceThumbnail) {
      getImagePaths();
    }
  }, [service]);

  const getImagePaths = () => {
    try {
      setImagePath(require(`../img/${service.ServiceThumbnail}`).default);

      setGalleryPaths(
        service.ServiceGallery.map((img) => {
          return require(`../img/${img}`).default;
        })
      );
    } catch (e) {
      console.error(e);
    }
  };

  const imgSelect = (e) => {
    // console.log(e);
    // console.log("this");
    // console.log(e.target.getAttribute("src"));
    setImagePath(e.target.getAttribute("src"));
  };

  return (
    <ImageGalleryContainer>
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
                onClick={imgSelect}
              />
            );
          })}{" "}
        </div>
        <img src={arrow} alt="" className="right" />
      </div>

      <img src={imagePath} alt="" />
    </ImageGalleryContainer>
  );
};

const ImageGalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
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
`;

export default ImageGallery;
