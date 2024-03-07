import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section section-center page-error">
      <div>
        <h1>404</h1>
        <h2>page not found</h2>
        <Link to="/" className="btn">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
