import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/filter_context";
import PropTypes from "prop-types";

const Views = ({ gridView, toggleGridView }) => {
  const { filteredProducts, filters, handleChange } = useFilterContext();
  return (
    <>
      <article className="view-container">
        {[<BsFillGridFill />, <BsList />].map((item, index) => {
          return (
            <button
              className={
                gridView === index ? "view-btn active-tab" : "view-btn"
              }
              key={index}
              onClick={() => toggleGridView(index)}
            >
              {item}
            </button>
          );
        })}
      </article>
      <p>{filteredProducts.length} products found</p>
      <hr />
      <form className="sort-form">
        <label htmlFor="sort-by">sort by</label>
        <select
          id="sort-by"
          name="sort"
          value={filters.sort}
          onChange={handleChange}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a - z)</option>
          <option value="name-z">name (z - a)</option>
        </select>
      </form>
    </>
  );
};

Views.propTypes = {
  gridView: PropTypes.number.isRequired,
  toggleGridView: PropTypes.func.isRequired,
};

export default Views;
