import * as React from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import { Close, PlayArrow, AddOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  background: "#141414",
  boxShadow: 24,
};

export default function TransitionsModal({
  openModal,
  handleCloseModal,
  movies,
}) {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="modal-movies"
      aria-describedby="moda-movies-descriptions"
      open={openModal}
      onClose={handleCloseModal}
      BackdropComponent={Backdrop}
      sx={{
        maxHeight: "500px",
        margin: "auto",
        overflowY: "scroll",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Fade in={openModal}>
        <Box sx={style} className={classes.modalContent}>
          {/* header */}
          <Box className={classes.header}>
            <img
              src={`${base_url}${movies?.backdrop_path}`}
              alt={movies?.title || movies?.original_name || movies?.name}
              style={{
                width: "100%",
                height: "600px",
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
                {movies?.title || movies?.original_title || movies?.name}
              </Typography>
              <Typography variant="body1">{movies?.overview}</Typography>
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
                Info on {movies?.title || movies?.original_name || movies?.name}
              </Typography>

              {/* info about movie */}
              <Box
                sx={{
                  marginTop: "1.5rem",
                }}
              >
                <Typography variant="body1">
                  {`Genres: ${
                    movies?.genres ? movies?.genres : "Not Available"
                  }`}
                </Typography>
                <Typography variant="body1">
                  {`First air date: ${
                    movies?.release_date
                      ? movies?.release_date.slice(0, 4)
                      : "Not Available"
                  }`}
                </Typography>
                <Typography variant="body1">
                  {`Average vote: ${
                    movies?.vote_average
                      ? movies?.vote_average
                      : "Not Available"
                  }`}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  {`Original language: ${
                    movies?.original_language
                      ? movies?.original_language
                      : "Not Available"
                  }`}
                </Typography>
                <Typography variant="body1">
                  {`Age classification: ${
                    movies?.age_classification
                      ? movies?.age_classification
                      : "Not Available"
                  }`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
