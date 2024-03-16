// react
import { useState } from "react";
// react icons
import { HiViewGrid, HiViewList } from "react-icons/hi";

// components
import ListView from "./Views.js/ListView";
import GridView from "./Views.js/GridView";

// redux
import { useSelector } from "react-redux";

const Products = () => {
  const { filteredProducts } = useSelector(state => state.products);
  const [gridView, setGridView] = useState(0);

  const changeView = index => {
    setGridView(index);
  };

  return (
    <div className="products-wrapper">
      <div className="products-header">
        <h3 className="total-products">{filteredProducts.length} products</h3>
        <article className="views-container">
          {[<HiViewGrid />, <HiViewList />].map((icon, index) => {
            return (
              <button
                type="button"
                className={
                  gridView === index ? "view-btn active-view" : "view-btn"
                }
                key={index}
                onClick={() => changeView(index)}
              >
                {icon}
              </button>
            );
          })}
        </article>
      </div>
      <hr />

      {gridView === 0 ? <GridView /> : <ListView />}
      {filteredProducts.length < 1 && (
        <p className="error-msg">
          Oops! nothing matched to your search criteria
        </p>
      )}
    </div>
  );
};

export default Products;
