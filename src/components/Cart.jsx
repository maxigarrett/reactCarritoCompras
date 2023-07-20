import React, { useId } from "react";
import "./Cart.css";
import { ClearCartIcon, AddToCartIcon, CartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
        <ul>
          {cart.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.thumbnail} alt="iphone" />
                <div>
                  <strong>{item.title}</strong> - {`$ ${item.price}`}
                </div>
                <footer>
                  <small>{item.cuantity}</small>
                  <button onClick={() => addToCart(item)}>+</button>
                </footer>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};
