import { useState, useEffect } from "react";
// axios
import { BASE_URL } from "./axios/baseUrl";
import { API_KEY } from "./axios/requests";

import { useGlobalContext } from "./context";

export const useFetch = url => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { query } = useGlobalContext();

  const searchUrl = `/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`;

  const getData = async () => {
    if (query) {
      const response = await BASE_URL.get(searchUrl);
      setMovies(response.data.results);
    } else {
      const response = await BASE_URL.get(url);
      setMovies(response.data.results);
      setGenres(response.data.genres);
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  return { movies, genres };
};
