import React from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "./ui/styles";

// pages
import Home from "./pages/Home";
import TreeGrid from "./pages/TreeGrid";

// router
import { Routes, Route } from "react-router-dom";

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleIndex = (_, index) => {
    setValue(index);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Tabs value={value} onChange={handleIndex}>
            <Tab
              label="home"
              LinkComponent={RouterLink}
              to="/"
              className={classes.navLinks}
              disableRipple
            />
            <Tab
              label="TreeGrid"
              LinkComponent={RouterLink}
              to="/treeGrid"
              className={classes.navLinks}
              disableRipple
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treeGrid" element={<TreeGrid />} />
      </Routes>
    </>
  );
};

export default App;
