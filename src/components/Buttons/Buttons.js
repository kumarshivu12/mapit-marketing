import React from "react";
import { Button, styled, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Buttons.css";

export const Button1 = ({ text, url }) => {
  const navigate = useNavigate();
  return (
    <>
      <button className="button1" onClick={() => navigate(url)}>
        <Typography variant="h6" fontWeight={500}>
          {text}
        </Typography>
      </button>
    </>
  );
};
export const Button2 = ({ text, url }) => {
  const navigate = useNavigate();
  return (
    <>
      <button className="button2" onClick={() => navigate(url)}>
        <Typography variant="h6" fontWeight={500}>
          {text}
        </Typography>
      </button>
    </>
  );
};

export const Button3 = ({ text, url }) => {
  const navigate = useNavigate();
  return (
    <>
      <button className="button3" onClick={() => navigate(url)}>
        <Typography variant="h6" fontWeight={500}>
          {text}
        </Typography>
      </button>
    </>
  );
};
