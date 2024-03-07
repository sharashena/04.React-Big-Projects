import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { useProductsContext } from "../../context/products_context";
import Stars from "../../components/Stars";
import { formatPrice } from "../../helpers/formatPrice";

import AddToCart from "../../components/AddToCart";
import Images from "../../components/Images";

const SingleProduct = () => {
  const { id } = useParams();
  const { fetchSingleProduct, singleProduct, loading } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  const {
    id: productId,
    stock,
    price,
    company,
    description,
    images,
    name,
    reviews,
    stars,
  } = singleProduct;

  return (
    <main>
      <section className="section path-section">
        <div className="section-center path-center">
          <h3>
            <Link to="/" className="path">
              home
            </Link>
            <Link to="/products" className="path">
              / products
            </Link>
            / {name}
          </h3>
        </div>
      </section>
      <section className="section section-center single-page-center">
        <Images images={images} name={name} />
        <article className="single-page-info">
          <h2>{name}</h2>
          <div className="stars-container">
            <Stars stars={stars} reviews={reviews} />
          </div>
          <h5 className="price">{formatPrice(price)}</h5>
          <p className="desc">{description}</p>
          <p className="info">
            <span>available : </span>
            {stock ? "in stock" : "out of stock"}
          </p>
          <p className="info">
            <span>SKU : </span>
            {productId}
          </p>
          <p className="info">
            <span>brand : </span>
            {company}
          </p>
          <hr />
          {stock ? <AddToCart product={singleProduct} /> : null}
        </article>
      </section>
    </main>
  );
};

export default SingleProduct;
