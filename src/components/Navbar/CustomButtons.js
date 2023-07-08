import React, { useState } from "react";
import { Button, Typography, styled, Box, Stack, Link } from "@mui/material";
import { ArrowDownward, ArrowUpward, Phone } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Styles
const StyledBox = styled(NavLink)`
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
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #1b93ae;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;
const StyledHashBox = styled(HashLink)`
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActiveHashLink = (match, location) => {
    return (
      location.pathname === "/" &&
      (location.hash === "#solutions" || location.hash === "#technology")
    );
  };

  return (
    <>
      <Stack direction={direction} spacing={4} justifyContent="center">
        <StyledHashBox
          to="/#solutions"
          smooth
          duration={500}
          onClick={handleButtonClick}
          isActive={isActiveHashLink}
        >
          <Typography variant="h5" color="primary" fontWeight={600}>
            Solutions
          </Typography>
        </StyledHashBox>

        <StyledHashBox
          to="/#technology"
          component={Link}
          onClick={handleButtonClick}
          smooth
          duration={500}
          isActive={isActiveHashLink}
        >
          <Typography variant="h5" color="primary" fontWeight={600}>
            Technology
          </Typography>
        </StyledHashBox>
        <StyledBox
          to="/about"
          component={Link}
          onClick={() => {
            handleButtonClick();
            scrollToTop();
          }}
        >
          <Typography variant="h5" color="primary" fontWeight={600}>
            About Us
          </Typography>
        </StyledBox>
        <Button
          variant="contained"
          startIcon={<Phone />}
          style={{ backgroundColor: "#1B93AE", color: "white" }}
          component={NavLink}
          to="/contact"
          activeClassName="active"
          onClick={() => {
            handleButtonClick();
            scrollToTop();
          }}
        >
          Contact Us
        </Button>
      </Stack>
    </>
  );
};

export default CustomButtons;
