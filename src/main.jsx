import React from "react";
import { FiltersProvider } from "./context/filters";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <FiltersProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FiltersProvider>
  </CartProvider>
);
