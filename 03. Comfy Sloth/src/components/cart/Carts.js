import { Link } from "react-router-dom";
import CartList from "../../components/cart/CartList";
import { useCartContext } from "../../context/cart_context";
import PropTypes from "prop-types";

const Carts = ({ title }) => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="empty-section">
        <div className="empty section-title">
          <h2>your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main>
      <section className="section path-section">
        <div className="section-center path-center">
          <h3>
            <Link to="/" className="path">
              home
            </Link>
            / {title}
          </h3>
        </div>
      </section>
      <section className="section section-center">
        <CartList />
      </section>
    </main>
  );
};

Carts.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Carts;
