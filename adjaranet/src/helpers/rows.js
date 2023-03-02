import { movieRequests, tvRequests } from "./requests";

export const rows = [
  { title: "ფილმები ქართულად", request: movieRequests.fetchTopRated },
  { title: "სერიალები ქართულად", request: tvRequests.fetchTopRated },
  { title: "ტოპ ფილმები", request: movieRequests.fetchTrendingDay },
  { title: "ტოპ სერიალები", request: tvRequests.fetchTrendingDay },
  { title: "პრემიერა", request: movieRequests.fetchPopular },
  { title: "ახალი დამატებული ფილმები", request: movieRequests.fetchNowPlaying },
  { title: "თრეილერები", request: movieRequests.fetchUpcoming },
];
