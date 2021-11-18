import React from "react";
// styled
import { CartStyled } from "../../styles/CartStyled";
// import router links
import { Link } from "react-router-dom";
// import cart context
import { useGlobalCartContext } from "../../context/cart";
// import react-icon
import { FaCheck, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
// import empty cart
import EmptyCart from "./EmptyCart";
import { formatPrice } from "../../tools/helper";
import CartTotal from "./CartTotal";

const CartItem = () => {
  const {
    cart,
    removeItem,
    increaseAmount,
    decreaseAmount,
    clearCart,
    subTotal,
    fee,
    total,
  } = useGlobalCartContext();

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <>
      <section className="header-section">
        <div className="section-center">
          <div className="navigates">
            <Link to="/">home</Link>
            <Link to="/cart">
              <span> / </span>
              cart
            </Link>
          </div>
        </div>
      </section>

      <CartStyled className="section">
        <div className="section-center cart-center">
          <div className="titles">
            <h5>item</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>sub total</h5>
          </div>
          <hr />
          {cart.map(item => {
            const { id, name, price, amount, image, colors } = item;
            return (
              <article className="cart-content" key={id}>
                <div className="img">
                  <img src={image} alt={name} />
                  <div className="cart-info">
                    <h4>{name}</h4>
                    <h4 className="color">
                      color :
                      <button
                        type="button"
                        style={{ background: colors[0] }}
                        className="color-btn"
                      >
                        <FaCheck className="active-color cart-color" />
                      </button>{" "}
                    </h4>
                    <h4 className="small-price">{`$${price}`}</h4>
                  </div>
                </div>
                <h5 className="price">{`${formatPrice(price)}`}</h5>
                <div className="count-cart">
                  <FaMinus
                    className="count-icon"
                    onClick={() => decreaseAmount(id, amount)}
                  />
                  <span>{amount}</span>
                  <FaPlus
                    className="count-icon"
                    onClick={() => increaseAmount(id)}
                  />
                </div>
                <h5 className="subtotal">{formatPrice(price * amount)}</h5>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </article>
            );
          })}
          <hr />
          <div className="cart-btns">
            <button type="button" className="btn btn-primary continue">
              <Link to="/products">continue shopping</Link>
            </button>
            <button
              type="button"
              className="btn btn-primary clear-btn"
              onClick={clearCart}
            >
              clear shopping cart
            </button>
          </div>
        </div>
      </CartStyled>
      <CartTotal
        fee={formatPrice(fee)}
        subTotal={formatPrice(subTotal)}
        total={formatPrice(subTotal + fee)}
      />
    </>
  );
};

export default CartItem;
