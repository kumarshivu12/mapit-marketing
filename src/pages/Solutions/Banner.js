import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Stack, Box, styled, Typography } from "@mui/material";

//Components
import { SolutionData } from "../../data/data";
import { Button1 } from "../../components/Buttons/Buttons";

//Styles
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "0 10px",
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
}));

const Overlay = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "70%",
  height: "100%",
  backgroundColor: "rgba(0, 196, 240, 0.7)",
  padding: "10px 20px",
}));

const Banner = () => {
  return (
    <Box>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {SolutionData.map((item) => (
          <ImageContainer key={item.id}>
            <Image src={item.image} alt="banner" />
            <Overlay direction="column" spacing={4} justifyContent="center">
              <Box>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  style={{ color: "white" }}
                >
                  {item.text}
                </Typography>
              </Box>
              <Box>
                <Button1 text="Read More" url={item.url} />
              </Box>
            </Overlay>
          </ImageContainer>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;
