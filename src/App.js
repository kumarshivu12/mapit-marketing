import React, { useEffect, useState } from "react";
import { Box, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Solutions from "./pages/Solutions/Solutions";
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

const PageContent = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulating an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, [location]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box>
        <Navbar />
        <Box style={{ marginTop: isMobile ? "70px" : "90px" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/solution1" element={<Solution1 />} />
            <Route path="/solutions/solution2" element={<Solution2 />} />
            <Route path="/solutions/solution3" element={<Solution3 />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <Loader /> */}
        <PageContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
