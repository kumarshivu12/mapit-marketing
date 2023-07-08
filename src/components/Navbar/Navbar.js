import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  styled,
  useMediaQuery,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

//Components
import logo from "../../assets/images/logo.png";
import CustomButtons from "./CustomButtons";

//Styles
const NavbarContainer = styled(AppBar)`
  && {
    background-color: #ffffff;
    color: #000000;
  }
`;

const Component = styled(Link)`
  margin-left: 10px;
  cursor: pointer;
  line-height: 0;
  color: #ffffff;
  text-decoration: none;
  color: inherit;
  &:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const CloseButton = styled(IconButton)`
  margin-left: auto;
  color: #000000;
`;

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavbarContainer position="fixed">
        <Toolbar
          style={{
            minHeight: isMobile ? "50px" : "70px",
            maxHeight: isMobile ? "50px" : "70px",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <Box>
            <Component to="/">
              <img
                src={logo}
                alt="logo"
                style={{
                  height: isMobile ? "30px" : "50px",
                  width: "auto",
                }}
                onClick={handleLogoClick}
              />
            </Component>
          </Box>

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              size="large"
            >
              <Menu />
            </IconButton>
          ) : (
            <CustomButtons direction="row" />
          )}

          <Drawer
            anchor="right"
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "10px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
                marginRight: "20px",
                width: "100%",
              }}
            >
              <CloseButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleClose}
              >
                <Close />
              </CloseButton>
            </Box>
            <CustomButtons direction="column" />
          </Drawer>
        </Toolbar>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
