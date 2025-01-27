import {
  Error,
  Home,
  List,
  Movies,
  Series,
  Play,
  Splash,
  Category,
} from "../pages";

export const pages = [
  {
    element: <Splash />,
    path: "splash",
  },
  {
    element: <Home />,
    path: "browse",
  },
  {
    element: <Category />,
    path: "browse/:title",
  },
  {
    element: <Series />,
    path: "series",
  },
  {
    element: <Category />,
    path: "series/:title",
  },
  {
    element: <Movies />,
    path: "movies",
  },
  {
    element: <Category />,
    path: "movies/:title",
  },
  {
    element: <List />,
    path: "list",
  },
  {
    element: <Play />,
    path: "play",
  },
  {
    element: <Error />,
    path: "*",
  },
];
