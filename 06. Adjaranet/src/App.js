// react
import { useEffect } from "react";

// router
import { Outlet } from "react-router-dom";

// components
import Navbar from "./components/Navbar & Sidebar/Navbar";
import Sidebar from "./components/Navbar & Sidebar/Sidebar";

// redux
import { useSelector, useDispatch } from "react-redux";
import { changeSize } from "./redux/home/productsSlice";

const App = () => {
  const { size } = useSelector(state => state.products);
  const dispatch = useDispatch();

  // change size of browser width

  useEffect(() => {
    const effect = window.addEventListener("resize", () => {
      dispatch(changeSize(window.innerWidth));
    });
    return () => window.removeEventListener("resize", effect);
  }, []);

  return (
    <>
      <header>
        <Navbar />
        {size < 1024 && <Sidebar />}
      </header>
      <Outlet />
    </>
  );
};

export default App;
