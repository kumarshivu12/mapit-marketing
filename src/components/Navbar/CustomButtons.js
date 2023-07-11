import React, { useState } from "react";
import {
  Button,
  Typography,
  styled,
  Box,
  Stack,
  Link,
  useMediaQuery,
} from "@mui/material";
import { ArrowDownward, ArrowUpward, Phone } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { useTheme } from "@emotion/react";

// Styles
const StyledLink = styled(NavHashLink)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  border: 3px;
  text-align: center;
  &:hover {
    border-bottom-color: #1b93ae;

    &::after {
      transform: scaleX(1);
    }
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #1b93ae;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const CustomButtons = ({ direction, onClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // const scrollToBox=() =>{
  //   var element = document.getElementById("myBox");
  //   element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  // }

  return (
    <>
      <Stack direction={direction} spacing={3} justifyContent="center">
        <StyledLink
          to="/#solutions"
          smooth
          duration={500}
          onClick={handleButtonClick}
        >
          <Typography variant="h6" color="primary" fontWeight={600}>
            Solutions
          </Typography>
        </StyledLink>

        <StyledLink
          to="/#technology"
          onClick={() => {
            handleButtonClick();
            // scrollToBox();
          }}
          smooth
          duration={500}
        >
          <Typography variant="h6" color="primary" fontWeight={600}>
            Technology
          </Typography>
        </StyledLink>
        <StyledLink
          to="/blogs"
          onClick={handleButtonClick}
          smooth
          duration={500}
        >
          <Typography variant="h6" color="primary" fontWeight={600}>
            Blogs
          </Typography>
        </StyledLink>
        <StyledLink
          to="/about"
          component={Link}
          onClick={() => {
            handleButtonClick();
            scrollToTop();
          }}
        >
          <Typography variant="h6" color="primary" fontWeight={600}>
            About Us
          </Typography>
        </StyledLink>
        <Button
          variant="contained"
          component={Link}
          startIcon={
            <Phone
              color="light"
              size="large"
              style={{
                marginRight: "10px",
                fontSize: isMobile ? "15px" : "25px",
              }}
            />
          }
          style={{
            backgroundColor: "#1B93AE",
            borderRadius: "30px",
            padding: "5px 20px",
            textTransform: "none",
          }}
          onClick={() => {
            navigate("/contact");
            handleButtonClick();
            scrollToTop();
          }}
        >
          <Typography variant="h6" color="white" fontWeight={600}>
            Contact Us
          </Typography>
        </Button>
      </Stack>
    </>
  );
};

export default CustomButtons;
