export const credits = (id, firstAirDate) => {
  return `/${firstAirDate ? "tv" : "movie"}/${id}/credits?api_key=${
    process.env.REACT_APP_API_KEY
  }`;
};
