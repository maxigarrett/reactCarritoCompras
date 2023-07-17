import React from "react";
import "./Footer.css";
import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { useCart } from "../hooks/useCart";
export const Footer = () => {
  const { filters } = useContext(FiltersContext);
  const { cart } = useCart();
  return (
    <div className="footer">
      {/* <h4>Prueba técnica de React 💻</h4> */}
      {/* <span>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/maxi-garrett-38300a21b/"
        >
          mi linkedin
        </a>
      </span>
      <h5>Shopping cart 🛒 </h5> */}
      {/* solo para chekear el estado */}
      {/* {`category :${JSON.stringify(filters.category)}`}
      {`price: $${JSON.stringify(filters.price)}`} */}
      {JSON.stringify(cart)}
    </div>
  );
};
