import React from "react";
import { Grid, Typography, Box, styled, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

//Components
import Banner from "./Banner";
import Location from "../../assets/images/Location.svg";
import Productivity from "../../assets/images/Productivity.svg";
import Customers from "../../assets/images/Customers.svg";
import Security from "../../assets/images/Security.svg";

//Styles
const Tag = styled(Box)`
  background: #ffffff;
  cursor: pointer;
  box-shadow: -2.98231px -2.98231px 37.7759px -9.94102px rgba(0, 0, 0, 0.2),
    2.98231px 2.98231px 37.7759px -9.94102px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 30%;
  aspect-ratio: 1/1;
  transition: box-shadow 0.3s, transform 0.3s;
  margin: 30px 0 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 0 0 15px 3px #00c4f0;
    transform: scale(1.05);
  }
`;

const Solutions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      id="solutions"
      style={{
        padding: isMobile ? "4vh 0 2vh 0" : "8vh 0 4vh 0",
      }}
    >
      <Box>
        <Box
          style={{
            padding: isMobile ? "3vh 3vw" : "7vh 5vw",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" fontWeight={600}>
            Our{" "}
            <Typography
              component="span"
              variant="h2"
              fontWeight={600}
              color="primary"
            >
              Solutions
            </Typography>
          </Typography>
        </Box>
        <Banner />
      </Box>
      <Box
        style={{
          marginTop: isMobile ? "6vh" : "12vh",
          background: "rgba(41, 173, 190, 0.20)",
          padding: isMobile ? "3vh 0" : "6vh 0",
        }}
      >
        <Box
          style={{
            marginBottom: isMobile ? "3vh" : "6vh ",
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
          style={{
            padding: isMobile ? "0 3vw " : "0 5vw ",
          }}
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
              flexDirection: "column",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tag>
                <img src={Location} alt="location" width="60%" height="60%" />
              </Tag>
            </Box>
            <Box style={{ paddingBottom: "30px" }}>
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
              flexDirection: "column",
            }}
          >
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Tag>
                <img src={Security} alt="location" width="60%" height="60%" />
              </Tag>
            </Box>
            <Box style={{ paddingBottom: "30px" }}>
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
              flexDirection: "column",
              maxWidth: "75%",
            }}
          >
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Tag>
                <img
                  src={Productivity}
                  alt="location"
                  width="60%"
                  height="60%"
                />
              </Tag>
            </Box>
            <Box style={{ paddingBottom: "30px" }}>
              <Typography variant="h5" fontWeight={500}>
                Improved Efficiency and Productivity
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1">
                {" "}
                IPS systems enhance productivity by accurately tracking people
                and assets, optimizing workflows and resource allocation.{" "}
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
              flexDirection: "column",
              maxWidth: "75%",
            }}
          >
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Tag>
                <img src={Customers} alt="location" width="60%" height="60%" />
              </Tag>
            </Box>
            <Box style={{ paddingBottom: "30px" }}>
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
    </Box>
  );
};

export default Solutions;
