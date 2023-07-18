import React, { useState } from "react";
import {
  Button,
  Typography,
  styled,
  Box,
  Stack,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Phone } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

const StyledLink = styled(NavLink)`
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
`;
const StyledMenuItem = styled(MenuItem)`
  width: inherit;
  padding: 5px 20px;
  transition: all 0.2s;
  &:hover {
    color: #00c4f0;
    fontweight: 600;
    transform: scale(1.05);
  }
`;

const CustomButtons = ({ direction, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [solutionAnchorEl, setSolutionAnchorEl] = useState(null);
  const [technologyAnchorEl, setTechnologyAnchorEl] = useState(null);

  const handleSolutionClick = (event) => {
    setSolutionAnchorEl(event.currentTarget);
  };

  const handleTechnologyClick = (event) => {
    setTechnologyAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSolutionAnchorEl(null);
    setTechnologyAnchorEl(null);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = () => {
    handleClose();
    scrollToTop();
    onClose();
  };

  return (
    <Stack direction={direction} spacing={3} justifyContent="center">
      <StyledLink aria-haspopup="true" onClick={handleSolutionClick}>
        <Typography variant="h6" color="primary" fontWeight={600}>
          Solutions
        </Typography>
      </StyledLink>
      <Menu
        id="solutions-menu"
        anchorEl={solutionAnchorEl}
        open={Boolean(solutionAnchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          component={NavLink}
          to="/solutions/solution1"
          onClick={handleClose}
        >
          Solution 1
        </StyledMenuItem>
        <StyledMenuItem
          component={NavLink}
          to="/solutions/solution2"
          onClick={handleClose}
        >
          Solution 2
        </StyledMenuItem>
        <StyledMenuItem
          component={NavLink}
          to="/solutions/solution3"
          onClick={handleClose}
        >
          Solution 3
        </StyledMenuItem>
      </Menu>

      <StyledLink aria-haspopup="true" onClick={handleTechnologyClick}>
        <Typography variant="h6" color="primary" fontWeight={600}>
          Technology
        </Typography>
      </StyledLink>
      <Menu
        id="technology-menu"
        anchorEl={technologyAnchorEl}
        open={Boolean(technologyAnchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          component={NavLink}
          to="/technology/technology1"
          onClick={handleClose}
        >
          Technology 1
        </StyledMenuItem>
        <StyledMenuItem
          component={NavLink}
          to="/technology/technology2"
          onClick={handleClose}
        >
          Technology 2
        </StyledMenuItem>
        <StyledMenuItem
          component={NavLink}
          to="/technology/technology3"
          onClick={handleClose}
        >
          Technology 3
        </StyledMenuItem>
      </Menu>

      <StyledLink to="/career" onClick={handleLinkClick}>
        <Typography variant="h6" color="primary" fontWeight={600}>
          Careers
        </Typography>
      </StyledLink>

      <StyledLink to="/blogs" onClick={handleLinkClick}>
        <Typography variant="h6" color="primary" fontWeight={600}>
          Blogs
        </Typography>
      </StyledLink>

      <StyledLink to="/about" onClick={handleLinkClick}>
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
        onClick={handleLinkClick}
      >
        <Typography variant="h6" color="white" fontWeight={600}>
          Contact Us
        </Typography>
      </Button>
    </Stack>
  );
};

export default CustomButtons;
