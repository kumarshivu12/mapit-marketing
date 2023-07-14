import { Grid, Stack, Typography, Box, styled } from "@mui/material";
import React, { useState } from "react";

//Components
import first from "../../assets/images/1.webp";
import second from "../../assets/images/2.webp";
import third from "../../assets/images/3.webp";
import forth from "../../assets/images/4.webp";
import fifth from "../../assets/images/5.webp";
import sixth from "../../assets/images/6.webp";
import seventh from "../../assets/images/7.webp";
import eighth from "../../assets/images/8.webp";
import ninth from "../../assets/images/9.webp";
import { Button3 } from "../../components/Buttons/Buttons";
import { TechnologyData } from "../../data/data";

//Styles
const Overlay = styled(Stack)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: "#000000a8",
}));

const Banner = () => {
  const [grid1Hovered, setGrid1Hovered] = useState(false);
  const [grid2Hovered, setGrid2Hovered] = useState(false);
  const [grid3Hovered, setGrid3Hovered] = useState(false);
  const grid1Handler = () => {
    setGrid1Hovered(true);
    setGrid2Hovered(false);
    setGrid3Hovered(false);
  };
  const grid1LeaveHandler = () => {
    setGrid1Hovered(false);
    setGrid2Hovered(false);
    setGrid3Hovered(false);
  };
  const grid2Handler = () => {
    setGrid1Hovered(false);
    setGrid2Hovered(true);
    setGrid3Hovered(false);
  };
  const grid2LeaveHandler = () => {
    setGrid1Hovered(false);
    setGrid2Hovered(false);
    setGrid3Hovered(false);
  };
  const grid3Handler = () => {
    setGrid1Hovered(false);
    setGrid2Hovered(false);
    setGrid3Hovered(true);
  };
  const grid3LeaveHandler = () => {
    setGrid1Hovered(false);
    setGrid2Hovered(false);
    setGrid3Hovered(false);
  };
  return (
    <Box>
      <Grid
        container
        style={{ columnGap: "3px", flexWrap: "nowrap", cursor: "pointer" }}
      >
        <Grid
          item
          lg={4}
          md={4}
          style={{
            position: "relative",
            height: "400px",
          }}
          onMouseEnter={grid1Handler}
          onMouseLeave={grid1LeaveHandler}
        >
          <img
            loading="lazy"
            src={first}
            alt="image1"
            style={{
              position: "absolute",
              zIndex: grid1Hovered ? 3 : 2,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            loading="lazy"
            src={forth}
            alt="image2"
            style={{
              position: "absolute",
              zIndex: grid2Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            loading="lazy"
            src={seventh}
            style={{
              position: "absolute",
              zIndex: grid3Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <Overlay
            direction="column"
            spacing={4}
            justifyContent="center"
            style={{ zIndex: grid1Hovered ? 4 : -1 }}
          >
            <Box style={{ margin: "0 20px " }}>
              <Typography
                variant="h5"
                fontWeight={600}
                style={{ color: "white" }}
              >
                {TechnologyData[0].text}
              </Typography>
            </Box>
            <br />
            <Box style={{ margin: "0 20px " }}>
              <Button3 text="Read More" url={TechnologyData[0].url} />
            </Box>
          </Overlay>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          style={{ position: "relative", height: "400px" }}
          onMouseEnter={grid2Handler}
          onMouseLeave={grid2LeaveHandler}
        >
          <img
            loading="lazy"
            src={second}
            alt="image4"
            style={{
              position: "absolute",
              zIndex: grid1Hovered ? 3 : 2,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            loading="lazy"
            src={fifth}
            style={{
              position: "absolute",
              zIndex: grid2Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            loading="lazy"
            src={eighth}
            style={{
              position: "absolute",
              zIndex: grid3Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <Overlay
            direction="column"
            spacing={4}
            justifyContent="center"
            style={{ zIndex: grid2Hovered ? 4 : -1 }}
          >
            <Box style={{ margin: "0 20px " }}>
              <Typography
                variant="h5"
                fontWeight={600}
                style={{ color: "white" }}
              >
                {TechnologyData[1].text}
              </Typography>
            </Box>
            <br />
            <Box style={{ margin: "0 20px " }}>
              <Button3 text="Read More" url={TechnologyData[1].url} />
            </Box>
          </Overlay>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          style={{ position: "relative", height: "400px" }}
          onMouseEnter={grid3Handler}
          onMouseLeave={grid3LeaveHandler}
        >
          <img
            loading="lazy"
            src={third}
            style={{
              position: "absolute",
              zIndex: grid1Hovered ? 3 : 2,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            loading="lazy"
            src={sixth}
            style={{
              position: "absolute",
              zIndex: grid2Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            loading="lazy"
            src={ninth}
            alt="image9"
            style={{
              position: "absolute",
              zIndex: grid3Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <Overlay
            direction="column"
            spacing={4}
            justifyContent="center"
            style={{ zIndex: grid3Hovered ? 4 : -1 }}
          >
            <Box style={{ margin: "0 20px " }}>
              <Typography
                variant="h5"
                fontWeight={600}
                style={{ color: "white" }}
              >
                {TechnologyData[2].text}
              </Typography>
            </Box>
            <br />
            <Box style={{ margin: "0 20px " }}>
              <Button3 text="Read More" url={TechnologyData[2].url} />
            </Box>
          </Overlay>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
