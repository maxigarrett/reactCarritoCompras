import React from "react";
import "./Products.css";
import { AddToCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export const Products = ({ products }) => {
  const { addToCart } = useCart();

  const findSameProduct = (product) => {
    const productEquals = products.some((item) => item.id === product.id);
    console.log(productEquals);
  };
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const { id, thumbnail, title, price } = product;
          return (
            <li key={id}>
              <img src={thumbnail} alt={title} />
              <div>
                <strong>{title}</strong> - ${price}
              </div>
              <div>
                <button onClick={() => addToCart(product)}>
                  {<AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
