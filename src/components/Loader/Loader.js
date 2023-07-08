import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

//Styles
const Container = ({ children }) => (
  <Box
    sx={{
      minHeight: "100vh",
      maxWidth: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(61, 208, 227, 0.5)",
    }}
  >
    {children}
  </Box>
);

const pinKeyframes = keyframes`
  0% {
    top: 45%;
    bottom: 100px;
  }
  25% {
    top: 40%;
    bottom: 80px;
  }
  50% {
    top: 45%;
    bottom: 60px;
  }
  75% {
    top: 50%;
    bottom: 80px;
  }
  100% {
    top: 45%;
    bottom: 100px;
  }
`;

const Pin = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      animation: `${pinKeyframes} 0.8s infinite`,
      width: 70,
      height: 70,
      borderRadius: "50% 50% 50% 0",
      background: "#1B93AE",
      transform: "rotate(-45deg)",
      position: "relative",
    }}
  >
    <Box
      sx={{
        content: "''",
        width: 30,
        height: 30,
        background: "#ffe388",
        position: "absolute",
        borderRadius: "50%",
      }}
    />
  </Box>
);

const pulsateKeyframes = keyframes`
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
  }
`;

const Pulse = () => (
  <Box
    sx={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <Box
      sx={{
        position: "relative",
        height: 40,
        width: 40,
      }}
    >
      <Box
      // sx={{
      //   content: "''",
      //   borderRadius: "50%",
      //   height: 40,
      //   width: 40,
      //   position: "absolute",
      //   animation: `${pulsateKeyframes} 1s ease-out infinite`,
      //   opacity: 0,
      //   boxShadow: "0 0 1px 2px #312783",
      //   top: "50%",
      //   left: "50%",
      //   transform: "translate(-50%, -50%)",
      // }}
      />
      <Box
        sx={{
          background: "rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
          height: 14,
          width: 14,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotateX(55deg)",
        }}
      />
    </Box>
  </Box>
);

const Loader = () => {
  return (
    <Container>
      <Pin />
      <Pulse />
    </Container>
  );
};

export default Loader;
