import { useState, useContext, createContext, useEffect } from "react";
const CartContext = createContext();

const getFromLocalStorage = () => {
  let storage = localStorage.getItem("cart");
  if (storage) {
    storage = JSON.parse(localStorage.getItem("cart"));
  } else {
    storage = [];
  }
  return storage;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getFromLocalStorage());
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [fee] = useState(777);

  const addToCart = (id, mainColor, amount, product) => {
    const tempCart = cart.find(cartItem => cartItem.id === id + mainColor);
    if (tempCart) {
      const tempCart = cart.map(cartItem => {
        if (cartItem.id === id + mainColor) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.stock) {
            newAmount = cartItem.stock;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      setCart(tempCart);
    } else {
      const newProduct = {
        id: id + mainColor,
        name: product.name,
        image: product.images[0].url,
        amount,
        color: mainColor,
        stock: product.stock,
        price: product.price,
      };
      setCart([...cart, newProduct]);
    }
  };
  const increaseBtn = id => {
    const tempCart = cart.map(cartItem => {
      if (cartItem.id === id) {
        let newAmount = cartItem.amount + 1;
        if (newAmount > cartItem.stock) {
          newAmount = cartItem.stock;
        }
        return { ...cartItem, amount: newAmount };
      } else {
        return cartItem;
      }
    });
    setCart(tempCart);
  };
  const decreaseBtn = id => {
    const tempCart = cart.map(cartItem => {
      if (cartItem.id === id) {
        let newAmount = cartItem.amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        return { ...cartItem, amount: newAmount };
      } else {
        return cartItem;
      }
    });

    setCart(tempCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = id => {
    const newProduct = cart.filter(cartItem => cartItem.id !== id);
    setCart(newProduct);
  };

  const countTotals = () => {
    const { totalItems, totalAmount } = cart.reduce(
      (acc, cartItem) => {
        acc.totalAmount += cartItem.amount * cartItem.price;
        acc.totalItems += cartItem.amount;
        return acc;
      },
      {
        totalAmount: 0,
        totalItems: 0,
      }
    );

    setTotalAmount(totalAmount);
    setTotalItems(totalItems);
  };

  useEffect(() => {
    countTotals();
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseBtn,
        decreaseBtn,
        clearCart,
        removeItem,
        totalAmount,
        totalItems,
        fee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider, useCartContext };
