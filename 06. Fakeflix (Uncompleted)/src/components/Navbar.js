import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
// material
import { AppBar, Toolbar, Box, InputBase } from "@mui/material";
import { Search, ArrowDropDown } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

// pictures
import logo from "../imgs/Fakeflix_logo.png";
import avatar from "../imgs/Fakeflix_profilepic.png";
import smallScreenLogo from "../imgs/Fakeflix_favicon_192.png";

// router link
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  nav: {
    background: "transparent",
    transition: "all .3s linear",
    color: "#fff",
  },
  navBlack: {
    background: "#141414",
    color: "#fff",
    transition: "all .3s linear",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navRightContent: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "130px",
    marginLeft: "2rem",
  },
  avatar: {
    width: "40px",
  },
  smallScreenLogo: {
    width: "40px",
  },

  // links

  linksContent: {
    display: "flex",
    alignItems: "center",
  },

  navLinks: {
    textDecoration: "none",
    color: "#fff",
    textTransform: "capitalize",
    fontFamily: "arial",
    marginRight: "1rem",
    fontSize: "1rem",
    transition: "all .3s linear",
    "&:hover": {
      color: "silver",
    },
  },
  navLinksContainer: {
    marginLeft: "2rem",
  },
  navRightContent: {
    display: "flex",
    alignItems: "center",
    "& img": {
      marginRight: ".3rem",
      marginLeft: "2rem",
    },
  },
  search: {
    fontSize: "2rem",
    cursor: "pointer",
  },
  searchBar: {
    border: "1px solid #fff",
    borderRadius: "10px",
    marginRight: ".5rem",
    color: "#fff",
    padding: "0 .5rem",
    transition: "all .3s linear",
  },
}));

const links = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "TV series",
    path: "/tvseries",
  },
  {
    name: "movies",
    path: "/movies",
  },
  {
    name: "new & popular",
    path: "/popular",
  },
  {
    name: "My list",
    path: "/mylist",
  },
];

const Navbar = () => {
  const { query, handleChange } = useGlobalContext();
  const [size, setSize] = useState(0);
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      // scroll
      if (window.scrollY >= 150) {
        setSize(window.innerHeight);
      } else {
        setSize(0);
      }

      // width
      setWidthSize(window.innerWidth);
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  const classes = useStyles();
  return (
    <AppBar
      color="transparent"
      elevation={0}
      className={`${size ? classes.navBlack : classes.nav}`}
    >
      <Toolbar className={classes.navContent}>
        {/* navbar left content */}
        <Box className={classes.linksContent}>
          {widthSize >= 768 ? (
            <Link to="/home">
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
          ) : (
            <Link to="/home">
              <img
                src={smallScreenLogo}
                alt="logo"
                className={classes.smallScreenLogo}
              />
            </Link>
          )}
          {widthSize >= 768 &&
            links.map((link, index) => {
              const { name, path } = link;
              return (
                <Box className={classes.navLinksContainer} key={index}>
                  <Link to={path} key={index} className={classes.navLinks}>
                    {name}
                  </Link>
                </Box>
              );
            })}
        </Box>
        {/* navbar right content */}
        <Box className={classes.navRightContent}>
          <InputBase
            className={classes.searchBar}
            sx={{
              width: showSearchBar ? "200px" : 0,
              opacity: showSearchBar ? 1 : 0,
            }}
            placeholder="Search movies..."
            value={query}
            onChange={handleChange}
          />
          <Search className={classes.search} onClick={toggleSearchBar} />
          <Box
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <img src={avatar} alt="avatar" className={classes.avatar} />
            <ArrowDropDown />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
