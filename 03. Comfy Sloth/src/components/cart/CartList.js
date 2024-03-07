import Cart from "./Cart";
import OrderTotal from "./OrderTotal";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";

const CartList = () => {
  const { clearCart } = useCartContext();
  return (
    <>
      <header className="cart-header">
        <div className="content">
          <h5>item</h5>
          <h5>price</h5>
          <h5>quantity</h5>
          <h5>subtotal</h5>
        </div>
        <hr className="cart-line" />
      </header>
      <Cart />
      <hr className="cart-line" />
      <div className="btns-container">
        <Link to="/products" className="btn continue-btn">
          continue shopping
        </Link>
        <button className="btn clear-cart-btn" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <OrderTotal />
    </>
  );
};

export default CartList;
