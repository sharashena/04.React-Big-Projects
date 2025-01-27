// react
import { useEffect } from "react";
import React, { Suspense } from "react";
const Modal = React.lazy(() => import("./components/Modal"));

// router
import { Routes, Route } from "react-router";
import { useLocation, useNavigate } from "react-router";

// pages link dynamically
import { pages } from "./helpers/pages";

// components
import Navbar from "./components/Navbar";
import Search from "./components/Search";

// helper
import { movieGenres, tvGenres } from "./helpers/genres";

// redux
import { useDispatch, useSelector } from "react-redux";
import { genresThunk } from "./redux/features/movies/moviesThunk";

const App = () => {
  const { modal } = useSelector(state => state.moviesSlice);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const hidePath = ["/splash", "/play"];
  const showNavbar = !hidePath.includes(location.pathname);
  const allGenres = movieGenres || tvGenres;

  useEffect(() => {
    navigate("/splash");
    dispatch(genresThunk(allGenres));
  }, [dispatch]);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {pages.map(({ element, path }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
      <Suspense fallback={<div></div>}>
        <Search />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Modal modal={modal} />
      </Suspense>
    </>
  );
};

export default App;
