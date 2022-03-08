import * as React from "react";
// material
import {
  Box,
  Button,
  Typography,
  Modal,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import { Close, PlayArrow, AddOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  background: "#141414",
};

const base_url = "https://image.tmdb.org/t/p/original/";

const useStyles = makeStyles(theme => ({
  header: {
    position: "relative",
  },
  modalContent: {
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  bottomShadow: {
    background:
      "linear-gradient(180deg, transparent, rgba(14,14,14, .6), #141414)",
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "7.5rem",
  },
  closeBtn: {
    cursor: "pointer !important",
    background: "#141414",
    position: "absolute",
    top: 0,
    right: 0,
    margin: "1rem",
    width: "40px",
    color: "#fff",
    border: "1px solid #fff",
    transition: "all .3s linear",
    "&:hover": {
      background: "#fff",
      color: "#141414",
    },
  },
  headerBtns: {
    position: "absolute",
    bottom: "50px",
    left: 0,
    marginLeft: "2rem",
    zIndex: "1",
  },
  addListBtn: {
    border: "1px solid #fff",
    color: "#fff",
    width: "40px",
    height: "40px",
    marginLeft: "1rem",
    transition: "all .3s linear",
    "&:hover": {
      background: "#fff",
      color: "#141414",
    },
  },
  playBtn: {
    width: "150px",
    background: "#E50914",
    borderRadius: "7px !important",
    color: "#fff",
    outline: "0",
    border: "0",
    textTransform: "capitalize",
    "&:hover": {
      background: "#CC0812",
      outline: "0",
      border: "0",
    },
  },
}));

export default function ModalRow({
  handleCloseModal,
  openModal,
  movie: movies,
  genres,
}) {
  const classes = useStyles();
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-row"
      aria-describedby="modal-row-description"
      sx={{
        maxHeight: "500px",
        margin: "auto",
        overflowY: "scroll",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <div>
        {movies.map(movie => {
          return (
            <Box sx={style} className={classes.modalContent} key={movie.id}>
              {/* header */}
              <Box className={classes.header}>
                <img
                  src={`${base_url}${
                    movie?.backdrop_path || movie?.poster_path
                  }`}
                  alt={movie?.title || movie?.original_name || movie?.name}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
                {/* close button */}
                <IconButton
                  className={classes.closeBtn}
                  disableRipple
                  onClick={handleCloseModal}
                >
                  <Close />
                </IconButton>
                {/* header buttons */}
                <ButtonGroup className={classes.headerBtns}>
                  <Button className={classes.playBtn} startIcon={<PlayArrow />}>
                    play
                  </Button>
                  <IconButton className={classes.addListBtn}>
                    <AddOutlined />
                  </IconButton>
                </ButtonGroup>
                {/* bottom shadow */}
                <Box className={classes.bottomShadow} />
              </Box>

              {/* modal footer */}
              <Box
                sx={{
                  p: 3,
                  position: "relative",
                  color: "#fff",
                }}
              >
                {/* movie's img */}
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      marginBottom: "1.5rem",
                    }}
                  >
                    {movie?.title || movie?.original_title || movie?.name}
                  </Typography>
                  <Typography variant="body1">{movie?.overview}</Typography>
                  <hr
                    style={{
                      margin: "2rem 0",
                    }}
                  />
                </Box>

                {/* movie's description */}
                <Box>
                  {/* movie's title */}
                  <Typography variant="h5">
                    Info on{" "}
                    {movie?.title || movie?.original_name || movie?.name}
                  </Typography>
                </Box>

                {/* info about movie */}
                <Box
                  sx={{
                    marginTop: "1.5rem",
                  }}
                >
                  {/* genres */}
                  <Typography sx={{ display: "flex" }}>
                    Genres:
                    {movie.genre_ids.map(genreId => {
                      return genres
                        .filter(el => el.id === genreId)
                        .map(genre => (
                          <span key={genre} style={{ marginLeft: ".5rem" }}>
                            {" "}
                            - {genre.name}
                          </span>
                        ));
                    })}
                  </Typography>
                  {/* first air date */}
                  <Typography variant="body1">
                    {`First air date: ${
                      movie.release_date
                        ? movie?.release_date.slice(0, 4)
                        : "Not Available"
                    }`}
                  </Typography>
                  {/* average vote */}
                  <Typography variant="body1">
                    {`Average vote: ${
                      movie?.vote_average
                        ? movie?.vote_average
                        : "Not Available"
                    }`}
                  </Typography>
                  {/* original language */}
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    {`Original language: ${
                      movie.original_language
                        ? movie?.original_language
                        : "Not Available"
                    }`}
                  </Typography>
                  {/* age restriction */}
                  <Typography variant="body1">
                    {`Age classification: ${
                      movie.adult ? "Suitable for all ages" : "Not Available"
                    }`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </div>
    </Modal>
  );
}
