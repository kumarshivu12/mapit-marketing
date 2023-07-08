import React from "react";
import { Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Buttons.css";
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

const MyButton3 = styled(Button)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;

  &:hover .circle {
    width: 100%;
  }

  &:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  &:hover .button-text {
    color: #fff;
  }
`;

export const Button3 = () => {
  return (
    <>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Learn More</span>
      </button>
    </>
  );
};

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
