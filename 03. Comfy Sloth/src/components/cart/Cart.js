import React from "react";
import defaultImg from "../../assets/hero-bcg.jpeg";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { formatPrice } from "../../helpers/formatPrice";
import { useCartContext } from "../../context/cart_context";

const Cart = () => {
  const { cart, increaseBtn, decreaseBtn, removeItem } = useCartContext();

  return (
    <div className="carts">
      {cart.map(cartItem => {
        const { id, amount, name, price, image, color } = cartItem;
        return (
          <React.Fragment key={id}>
            <article className="cart-img-container">
              <img
                src={(image && image) || defaultImg}
                alt="hero"
                className="cart-img"
              />
              {/* img */}
              <div className="single-cart-info">
                <h5 className="cart-name">{name}</h5>

                <p className="cart-color">
                  color : <span style={{ backgroundColor: color }} />
                </p>

                <h5 className="price-small">{formatPrice(price)}</h5>
              </div>
            </article>
            {/* price */}
            <h5 className="cart-price">{formatPrice(price)}</h5>
            <article className="amount-container">
              <button
                type="button"
                className="amount-btn"
                onClick={() => decreaseBtn(id)}
              >
                <FaMinus />
              </button>
              <h2 className="amount">{amount}</h2>
              <button
                type="button"
                className="amount-btn"
                onClick={() => increaseBtn(id)}
              >
                <FaPlus />
              </button>
            </article>
            <h5 className="subtotal">{formatPrice(price * amount)}</h5>
            <button className="remove-btn" onClick={() => removeItem(id)}>
              <FaTrash />
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Cart;
