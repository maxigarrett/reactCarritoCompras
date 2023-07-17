import React, { useId } from "react";
import "./Cart.css";
import { ClearCartIcon, AddToCartIcon, CartIcon } from "./Icons";

export const Cart = () => {
  const cartCheckBoxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="iphone"
            />
            <div>
              <strong>iphone</strong> - $899
            </div>
            <footer>
              <small>Cant: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
