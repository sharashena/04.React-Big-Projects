// router
import { Routes, Route } from "react-router-dom";
import { pages } from "./helpers/routePages";

// components
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {pages.map(({ path, element }, index) => {
          return <Route path={path} element={element} key={index} />;
        })}
      </Routes>
    </>
  );
};

export default App;
