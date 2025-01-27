// react
import { useEffect, useState } from "react";
// router
import { useParams, Link, useNavigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { singleProductThunk } from "../../redux/products/productsThunk";
import { addToCart, closeTimeout } from "../../redux/cart/cartSlice";

// helper
import { formatPrice } from "../../helpers/formatPrice";
import Stars from "../../components/Stars";
import Images from "../../components/Images";

const Single = () => {
  const { singleProduct, loading } = useSelector(state => state.products);
  const { isFullStock, cart } = useSelector(state => state.cart);
  const navigate = useNavigate();

  const {
    id,
    name,
    category,
    company,
    price,
    description,
    colors,
    stars,
    stock,
    reviews,
  } = singleProduct;
  const dispatch = useDispatch();
  const params = useParams();
  const cartAmount = cart.map(product => product.amount);

  // use states
  const [currIndex, setCurrIndex] = useState(0);
  const [currColor, setCurrColor] = useState(0);
  const [amount, setAmount] = useState(1);

  const changeIndex = index => setCurrIndex(index);
  const changeColor = index => setCurrColor(index);

  const changeAmount = e => {
    setAmount(Number(e.target.value));
  };

  const handleAddToCart = (id, singleProduct, stockArr, amount, currColor) => {
    dispatch(addToCart({ id, singleProduct, stockArr, amount, currColor }));
    setTimeout(() => {
      dispatch(closeTimeout());
    }, 3000);
  };

  useEffect(() => {
    dispatch(singleProductThunk(`react-store-single-product?id=${params.id}`));
  }, []);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="loading"></div>
      </div>
    );
  }

  const stockArr = Array.from({ length: stock }, (_, index) => {
    return index + 1;
  });
  return (
    <main>
      <section className="section">
        <div className="section-center">
          <article className="path">
            <Link to="/" className="path-link">
              home
            </Link>{" "}
            {">"}
            <Link to="/products" className="path-link">
              products
            </Link>
          </article>
          <article className="single-product">
            <Images currIndex={currIndex} changeIndex={changeIndex} />

            <div className="single-product-info">
              <Stars stars={stars} reviews={reviews} />
              <h4 className="single-title">{name}</h4>
              <h4 className="single-category">{category}</h4>
              <h4 className="single-company">{company}</h4>
              <h4 className="single-price">{formatPrice(price)}</h4>
              <p className="single-description">{description}</p>
              <div className="colors-container">
                <h4 className="colors">colors</h4>
                {colors?.map((color, index) => {
                  return (
                    <button
                      type="button"
                      className={
                        currColor === index
                          ? "color-btn active-color"
                          : "color-btn"
                      }
                      style={{ background: color }}
                      key={index}
                      onClick={() => changeColor(index)}
                    />
                  );
                })}
              </div>
              {stock !== 0 && (
                <>
                  <div className="amount-container">
                    <label htmlFor="amount" className="single-amount">
                      amount
                    </label>
                    <select
                      name="amount"
                      id="amount"
                      className="single-product-amount"
                      value={amount}
                      onChange={changeAmount}
                    >
                      {stockArr.map((amount, index) => {
                        return <option key={index}>{amount}</option>;
                      })}
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn add-btn"
                    onClick={() => {
                      handleAddToCart(
                        id,
                        singleProduct,
                        stockArr,
                        amount,
                        currColor
                      );
                      if (cartAmount > stock) {
                        return;
                      } else {
                        navigate("/cart");
                      }
                    }}
                  >
                    add to bag
                  </button>
                  {isFullStock && <p className="full-stock">Stock is full!</p>}
                </>
              )}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Single;
