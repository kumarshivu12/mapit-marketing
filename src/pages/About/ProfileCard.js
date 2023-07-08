import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  GitHub,
  Facebook,
  Instagram,
  LinkedIn,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

//Components
import account from "../../assets/images/account.png";

const ProfileCard = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [showIntro, setShowIntro] = useState(false);

  const handleArrowClick = () => {
    setShowIntro((prevState) => !prevState);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "90%",
          maxWidth: isMobile ? "250px" : "300px",
          padding: "50px 10px",
          background: "#FFFFFF",
          boxShadow: "8px 12px 8px rgba(0, 0, 0, 0.25)",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            transition: "transform 0.3s",
            zIndex: 1,
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <ArrowForwardIosOutlined
            style={{
              padding: "5px",
              borderRadius: "50%",
              backgroundColor: showIntro ? "white" : "#0F6579",
              color: showIntro ? "#0F6579" : "white",
              cursor: "pointer",
              fontSize: "10px",
              transition: "all 1s ease-out",
            }}
            onClick={handleArrowClick}
          />
        </Box>

        <Stack
          direction="column"
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={account}
            alt="mapit"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "3px solid #0F6579",
              overflow: "hidden",
              objectFit: "cover",
            }}
          />

          <Box style={{ textAlign: "center" }}>
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              Name
            </Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: 400, color: "#0F6579" }}
            >
              Designation
            </Typography>
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
            <IconButton href="/" size="large" sx={{ borderRadius: "50%" }}>
              <GitHub />
            </IconButton>
            <IconButton href="/" size="large" sx={{ borderRadius: "50%" }}>
              <Facebook />
            </IconButton>
            <IconButton href="/" size="large" sx={{ borderRadius: "50%" }}>
              <Instagram />
            </IconButton>
            <IconButton href="/" size="large" sx={{ borderRadius: "50%" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Stack>

        {showIntro && (
          <Box
            sx={{
              padding: "20px",
              position: "absolute",
              top: "0",
              left: "0",
              width: "90%",
              maxWidth: "300px",
              height: "100%",
              backgroundColor: "#0F6579",
              textAlign: "center",
              opacity: showIntro ? 1 : 0,
              transform: `translateY(${showIntro ? "0" : "-100%"})`,
              transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              color="white"
              gutterBottom
            >
              Introduction
            </Typography>
            <Typography variant="body1" color="white" gutterBottom>
              The focus of this initiative is to create industry acceptable
              products to solve some of the major issues in indoor space
              management and automation while simultaneously inculcating in
              students the required skills to tinker and build new and
              innovative solutions to real-world problems.
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProfileCard;
