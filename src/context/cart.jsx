import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const addToCart = (product) => {
    const productInCartId = cart.findIndex((item) => item.id === product.id);
    // console.log(productInCartId);
    if (productInCartId >= 0) {
      //   una forma rapida si el array es pequeño
      //   const newProduct = structuredClone(cart);
      //   newProduct[productInCartId].cuantity += 1;
      //   return setcart(newProduct);

      const newProduct = cart.map((item) => item);
      newProduct[productInCartId].cuantity += 1;
      return setcart(newProduct);
    }
    setcart([...cart, { ...product, cuantity: 1 }]);
  };

  const removeFromCart = (product) => {
    const filteredProduct = [...cart].filter((item) => item.id !== product.id);
    // console.log(filteredProduct);
    setcart(filteredProduct);
  };

  const clearCart = () => setcart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
