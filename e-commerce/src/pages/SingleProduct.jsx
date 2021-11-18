import React from "react";
// import router
import { useParams, Link } from "react-router-dom";
// import react-icons
import { FaCheck } from "react-icons/fa";
// import context
import { useGlobalContext } from "../context/context";
// import cart context
import { useGlobalCartContext } from "../context/cart";
// import loading
import Loading from "../components/Loading";
// import extra images
import extra1 from "../images/z-extra-1.jpeg";
import extra2 from "../images/z-extra-2.jpeg";
import extra3 from "../images/z-extra-3.jpeg";
import extra4 from "../images/z-extra-4.jpeg";
// import react-icons
// import formatPrice
import { formatPrice } from "../tools/helper";

const SingleProduct = () => {
  const { products, changeIndex } = useGlobalContext();
  const { addToCart } = useGlobalCartContext();
  const { id } = useParams();
  const findSingle = products.find(item => item.id === id);

  if (!findSingle) {
    return <Loading />;
  }

  const {
    id: productId,
    name,
    price,
    image,
    colors,
    company,
    description,
  } = findSingle;

  return (
    <React.Fragment>
      <section className="header-section">
        <div className="section-center">
          <div className="navigates">
            <Link to="/">home</Link>
            <Link to="/products" className="products-page">
              <span> / </span>
              products
            </Link>
            <Link to={`/product/${productId}`} className="active-page">
              <span> / </span>
              {name}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-center single-center">
          <Link
            to="/products"
            className="btn btn-primary single-btn toProducts"
          >
            back to products
          </Link>
          <div className="single-details">
            <div className="img-container">
              <img src={image} alt={name} className="main-img" />
              <article className="extra-img">
                <img src={image} alt={name} />
                <img src={extra1} alt="z-extra-1" />
                <img src={extra2} alt="z-extra-2" />
                <img src={extra3} alt="z-extra-3" />
                <img src={extra4} alt="z-extra-4" />
              </article>
            </div>
            <div className="single-info">
              <h2>{name}</h2>
              <h5>{`${formatPrice(price)}`}</h5>
              <p>{description}</p>
              <div className="footer">
                <h3>
                  available : <span>in stock</span>{" "}
                </h3>
                <h3>
                  sku : <span>{productId}</span>{" "}
                </h3>
                <h3>
                  brand : <span>{company}</span>{" "}
                </h3>
                <h3>
                  colors :{" "}
                  <button
                    type="button"
                    className="color-btn"
                    style={{ backgroundColor: colors[0] }}
                    onClick={() => {
                      changeIndex(productId);
                    }}
                  >
                    <FaCheck className="active-color" />
                  </button>
                </h3>
                <hr />
                <br />
                <button
                  type="button"
                  className="addToCart"
                  onClick={() => addToCart(findSingle)}
                >
                  <Link to="/cart" className="btn btn-primary single-btn">
                    add to cart
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SingleProduct;
