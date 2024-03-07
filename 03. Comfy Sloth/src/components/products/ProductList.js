import { useFilterContext } from "../../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import Views from "./Views";
import PropTypes from "prop-types";

const ProductList = ({ gridView, toggleGridView }) => {
  const { filteredProducts: products } = useFilterContext();
  return (
    <div>
      <div className="products-header">
        <Views gridView={gridView} toggleGridView={toggleGridView} />
      </div>
      <section className={!gridView ? "products-center grid-center" : null}>
        {products.length < 1 && (
          <h5>Sorry, no products matched your search.</h5>
        )}
        {products.map(product => {
          return !gridView ? (
            <GridView key={product.id} {...product} />
          ) : (
            <ListView key={product.id} {...product} />
          );
        })}
      </section>
    </div>
  );
};

ProductList.propTypes = {
  gridView: PropTypes.number.isRequired,
  toggleGridView: PropTypes.func.isRequired,
};

export default ProductList;
