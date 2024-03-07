import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import { formatPrice } from "../../helpers/formatPrice";

const OrderTotal = () => {
  const { fee, totalAmount } = useCartContext();
  return (
    <section className="order-section">
      <div>
        <div className="order-container">
          <article className="order">
            <h5>
              subtotal : <span>{formatPrice(totalAmount)}</span>
            </h5>
            <p>
              shippping fee : <span>{formatPrice(fee)}</span>
            </p>
            <hr />
            <h4>
              order total : <span>{formatPrice(totalAmount + fee)}</span>
            </h4>
          </article>
        </div>
        <Link to="/login" className="btn order-btn">
          login
        </Link>
      </div>
    </section>
  );
};

export default OrderTotal;
