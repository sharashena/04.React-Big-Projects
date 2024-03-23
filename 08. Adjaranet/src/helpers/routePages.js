// pages
import { Home, Movies, TVs, Single, Person } from "../pages";

export const routePages = [
  {
    hasIndex: true,
    element: <Home />,
  },
  {
    path: "movies",
    element: <Movies />,
  },
  {
    path: "movie/:id",
    element: <Single />,
  },
  {
    path: "tvs",
    element: <TVs />,
  },
  {
    path: "tv/:id",
    element: <Single />,
  },
  {
    path: "person/:id",
    element: <Person />,
  },
];
