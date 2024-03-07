import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import PropTypes from "prop-types";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="star">
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <article className="stars-reviews">
      <div className="stars">{tempStars}</div>
      <p className="reviews"> ({reviews} customer reviews)</p>
    </article>
  );
};

Stars.propTypes = {
  stars: PropTypes.number,
  reviews: PropTypes.number,
};

export default Stars;
