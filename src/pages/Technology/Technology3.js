import { useTheme } from "@emotion/react";
import { Box, useMediaQuery, Grid, Typography, styled } from "@mui/material";
import React from "react";
//Components
import banner from "../../assets/images/Solution1Banner.webp";
import IMU from "../../assets/images/BLE.webp";
import HighAccuracy from "../../assets/images/HighAccuracy.webp";
import IncreasedRange from "../../assets/images/IncreasedRange.webp";
import Location from "../../assets/images/Location.svg";
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

const Technology3 = () => {
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
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "auto",
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
            {/* <Typography variant="h3" fontWeight={500} gutterBottom>
            Indoor Positioning Using
          </Typography>
          <Typography variant="h1" fontWeight={700} style={{ color: "#fff" }}>
            Embedded IMU Sensors in Smartphone Devices
          </Typography> */}
          </Box>
        </Box>
      </Box>

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
          padding: isMobile ? "4vh 3vw" : "8vh 5vw",
        }}
      >
        <Box>
          <Typography variant="body1">
            Combining BLE and IMU-based indoor positioning leads to:
            <ul>
              <li>More accurate and reliable indoor positioning system.</li>
              <li>
                BLE devices provide a rough estimate of the user's location.
              </li>
              <li>
                IMUs refine the estimate based on the user's movement patterns.
              </li>
              <li>Combining BLE and IMU-based indoor positioning leads to:</li>
            </ul>
          </Typography>
        </Box>
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
          lg={4}
          md={4}
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
                alt="improved accuracy"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Improved Accuracy
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              The impact of signal interference and sensor drift is reduced{" "}
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
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
                src={IncreasedRange}
                alt="increases range"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Increased Range
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              BLE devices has range up to 100 meters.{" "}
            </Typography>{" "}
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
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
                src={Location}
                alt="accurate poisitioning"
                width="60%"
                height="60%"
              />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Accurate Positioning
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              Suitable for multistory buildings, airports, alleys, parking
              garages, and underground locations.{" "}
            </Typography>{" "}
          </Box>
        </Grid>
      </Grid>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          Fusing BLE and IMU-based indoor positioning offers a promising
          solution for indoor positioning. Increased adoption of this technology
          can be expected as organizations seek to enhance operations and
          customer experiences.
        </Typography>
      </Box>
      <Box style={{ marginTop: isMobile ? "4vh" : "8vh" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Technology3;
