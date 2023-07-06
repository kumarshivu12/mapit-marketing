import React from "react";
import {
  Box,
  Typography,
  Grid,
  styled,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";

//Components
import banner from "../../assets/images/Solution1Banner.png";
import image1 from "../../assets/images/Solution1(1).svg";
import image2 from "../../assets/images/Solution1(2).svg";
import { Button2 } from "../../components/Buttons/Buttons";

const Solution1 = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box height="70vh" style={{ position: "relative" }}>
        <img
          src={banner}
          alt="banner"
          width="100%"
          height="100%"
          style={{ opacity: 0.3 }}
        />
        <Stack
          direction="column"
          spacing={4}
          justifyContent="center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            padding: "20px",
          }}
        >
          <Box>
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
      </Box>
      <Box style={{ padding: "0 2vw", margin: "20px 0" }}>
        <Box>
          <Grid container style={{ margin: "30px 0" }}>
            <Grid
              item
              lg={6}
              md={7}
              sm={12}
              xs={12}
              style={{ padding: "10px" }}
            >
              <Typography variant="h6" gutterBottom>
                In the post covid world, hybrid is all the shor! Employees want
                freedom over their work—sitting in an office with the team or
                working from the comfort of home. As a result, the work of
                managers has become a tad more challenging and frustrating. A
                lot of office spaces are getting under-utilized.Employees want
                autonomy, but the company wants control and reliability. How can
                the gap be bridged?
              </Typography>
              <Typography color="secondary" variant="h4" fontWeight={600}>
                Are you facing the same problem?
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
                src={image1}
                alt="banner"
                style={{ maxWidth: "75%", maxHeight: "75%" }}
              />
            </Grid>
          </Grid>
          <Grid container style={{ margin: "30px 0" }}>
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
                src={image2}
                alt="banner"
                style={{ maxWidth: "75%", maxHeight: "75%" }}
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={7}
              sm={12}
              xs={12}
              style={{ padding: "10px" }}
            >
              <Typography
                color="secondary"
                variant="h4"
                fontWeight={600}
                gutterBottom
              >
                We at MapIT.ai have the solution
              </Typography>
              <Typography variant="h6">
                Workplace seat booking/ workstation management. Employees book a
                workstation using a mobile/web app. AI decides what seats to
                allot, giving choices to the employee. The manager oversees
                through the admin panel. Neat, isn’t it? Employees can now work
                from home or come to the office whenever they want. Managers
                know what the employees want to do. Office spaces can be better
                managed. No more under-utilization.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Solution1;
