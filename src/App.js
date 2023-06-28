import React from "react";
import {
  Box,
  createTheme,
  ThemeProvider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { BrowserRouter } from "react-router-dom";

//Components
import Navbar from "../src/components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Hero from "./pages/Hero/Hero";

//creating theme
const theme = createTheme({
  typography: {
    fontFamily: "Roboto Slab,Noto Sans Mono, sans-serif",
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.2rem",
      },
    },
    h6: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#00C4F0",
    },
    secondary: {
      main: "#1B93AE",
    },
    dark: {
      main: "black",
    },
    light: {
      main: "white",
    },
  },
});

const App = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Box style={{ marginTop: isMobile ? "70px" : "90px" }}>
            <LandingPage />
            <Hero />
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
