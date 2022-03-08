import { requests, tvRequests, popularRequests } from "../axios/requests";

export const rows = [
  {
    title: "trending",
    fetchUrl: requests.fetchTrending,
  },
  {
    title: "top rated",
    fetchUrl: requests.fetchTopRated,
  },
  {
    title: "fakeflix",
    fetchUrl: requests.fetchFakeflixOriginals,
    isLarge: true,
  },
  {
    title: "action",
    fetchUrl: requests.fetchActions,
  },
  {
    title: "adventure",
    fetchUrl: requests.fetchAdventure,
  },
  {
    title: "comedy",
    fetchUrl: requests.fetchComedy,
  },
  {
    title: "horror",
    fetchUrl: requests.fetchHorror,
  },
  {
    title: "romance",
    fetchUrl: requests.fetchRomance,
  },
  {
    title: "animation",
    fetchUrl: requests.fetchAnimation,
  },
  {
    title: "upcoming",
    fetchUrl: requests.fetchUpcoming,
  },
];

export const tvRows = [
  {
    title: "trending",
    fetchUrl: tvRequests.fetchTrending,
  },
  {
    title: "fakeflix",
    fetchUrl: tvRequests.fetchFakeflixOriginals,
    isLarge: true,
  },
  {
    title: "action & adventure",
    fetchUrl: tvRequests.fetchActions,
  },
  {
    title: "animation",
    fetchUrl: tvRequests.fetchAnimation,
  },
  {
    title: "comedy",
    fetchUrl: tvRequests.fetchComedy,
  },
  {
    title: "crime",
    fetchUrl: tvRequests.fetchCrime,
  },
  {
    title: "documentary",
    fetchUrl: tvRequests.fetchDocumentary,
  },
  {
    title: "family",
    fetchUrl: tvRequests.fetchFamily,
  },
  {
    title: "kids",
    fetchUrl: tvRequests.fetchKids,
  },
  {
    title: "Sci-Fi & fanstasy",
    fetchUrl: tvRequests.fetchSciFi,
  },
];

export const popRequsts = [
  {
    title: "top rated in your country",
    fetchUrl: popularRequests.fetchTopRated,
  },
  {
    title: "new on fakeflix",
    fetchUrl: popularRequests.fetchNews,
  },
  {
    title: "upcoming",
    fetchUrl: popularRequests.fetchUpcoming,
  },
];
