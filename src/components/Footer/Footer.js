import { useTheme } from "@emotion/react";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

//Styles
const StyledDiv = styled(Box)`
  cursor: pointer;
  text-decoration: none;
  color: #444444;
  transition: all 0.2s;
  &:hover {
    color: #00c4f0;
  }
`;

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box
      style={{
        background: "#E6E6E6",
        boxShadow:
          "0px -16.17043685913086px 32.34087371826172px 0px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Grid container style={{ padding: "10px" }}>
        <Grid
          item
          lg={3}
          md={3}
          sm={6}
          xs={12}
          style={{ padding: "20px" }}
          alignSelf="center"
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={600}
              color="secondary"
              gutterBottom
            >
              MapIT.ai
            </Typography>
            <Typography variant="body1">Main Gate Rd, IIT Area</Typography>
            <Typography variant="body1" gutterBottom>
              Powai, Mumbai Maharashtra 400076
            </Typography>
            <Typography variant="h6" fontWeight={500} color="primary">
              +91 XXX-XXX-XXXX
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h5" fontWeight={600} style={{ color: "black" }}>
            Solutions
          </Typography>
          <Box style={{ padding: "20px 0" }}>
            <StyledDiv
              component={Link}
              to="/solutions/solution1"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Hybrid Space
              </Typography>
            </StyledDiv>
            <StyledDiv
              component={Link}
              to="/solutions/solution2"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Retails Stores
              </Typography>
            </StyledDiv>
            <StyledDiv
              component={Link}
              to="/solutions/solution3"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Hospitals
              </Typography>
            </StyledDiv>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h5" fontWeight={600} style={{ color: "black" }}>
            Technology
          </Typography>
          <Box style={{ padding: "20px 0" }}>
            <StyledDiv
              component={Link}
              to="/technology/technology1"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Bluetooth Low Energy (BLE)
              </Typography>
            </StyledDiv>
            <StyledDiv
              component={Link}
              to="/technology/technology2"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Inertial Measurement Units (IMU)
              </Typography>
            </StyledDiv>
            <StyledDiv
              component={Link}
              to="/technology/technology3"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Fusion
              </Typography>
            </StyledDiv>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h5" fontWeight={600} style={{ color: "black" }}>
            Quick Links
          </Typography>
          <Box style={{ padding: "20px 0px" }}>
            <StyledDiv
              component={Link}
              to="/about"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                About Us
              </Typography>
            </StyledDiv>
            <StyledDiv
              component={Link}
              to="career"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Careers
              </Typography>
            </StyledDiv>
            <StyledDiv
              component={Link}
              to="/blogs"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                Blogs
              </Typography>
            </StyledDiv>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{
            background: "rgba(205, 205, 205, 1)",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={500}
              style={{ marginRight: isMobile ? "10px" : "20px" }}
            >
              Discover what MapIT.ai can do for you
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#00C4F0",
                color: "white",
                textTransform: "none",
              }}
              component={NavLink}
              to="/contact"
              onClick={() => {
                scrollToTop();
              }}
            >
              <Typography varint="h6" fontWeight={500}>
                Contact Us
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ padding: "5px" }}
          textAlign="center"
          alignSelf="center"
        >
          <Box>
            <Typography style={{ color: "grey", fontSize: "14px" }}>
              2023 MapIT.ai All Rights Reserved &nbsp;&nbsp; |
              &nbsp;&nbsp;Privacy Policy &nbsp;&nbsp; |&nbsp;&nbsp; Cookies
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
