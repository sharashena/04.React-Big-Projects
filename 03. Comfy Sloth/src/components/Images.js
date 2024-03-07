import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Images = ({ images, name }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const setIndex = index => setCurrIndex(index);
  return (
    <article className="single-img-container">
      <Link to="/products" className="btn back-btn">
        back to products
      </Link>
      <img
        src={images && images[currIndex].thumbnails.large.url}
        alt={name}
        className="single-img"
      />
      <div className="single-images">
        {images &&
          images.map((item, index) => {
            const image = item.thumbnails.large.url;
            return (
              <img
                src={image}
                alt={name}
                key={item.id}
                onClick={() => setIndex(index)}
                className={currIndex === index ? "active-img" : null}
              />
            );
          })}
      </div>
    </article>
  );
};

Images.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
};

export default Images;
