import React, { useState, useEffect } from "react";
import Modal from "./Modal";
// material
import { Box, Typography, Button } from "@mui/material";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

// axios
import { BASE_URL } from "../axios/baseUrl";
import { requests, tvRequests, popularRequests } from "../axios/requests";

const useStyles = makeStyles(() => ({
  banner: {
    width: "100%",
    height: "500px",
    position: "relative",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  bannerContent: {
    marginLeft: "3rem",
  },
  bannerTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
  },
  fadeBottom: {
    background:
      "linear-gradient(180deg, transparent, rgba(14,14,14, .6), #141414)",
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "7.5rem",
  },
  bannerBtns: {
    marginBottom: "1.3rem",
  },
  playBtn: {
    borderRadius: "7px",
    width: "130px",
    height: "43px",
    textTransform: "capitalize",
  },
  moreInfoBtn: {
    width: "140px",
    height: "43px",
    textTransform: "capitalize",
    borderRadius: "7px",
    background: "#605651",
    marginLeft: "1rem !important",
    "&:hover": {
      background: "#605162",
    },
  },
  bannerText: {
    width: "350px",
    lineHeight: "25px",
    fontSize: ".9rem",
    fontWeight: "500",
    fontFamily: "arial",
  },
}));

const base_url = "https://image.tmdb.org/t/p/original/";

const Banner = ({ handleOpenModal, handleCloseModal, openModal }) => {
  const [movies, setMovies] = useState([]);
  const classes = useStyles();

  const getData = async () => {
    let response = await BASE_URL.get(requests.fetchFakeflixOriginals);
    if (window.location.pathname === "/tvseries") {
      response = await BASE_URL.get(tvRequests.fetchFakeflixOriginals);
    } else if (window.location.pathname === "/popular") {
      response = await BASE_URL.get(popularRequests.fetchNews);
    }
    setMovies(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const sliceText = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <Box
      sx={{
        background: `url(${base_url}${movies?.backdrop_path}) center/cover`,
      }}
      className={classes.banner}
    >
      <Box className={classes.bannerContent}>
        {/* banner title */}
        <Typography variant="h2" className={classes.bannerTitle}>
          {movies?.title || movies?.original_name || movies?.name}
        </Typography>
        {/* banner btns */}
        <Box className={classes.bannerBtns}>
          <Button
            variant="contained"
            startIcon={<PlayArrow />}
            color="error"
            className={classes.playBtn}
          >
            play
          </Button>
          <Button
            variant="contained"
            startIcon={<InfoOutlined />}
            className={classes.moreInfoBtn}
            onClick={handleOpenModal}
          >
            more info
          </Button>
          <Modal
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            movies={movies}
          />
        </Box>
        {/* movie info */}
        <Typography variant="body2" className={classes.bannerText}>
          {sliceText(movies?.overview, 150)}
        </Typography>
      </Box>
      <Box className={classes.fadeBottom} />
    </Box>
  );
};

export default Banner;
