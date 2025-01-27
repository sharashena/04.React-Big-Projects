import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// display pages dynamically
import Root from "../App";
import { routePages } from "../helpers/routePages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {routePages.map((pages, index) => {
        const { path, element, hasIndex } = pages;
        return <Route index={hasIndex} path={path} element={element} key={index} />;
      })}
    </Route>
  )
);
