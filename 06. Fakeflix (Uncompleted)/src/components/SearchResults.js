import React from "react";
import { useFetch } from "../useFetch";
import { useGlobalContext } from "../context";
import defaultImg from "../imgs/FakeFlix_Default_Imgs.png";
// material
import { Box, Typography, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

const base_img_url = "https://image.tmdb.org/t/p/original/";

const useStyles = makeStyles(() => ({
  search: {
    padding: "2rem 4vw",
    paddingTop: "7rem",
    color: "#fff",
    transition: "all .3s linear",
  },
  searchMovies: {
    width: "100%",
    margin: "3vh auto 0",
  },
  searchMoviesContent: {
    borderRadius: "2px",
    display: "inline-block",
    margin: ".3rem",
    position: "relative",
    cursor: "pointer",
    transition: "all .3s linear",
    "&:hover": {
      transform: "scale(1.1)",
      zIndex: "1",
    },
  },
  img: {
    objectFit: "contain",
    maxHeight: "150px",
    width: "100%",
    height: "100%",
    display: "block",
    borderRadius: "5px",
  },
}));
const SearchResults = () => {
  const { query } = useGlobalContext();
  const { movies } = useFetch();
  const classes = useStyles();
  return (
    <Box className={classes.search}>
      <Typography variant="h5">Search results for: {query}</Typography>
      {/* search results */}
      <Box className={classes.searchMovies}>
        {movies.map(movie => {
          return (
            <Tooltip
              title={movie.title || movie.original_name || movie.name}
              arrow
              key={movie.id}
            >
              <Box className={classes.searchMoviesContent}>
                <img
                  src={
                    movie.backdrop_path
                      ? `${base_img_url}${movie?.backdrop_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                  className={classes.img}
                />
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
};

export default SearchResults;
