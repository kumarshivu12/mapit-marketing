import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileCard from "./ProfileCard";

const About = () => {
  let cardCount = 10;

  return (
    <Box style={{ padding: "30px 2vw" }}>
      <Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            <Typography
              variant="h5"
              component="span"
              style={{ color: "#0F6579" }}
            >
              Mapit.ai
            </Typography>{" "}
            (Project IPS) is an entrepreneurial initiative by the students of
            IIT Bombay backed by{" "}
            <Typography
              variant="h5"
              component="span"
              style={{ color: "#0F6579" }}
            >
              MakerBhavanFoundation
            </Typography>{" "}
            and prestigious alumni of IIT Bombay{" "}
            <Typography
              variant="h5"
              component="span"
              style={{ color: "#0F6579" }}
            >
              Dr. Rajan Vaz.
            </Typography>{" "}
            The focus of this initiative is to create industry acceptable
            products to solve some of the major issues in indoor space
            management and automation while simultaneously inculcating in
            students the required skills to tinker and build new and innovative
            solutions to real world problems.
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0",
          }}
        >
          <Typography variant="h3" style={{ fontWeight: 600 }} gutterBottom>
            <Typography
              component="span"
              variant="h3"
              style={{ color: "#0F6579", fontWeight: 600 }}
            >
              Meet
            </Typography>{" "}
            Our Team
          </Typography>
        </Box>
        <Grid container justifyContent="center" spacing={4}>
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
    </Box>
  );
};

export default About;
