import { createContext, useState } from "react";

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
