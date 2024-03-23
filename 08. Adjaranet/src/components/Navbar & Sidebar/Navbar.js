// react icons
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

// navbar links
import { navLinks } from "../../helpers/navLinks";

// router
import { Link, NavLink, useLocation } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  openSidebar,
  changeThemeToDark,
  changeThemeToLight,
  changeSearchInput,
  closeSearchBar,
  openSearchBar,
  closeSearchContainer,
  openSearchContainer,
  clearHeroSearch,
} from "../../redux/home/productsSlice";
import { searchProductsThunk } from "../../redux/home/productsThunk";
import { clearFilters } from "../../redux/movies & tvs/productsSlice";

// react
import { useEffect, useState } from "react";

// img url
const img_url = "https://image.tmdb.org/t/p/original";

// page paths
const moviesPath = "/movies";
const tvsPath = "/tvs";
const creditsPath = "/people";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const {
    theme,
    search,
    size,
    searchProducts,
    isActiveSearchBar,
    isActiveSearchContainer,
  } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const location = useLocation();

  // open sidebar
  // open sidebar
  // open sidebar

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  // change theme and save to localStorage
  // change theme and save to localStorage
  // change theme and save to localStorage
  const handleChangeThemeToDark = () => {
    dispatch(changeThemeToDark());
  };
  const handleChangeThemeToLight = () => {
    dispatch(changeThemeToLight());
  };

  // toggle theme
  // toggle theme
  // toggle theme
  useEffect(() => {
    if (theme === "light") {
      document.body.className = "light-theme";
    } else {
      document.body.className = "dark-theme";
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // navbar scroll
  // navbar scroll
  // navbar scroll
  useEffect(() => {
    const effect = window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
    return () => window.removeEventListener("scroll", effect);
  }, [isFixed]);

  useEffect(() => {
    const event = window.addEventListener("click", e => {
      if (!e.target.classList.contains("search-products-container")) {
        dispatch(closeSearchContainer());
      }
    });
    return () => window.removeEventListener("click", event);
  }, []);

  useEffect(() => {
    dispatch(clearHeroSearch());
    dispatch(clearFilters());
  }, [location.pathname]);

  // search input
  // search input
  // search input

  const handleSearchBar = () => {
    dispatch(openSearchBar());
  };

  const handleChangeSearchInput = e => {
    const value = e.target.value;
    dispatch(changeSearchInput(value));
    dispatch(searchProductsThunk(e.target.value));
    dispatch(openSearchContainer());
  };

  const closeNonSearch = e => {
    const searchContainer = !e.target.classList.contains("search-input");
    if (isActiveSearchBar && searchContainer) {
      dispatch(closeSearchBar(false));
    }
  };

  const placeholder = () => {
    if (location.pathname === moviesPath) {
      return "მოძებნეთ სასრუველი ფილმი";
    } else if (location.pathname === tvsPath) {
      return "მოძებნეთ სასურველი სერიალი";
    } else if (location.pathname === creditsPath) {
      return "მოძებნეთ მსახიობი";
    } else {
      return "მოძებნეთ სასურველი ფილმი, სერიალი, მსახიობი";
    }
  };

  return (
    <nav className={isFixed ? "nav fixed-nav" : "nav"} onClick={closeNonSearch}>
      <div className="nav-center">
        <button
          type="button"
          className="btn hamburger-btn"
          onClick={handleOpenSidebar}
        >
          <RxHamburgerMenu />
        </button>
        <Link
          to="/"
          className="logo"
          style={{
            display: isActiveSearchBar && size < 1024 ? "none" : "initial",
          }}
        >
          adjara<span>net</span>
        </Link>

        {size < 1024 && (
          <div
            className="search-container"
            style={{
              flexGrow: isActiveSearchBar ? 1 : 0,
            }}
          >
            {isActiveSearchBar && <div className="searchbar-overlay"></div>}
            <article className="searchbar">
              <input
                type="text"
                placeholder={placeholder()}
                value={search}
                className="search-input"
                onChange={handleChangeSearchInput}
                style={{
                  width: isActiveSearchBar ? "100%" : 0,
                  padding: isActiveSearchBar ? "0.5rem" : 0,
                }}
              />
              <button
                type="button"
                className="btn search-btn"
                onClick={handleSearchBar}
                style={{
                  color: isActiveSearchBar ? "#fff" : "inherit",
                }}
              >
                <CiSearch />
              </button>
            </article>
            {search.length > 2 && isActiveSearchContainer && (
              <div className="search-products-container">
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
                      const name =
                        n || original_name || title || original_title;
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
                    .slice(0, size > 1024 ? 6 : size < 768 ? 3 : 5)}
                </article>
              </div>
            )}
          </div>
        )}

        <ul className="links-container">
          {navLinks.map(({ title, path, icon, hasPath }, index) => {
            return !hasPath ? (
              <li key={index}>
                <a href={path} className="nav-link" target="_blank">
                  <span className="nav-icon">{icon}</span>
                  {title}
                </a>
              </li>
            ) : (
              <li key={index}>
                <NavLink
                  style={({ isActive }) => {
                    return { color: isActive && "#0083ca" };
                  }}
                  to={path}
                  className="nav-link"
                >
                  <span className="nav-icon">{icon}</span>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul className="authorization-container">
          <div className="theme-change-container">
            {theme === "light" ? (
              <button
                type="button"
                className="btn wrapper-btn"
                onClick={handleChangeThemeToDark}
              >
                <span className="nav-icon">{<FaRegLightbulb />}</span>
                დაბნელება
              </button>
            ) : (
              <button
                type="button"
                className="btn wrapper-btn"
                onClick={handleChangeThemeToLight}
              >
                <span className="nav-icon">{<FaLightbulb />}</span>
                განათება
              </button>
            )}
          </div>
          <article className="authorization-btn">
            <button type="button" className="btn authorization-btn wrapper-btn">
              <span className="nav-icon">{<CiLogin />}</span>
              ავტორიზაცია
            </button>
          </article>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
