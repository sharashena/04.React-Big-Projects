export const API_KEY = "7cce83b3867d697d23df11ea7054d13b";

export const requests = {
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=en-US`,
  fetchActions: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=en-US`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc&language=en-US`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=en-US`,
  fetchFakeflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&language=en-US`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=en-US`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&language=en-US`,
  fetchTrending: `/trending/movies/week?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
  fetchTopRated: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};

export const tvRequests = {
  fetchTrending: `/trending/tv/week?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
  fetchFakeflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=en-US`,
  fetchActions: `/discover/tv?api_key=${API_KEY}&with_genres=10759&sort_by=popularity.desc&language=en-US`,
  fetchAnimation: `/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=en-US`,
  fetchComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=en-US`,
  fetchCrime: `/discover/tv?api_key=${API_KEY}&with_genres=80&sort_by=popularity.desc&language=en-US`,
  fetchDocumentary: `/discover/tv?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc&language=en-US`,
  fetchFamily: `/discover/tv?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc&language=en-US`,
  fetchKids: `/discover/tv?api_key=${API_KEY}&with_genres=10762&sort_by=popularity.desc&language=en-US`,
  fetchSciFi: `/discover/tv?api_key=${API_KEY}&with_genres=10765&sort_by=popularity.desc&language=en-US`,
};

export const popularRequests = {
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc&region=US`,
  fetchNews: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2022-02-05&sort_by=popularity.desc&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
};
