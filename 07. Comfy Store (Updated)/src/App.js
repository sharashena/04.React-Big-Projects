// react
import { useEffect } from "react";

// components
import Navbar from "./components/Navbar";

// router
import { Outlet } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

const App = () => {
  const { theme } = useSelector(state => state.featured);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default App;
