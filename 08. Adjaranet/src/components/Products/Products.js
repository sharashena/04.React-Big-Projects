import defaultImg from "../../assets/nopicture.jpg";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  genresThunk,
  productsThunk,
} from "../../redux/movies & tvs/productsThunk";
import {
  changeInput,
  clearFilters,
} from "../../redux/movies & tvs/productsSlice";
import { closeSearchContainer } from "../../redux/home/productsSlice";

// react
import { useEffect, useState } from "react";

// router
import { Link, useLocation } from "react-router-dom";

const img_url = "https://image.tmdb.org/t/p/original";

const Products = ({ allGenres }) => {
  const { genres, products, loading, filteredProducts, filters, query } =
    useSelector(state => state.moviesAndTvs);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  let path;

  if (query) {
    path = `/search/${
      location.pathname === "/movies" ? "movie" : "tv"
    }?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&query=${query}`;
  } else {
    path = `/${
      location.pathname === "/movies" ? "movie" : "tv"
    }/popular?api_key=${process.env.REACT_APP_API_KEY}`;
  }

  useEffect(() => {
    dispatch(productsThunk({ path, page }));
  }, [page, query]);

  // fetch more products when scrolling to bottom
  // fetch more products when scrolling to bottom
  // fetch more products when scrolling to bottom
  useEffect(() => {
    const effect = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight
      ) {
        setPage(page + 1);
      }
    });
    return () => window.removeEventListener("scroll", effect);
  }, [page]);

  // clean filters when page change
  // clean filters when page change
  // clean filters when page change
  useEffect(() => {
    dispatch(clearFilters());
  }, [location.pathname]);

  // close container when clicked outside
  // close container when clicked outside
  // close container when clicked outside
  useEffect(() => {
    dispatch(genresThunk(allGenres));
    window.scrollTo(0, 0);
    const event = window.addEventListener("click", e => {
      if (!e.target.classList.contains("search-products-container")) {
        dispatch(closeSearchContainer());
      }
    });
    return () => window.removeEventListener("click", event);
  }, []);

  // input placeholder text on different routes
  // input placeholder text on different routes
  // input placeholder text on different routes
  const placeholder = () => {
    if (location.pathname === "/movies") {
      return "მოძებნეთ სასურველი ფილმი";
    } else {
      return "მოძებნეთ სასურველი სერიალი";
    }
  };

  // change search input and query
  // change search input and query
  // change search input and query
  const handleChangeInput = e => {
    const value = e.target.value;
    dispatch(changeInput(value));
    setPage(1);
  };

  return (
    <section className="section">
      <div className="section-center">
        <form className="filters-form">
          <input
            type="text"
            className="filters-input"
            placeholder={placeholder()}
            value={query}
            onChange={handleChangeInput}
          />
        </form>
        <div className="products-container">
          {filteredProducts.map((product, index) => {
            const {
              poster_path,
              backdrop_path,
              original_title,
              title,
              name: n,
              original_name,
              id,
              first_air_date,
            } = product;
            const img = poster_path || backdrop_path;
            const name = original_title || title || n || original_name;
            const fullImg = `${img_url}${img}`;
            return (
              <Link
                to={`/${first_air_date ? "tv" : "movie"}/${id}`}
                className="product"
                key={index}
              >
                <img
                  src={fullImg || defaultImg}
                  alt={name}
                  className="product-img"
                />
              </Link>
            );
          })}
        </div>
        {loading && (
          <article className="loader-wrapper">
            <div className="loading-products"></div>
          </article>
        )}
      </div>
    </section>
  );
};

export default Products;
