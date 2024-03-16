import { useEffect } from "react";
import { formatPrice } from "../../helpers/formatPrice";
// redux
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../../redux/cart/cartSlice";

const Checkout = () => {
  const { cart, shippingFee, tax, subTotal, orderTotal } = useSelector(
    state => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const { totalPrices, totalAmounts } = cart.reduce(
      (acc, product) => {
        const amount = product.amount;
        const price = product.price;
        acc.totalPrices += price;
        acc.totalAmounts += amount * price;
        return acc;
      },
      {
        totalPrices: 0,
        totalAmounts: 0,
      }
    );
    dispatch(calculateTotals({ totalPrices, totalAmounts }));
  });

  return (
    <div className="checkout-container">
      <article className="checkout-details">
        <p className="subtotal">
          subtotal <span>{formatPrice(subTotal)}</span>
        </p>
        <p className="shipping">
          shipping <span>{formatPrice(shippingFee)}</span>
        </p>
        <p className="tax">
          tax <span>{formatPrice(tax)}</span>
        </p>
        <h3 className="order-total">
          order total <span>{formatPrice(orderTotal)}</span>
        </h3>
      </article>
      <button type="button" className="btn checkout-btn">
        checkout
      </button>
    </div>
  );
};

export default Checkout;
