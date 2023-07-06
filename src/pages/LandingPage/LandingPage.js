import React, { useState, useEffect } from "react";
import { Box, Typography, Link, Grid, styled } from "@mui/material";

//Components
import landingBackground from "../../assets/images/landingBackground.png";
// import { Button1 } from "../../utilities/components/Buttons";

// Styles
const GridContainer = styled(Grid)`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 90px);
  padding: 0 3vw;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${landingBackground});
    background-size: cover;
    background-position: center;
    filter: blur(4px);
    z-index: -1;
  }
`;

const ContentBox = styled(Box)`
  padding: 3vw;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(4px);
`;

const RandomWord = styled(Box)`
  display: inline-block;
  color: #bbaadd;
  letter-spacing: 3px;
  width: auto;
  opacity: 0;
  animation: slidedown 1s ease-in-out forwards;
  -webkit-animation: slidedown 1s ease-in-out forwards;
  -moz-animation: slidedown 1s ease-in-out forwards;
  animation-delay: ${(props) => (props.currentIndex === 0 ? "0s" : "0.05s")};

  @keyframes slidedown {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
const phrases = ["Indoor Space Managemnet", "Automation", "Asset Tracking"];

const LandingPage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 50);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <GridContainer container alignItems="center" justifyContent="center">
        <Grid item lg={7} md={12} sm={12} xs={12} style={{ padding: "10px" }}>
          <ContentBox>
            <Typography variant="h1" style={{ fontWeight: 500 }}>
              Creating industry-acceptable
            </Typography>
            <Typography variant="h1" style={{ fontWeight: 500 }}>
              products to solve issues
            </Typography>
            <Typography
              component="span"
              variant="h1"
              style={{ fontWeight: 500 }}
            >
              in{" "}
            </Typography>
            <Box component="span">
              {isVisible && (
                <RandomWord
                  component="span"
                  currentIndex={currentWordIndex}
                  currentWordIndex={currentWordIndex}
                >
                  <Typography
                    variant="h1"
                    color="primary"
                    style={{
                      fontWeight: 500,
                    }}
                  >
                    {phrases[currentWordIndex]}
                  </Typography>
                </RandomWord>
              )}
            </Box>
            {/* <Box style={{ margin: "20px 0" }}>
            <Button1 />
          </Box> */}
          </ContentBox>
        </Grid>
        <Grid item lg={5} md={12} sm={12} xs={12}>
          <Box>Hello </Box>
        </Grid>
      </GridContainer>
    </Box>
  );
};
export default LandingPage;
