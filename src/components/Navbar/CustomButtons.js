import React, { useState } from "react";
import { Button, Typography, styled, Box, Stack, Link } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

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

const CustomButtons = ({ direction, onClose }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleButtonClick = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Stack direction={direction} spacing={4} justifyContent="center">
        <StyledBox to="/solutions" component={Link} onClick={handleButtonClick}>
          <Typography variant="h5" color="primary" fontWeight={600}>
            Solutions
          </Typography>
        </StyledBox>
        <StyledBox to="/blogs" component={Link} onClick={handleButtonClick}>
          <Typography variant="h5" color="primary" fontWeight={600}>
            Blogs
          </Typography>
        </StyledBox>
        <StyledBox
          to="/technology"
          component={Link}
          onClick={handleButtonClick}
        >
          <Typography variant="h5" color="primary" fontWeight={600}>
            Technology
          </Typography>
        </StyledBox>
        <StyledBox to="/about" component={Link} onClick={handleButtonClick}>
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
          onClick={handleButtonClick}
        >
          Contact Us
        </Button>
      </Stack>
    </>
  );
};

export default CustomButtons;
