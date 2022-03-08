import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// axios
import { BASE_URL } from "../../../axios/baseUrl";
// helper
import { API_KEY } from "../../../axios/requests";

// material
import { Box, Typography, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useGlobalContext } from "../../../context";

const useStyles = makeStyles(() => ({
  category: {
    width: "100%",
    margin: "3vh auto 0",
  },
  categoryContent: {
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

const base_img_url = "https://image.tmdb.org/t/p/original/";

const Genres = () => {
  const classes = useStyles();
  const { page, setPage } = useGlobalContext();
  const { genres } = useParams();
  const [movies, setMovies] = useState([]);

  let url;
  if (genres === "trending") {
    url = `/trending/movies/week?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US&page=${page}`;
  } else if (genres === "top rated") {
    url = `/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc&region=US&page=${page}`;
  } else if (genres === "fakeflix") {
    url = `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=en-US&page=${page}`;
  } else if (genres === "action") {
    url = `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&language=en-US&page=${page}`;
  } else if (genres === "adventure") {
    url = `/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc&language=en-US&page=${page}`;
  } else if (genres === "comedy") {
    url = `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=en-US&page=${page}`;
  } else if (genres === "horror") {
    url = `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=en-US&page=${page}`;
  } else if (genres === "romance") {
    url = `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&language=en-US&page=${page}`;
  } else if (genres === "animation") {
    url = `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=en-US&page=${page}`;
  } else if (genres === "upcoming") {
    url = `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
  }

  const getData = async () => {
    const response = await BASE_URL.get(url);
    setMovies(oldMovies => {
      if (page === 2) {
        return response.data.results;
      } else {
        return [...oldMovies, ...response.data.results];
      }
    });
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    const lazyEvent = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        setPage(oldPage => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", lazyEvent);
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        padding: "2rem 4vw",
        paddingTop: "7rem",
        color: "#fff",
      }}
    >
      <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
        {genres}
      </Typography>
      <Box className={classes.category}>
        {movies.map(movie => {
          const { id, backdrop_path, poster_path, title, original_name, name } =
            movie;
          return (
            <Tooltip title={title || original_name || name} arrow key={id}>
              <Box className={classes.categoryContent}>
                <img
                  src={`${base_img_url}${backdrop_path || poster_path}`}
                  alt={title}
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

export default Genres;
