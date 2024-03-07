import { uniqueValues } from "../../helpers/uniqueValues";
import { useProductsContext } from "../../context/products_context";
import { useFilterContext } from "../../context/filter_context";
import { FaCheck } from "react-icons/fa";
import { formatPrice } from "../../helpers/formatPrice";

const FilterForm = () => {
  const {
    filters,
    handleChange,
    clearFilters,
    currCategory,
    currIndex,
    setCurrCategory,
    setCurrIndex,
  } = useFilterContext();
  const { products } = useProductsContext();

  const categories = uniqueValues(products, "category");
  const companies = uniqueValues(products, "company");
  const colors = uniqueValues(products, "colors");

  return (
    <div className="filter-container">
      <form className="filter-form" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          className="search-input"
          placeholder="search products"
          name="name"
          value={filters.name}
          onChange={handleChange}
        />
        {/* categories */}
        <article className="categories">
          <h5>category</h5>
          <div className="categories-container">
            {categories.map((category, index) => {
              return (
                <button
                  className={
                    currCategory === index
                      ? "category-btn active-btn"
                      : "category-btn"
                  }
                  key={index}
                  type="button"
                  value={filters.category}
                  name="category"
                  onClick={e => {
                    setCurrCategory(index);
                    handleChange(e);
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </article>
        {/* companies */}
        <article className="companies">
          <h5>company</h5>
          <select
            name="company"
            className="company"
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
        {/* colors */}
        <article className="colors">
          <h5>colors</h5>
          <div className="colors-container">
            {colors.map((color, index) => {
              if (color === "all") {
                return (
                  <button
                    type="button"
                    className="all-btn"
                    key={index}
                    onClick={e => {
                      setCurrIndex(0);
                      handleChange(e);
                    }}
                    name="colors"
                    value={filters.colors}
                    data-color="all"
                  >
                    all
                  </button>
                );
              } else {
                return (
                  <button
                    type="button"
                    className={
                      currIndex === index
                        ? "color-btn active-color"
                        : "color-btn"
                    }
                    style={{ backgroundColor: color }}
                    key={index}
                    onClick={e => {
                      setCurrIndex(index);
                      handleChange(e);
                    }}
                    name="colors"
                    value={filters.colors}
                    data-color={color}
                  >
                    {index === currIndex && <FaCheck className="color-icon" />}
                  </button>
                );
              }
            })}
          </div>
        </article>
        {/* price */}
        <article className="price-container">
          <h5>price</h5>
          <p className="price">{formatPrice(filters.price)}</p>
          <input
            type="range"
            className="price-input"
            max={filters.maxPrice}
            value={filters.price}
            onChange={handleChange}
            name="price"
          />
        </article>
        {/* free shipping */}
        <article className="shipping">
          <label htmlFor="shipping">free shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            value={filters.shipping}
            checked={filters.shipping}
            onChange={handleChange}
          />
        </article>
        <button type="button" className="btn reset-btn" onClick={clearFilters}>
          clear filters
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
