import React, { useId } from "react";
import "./Cart.css";
import { ClearCartIcon, AddToCartIcon, CartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
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
                  <button>+</button>
                </footer>
              </li>
            );
          })}
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
