import App from "../App";

// route pages
import { pages } from "../helpers/routePages";

// router tools
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {pages.map(({ path, element }, index) => {
        return <Route path={path} element={element} key={index} />;
      })}
    </Route>
  )
);
