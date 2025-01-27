// react
import { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { featuredThunk } from "../../redux/featured/featuredThunk";

// components
import Loading from "../Loading";

// helper
import { formatPrice } from "../../helpers/formatPrice";
import { Link } from "react-router-dom";

const Featured = () => {
  const { products, loading, errorMsg, isError } = useSelector(
    state => state.featured
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featuredThunk("react-store-products"));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <div className="section-center">
        <article className="section-title">
          <h2>featured products</h2>
          <hr />
        </article>
        {products && (
          <div className="featured-wrapper">
            {products.map(product => {
              const { id, name, price, image } = product;
              return (
                <Link
                  to={`products/${id}`}
                  className="featured-product"
                  key={id}
                >
                  <img src={image} alt={name} />
                  <h3 className="featured-name">{name}</h3>
                  <p className="featured-price">{formatPrice(price)}</p>
                </Link>
              );
            })}
          </div>
        )}
        {isError && <p>{errorMsg}</p>}
      </div>
    </section>
  );
};

export default Featured;
