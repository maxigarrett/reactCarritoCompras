import React from "react";
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkSameProduct = (product) => {
    const productEquals = cart.some((item) => item.id === product.id);
    return productEquals;
  };
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const { id, thumbnail, title, price } = product;
          const isProductInCart = checkSameProduct(product);

          return (
            <li key={id}>
              <img src={thumbnail} alt={title} />
              <div>
                <strong>{title}</strong> - ${price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
