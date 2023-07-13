<<<<<<< HEAD
import { useTheme } from "@emotion/react";
import {
  Stack,
  Box,
  useMediaQuery,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
//Components
import Loyality from "../../assets/images/Loyality.webp";
import Time from "../../assets/images/Loyality.webp";
import Valuation from "../../assets/images/Loyality.webp";
import Rating from "../../assets/images/Loyality.webp";
import Behaviour from "../../assets/images/Behaviour.webp";
import Sales from "../../assets/images/Sales.webp";
import banner from "../../assets/images/Solution3Banner.webp";
import image1 from "../../assets/images/Solution2(1).webp";
import image2 from "../../assets/images/Solution2(2).webp";
import { Button2 } from "../../components/Buttons/Buttons";
import Contact from "../Contact/Contact";

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

const Solution3 = () => {
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
          marginBottom: isMobile ? "4vh" : "8vh",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          style={{
            minHeight: isMobile ? "50vh" : "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#e8e8e8ba",
          }}
        >
          <div>
            <Stack
              direction="column"
              spacing={4}
              justifyContent="center"
              alignItems="center"
              style={{
                padding: "20px",
              }}
            >
              <Box style={{ textAlign: "center" }}>
                <Typography color="secondary" fontWeight={700} variant="h1">
                  Asset Tracking{" "}
                  <Typography
                    variant="h1"
                    fontWeight={700}
                    style={{ color: "black" }}
                    component="span"
                  >
                    and Indoor Positioning in Hospitals
                  </Typography>{" "}
                </Typography>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Transform Hospital Efficiency
                </Typography>
              </Box>
              <Button2 text="Ask for a Demo" />
            </Stack>
          </div>
        </Box>
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          Indoor Positioning Systems (IPS) are needed in hospitals to address
          various challenges and improve operational efficiency.
        </Typography>
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
          style={{ padding: "10px" }}
          alignSelf={isMobile ? null : "center"}
        >
          <Typography variant="body1">
            <strong style={{ color: "#00C4F0" }}>Tracking Patients:</strong>
            <ul>
              <li>
                Hospitals require the ability to track the position of specific
                patients for various reasons, including monitoring their
                movements within the facility.
              </li>{" "}
              <li>
                Tracking patients helps enhance patient safety, optimize
                workflows, and improve care coordination within the hospital.
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
          }}
        >
          <img
            loading="lazy"
            src={image1}
            alt="banner"
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
          }}
        >
          <img
            loading="lazy"
            src={image1}
            alt="banner"
            style={{ width: "90%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={7}
          sm={12}
          xs={12}
          style={{ padding: "10px" }}
          alignSelf={isMobile ? null : "center"}
        >
          <Typography variant="body1">
            <strong style={{ color: "#00C4F0" }}>
              Tracking High-Value Assets:
            </strong>
            <ul>
              <li>
                Hospitals face challenges in tracking high-value assets such as
                equipment and devices, which can be misplaced or hidden by
                staff, leading to unnecessary expenses.
              </li>{" "}
              <li>
                Implementing asset tracking solutions helps hospitals
                efficiently locate and manage these assets, reducing costs,
                improving asset utilization, and minimizing equipment loss.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          <strong style={{ color: "#00C4F0" }}>Visitor Navigation:</strong>
          <ul>
            <li>
              Navigating within a hospital can be complex and confusing for
              visitors, causing inconvenience and potential delays.
            </li>{" "}
            <li>
              Providing a navigation system or mobile app specifically designed
              for hospitals helps visitors easily find their way, reducing
              stress and improving the overall visitor experience.
            </li>
          </ul>
        </Typography>
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          <strong style={{ color: "#00C4F0" }}>
            {" "}
            Customer Experience and Insurance Ratings:
          </strong>
          <ul>
            <li>
              Hospitals in the US receive insurance ratings based on their
              customer experience, which impacts the insurance stipends they
              receive.
            </li>{" "}
            <li>
              Focusing on enhancing customer experience yields a favorable
              return on investment for hospitals, as higher ratings result in
              increased insurance reimbursements and improved financial
              outcomes.
            </li>
          </ul>
        </Typography>
      </Box>
      <Contact />
    </Box>
  );
};

export default Solution3;
=======
import { useTheme } from "@emotion/react";
import {
  Stack,
  Box,
  useMediaQuery,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
//Components
import Loyality from "../../assets/images/Loyality.webp";
import Time from "../../assets/images/Loyality.webp";
import Valuation from "../../assets/images/Loyality.webp";
import Rating from "../../assets/images/Loyality.webp";
import Behaviour from "../../assets/images/Behaviour.webp";
import Sales from "../../assets/images/Sales.webp";
import banner from "../../assets/images/Solution3Banner.webp";
import image1 from "../../assets/images/Solution2(1).webp";
import image2 from "../../assets/images/Solution2(2).webp";
import { Button2 } from "../../components/Buttons/Buttons";
import Contact from "../Contact/Contact";

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

const Solution3 = () => {
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
          marginBottom: isMobile ? "4vh" : "8vh",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          style={{
            minHeight: isMobile ? "50vh" : "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#e8e8e8ba",
          }}
        >
          <div>
            <Stack
              direction="column"
              spacing={4}
              justifyContent="center"
              alignItems="center"
              style={{
                padding: "20px",
              }}
            >
              <Box style={{ textAlign: "center" }}>
                <Typography color="secondary" fontWeight={700} variant="h1">
                  Asset Tracking{" "}
                  <Typography
                    variant="h1"
                    fontWeight={700}
                    style={{ color: "black" }}
                    component="span"
                  >
                    and Indoor Positioning in Hospitals
                  </Typography>{" "}
                </Typography>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Transform Hospital Efficiency
                </Typography>
              </Box>
              <Button2 text="Ask for a Demo" />
            </Stack>
          </div>
        </Box>
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          Indoor Positioning Systems (IPS) are needed in hospitals to address
          various challenges and improve operational efficiency.
        </Typography>
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
          style={{ padding: "10px" }}
          alignSelf={isMobile ? null : "center"}
        >
          <Typography variant="body1">
            <strong style={{ color: "#00C4F0" }}>Tracking Patients:</strong>
            <ul>
              <li>
                Hospitals require the ability to track the position of specific
                patients for various reasons, including monitoring their
                movements within the facility.
              </li>{" "}
              <li>
                Tracking patients helps enhance patient safety, optimize
                workflows, and improve care coordination within the hospital.
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
          }}
        >
          <img
            loading="lazy"
            src={image1}
            alt="banner"
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
          }}
        >
          <img
            loading="lazy"
            src={image1}
            alt="banner"
            style={{ width: "90%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          md={7}
          sm={12}
          xs={12}
          style={{ padding: "10px" }}
          alignSelf={isMobile ? null : "center"}
        >
          <Typography variant="body1">
            <strong style={{ color: "#00C4F0" }}>
              Tracking High-Value Assets:
            </strong>
            <ul>
              <li>
                Hospitals face challenges in tracking high-value assets such as
                equipment and devices, which can be misplaced or hidden by
                staff, leading to unnecessary expenses.
              </li>{" "}
              <li>
                Implementing asset tracking solutions helps hospitals
                efficiently locate and manage these assets, reducing costs,
                improving asset utilization, and minimizing equipment loss.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          <strong style={{ color: "#00C4F0" }}>Visitor Navigation:</strong>
          <ul>
            <li>
              Navigating within a hospital can be complex and confusing for
              visitors, causing inconvenience and potential delays.
            </li>{" "}
            <li>
              Providing a navigation system or mobile app specifically designed
              for hospitals helps visitors easily find their way, reducing
              stress and improving the overall visitor experience.
            </li>
          </ul>
        </Typography>
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          <strong style={{ color: "#00C4F0" }}>
            {" "}
            Customer Experience and Insurance Ratings:
          </strong>
          <ul>
            <li>
              Hospitals in the US receive insurance ratings based on their
              customer experience, which impacts the insurance stipends they
              receive.
            </li>{" "}
            <li>
              Focusing on enhancing customer experience yields a favorable
              return on investment for hospitals, as higher ratings result in
              increased insurance reimbursements and improved financial
              outcomes.
            </li>
          </ul>
        </Typography>
      </Box>
      <Contact />
    </Box>
  );
};

export default Solution3;
>>>>>>> eed56797913f314bb7114a6be0fa386771dfed4f
