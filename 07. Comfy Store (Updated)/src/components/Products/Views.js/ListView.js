import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../helpers/formatPrice";

const ListView = () => {
  const { filteredProducts } = useSelector(state => state.products);

  return (
    <div className="list-container">
      {filteredProducts.map(product => {
        const { id, name, price, image, company, description } = product;
        return (
          <Link to={`/products/${id}`} className="list-product" key={id}>
            <img src={image} alt={name} className="list-img" />
            <div className="list-content">
              <h3 className="list-title">{name}</h3>
              <p className="list-company">{company}</p>
              <p className="list-desc">{description}</p>
            </div>
            <p className="list-price">{formatPrice(price)}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ListView;
