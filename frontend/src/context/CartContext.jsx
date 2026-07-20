import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems");

  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );
}, [cartItems]);
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find(
        (item) => item._id === product._id
      );

      if (exist) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item._id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;