import { useTheme } from "@emotion/react";
import { Box, useMediaQuery, Grid, Typography, styled } from "@mui/material";
import React from "react";
//Components
import banner from "../../assets/images/Solution1Banner.webp";
import IMU from "../../assets/images/BLE.webp";
import HighAccuracy from "../../assets/images/HighAccuracy.webp";
import Hardware from "../../assets/images/HighAccuracy.webp";
import Footer from "../../components/Footer/Footer";

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

const Technology2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Box
        style={{
          minHeight: isMobile ? "50vh" : "70vh",
          maxWidth: "100vw",
          clipPath: isMobile
            ? "polygon(49.7% 100%, 100% 90%, 100% 0.3%, 0% 0%, 0% 90%)"
            : "polygon(49.7% 100%, 100% 80%, 100% 0.3%, 0% 0%, 0% 80%)",
          // backgroundImage: `url(${banner})`,
          // backgroundPosition: "center",
          // backgroundSize: "auto",
          backgroundColor: "rgb(0, 137, 16",
        }}
      >
        <Box
          style={{
            background: "#e8e8e8ba",
            minHeight: isMobile ? "50vh" : "70vh",
          }}
        >
          <Box
            style={{
              padding: isMobile ? "10vh 1vw " : "20vh 3vw ",
            }}
          >
            <Typography variant="h3" fontWeight={500} gutterBottom>
              Indoor Positioning Using
            </Typography>
            <Typography variant="h1" fontWeight={700} style={{ color: "#fff" }}>
              Embedded IMU Sensors in Smartphone Devices
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        flexDirection={isMobile ? "column-reverse" : "row"}
        style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}
      >
        <Grid
          item
          lg={6}
          md={7}
          sm={12}
          xs={12}
          style={{ padding: "10px", marginTop: isMobile ? "4vh" : null }}
          alignSelf={isMobile ? null : "center"}
        >
          <Typography variant="body1">
            <strong>Inertial Measurement Units (IMUs)</strong> embedded in
            smartphones can be used to enable indoor positioning.
            <ul>
              <li>
                IMUs consist of sensors measuring acceleration and rotation
                rates in three dimensions.
              </li>{" "}
              <li>
                Machine learning algorithms leverage these sensors to determine
                the smartphone's position and orientation in 3D space.
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          md={5}
          sm={12}
          xs={12}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: isMobile ? "4vh" : null,
          }}
        >
          <img
            loading="lazy"
            src={IMU}
            alt="Inertial Measurement Units"
            style={{ width: "90%", height: "auto" }}
          />
        </Grid>
      </Grid>

      <Box
        style={{
          padding: isMobile ? "4vh 3vw" : "8vh 5vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          loading="lazy"
          src={IMU}
          alt="Inertial Measurement Units"
          style={{ width: "90%", height: "auto" }}
        />
      </Box>

      <Box
        style={{
          padding: isMobile ? "4vh 3vw " : "8vh 5vw ",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={600} color="primary">
          Advantages of IMU-based indoor positioning
        </Typography>{" "}
      </Box>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={{
          padding: isMobile ? "4vh 3vw " : "8vh 5vw ",
        }}
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tag>
              <img
                loading="lazy"
                src={HighAccuracy}
                alt="high accuracy"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h6" fontWeight={500}>
              High Accuracy
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              IMU-based positioning can be more accurate, unaffected by signal
              interference or BLE device density.{" "}
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Tag>
              <img
                loading="lazy"
                src={Hardware}
                alt="No specialized hardware"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h6" fontWeight={500}>
              No specialized hardware
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              No specialized hardware required as most smartphones already have
              embedded IMU sensors.{" "}
            </Typography>{" "}
          </Box>
        </Grid>
      </Grid>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          IMU-based indoor positioning is a promising technology that can
          revolutionize indoor positioning. As smartphones become more powerful
          and prevalent, the adoption of IMU-based positioning is expected to
          increase in the future.
        </Typography>
      </Box>
      <Box style={{ marginTop: isMobile ? "4vh" : "8vh" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Technology2;
