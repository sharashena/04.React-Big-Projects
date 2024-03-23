import { Outlet } from "react-router-dom";
import Products from "../components/Products/Products";

const Movies = () => {
  return (
    <>
      <Products
        allGenres={`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`}
      />
      <Outlet />
    </>
  );
};

export default Movies;
