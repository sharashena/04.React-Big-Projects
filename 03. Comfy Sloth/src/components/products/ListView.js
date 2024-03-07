import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers/formatPrice";
import PropTypes from "prop-types";

const ListView = ({ id, name, image, price, description }) => {
  return (
    <article className="flex-product">
      <img src={image} alt={price} className="flex-img" />
      <div className="flex-product-info">
        <h4>{name}</h4>
        <h5 className="price">{formatPrice(price)}</h5>
        <p>{description.slice(0, 150)}...</p>
        <Link to={id} className="btn details-btn">
          details
        </Link>
      </div>
    </article>
  );
};

ListView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ListView;
