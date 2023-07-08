import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      style={{
        padding: isMobile ? "4vh 3vw 2vh 3vw" : "8vh 5vw 4vh 5vw",
      }}
    >
      <Box>
        <Box
          style={{
            padding: isMobile ? "4vh 0 2vh 0" : "8vh 0 4vh 0",
            textAlign: "center",
          }}
        >
          <Typography color="secondary" fontWeight={600} variant="h2">
            Benefits of indoor positioning systems and asset tracking across
            industries
          </Typography>
        </Box>
        <Box style={{ padding: isMobile ? "3vh 0" : "6vh 0" }}>
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
      {/* <Grid container style={{ margin: isMobile ? "2vh 0" : "5vh 0" }}>
        <Grid item lg={6} md={7} sm={12} xs={12}>
          <Box>
            <Typography variant="h4" color="secondary" fontWeight={600}>
              Workplace
            </Typography>
          </Box>
          <Box style={{ padding: isMobile ? "2vh 0 3vh 0" : "4vh 0 6vh 0" }}>
            <Typography variant="body1">
              To bridge the gap between employee autonomy and company control in
              the hybrid work era, where employees desire freedom in choosing
              their work environment, a solution is needed. The challenge lies
              in under-utilized office spaces and the frustrations faced by
              managers. Finding a balance requires addressing the desires of
              employees while ensuring control and reliability for the company.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="primary">
              Solutions for Workplace
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={6} md={7} sm={12} xs={12}>
          <Box>
            <Typography
              variant="h4"
              color="secondary"
              fontWeight={600}
            ></Typography>
          </Box>
          <Box>
            <Typography variant="body1"></Typography>
          </Box>
          <Box>
            <Typography variant="body1"></Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container style={{ margin: isMobile ? "2vh 0" : "5vh 0" }}>
        <Grid item lg={6} md={7} sm={12} xs={12}>
          <Box>
            <Typography variant="h4" color="secondary" fontWeight={600}>
              Retail
            </Typography>
          </Box>
          <Box style={{ padding: isMobile ? "2vh 0 3vh 0" : "4vh 0 6vh 0" }}>
            <Typography variant="body1">
              Malls lack knowledge about their customers and have primitive
              methods for tracking footfalls, retaining customers, and marketing
              to them. This disconnect between customers and malls highlights
              the need to bridge the gap and enhance customer engagement and
              management in the mall environment.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="primary">
              Solution for retail
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={6} md={7} sm={12} xs={12}>
          <Box>
            <Typography
              variant="h4"
              color="secondary"
              fontWeight={600}
            ></Typography>
          </Box>
          <Box>
            <Typography variant="body1"></Typography>
          </Box>
          <Box>
            <Typography variant="body1"></Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container style={{ margin: isMobile ? "2vh 0" : "5vh 0" }}>
        <Grid item lg={6} md={7} sm={12} xs={12}>
          <Box>
            <Typography variant="h4" color="secondary" fontWeight={600}>
              Hospitals
            </Typography>
          </Box>
          <Box style={{ padding: isMobile ? "2vh 0 3vh 0" : "4vh 0 6vh 0" }}>
            <Typography variant="body1">
              Hospitals face challenges in tracking specific patients and
              high-value assets, which can lead to equipment loss and
              unnecessary expenditures. Navigating within hospitals can also be
              confusing for visitors. Customer experience is crucial for
              hospitals as it impacts their insurance ratings and financial
              returns.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="primary">
              Solution for hospitals
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={6} md={7} sm={12} xs={12}>
          <Box>
            <Typography
              variant="h4"
              color="secondary"
              fontWeight={600}
            ></Typography>
          </Box>
          <Box>
            <Typography variant="body1"></Typography>
          </Box>
          <Box>
            <Typography variant="body1"></Typography>
          </Box>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default Hero;
