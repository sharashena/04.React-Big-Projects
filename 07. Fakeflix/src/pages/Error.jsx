import { Link } from "react-router";

const Error = () => {
  return (
    <section className="error-section">
      <div className="error-container">
        <h1>404 page not found</h1>
        <Link to={"/browse"} className="error-btn">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
