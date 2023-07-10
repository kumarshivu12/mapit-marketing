import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      style={{
        padding: isMobile ? "4vh 3vw " : "8vh 5vw ",
      }}
    >
      <Box>
        <Box
          style={{
            marginBottom: isMobile ? "4vh" : "8vh ",
            textAlign: "center",
          }}
        >
          <Typography color="secondary" fontWeight={600} variant="h2">
            Benefits of indoor positioning systems and asset tracking across
            industries
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            Our technology revolutionizes the way businesses operate, providing
            real-time visibility, precise tracking, and invaluable insights into
            the movement and location of assets within indoor environments. From
            manufacturing to healthcare, logistics to retail, our indoor
            positioning solutions brings unparalleled advantages that enhance
            operational efficiency, streamline processes, and drive business
            growth. We optimize workflows, improve resource allocation, and
            minimize downtime in manufacturing.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
