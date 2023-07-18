import React from "react";
import { Box } from "@mui/material";
import Slider from "infinite-react-carousel";
import image from "../../assets/images/1.webp";
import "./Gallery.css";

const Gallery = () => {
  const settings = {
    // adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    centerMode: true,
    // gutter: 10,
    // centerPadding: 10,
    // className: "border",
    // dots: true,
    initialSlide: true,
    slidesToShow: 3,
    wheel: true,
  };
  return (
    <Box className="gallery-container" style={{ border: "2px solid red" }}>
      <Slider {...settings}>
        <div className="slide-item" style={{ border: "2px solid green" }}>
          <img src={image} alt="gallery" width="100%" height="100%" />
        </div>
        <div className="slide-item" style={{ border: "2px solid green" }}>
          <img src={image} alt="gallery" width="100%" height="100%" />
        </div>
        <div className="slide-item" style={{ border: "2px solid green" }}>
          <img src={image} alt="gallery" width="100%" height="100%" />
        </div>
        <div className="slide-item" style={{ border: "2px solid green" }}>
          <img src={image} alt="gallery" width="100%" height="100%" />
        </div>
        <div className="slide-item" style={{ border: "2px solid green" }}>
          <img src={image} alt="gallery" width="100%" height="100%" />
        </div>
        <div className="slide-item" style={{ border: "2px solid green" }}>
          <img src={image} alt="gallery" width="100%" height="100%" />
        </div>
      </Slider>
    </Box>
  );
};

export default Gallery;
