import React from "react";
// import router link
import { Link } from "react-router-dom";
// import components
import ProductList from "../components/ProductList";
// import rect-icons
import { AiFillAppstore, AiOutlineBars } from "react-icons/ai";
import { useGlobalContext } from "../context/context";
import FilterForms from "../components/FilterForms";

const Products = () => {
  const {
    filtered,
    values,
    handleChange,
    toggleGrid,
    toggleGrid2,
    grid,
    grid2,
  } = useGlobalContext();
  return (
    <React.Fragment>
      <section className="header-section">
        <div className="section-center">
          <div className="navigates">
            <Link to="/">home</Link>
            <Link to="/products">
              <span> / </span>
              products
            </Link>
          </div>
        </div>
      </section>

      <section className="section products-section featured-section">
        <div className="section-center products-center">
          <div className="form-content">
            <FilterForms />
          </div>
          <div className={grid2 ? "product-content2" : "product-content"}>
            <div className="content-header">
              <div className="icon">
                <span
                  className={grid ? "active-btn" : null}
                  onClick={toggleGrid}
                >
                  <AiFillAppstore />
                </span>
                <span
                  onClick={toggleGrid2}
                  className={grid2 ? "active-btn" : null}
                >
                  <AiOutlineBars />
                </span>
              </div>
              <p>{`${filtered.length} products founds`}</p>
              <div className="line"></div>
              <div className="sort">
                <label htmlFor="sort">sort by</label>
                <select
                  name="sort"
                  id="sort"
                  value={values.sort}
                  onChange={handleChange}
                >
                  <option value="priceLow">price (lowest)</option>
                  <option value="priceHigh">price (highest)</option>
                  <option value="nameA">name (a - z)</option>
                  <option value="nameB">name (z - a)</option>
                </select>
              </div>
            </div>
            <ProductList products={filtered} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
