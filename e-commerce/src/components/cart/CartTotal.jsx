import React from "react";

import CartLogin from "./CartLogin";
const CartTotal = ({ fee, subTotal, total }) => {
  return (
    <section className="section">
      <div className="section-center cart-login">
        <div className="total">
          <h4>
            subtotal :<span>{subTotal}</span>
          </h4>
          <p>
            shipping fee :<span>{fee}</span>{" "}
          </p>
          <hr />
          <h2>
            order total : <span>{total}</span>
          </h2>
        </div>
        <CartLogin />
      </div>
    </section>
  );
};

export default CartTotal;
