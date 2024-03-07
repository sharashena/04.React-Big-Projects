import { Link } from "react-router-dom";
import FilterForm from "./FilterForm";
import ProductList from "./ProductList";
import { useProductsContext } from "../../context/products_context";
import PropTypes from "prop-types";

const Products = ({ title }) => {
  const { gridView, toggleGridView } = useProductsContext();
  return (
    <main>
      <section className="section path-section">
        <div className="section-center path-center">
          <h3>
            <Link to="/" className="path">
              home
            </Link>
            / {title}
          </h3>
        </div>
      </section>
      {/* products */}
      <div className="section section-center section-products">
        <FilterForm />
        <ProductList gridView={gridView} toggleGridView={toggleGridView} />
      </div>
    </main>
  );
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Products;
