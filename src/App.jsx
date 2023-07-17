import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";

function App() {
  const [products, setProducts] = useState(initialProducts);

  const { filterProducts, setFilters, filters } = useFilters();

  const filteredProducts = filterProducts;

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts(products)} />
      <Footer />
    </>
  );
}

export default App;
