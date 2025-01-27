// api key
const api = process.env.REACT_APP_API_KEY;

const movieRequests = {
  fetchTopRated: `/movie/top_rated?api_key=${api}`,
  fetchPopular: `/movie/popular?api_key=${api}`,
  fetchTrendingDay: `/trending/movie/day?api_key=${api}`,
  fetchNowPlaying: `/movie/now_playing?api_key=${api}`,
  fetchUpcoming: `/movie/upcoming?api_key=${api}`,
};

const tvRequests = {
  fetchTopRated: `/tv/top_rated?api_key=${api}`,
  fetchPopular: `/tv/popular?api_key=${api}`,
  fetchTrendingDay: `/trending/tv/day?api_key=${api}`,
  fetchNowPlaying: `/tv/airing_today?api_key=${api}`,
};

export { movieRequests, tvRequests };
