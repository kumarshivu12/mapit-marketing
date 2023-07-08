import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

//Components
import landingBackground from "../../assets/images/landingBackground.png";
import Loader from "../../components/Loader/Loader";
import { Button3 } from "../../components/Buttons/Buttons";
import Hero from "../Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Solutions from "../Solutions/Solutions";
import Technology from "../Technology/Technology";
import Blogs from "../Blogs/Blogs";
import Blogpage from "../Blogs/Blogpage";
import Contact from "../Contact/Contact";
// import { Button1 } from "../../utilities/components/Buttons";

// Styles

const GridContainer = styled(Grid)`
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 0 3vw;
  background-color: rgba(61, 208, 227, 0.5);
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
    opacity: 0.3; /* Adjust the opacity as per your preference */
    z-index: -1;
  }
`;

const ContentBox = styled(Box)`
  padding: 3vw;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(4px);
  box-shadow: 1.9765313863754272px 1.9765313863754272px 4.941329479217529px 0px
    rgba(0, 0, 0, 0.25);
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
  const theme = useTheme();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
      {/* LandingPage */}
      <GridContainer
        container
        alignItems="center"
        justifyContent="center"
        style={{
          clipPath: isMobile
            ? "polygon(49.7% 100%, 100% 90%, 100% 0.3%, 0% 0%, 0% 90%)"
            : "polygon(49.7% 100%, 100% 80%, 100% 0.3%, 0% 0%, 0% 80%)",
        }}
      >
        <Grid
          item
          lg={7}
          md={12}
          sm={12}
          xs={12}
          style={{
            padding: "10px",
            marginBottom: "10%",
          }}
        >
          <ContentBox>
            <Typography variant="h2" style={{ fontWeight: 500 }}>
              Creating industry-acceptable
            </Typography>
            <Typography variant="h2" style={{ fontWeight: 500 }}>
              products to solve issues
            </Typography>
            <Typography
              component="span"
              variant="h2"
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
                    variant="h2"
                    color="primary"
                    style={{
                      fontWeight: 500,
                    }}
                  >
                    {phrases[currentWordIndex]}
                  </Typography>
                </RandomWord>
              )}
              <Box style={{ marginTop: "30px" }}>
                <Button3 />
              </Box>
            </Box>
          </ContentBox>
        </Grid>
        <Grid item lg={5} md={12} sm={12} xs={12}></Grid>
      </GridContainer>
      {/* Hero Section */}
      <Hero />
      {/* Solution */}
      <Solutions />
      {/* Technology */}
      <Technology />
      <Blogs />

      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </Box>
  );
};
export default LandingPage;
