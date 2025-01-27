import { Outlet } from "react-router-dom";
import Products from "../components/Products/Products";

const TVs = () => {
  return (
    <>
      <Products
        allGenres={`/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`}
      />
      <Outlet />
    </>
  );
};

export default TVs;
