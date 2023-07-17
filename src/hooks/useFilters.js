import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);
  //   console.log(filters);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.price &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return {
    filterProducts,
    setFilters,
    filters,
  };
};
