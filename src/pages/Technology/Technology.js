import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

// Components
import Banner from "./Banner";

const Technology = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? null : (
        <Box
          id="technology"
          style={{
            padding: isMobile ? "4vh 0 2vh 0" : "8vh 0 4vh 0",
          }}
        >
          <Box
            style={{
              padding: isMobile ? "6vh 3vw 3vh 3vw" : "12vh 5vw 6vh 5vw",
              textAlign: "center",
            }}
          >
            <Typography variant="h2" color="primary" fontWeight={600}>
              Technology{" "}
              <Typography
                component="span"
                variant="h2"
                fontWeight={600}
                style={{ color: "#444444" }}
              >
                Used
              </Typography>
            </Typography>
          </Box>
          <Box
            style={{
              padding: isMobile ? "3vh 3vw" : "7vh 5vw",
            }}
          >
            <Typography variant="body1">
              Our core technology, currently under provisional patent, revolves
              around the innovative concept of an Indoor Positioning System
              (IPS). At MapIT.ai, we have developed cutting-edge solutions that
              harness the power of IPS to transform various sectors of the
              industry.
            </Typography>
            <Typography variant="body1">
              With our IPS technology, we have the ability to revolutionize the
              way businesses and organizations navigate and optimize their
              indoor environments. By leveraging a combination of advanced
              hardware, software algorithms, and wireless communication
              protocols, our system can enable real-time tracking, positioning,
              and mapping of people and assets within indoor spaces.
            </Typography>
          </Box>
          <Box
            style={{
              padding: isMobile ? "4vh 3vw" : "8vh 5vw",
            }}
          >
            <Banner />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Technology;
