import React, { useEffect, useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Solutions from "./pages/Solutions/Solutions";
import Blogs from "./pages/Blogs/Blogs";
import Blogpage from "./pages/Blogs/Blogpage";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Loader from "./components/Loader/Loader";
import Technology from "./pages/Technology/Technology";
import Solution1 from "./pages/Solutions/Solution1";
import Solution2 from "./pages/Solutions/Solution2";
import Solution3 from "./pages/Solutions/Solution3";

//creating theme
const theme = createTheme({
  typography: {
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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Box style={{ marginTop: "90px" }}>
            <Routes>
            
              <Route path="/" element={<LandingPage />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/solution1" element={<Solution1 />} />
              <Route path="/solutions/solution2" element={<Solution2 />} />
              <Route path="/solutions/solution3" element={<Solution3 />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/blogpage" element={<Blogpage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<About />} />
              <Route path="/loader" element={<Loader />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
