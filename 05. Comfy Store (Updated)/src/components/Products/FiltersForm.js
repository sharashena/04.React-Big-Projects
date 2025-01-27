// react
import { useEffect } from "react";

// router
import { useLocation } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  changeFilters,
  resetFilters,
  updatePrice,
  updateFilters,
} from "../../redux/products/productsSlice";

// helpers
import { formatPrice } from "../../helpers/formatPrice";
import { getUnique } from "../../helpers/getUnique";

const FiltersForm = () => {
  const { filters, products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const location = useLocation();

  const categories = getUnique(products, "category");
  const companies = getUnique(products, "company");

  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));

  const handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    const selectTag =
      name === "category" && name === "company" && name === "sort";
    if (selectTag) {
      value = e.target.textContent;
    } else if (name === "shipping") {
      value = e.target.checked;
    } else if (name === "price") {
      value = Number(value);
    }
    dispatch(changeFilters({ name, value }));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters(maxPrice));
  };

  useEffect(() => {
    dispatch(resetFilters(maxPrice));
  }, [location.pathname]);

  useEffect(() => {
    dispatch(updatePrice({ minPrice, maxPrice }));
  }, [products]);

  const handleUpdateFilters = () => {
    let temp = [...products];
    if (filters.text) {
      temp = temp.filter(product => product.name.startsWith(filters.text));
    } else if (filters.category !== "all") {
      temp = temp.filter(product => product.category === filters.category);
    } else if (filters.company !== "all") {
      temp = temp.filter(product => product.company === filters.company);
    } else if (filters.shipping) {
      temp = temp.filter(product => product.shipping === true);
    }
    temp = temp.filter(product => product.price <= filters.price);

    // sort
    if (filters.sort === "a-z") {
      temp = temp.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sort === "z-a") {
      temp = temp.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filters.sort === "lowest") {
      temp = temp.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "highest") {
      temp = temp.sort((a, b) => b.price - a.price);
    }
    dispatch(updateFilters(temp));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="filters-form" onSubmit={handleSubmit}>
      <article className="form-control">
        <label htmlFor="text">search product</label>
        <input
          type="text"
          name="text"
          className="text-input"
          id="text"
          value={filters.text}
          onChange={handleChange}
        />
      </article>
      <article className="form-control">
        <label htmlFor="category">select category</label>
        <select
          name="category"
          id="category"
          value={filters.category}
          onChange={handleChange}
        >
          {categories.map((category, index) => {
            return (
              <option value={category} key={index}>
                {category}
              </option>
            );
          })}
        </select>
      </article>
      <article className="form-control">
        <label htmlFor="company">select company</label>
        <select
          name="company"
          id="company"
          value={filters.company}
          onChange={handleChange}
        >
          {companies.map((company, index) => {
            return (
              <option value={company} key={index}>
                {company}
              </option>
            );
          })}
        </select>
      </article>
      <article className="form-control">
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          value={filters.sort}
          onChange={handleChange}
        >
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
          <option value="highest">highest</option>
          <option value="lowest">lowest</option>
        </select>
      </article>
      <article className="form-control">
        <div className="price-header">
          <label htmlFor="price">select price</label>
          <p className="price">{formatPrice(filters.price)}</p>
        </div>
        <input
          type="range"
          className="range-input"
          value={filters.price}
          min={filters.minPrice}
          max={filters.maxPrice}
          onChange={handleChange}
          name="price"
        />
        <div className="price-footer">
          <p className="min-price">{formatPrice(filters.minPrice)}</p>
          <p className="max-price">max: {formatPrice(filters.maxPrice)}</p>
        </div>
      </article>
      <article className="form-control shipping">
        <label htmlFor="shipping">free shipping</label>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          onChange={handleChange}
          checked={filters.shipping}
        />
      </article>
      <button
        type="submit"
        className="btn search-btn"
        onClick={handleUpdateFilters}
      >
        search
      </button>
      <button type="button" className="reset-btn" onClick={handleResetFilters}>
        reset
      </button>
    </form>
  );
};

export default FiltersForm;
