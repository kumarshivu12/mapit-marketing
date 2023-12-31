import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Box,
  styled,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  AccountCircle,
  MailOutline,
  Business,
  Phone,
  Email,
  Send,
  RotateLeft,
} from "@mui/icons-material";

//Components
import ContactForm from "./ContactForm";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        style={{
          padding: isMobile ? "4vh 3vw" : "8vh 5vw",
          background: "rgba(27, 147, 174, 0.80)",
        }}
      >
        <Box style={{ marginBottom: isMobile ? "4vh " : "8vh" }}>
          <Typography variant="h1" fontWeight={800}>
            Questions?
          </Typography>
          <Typography variant="h4" fontWeight={600} style={{ color: "white" }}>
            Contact Us Today!
          </Typography>
        </Box>
        <Grid
          container
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.78)",
          }}
        >
          <Grid
            item
            lg={7}
            md={8}
            sm={12}
            xs={12}
            style={{ padding: "50px 10px" }}
          >
            <ContactForm />
          </Grid>
          <Grid
            item
            lg={5}
            md={4}
            sm={12}
            xs={12}
            alignSelf="center"
            style={{ padding: "50px 10px" }}
          >
            <Stack
              direction="column"
              textAlign="center"
              alignSelf="center"
              spacing={4}
            >
              <Box
                style={{
                  marginLeft: "25%",
                  marginRight: "25%",
                  paddingBottom: "20px",
                  borderBottom: "1px solid gray",
                }}
              >
                <Typography variant="h5" fontWeight={600} color="gray">
                  ADDRESS
                </Typography>
                <Typography variant="body1" fontWeight={400}>
                  Main Gate Rd, IIT Area, Powai, Mumbai, Maharashtra 400076
                </Typography>{" "}
              </Box>
              <Box
                style={{
                  marginLeft: "30%",
                  marginRight: "25%",
                  paddingBottom: "20px",
                  borderBottom: "1px solid gray",
                }}
              >
                <Typography variant="h5" fontWeight={600} color="gray">
                  CALL US
                </Typography>
                <Typography variant="body1" fontWeight={400} color="primary">
                  +91 XXX-XXX-XXXX
                </Typography>{" "}
              </Box>
              <Box
                style={{
                  marginLeft: "30%",
                  marginRight: "25%",
                  paddingBottom: "20px",
                  borderBottom: "1px solid gray",
                }}
              >
                <Typography variant="h5" fontWeight={600} color="gray">
                  GOT A QUESTION?
                </Typography>
                <Typography variant="body1" fontWeight={400}>
                  Drop us an email and we’ll be in touch asap.
                </Typography>
                <Typography variant="body1" fontWeight={400} color="primary">
                  @mapit.ai
                </Typography>{" "}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
