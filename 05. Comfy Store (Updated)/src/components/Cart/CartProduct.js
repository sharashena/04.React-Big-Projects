import { formatPrice } from "../../helpers/formatPrice";

// react icons
import { FaTrash } from "react-icons/fa";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  changeAmount,
  removeItem,
  clearCart,
} from "../../redux/cart/cartSlice";

const CartProduct = () => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleChangeAmount = (id, e) => {
    const value = e.target.value;
    const newAmount = cart.map(product => {
      if (product.id === id) {
        return { ...product, amount: Number(value) };
      } else {
        return product;
      }
    });
    dispatch(changeAmount(newAmount));
  };

  const handleRemoveItem = id => {
    const newProduct = cart.filter(product => product.id !== id);
    dispatch(removeItem(newProduct));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-products">
      {cart.map(product => {
        const { id, name, company, stockArr, color, img, amount, price } =
          product;
        return (
          <div key={id}>
            <article className="cart-product">
              <img src={img} alt={name} className="cart-img" />
              <div className="product-details">
                <h4>{name}</h4>
                <p className="cart-company">{company}</p>
                <p className="cart-color-container">
                  color:{" "}
                  <span style={{ background: color }} className="cart-color" />
                </p>
              </div>
              <div className="cart-handlers">
                <label htmlFor="amount">amount</label>
                <select
                  id="amount"
                  value={amount}
                  className="cart-amount"
                  onChange={e => handleChangeAmount(id, e)}
                >
                  {stockArr.map((stock, index) => {
                    return (
                      <option value={stock} key={index}>
                        {stock}
                      </option>
                    );
                  })}
                </select>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleRemoveItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
              <p className="cart-price">{formatPrice(price)}</p>
            </article>
            <hr />
          </div>
        );
      })}
      <button
        type="button"
        className="btn clear-cart"
        onClick={handleClearCart}
      >
        clear cart
      </button>
    </div>
  );
};

export default CartProduct;
