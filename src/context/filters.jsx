import { createContext, useState } from "react";
//el mejor usado de context con el hook es useFilter.js y filters.jsx
//useCart.js y cart.jsx los hice al reves de como hice este hook la logia la puse en el conteextx
//creation context
export const FiltersContext = createContext();

const INITIAL_STATE = {
  category: "all",
  price: 0,
};

//provaider
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(INITIAL_STATE);
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
