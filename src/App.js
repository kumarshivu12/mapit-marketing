import React, { useEffect, useState } from "react";
import { Box, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

//Components
import Navbar from "../src/components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Solution1 from "./pages/Solutions/Solution1";
import Solution2 from "./pages/Solutions/Solution2";
import Solution3 from "./pages/Solutions/Solution3";
import Blogs from "./pages/Blogs/Blogs";
import Career from "./pages/Career/Career";
import Blogpage from "./pages/Blogs/Blogpage";
import Technology1 from "./pages/Technology/Technology1";
import Technology2 from "./pages/Technology/Technology2";
import Technology3 from "./pages/Technology/Technology3";
import Loader from "./components/Loader/Loader";

//creating theme
const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.3rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.7rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.6rem",
      },
    },
    h3: {
      fontSize: "1.6rem",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.2rem",
      },
    },
    h4: {
      fontSize: "1.3rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.7rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.9rem",
      },
    },
    h5: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.6rem",
      },
    },
    h6: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "0.9rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.3rem",
      },
    },
    body1: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.1rem",
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
      main: "#444444",
    },
    light: {
      main: "white",
    },
  },
});

const App = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(true);
  // const location = useLocation();
  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const contentStyle = {
    opacity: loading ? 0 : 1,
    transition: "opacity 0.01s ease-in-out", // Add the transition property
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <Box>
            <Navbar />
            <Box
              style={{ marginTop: isMobile ? "70px" : "90px", ...contentStyle }}
            >
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions/solution1" element={<Solution1 />} />
                <Route path="/solutions/solution2" element={<Solution2 />} />
                <Route path="/solutions/solution3" element={<Solution3 />} />
                <Route
                  path="/technology/technology1"
                  element={<Technology1 />}
                />
                <Route
                  path="/technology/technology2"
                  element={<Technology2 />}
                />
                <Route
                  path="/technology/technology3"
                  element={<Technology3 />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogpage/:id1" element={<Blogpage />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/career" element={<Career />} />
                <Route path="/loader" element={<Loader />} />
              </Routes>
            </Box>
          </Box>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
