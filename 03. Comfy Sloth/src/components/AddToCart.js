import { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AddToCart = ({ product }) => {
  const { colors, id, stock } = product;
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);
  const [mainColor, setMainColor] = useState(colors[0]);

  const increaseBtn = () => {
    setAmount(oldVal => {
      let tempValue = oldVal + 1;
      if (tempValue > stock) {
        tempValue = stock;
      }
      return tempValue;
    });
  };
  const decreaseBtn = () => {
    setAmount(oldVal => {
      let tempValue = oldVal - 1;
      if (tempValue < 1) {
        tempValue = 1;
      }
      return tempValue;
    });
  };

  return (
    <div className="single-footer">
      <article className="colors">
        <span>colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                type="button"
                className={
                  mainColor === color
                    ? "single-color-btn active-color"
                    : "single-color-btn"
                }
                style={{ background: color }}
                onClick={() => setMainColor(color)}
                key={index}
              >
                {mainColor === color && <FaCheck className="single-icon" />}
              </button>
            );
          })}
        </div>
      </article>
      <article className="amount-container single-amount-container">
        <button className="amount-btn" onClick={decreaseBtn}>
          <FaMinus />
        </button>
        <h2 className="amount">{amount}</h2>
        <button className="amount-btn" onClick={increaseBtn}>
          <FaPlus />
        </button>
      </article>
      <Link
        to="/cart"
        className="btn"
        onClick={() => addToCart(id + mainColor, mainColor, amount, product)}
      >
        add to cart
      </Link>
    </div>
  );
};

AddToCart.propTypes = {
  product: PropTypes.object.isRequired,
};

export default AddToCart;
