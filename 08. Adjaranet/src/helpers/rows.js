import { movieRequests, tvRequests } from "./requests";

export const rows = [
  {
    title: "ფილმები ქართულად",
    request: movieRequests.fetchTopRated,
    path: "movies",
  },
  {
    title: "სერიალები ქართულად",
    request: tvRequests.fetchTopRated,
    path: "tvs",
  },
  {
    title: "პოპულარული ფილმები",
    request: movieRequests.fetchPopular,
    path: "movies",
  },
  {
    title: "ტოპ ფილმები",
    request: movieRequests.fetchTrendingDay,
    path: "movies",
  },
  { title: "ტოპ სერიალები", request: tvRequests.fetchTrendingDay, path: "tvs" },
  {
    title: "ახალი დამატებული ფილმები",
    request: movieRequests.fetchNowPlaying,
    path: "movies",
  },
  {
    title: "ახალი დამატებული სერიალები",
    request: tvRequests.fetchNowPlaying,
    path: "tvs",
  },
  { title: "თრეილერები", request: movieRequests.fetchUpcoming },
];
