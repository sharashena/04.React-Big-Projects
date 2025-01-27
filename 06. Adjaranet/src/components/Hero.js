// react
import { useEffect, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import swiper required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  productsThunk,
  searchProductsThunk,
} from "../redux/home/productsThunk";
import {
  changeSearchInput,
  clearHeroSearch,
  openSearchBar,
  openSearchContainer,
  closeSearchContainer,
} from "../redux/home/productsSlice";
import { clearFilters } from "../redux/movies & tvs/productsSlice";

// router
import { Link, useLocation } from "react-router-dom";

// api key
const api = process.env.REACT_APP_API_KEY;
const url = "/trending/all/day";

// image url
const img_url = "https://image.tmdb.org/t/p/original";

const Hero = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const { heroProducts, search, searchProducts, isActiveSearchContainer } =
    useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearHeroSearch());
    dispatch(clearFilters());
  }, [location.pathname]);

  useEffect(() => {
    dispatch(productsThunk(`${url}?api_key=${api}`));
    const event = window.addEventListener("click", e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        dispatch(closeSearchContainer());
      }
    });
    return () => window.removeEventListener("click", event);
  }, []);

  const handleChangeInput = e => {
    if (search.length >= 2) {
      dispatch(openSearchBar());
      dispatch(openSearchContainer());
    }
    dispatch(changeSearchInput(e.target.value));
    dispatch(searchProductsThunk(e.target.value));
  };

  return (
    <section>
      <div className="hero-center">
        <Swiper
          navigation={true}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {heroProducts.map((product, index) => {
            const {
              original_name,
              name,
              title,
              backdrop_path: img,
              media_type,
              id,
            } = product;
            return (
              <SwiperSlide key={index}>
                <Link to={media_type === "movie" ? `movie/${id}` : `tv/${id}`}>
                  <img
                    src={`${img_url}${img}`}
                    alt={original_name || name || title}
                    className="hero-img"
                  />
                  <p className="hero-name">{original_name || name || title}</p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="searchbar-wrapper">
          <form className="searchbar-container">
            <input
              type="search"
              className="search-input"
              placeholder="მოძებნეთ სასურველი ფილმი, სერიალი, მსახიობი"
              value={search}
              onChange={handleChangeInput}
            />
          </form>
          {/* search products */}
          {/* search products */}
          {/* search products */}
          {search.length > 2 && isActiveSearchContainer && (
            <div className="search-products-container" ref={containerRef}>
              <article className="search-wrapper">
                {searchProducts
                  .map(product => {
                    const {
                      id,
                      backdrop_path,
                      poster_path,
                      nane: n,
                      original_name,
                      title,
                      original_title,
                      media_type,
                    } = product;
                    const img = poster_path || backdrop_path;
                    const name = n || original_name || title || original_title;
                    const media = media_type === "movie" ? "movie" : "tv";

                    return (
                      <Link
                        to={`${media}/${id}`}
                        className="search-img-container"
                        key={id}
                        title={name}
                      >
                        <img
                          src={`${img_url}${img}`}
                          alt={name}
                          className="search-img"
                        />
                        <p className="search-img-name">{name}</p>
                      </Link>
                    );
                  })
                  .slice(0, 6)}
              </article>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
