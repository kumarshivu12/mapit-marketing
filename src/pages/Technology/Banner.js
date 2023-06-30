import { Grid } from "@mui/material";
import React, { useState } from "react";

const Banner = () => {
  const [grid1Hovered, setGrid1Hovered] = useState(true);
  const [grid2Hovered, setGrid2Hovered] = useState(false);
  const [grid3Hovered, setGrid3Hovered] = useState(false);
  // const grid1Handler = () => {
  //   setGrid1Hovered(true);
  //   setGrid2Hovered(false);
  //   setGrid3Hovered(false);
  // };
  const grid2Handler = () => {
    setGrid1Hovered(false);
    setGrid2Hovered(true);
    setGrid3Hovered(false);
  };
  const grid2LeaveHandler = () => {
    setGrid1Hovered(true);
    setGrid2Hovered(false);
    setGrid3Hovered(false);
  };
  const grid3Handler = () => {
    setGrid1Hovered(false);
    setGrid2Hovered(false);
    setGrid3Hovered(true);
  };
  const grid3LeaveHandler = () => {
    setGrid1Hovered(true);
    setGrid2Hovered(false);
    setGrid3Hovered(false);
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          lg={4}
          md={4}
          style={{
            position: "relative",
            height: "300px",
          }}
          // onMouseEnter={grid1Handler}
          // onMouseLeave={() => setGrid1Hovered(false)}
        >
          <img
            src="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000"
            alt="image1"
            style={{
              position: "absolute",
              zIndex: grid1Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src="https://t4.ftcdn.net/jpg/01/78/70/85/360_F_178708554_Hl7o33K0mRduq9V8OJjoUzNQ5zOwdEwl.jpg"
            alt="image2"
            style={{
              position: "absolute",
              zIndex: grid2Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjvxV2N0UKa1SfcycAyqf8I_8QYhiQaGiMBAOJgCu9WKZ-FuD_nChsjiAlySs_TnHwpY&usqp=CAU"
            alt="image3"
            style={{
              position: "absolute",
              zIndex: grid3Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          style={{ position: "relative", height: "300px" }}
          onMouseEnter={grid2Handler}
          onMouseLeave={grid2LeaveHandler}
        >
          <img
            src="https://img.freepik.com/free-vector/beautiful-gradient-spring-landscape_23-2148448598.jpg"
            alt="image4"
            style={{
              position: "absolute",
              zIndex: grid1Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src="https://cdn.dribbble.com/users/3132182/screenshots/14895906/media/f69990574c18e1e42dd6c03867855531.png?compress=1&resize=400x300&vertical=center"
            alt="image5"
            style={{
              position: "absolute",
              zIndex: grid2Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src="https://pbs.twimg.com/media/DEU5Z9cXUAA6_zt.jpg:large"
            alt="image6"
            style={{
              position: "absolute",
              zIndex: grid3Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          style={{ position: "relative", height: "300px" }}
          onMouseEnter={grid3Handler}
          onMouseLeave={grid3LeaveHandler}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJGmd0oX0X1MzoEhAkGP2MHGrovSQXU6Rk3lXmoX4YtudqbSGvzuD3Qp4BTO7d7wiUPk&usqp=CAU"
            alt="image7"
            style={{
              position: "absolute",
              zIndex: grid1Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src="https://media.istockphoto.com/id/583809524/photo/alberta-wilderness-near-banff.webp?b=1&s=170667a&w=0&k=20&c=Blnw8daEMo_-6yXT5ZDO-mWe37U1zlqEne7Ifg2OTd0="
            alt="image8"
            style={{
              position: "absolute",
              zIndex: grid2Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uH2exSna0rWcyDlyLoMsdhwXzLup7CWTTDUHUloo-Ip30phTNzzqQ8DKB1yAJ70oGw&usqp=CAU"
            alt="image9"
            style={{
              position: "absolute",
              zIndex: grid3Hovered ? 3 : 1,
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
