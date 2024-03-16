// react icons
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const starsArray = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
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
    <div className="stars-reviews">
      <span className="stars">{starsArray}</span>
      <p className="reviews">{reviews} customers visit</p>
    </div>
  );
};

export default Stars;
