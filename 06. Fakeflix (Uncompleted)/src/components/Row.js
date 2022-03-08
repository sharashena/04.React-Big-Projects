import React, { useState, useEffect } from "react";
import { useFetch } from "../useFetch";
import Poster from "./Poster";

// axios with base url
import { genresData } from "../helper/genres";

const Row = ({ title, fetchUrl, isLarge, path }) => {
  const { movies: movie } = useFetch(fetchUrl);
  const { genres } = useFetch(genresData);
  const [open, setOpen] = useState(false);
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      setWidthSize(window.innerWidth);
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <Poster
      title={title}
      isLarge={isLarge}
      movie={movie}
      genres={genres}
      open={open}
      widthSize={widthSize}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
};

export default Row;
