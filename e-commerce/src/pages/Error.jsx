import React from "react";
// import router
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>page not found</p>
      <button type="button" className="btn btn-primary">
        <Link to="/">back to home</Link>
      </button>
    </div>
  );
};

export default Error;
