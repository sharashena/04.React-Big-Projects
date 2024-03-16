import CartProduct from "../components/Cart/CartProduct";
import CheckOut from "../components/Cart/Checkout";

// redux
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector(state => state.cart);
  return (
    <main>
      <section className="section cart-section">
        <div className="section-center">
          <article className="section-title">
            {cart.length === 0 ? (
              <h2>your cart is empty</h2>
            ) : (
              <h2>shopping cart</h2>
            )}
            <hr />
          </article>
          {cart.length !== 0 && (
            <div className="cart-wrapper">
              <CartProduct />
              <CheckOut />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Cart;
