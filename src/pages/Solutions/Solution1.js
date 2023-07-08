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
import Location from "../../assets/images/Location.svg";
import Productivity from "../../assets/images/Productivity.svg";
import Customers from "../../assets/images/Customers.svg";
import Security from "../../assets/images/Security.svg";
import Footer from "../../components/Footer/Footer";
import banner from "../../assets/images/Solution1Banner.png";
import image1 from "../../assets/images/Solution1(1).jpg";
import image2 from "../../assets/images/Solution1(2).jpg";
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

const Solution1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Box
        style={{
          height: isMobile ? "50vh" : "70vh",
          clipPath: isMobile
            ? "polygon(49.7% 100%, 100% 90%, 100% 0.3%, 0% 0%, 0% 90%)"
            : "polygon(49.7% 100%, 100% 80%, 100% 0.3%, 0% 0%, 0% 80%)",
          marginBottom: isMobile ? "4vh" : "8vh",
        }}
      >
        <Box
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "auto",
            opacity: 0.3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ opacity: 1 }}>
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
                  Hybrid{" "}
                  <Typography
                    variant="h1"
                    fontWeight={700}
                    style={{ color: "black" }}
                    component="span"
                  >
                    Workspaces
                  </Typography>{" "}
                </Typography>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Revolutionize your work environment with our precise indoor
                  positioning for dynamic hybrid workspaces
                </Typography>
              </Box>
              <Button2 text="Ask for a Demo" />
            </Stack>
          </div>
        </Box>
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography variant="body1">
          In the post-COVID world, hybrid work has become the norm, contributing
          to a number of problems:
          <ul>
            <li>
              Employees desire flexibility and freedom in choosing where they
              work: in the office or from home.
            </li>
            <li> This shift poses challenges and frustrations for managers.</li>
            <li>
              {" "}
              Many office spaces are under-utilized due to hybrid work
              arrangements.
            </li>
            <li>
              {" "}
              Employees seek autonomy, while companies prioritize control and
              reliability.
            </li>
          </ul>
        </Typography>
        <Typography variant="h6" fontWeight={500} style={{ marginTop: "30px" }}>
          Due to this, bridging the gap between employee autonomy and company
          control is crucial.
        </Typography>
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography
          variant="h3"
          fontWeight={600}
          color="primary"
          textAlign="center"
        >
          Create Smart Workspaces{" "}
          <Typography
            component="span"
            variant="h3"
            fontWeight={600}
            style={{ color: "#444444" }}
          >
            with MapIT.ai
          </Typography>
        </Typography>
        <Box style={{ padding: isMobile ? "3vh 0" : "6vh 0" }}>
          <Typography varint="body1">
            <ul>
              <li>Book workstations using a mobile/web app.</li>
              AI technology determines seat allotments and provides choices to
              employees.
              <li>Managers can have oversight through the admin panel.</li>
              Flexibility for employees to work from home or come to the office
              at their convenience.
              <li>
                Managers gain insights into employee preferences and plans.
              </li>
              <li>
                Efficient utilization of office spaces, eliminating
                under-utilization.
              </li>
              <li>
                Efficient utilization of office spaces, eliminating
                under-utilization.
              </li>
            </ul>
          </Typography>
        </Box>
        <Typography
          variant="h5"
          fontWeight={600}
          color="secondary"
          textAlign="center"
        >
          Transform your workspace into a dynamic and flexible environment
          today, only with MapIT.ai
        </Typography>
      </Box>
      <Box style={{ height: isMobile ? "50vh" : "75vh" }}>
        <Box
          style={{
            clipPath: "polygon(0 25%, 100% 0%, 100% 75%, 0% 100%)",
            background: "rgba(73, 169, 190, 1)",
            height: "100%",
          }}
        ></Box>
        <img
          src={image2}
          alt="banner"
          style={{
            position: "relative",
            bottom: "50%",
            left: "50%",
            width: "auto",
            height: "90%",
            transform: "translate(-50%,-50%)",
            zIndex: 1,
          }}
        />
      </Box>
      <Box style={{ padding: isMobile ? "4vh 3vw" : "8vh 5vw" }}>
        <Typography
          variant="h3"
          fontWeight={600}
          color="primary"
          textAlign="center"
        >
          Benefits{" "}
          <Typography
            component="span"
            variant="h3"
            fontWeight={600}
            style={{ color: "#444444" }}
          >
            of workplace seat booking and workstation management
          </Typography>
        </Typography>
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
              <img src={Location} alt="location" width="60%" height="60%" />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Streamlined Process
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              Our workplace seat booking system simplifies workstation
              reservations for employees. They can easily view available
              options, select preferred dates and times, and make recurring
              bookings if necessary.{" "}
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
              <img src={Security} alt="location" width="60%" height="60%" />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              AI-driven system
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              Our AI-driven system intelligently assigns seats based on various
              factors like employee preferences, proximity to amenities, and
              team collaboration needs.{" "}
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
              <img src={Security} alt="location" width="60%" height="60%" />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Transparency
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              Our system provides managers with a comprehensive overview of
              office utilization, allowing them to effectively allocate
              resources and optimize space. They can monitor seat occupancy,
              track trends, and gain insights into employee activities.{" "}
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
              <img src={Security} alt="location" width="60%" height="60%" />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Flexibility
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              Our system offers employees increased flexibility by allowing them
              to choose their preferred work location, whether it's in the
              office or remotely giving them freedom to decide where they are
              most productive and comfortable, promoting work-life balance.{" "}
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
              <img src={Security} alt="location" width="60%" height="60%" />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Productivity
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              Improved employee satisfaction because of the flexibility and
              freedom offered at work leads to greater productivity{" "}
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
              <img src={Security} alt="location" width="60%" height="60%" />
            </Tag>
          </Box>
          <Box style={{ paddingBottom: "30px" }}>
            <Typography variant="h5" fontWeight={500}>
              Optimization
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {" "}
              Better office space management, resource allocation and optimized
              utilization of office facilities and resources{" "}
            </Typography>{" "}
          </Box>
        </Grid>
      </Grid>
      <Contact />
    </Box>
  );
};

export default Solution1;
