import React from "react";
// import prop-types
import PropTypes from "prop-types";
// import router link
import { Link } from "react-router-dom";
// import icons
import { FaSearch } from "react-icons/fa";
import { Featured } from "../styles/Featured";
import defaultImg from "../images/hero-bcg.jpeg";
// import context
import { formatPrice } from "../tools/helper";
const Product = ({ name, price, image, id }) => {
  return (
    <div className="featured-content">
      <Featured>
        <img src={(image && image) || defaultImg} alt={name} />
        <Link to={`/product/${id}`} className="search">
          <FaSearch />
        </Link>
      </Featured>
      <div className="img-footer">
        <p>{name}</p>
        <p className="price">{`${formatPrice(price) || 0}`}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Product;
