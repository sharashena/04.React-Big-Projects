import React from "react";
import ModalRow from "./ModalRow";

// router link
import { Link } from "react-router-dom";

// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// material
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import {
  AddRounded,
  ArrowForwardIosRounded,
  KeyboardArrowDown,
  PlayArrow,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const base_url = "https://image.tmdb.org/t/p/original/";

const useStyles = makeStyles(theme => ({
  rowTitle: {
    ...theme.typography.globalText,
    paddingLeft: "1rem",
    padding: "1rem 0",
    marginTop: "1rem",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",

    "&:hover a": {
      opacity: 1,
      marginLeft: "1rem",
    },
  },
  rowTitle2: {
    opacity: 0,
    transition: ".3s linear",
    fontSize: ".9rem",
    textDecoration: "none",
    color: "#fff",
  },
  rowImgs: {
    width: "100%",
    borderRadius: "10px",
    objectFit: theme.breakpoints.down("sm") ? "cover" : "auto",

    "&:hover ~ .MuiBox-root": {
      opacity: "1 !important",
      top: "50% !important",
      transform: "translateY(-50%) !important",
    },
  },
  rowPoster: {
    overflow: "hidden",
    padding: "0 1rem",
    position: "relative",
    cursor: "pointer",
  },
  posterContent: {
    position: "absolute",
    bottom: "-15%",
    transform: "translateY(100%)",
    left: 0,
    opacity: 0,
    padding: "1rem",
    transition: "all .4s ease-in-out",
  },
  contentBtn: {
    borderRadius: "50% !important",
    marginRight: "1rem",
    height: "40px",
    width: "40px",
    borderColor: "#fff",
    color: "#fff",
  },
  slide: {
    borderRadius: "10px",
    color: "#fff",
    textTransform: "capitalize",
    transition: "all .3s linear",

    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:hover  .MuiBox-root": {
      opacity: "1 !important",
      top: "50% !important",
      transform: "translateY(-50%)",
    },
  },
  posterGenres: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: ".5rem",
  },
}));

const Poster = ({
  title,
  isLarge,
  movie,
  genres,
  open,
  widthSize,
  handleOpen,
  handleClose,
}) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5" className={classes.rowTitle}>
        {title}
        <Link
          variant="body2"
          className={classes.rowTitle2}
          to={`/home/${title}`}
        >
          Show all
          <ArrowForwardIosRounded
            sx={{
              fontSize: ".6rem",
              marginLeft: ".3rem",
            }}
          />
        </Link>
      </Typography>
      <Swiper
        className={classes.rowPoster}
        slidesPerView={widthSize >= 768 ? 4 : 2}
        spaceBetween={10}
        slidesPerGroup={4}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        <ModalRow
          handleCloseModal={handleClose}
          handleOpenModal={handleOpen}
          openModal={open}
          movie={movie}
          genres={genres}
        />
        {/* poster */}
        {movie.map(movie => (
          <SwiperSlide className={classes.slide} key={movie.id}>
            <img
              src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
              alt={movie?.title}
              className={classes.rowImgs}
              style={{
                height: isLarge ? "400px" : "200px",
                objectFit: isLarge ? "cover" : null,
              }}
              onClick={handleOpen}
            />

            {widthSize >= 768 && (
              <Box className={classes.posterContent}>
                {/* poster btns */}
                <ButtonGroup className={classes.btns}>
                  <Button
                    classes={{ root: classes.contentBtn }}
                    variant="contained"
                    sx={{
                      background: "#fff",
                      color: "#222 !important",
                      "&:hover": {
                        background: "silver",
                      },
                    }}
                  >
                    <PlayArrow />
                  </Button>
                  <Button
                    classes={{ root: classes.contentBtn }}
                    variant="outlined"
                    sx={{
                      background: "transparent !important",
                      "&:hover": {
                        background: "#fff !important",
                        color: "#222",
                      },
                    }}
                  >
                    <AddRounded />
                  </Button>
                  <Button
                    classes={{ root: classes.contentBtn }}
                    sx={{
                      background: "transparent !important",
                      "&:hover": {
                        background: "#fff !important",
                        color: "#222",
                      },
                    }}
                    onClick={handleOpen}
                  >
                    <KeyboardArrowDown />
                  </Button>
                </ButtonGroup>
                {/* poster titles */}
                <Typography
                  variant="h6"
                  sx={{ marginBottom: "1rem", fontSize: "1.1rem" }}
                >
                  {movie?.original_name || movie?.title || movie?.name}
                </Typography>
                <Box className={classes.posterGenres}>
                  {movie.genre_ids.map(genreId => {
                    return genres
                      .filter(el => el.id === genreId)
                      .map(genre => {
                        return (
                          <Typography
                            variant="body2"
                            sx={{ marginRight: ".3rem" }}
                            key={genre}
                          >
                            - {genre.name}
                          </Typography>
                        );
                      });
                  })}
                </Box>
              </Box>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Poster;
