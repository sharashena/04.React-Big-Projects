import { useProductsContext } from "../../context/products_context";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers/formatPrice";
import Loading from "../Loading";

const Featured = () => {
  const { featuredProducts: featured, loading } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section featured-section">
      <div className="section-title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center products-center">
        {featured.map(product => {
          const { id, name, price, image } = product;
          return (
            <div key={id}>
              <article className="img-container">
                <img src={image} alt={name} className="product-img" />
                <Link to={`products/${id}`} className="search-icon">
                  <FaSearch />
                </Link>
              </article>
              <article className="products-info">
                <h5>{name}</h5>
                <p className="products-price">{formatPrice(price)}</p>
              </article>
            </div>
          );
        })}
      </div>
      <Link to="products" className="btn featured-btn">
        all products
      </Link>
    </section>
  );
};

export default Featured;
