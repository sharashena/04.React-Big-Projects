import {
  Agreement,
  Privacy,
  Actors,
  Error,
  Home,
  Kids,
  Movies,
  SingleMovie,
  SingleTvSeries,
  TvSeries,
} from "../pages";

const pages = [
  {
    path: "agreement",
    element: <Agreement />,
  },
  {
    path: "privacy",
    element: <Privacy />,
  },
  {
    path: "actors",
    element: <Actors />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "kids",
    element: <Kids />,
  },
  {
    path: "movies",
    element: <Movies />,
  },
  {
    path: "movies/:id",
    element: <SingleMovie />,
  },
  {
    path: "tvseries",
    element: <TvSeries />,
  },
  {
    path: "tvseries/:id",
    element: <SingleTvSeries />,
  },
];

export { pages };
