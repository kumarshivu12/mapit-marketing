import React from "react";
import { Grid, Typography, Box, styled, useMediaQuery } from "@mui/material";

//Components
import Banner from "./Banner";
import { useTheme } from "@emotion/react";

//Styles
const Tag = styled(Box)`
  background: #ffffff;
  cursor: pointer;
  box-shadow: -2.98231px -2.98231px 37.7759px -9.94102px rgba(0, 0, 0, 0.2),
    2.98231px 2.98231px 37.7759px -9.94102px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 20%;
  aspect-ratio: 1/1;
  transition: box-shadow 0.3s, transform 0.3s;
  margin: 30px 0 60px 0;
  &:hover {
    box-shadow: 0 0 15px 3px #00c4f0;
    transform: scale(1.05);
  }
`;

const Solutions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Box
        style={{ padding: isMobile ? "3vh 0" : "7vh 0", textAlign: "center" }}
      >
        <Typography variant="h3" fontWeight={600}>
          Our{" "}
          <Typography
            component="span"
            variant="h3"
            fontWeight={600}
            color="primary"
          >
            Solutions
          </Typography>
        </Typography>
      </Box>
      <Banner />
      <Box
        style={{
          margin: isMobile ? "6vh 0 " : "12vh 0 ",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={600} gutterBottom>
          <Typography
            component="span"
            variant="h3"
            fontWeight={600}
            color="primary"
          >
            Advantages
          </Typography>{" "}
          of using Indoor Positioning Systems
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ padding: isMobile ? "0 3vw " : "0 5vw ", marginBottom: "5vh" }}
      >
        <Grid
          item
          lg={3}
          md={6}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "75%",
          }}
        >
          <Tag></Tag>
          <Box style={{ marginBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Real-Time Asset Tracking
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              IPS systems enable real-time asset tracking, optimizing
              utilization and streamlining operations in indoor environments{" "}
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "75%",
          }}
        >
          <Tag></Tag>
          <Box style={{ marginBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Enhanced Safety and Security
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              IPS systems enhance safety and security by providing real-time
              tracking and monitoring of people and assets in critical
              environments{" "}
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "75%",
          }}
        >
          <Tag></Tag>
          <Box style={{ marginBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Improved Efficiency and Productivity
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              IPS systems enhance productivity by accurately tracking people and
              assets, optimizing workflows and resource allocation.{" "}
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "75%",
          }}
        >
          <Tag></Tag>
          <Box style={{ marginBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Enhanced Customer Experience
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              IPS systems enhance customer experience by providing indoor
              navigation in retail and hospitals, improving wayfinding and
              satisfaction.{" "}
            </Typography>{" "}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Solutions;
