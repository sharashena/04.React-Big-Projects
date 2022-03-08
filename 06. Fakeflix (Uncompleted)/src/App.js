import React from "react";
// components
import Navbar from "./components/Navbar";
import Genres from "./components/Url Params/Home/Genres";
import { Box } from "@mui/material";
// router
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// pages
import {
  Home,
  TVSeries,
  Movies,
  Popular,
  Mylist,
  Error,
} from "./pages/AllPage";

const App = () => {
  const history = useHistory();
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      history.push("/home");
    }
  });
  return (
    <Box
      sx={{
        background: "#141414",
        height: "100%",
      }}
    >
      <Navbar />
      {/* setting up router pages */}
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/home/:genres" children={<Genres />} />
        <Route exact path="/tvseries">
          <TVSeries />
        </Route>
        <Route exact path="/tvseries:genres" children={<Genres />} />
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/popular">
          <Popular />
        </Route>
        <Route exact path="/mylist">
          <Mylist />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Box>
  );
};

export default App;
