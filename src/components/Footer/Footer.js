import { ArrowForward } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      <Grid container style={{ padding: "10px", background: "#091e3e" }}>
        <Grid item lg={3} md={6} sm={12} xs={12} style={{ padding: "20px" }}>
          hello
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h4" fontWeight={600} style={{ color: "white" }}>
            Get In Touch
          </Typography>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h4" fontWeight={600} style={{ color: "white" }}>
            Quick Links
          </Typography>
          <Box style={{ padding: "20px 10px" }}>
            <Box>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <ArrowForward sx={{ color: "white", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Home
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
                <ArrowForward sx={{ color: "white", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Solutions
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
                <ArrowForward sx={{ color: "white", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Technology
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
                <ArrowForward sx={{ color: "white", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  About
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
                <ArrowForward sx={{ color: "white", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Contact
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12} style={{ padding: "20px" }}>
          <Typography variant="h4" fontWeight={600} style={{ color: "white" }}>
            External Links
          </Typography>
          <Box style={{ padding: "20px 10px" }}>
            <Box>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <ArrowForward sx={{ color: "white", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Home
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
                <ArrowForward sx={{ color: "white", marginRight: "4px" }} />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Solutions
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
                <ArrowForward
                  color="primary"
                  size="small"
                  sx={{ marginRight: "4px" }}
                />
                <Typography variant="body1" sx={{ color: "white" }}>
                  Technology
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
