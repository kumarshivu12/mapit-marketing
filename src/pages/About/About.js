import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import ProfileCard from "./ProfileCard";
import Footer from "../../components/Footer/Footer";
import Contact from "../Contact/Contact";
// import Gallery from "./Gallery";
const About = () => {
  let cardCount = 10;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1" gutterBottom>
          <Typography variant="body1" component="span" color="primary">
            Mapit.ai
          </Typography>{" "}
          (Project IPS) is an entrepreneurial initiative by the students of IIT
          Bombay backed by{" "}
          <Typography variant="body1" component="span" color="primary">
            MakerBhavanFoundation
          </Typography>{" "}
          and prestigious alumni of IIT Bombay{" "}
          <Typography variant="body1" component="span" color="primary">
            Dr. Rajan Vaz.
          </Typography>{" "}
          <br />
          The focus of this initiative is to create industry acceptable products
          to solve some of the major issues in indoor space management and
          automation while simultaneously inculcating in students the required
          skills to tinker and build new and innovative solutions to real world
          problems.
        </Typography>
      </Box>
      <Box
        style={{ padding: isMobile ? "4vh 0" : "8vh 0", background: "#E6E6E6" }}
        textAlign="center"
      >
        <Typography variant="h2" style={{ fontWeight: 600 }} gutterBottom>
          <Typography
            component="span"
            variant="h2"
            color="primary"
            fontWeight={600}
          >
            Meet
          </Typography>{" "}
          Our Team
        </Typography>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}
        >
          {[...Array(cardCount)].map((_, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ProfileCard />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box style={{ padding: isMobile ? "4vh 0" : "8vh 0" }} textAlign="center">
        <Typography variant="h2" style={{ fontWeight: 600 }} gutterBottom>
          <Typography
            component="span"
            variant="h2"
            color="primary"
            fontWeight={600}
          >
            Photo
          </Typography>{" "}
          Gallery
        </Typography>
      </Box>
      {/* <Gallery /> */}
      <Contact />
    </Box>
  );
};

export default About;
