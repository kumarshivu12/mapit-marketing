import React from "react";
import {
  Box,
  Typography,
  Grid,
  styled,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";

//Components
import logo from "../../assets/images/logo.png";
import banner from "../../assets/images/Solution2Banner.jpg";
import { Button2 } from "../../components/Buttons/Buttons";

const Solution3 = () => {
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
            <Typography color="secondary" fontWeight={700} variant="h2">
              Customer engagement{" "}
              <Typography
                variant="h2"
                fontWeight={700}
                style={{ color: "black" }}
                component="span"
              >
                in malls or big retail/franchise stores
              </Typography>{" "}
            </Typography>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Redefining customer interactions through Indoor Positioning
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
              lg={7}
              md={7}
              sm={12}
              xs={12}
              style={{ padding: "10px" }}
            >
              <Typography variant="h6" gutterBottom>
                Have you ever gotten lost in a mall? Tapped someone on the
                shoulder to ask for directions; Or purchased something only to
                realize later that a sale was happening in a nearby store. Now
                consider the perspective of mall management. How do malls manage
                their customers? What value do they provide to their partner
                stores? Do they even know who their customers are? The answer is
                … NO! Malls know little to nothing about their customers.
                Despite marketing their elite culture, some of their basics are
                very primitive. Say footfalls … How do they count them? Via
                manual counters operated by security personnel. How do they
                retain customers? They don’t. How do they market to customers?
                They don’t. How do they market their events? Instagram posts.
              </Typography>
              <Typography color="secondary" variant="h4" fontWeight={600}>
                How do we bridge this gap between the people visiting the mall
                and the mall itself?
              </Typography>
            </Grid>
            <Grid
              item
              lg={5}
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
                src={logo}
                alt="banner"
                style={{ maxWidth: "75%", maxHeight: "75%" }}
              />
            </Grid>
          </Grid>
          <Grid container style={{ margin: "30px 0" }}>
            <Grid
              item
              lg={7}
              md={7}
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
                src={logo}
                alt="banner"
                style={{ maxWidth: "75%", maxHeight: "75%" }}
              />
            </Grid>
            <Grid
              item
              lg={5}
              md={5}
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
                Don’t worry, we got this
              </Typography>
              <Typography variant="h6">
                Dedicated Mobile app for the mall Customers use a mobile app to
                navigate within the mall, look for sales and offers and get
                points for engagement. Brands and Mall engage directly with the
                customer. Time and energy saving for customers. Increased
                customer loyalty. Increased valuation of the mall. Improved
                customer experience rating for the mall. Brands/mall get to
                monitor customer behavior (anonymously aggregated). Better
                insights, better opportunities. Increased sales.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Solution3;
