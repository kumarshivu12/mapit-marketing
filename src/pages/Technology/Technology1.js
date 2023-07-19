import { useTheme } from "@emotion/react";
import { Box, useMediaQuery, Grid, Typography, styled } from "@mui/material";
import React from "react";

//Components
import banner from "../../assets/images/Solution1Banner.webp";
import BLE from "../../assets/images/BLE.webp";
import Trilateration from "../../assets/images/BLE.webp";
import HighAccuracy from "../../assets/images/HighAccuracy.webp";
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

const Technology1 = () => {
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
          backgroundColor: "rgb(0, 137, 16",
          // backgroundPosition: "center",
          // backgroundSize: "auto",
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
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Indoor Trilateration Based Positioning Using
            </Typography>
            <Typography variant="h1" fontWeight={700} style={{ color: "#fff" }}>
              Bluetooth Low Energy Devices
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        flexDirection={isMobile ? "column-reverse" : "row"}
        style={{
          padding: isMobile ? "4vh 3vw" : "8vh 5vw",
        }}
      >
        <Grid
          item
          lg={6}
          md={7}
          sm={12}
          xs={12}
          style={{
            padding: "10px",
          }}
          alignSelf={isMobile ? null : "center"}
        >
          <Typography variant="body1">
            <strong>Bluetooth Low Energy (BLE)</strong> devices are a promising
            technology for indoor positioning.
            <ul>
              <li>
                BLE devices are small, low-power devices that can be attached or
                placed throughout a building.
              </li>{" "}
              <li>
                They broadcast signals that can be detected by other BLE devices
                for determining location.
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
            src={BLE}
            alt="bluetooth low energy"
            style={{ width: "90%", height: "auto" }}
          />
        </Grid>
      </Grid>
      <Grid container style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
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
            src={Trilateration}
            alt="trilateration"
            style={{ width: "90%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={7}
          sm={12}
          xs={12}
          style={{
            padding: "10px",
          }}
          alignSelf={isMobile ? null : "center"}
        >
          <Typography variant="body1">
            <strong>Trilateration</strong> is a common method used with BLE
            devices for indoor positioning.
            <ul>
              <li>
                Trilateration involves measuring distances to three or more
                known points.
              </li>{" "}
              <li>
                In indoor positioning, the known points are the BLE devices
                placed in the building.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
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
            <strong>Method -</strong>

            <ul>
              <li>
                Users' smartphones measure signal strength of nearby BLE devices
                to determine their location.
              </li>{" "}
              <li>
                Signal strength is compared to known signal strengths of BLE
                devices.
              </li>
              <li>
                Distance from each device is calculated using this information
                through trilateration.
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
            src={BLE}
            alt="bluetooth low energy"
            style={{ width: "90%", height: "auto" }}
          />
        </Grid>
      </Grid>

      <Box
        style={{
          padding: isMobile ? "4vh 3vw " : "8vh 5vw ",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={600} color="primary">
          Advantages of trilateration-based indoor positioning using BLE devices
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
              Precise locating, even in large buildings due to BLE devices range
              up to 100 meters{" "}
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
                src={HighAccuracy}
                alt="Inexpensive & easy installation "
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h6" fontWeight={500}>
              Inexpensive & easy installation
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              The economical nature of BLE makes them an appealing alternative
              for organisations{" "}
            </Typography>{" "}
          </Box>
        </Grid>
      </Grid>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          Trilateration-based indoor positioning using BLE devices is a
          promising technology. It has the potential to revolutionize indoor
          positioning. As organizations seek to enhance operations and customer
          experiences, this technology will likely see increased adoption in the
          future.
        </Typography>
      </Box>
      <Box style={{ marginTop: isMobile ? "4vh" : "8vh" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Technology1;
