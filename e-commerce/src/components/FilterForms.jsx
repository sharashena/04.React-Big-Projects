import React from "react";
// import react-icons
import { FaCheck } from "react-icons/fa";
// import styled
import { FilterStyled } from "../styles/FilterForms";
// import context
import { useGlobalContext } from "../context/context";
import { formatPrice } from "../tools/helper";

const FilterForms = () => {
  const {
    handleSubmit,
    handleChange,
    products,
    values,
    value,
    clearFilters,
    categoryFilter,
    filterColors,
    colorIndex,
    changeIndex,
    allColor,
    activeCategoryBtn,
  } = useGlobalContext();

  const categories = ["all", ...new Set(products.map(item => item.category))];

  const companies = ["all", ...new Set(products.map(item => item.company))];

  const colors = [...new Set(products.map(item => item.colors[0]))];

  return (
    <FilterStyled onSubmit={handleSubmit}>
      {/* serach */}
      <div className="form-group">
        <input
          type="search"
          name="search"
          className="search"
          placeholder="search"
          value={values.search}
          onChange={handleChange}
        />
      </div>
      {/* category */}
      <div className="form-group">
        <h3 className="form-title">category</h3>
        {categories.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`category-btn ${value === index && "active-btn"}`}
              name="category"
              onClick={() => {
                categoryFilter(item);
                activeCategoryBtn(index);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      {/* company */}
      <div className="form-group">
        <h3 className="form-title">company</h3>
        <select
          name="company"
          className="company"
          value={values.company}
          onChange={handleChange}
        >
          {companies.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      {/* colors */}
      <div className="form-group">
        <h3 className="form-title">colors</h3>
        <button
          className={`all-btn ${colorIndex === -1 && "active-btn"}`}
          onClick={allColor}
        >
          all
        </button>
        {colors.map((item, index) => {
          return (
            <button
              type="button"
              className="color-btn"
              key={index}
              style={{ background: item }}
              onClick={() => {
                filterColors(item);
                changeIndex(index);
              }}
            >
              {colorIndex === index && <FaCheck className="active-color" />}
            </button>
          );
        })}
      </div>
      {/* price */}
      <div className="form-group">
        <h3 className="form-title">price</h3>
        <p>{`${formatPrice(values.price)}`}</p>
        <input
          type="range"
          name="price"
          max={values.maxPrice}
          value={values.price}
          onChange={handleChange}
        />
      </div>
      {/* free shipping */}
      <div className="form-group">
        <div className="shipping">
          <label htmlFor="shipping">free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={values.shipping === true}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="button" className="clear-filters" onClick={clearFilters}>
        clear filters
      </button>
    </FilterStyled>
  );
};

export default FilterForms;
