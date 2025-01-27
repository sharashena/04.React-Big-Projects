import { useSelector } from "react-redux";
import { formatPrice } from "../../../helpers/formatPrice";
import { Link } from "react-router-dom";

const GridView = () => {
  const { filteredProducts } = useSelector(state => state.products);
  return (
    <div className="grid-container">
      {filteredProducts.map(product => {
        const { id, name, price, image } = product;
        return (
          <Link to={`/products/${id}`} className="grid-product" key={id}>
            <img src={image} alt={name} className="grid-img" />
            <h3 className="grid-title">{name}</h3>
            <p className="grid-price">{formatPrice(price)}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default GridView;
