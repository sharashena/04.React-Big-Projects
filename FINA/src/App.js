import React from "react";

// dark mode
import DarkMode from "./DarkMode";
// todo list
import Todo from "./Todo";
// modal
import Modal from "./Modal";

const App = () => {
  return (
    <React.Fragment>
      <DarkMode />
      <Todo />
      <Modal />
    </React.Fragment>
  );
};

export default App;
