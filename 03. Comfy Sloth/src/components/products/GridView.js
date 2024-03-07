import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../../helpers/formatPrice";
import PropTypes from "prop-types";

const GridView = ({ id, name, price, image }) => {
  return (
    <div>
      <article className="img-container">
        <img src={image} alt={name} className="product-img" />
        <Link to={id} className="search-icon">
          <FaSearch />
        </Link>
      </article>
      <article className="products-info">
        <h5>{name}</h5>
        <p className="products-price">{formatPrice(price)}</p>
      </article>
    </div>
  );
};

GridView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default GridView;
