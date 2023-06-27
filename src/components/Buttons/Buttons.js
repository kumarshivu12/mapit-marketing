import React from "react";
import { styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//Styles
const MyButton1 = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  text-transform: none;
  background-color: lightgrey;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  width: fit-content;
  overflow: hidden;
  transition: background-color 0.3s;

  &:hover {
    background-color: transparent;
    border: 2px solid black;
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid black;
    border-radius: 5px;
    transition: border-color 0.3s;
    z-index: -1;
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: -2;
  }

  &:hover::after {
    opacity: 0.2;
  }
`;

const MyButton2 = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  text-transform: none;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  width: fit-content;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #00c4f0;
    border-color: #00c4f0;
  }
`;

export const Button1 = ({ text, url }) => {
  return (
    <MyButton1 to={url}>
      <Typography variant="h6" fontWeight={600} style={{ color: "black" }}>
        {text}
      </Typography>
    </MyButton1>
  );
};
export const Button2 = ({ text, url }) => {
  return (
    <MyButton2 to="/">
      <Typography variant="h6" fontWeight={600} style={{ color: "black" }}>
        {text}
      </Typography>
    </MyButton2>
  );
};
