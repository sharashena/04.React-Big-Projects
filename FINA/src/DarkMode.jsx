import React, { useState, useEffect } from "react";
// material ui
import Switch from "@material-ui/core/Switch";
import { Container } from "@material-ui/core";
import useStyles from "./styles";

const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return JSON.parse(localStorage.getItem("theme"));
  } else {
    return [];
  }
};

const DarkMode = () => {
  const classes = useStyles();
  // states
  const [theme, setTheme] = useState(getFromLocalStorage());

  // useeffects

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // handleChange

  const handleChange = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div>
      <Container className={classes.toggleMode}>
        <Switch {...label} onClick={handleChange} color="primary" />
      </Container>
    </div>
  );
};

export default DarkMode;
