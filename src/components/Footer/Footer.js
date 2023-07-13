import { useTheme } from "@emotion/react";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box
      style={{
        background: "#FFF",
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
            <Typography variant="h6" fontWeight={500} color="primary" gutterTop>
              +91 XXX-XXX-XXXX
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h5" fontWeight={600} style={{ color: "black" }}>
            Solutions
          </Typography>
          <Box style={{ padding: "20px 0" }}>
            <Typography variant="body1" fontWeight={500}>
              Hybrid Space
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              Retail Stores
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              Hospitals
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h5" fontWeight={600} style={{ color: "black" }}>
            Technology
          </Typography>
          <Box style={{ padding: "20px 0" }}>
            <Typography variant="body1" fontWeight={500}>
              Bluetooth Low Energy
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              Inertial Measurement Units (IMU)
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              Fusion
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={3} md={3} sm={6} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h5" fontWeight={600} style={{ color: "black" }}>
            Quick Links
          </Typography>
          <Box style={{ padding: "20px 10px" }}>
            <Box>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <ArrowForward sx={{ color: "black", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "black" }}>
                  About Us
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link
                to="/blogs"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <ArrowForward sx={{ color: "black", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "black" }}>
                  Blog
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <ArrowForward sx={{ color: "black", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "black" }}>
                  Contact
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link
                to="/solutions"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <ArrowForward sx={{ color: "black", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "black" }}>
                  Career
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{
            background: "rgba(230, 230, 230, 1)",
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
              activeClassName="active"
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
          style={{ padding: "20px" }}
          textAlign="center"
        >
          <Typography variant="body1" style={{ color: "grey" }}>
            2023 MapIT.ai. All Rights Reserved &nbsp;&nbsp; |
            &nbsp;&nbsp;Privacy Policy &nbsp;&nbsp; |&nbsp;&nbsp; Cookies
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
