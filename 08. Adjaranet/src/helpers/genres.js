export const allGenres = firstAirDate => {
  return `/genre/${firstAirDate ? "tv" : "movie"}/list?api_key=${
    process.env.REACT_APP_API_KEY
  }`;
};
