import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Buttons.css";

export const Button1 = ({ text, url }) => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    const element = document.documentElement;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleClick = (url) => {
    navigate(url);
    scrollToTop();
  };

  return (
    <>
      <button className="button1" onClick={() => handleClick(url)}>
        <Typography variant="h6" fontWeight={500}>
          {text}
        </Typography>
      </button>
    </>
  );
};
export const Button2 = ({ text, url }) => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    const element = document.documentElement;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleClick = (url) => {
    navigate(url);
    scrollToTop();
  };
  return (
    <>
      <button className="button2" onClick={() => handleClick(url)}>
        <Typography variant="h6" fontWeight={500}>
          {text}
        </Typography>
      </button>
    </>
  );
};

export const Button3 = ({ text, url }) => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    const element = document.documentElement;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleClick = (url) => {
    navigate(url);
    scrollToTop();
  };
  return (
    <>
      <button className="button3" onClick={() => handleClick(url)}>
        <Typography variant="h6" fontWeight={500}>
          {text}
        </Typography>
      </button>
    </>
  );
};
