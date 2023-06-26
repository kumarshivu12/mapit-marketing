import React from "react";
import { Grid, Typography, Box, styled } from "@mui/material";

//Components
import Banner from "./Banner";

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
  return (
    <Box>
      <Box style={{ padding: "30px 0", textAlign: "center" }}>
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
      <Box style={{ padding: "30px 0", textAlign: "center" }}>
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
      <Grid container spacing={3} justifyContent="center" alignItems="center">
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
          <Typography variant="body1">
            {" "}
            Velit scelerisque in dictum non consectetur. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam.{" "}
          </Typography>{" "}
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
          <Typography variant="body1">
            {" "}
            Velit scelerisque in dictum non consectetur. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam.{" "}
          </Typography>{" "}
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
          <Typography variant="body1">
            {" "}
            Velit scelerisque in dictum non consectetur. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam.{" "}
          </Typography>{" "}
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
          <Typography variant="body1">
            {" "}
            Velit scelerisque in dictum non consectetur. Enim blandit volutpat
            maecenas volutpat blandit aliquam etiam.{" "}
          </Typography>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Solutions;
