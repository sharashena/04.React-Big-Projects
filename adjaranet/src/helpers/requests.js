const API_KEY = "7cce83b3867d697d23df11ea7054d13b";

const movieRequests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrendingDay: `/trending/movie/day?api_key=${API_KEY}`,
  fetchTrendingWeek: `/trending/movie/week?api_key=${API_KEY}`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};

const tvRequests = {
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchAiringToday: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
  fetchTrendingDay: `/trending/tv/day?api_key=${API_KEY}`,
  fetchTrendingWeek: `/trending/tv/week?api_key=${API_KEY}`,
};

export { API_KEY, movieRequests, tvRequests };
