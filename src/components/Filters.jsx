import React, { useState, useId, useContext } from "react";
import "./Filters.css";
import { FiltersContext } from "../context/filters";

export const Filters = () => {
  const priceId = useId(); //id unicos con este hook de useId
  const categoryId = useId(); //id unicos con este hook de useId

  const { filters, setFilters } = useContext(FiltersContext);

  const handelRange = (event) => {
    setFilters((prevValue) => ({
      ...prevValue,
      price: event.target.value,
    }));
  };

  const handelCategory = (event) => {
    setFilters((prevValue) => ({
      ...prevValue,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div className="filters__category">
        <label htmlFor={priceId}>Price</label>
        <input
          onChange={handelRange}
          type="range"
          id={priceId}
          min="0"
          max="1000"
          value={filters.price}
        />
        <span>${filters.price}</span>
      </div>
      <div className="filters__category">
        <label htmlFor={categoryId}>Category</label>
        <select id={categoryId} onChange={handelCategory}>
          <option value="all">All</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="laptops">laptops</option>
          <option value="smartphones">smartphones</option>
          <option value="fragrances">fragrances</option>
          <option value="skincare">skincare</option>
          <option value="groceries">groceries</option>
        </select>
      </div>
    </section>
  );
};
