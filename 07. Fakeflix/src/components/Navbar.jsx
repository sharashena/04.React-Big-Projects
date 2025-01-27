// navbar logo
import logo from "../assets/logo.png";
import logoSmall from "../assets/logoSmall.png";

// navbar links
import { navLinks } from "../helpers/navLinks";

// router
import { Link, NavLink } from "react-router";

// react
import { useRef, useEffect, useState } from "react";

// react icons
import { FaSearch, FaChevronDown } from "react-icons/fa";

// sidebar
import Sidebar from "./Sidebar";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  handleChange,
  clearSearch,
} from "../redux/features/movies/moviesSlice";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isFixedNav, setIsFixedNav] = useState(false);
  const searchInputRef = useRef(null);
  const handleSubmit = e => e.preventDefault();
  const { query } = useSelector(state => state.moviesSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 70) {
        setIsFixedNav(true);
      } else {
        setIsFixedNav(false);
      }
    };

    const handleCloseSearchbar = e => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        setIsSearch(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleCloseSearchbar);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleCloseSearchbar);
    };
  }, []);

  return (
    <nav
      className={isFixedNav ? "navbar fixed-nav" : "navbar"}
      style={{
        zIndex: query ? 10 : 5,
        background: query ? "#222" : "inherit",
      }}
    >
      <div className="section-center nav-center">
        <Link to={"/splash"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to={"/splash"} className="logo-small">
          <img src={logoSmall} alt="small logo" />
        </Link>
        <ul className="navlinks-container">
          {navLinks.map(({ title, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  onClick={() => dispatch(clearSearch())}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <form
          className="search-container"
          onSubmit={handleSubmit}
          ref={searchInputRef}
        >
          <input
            type="search"
            name="text"
            className={isSearch ? "search-input active-input" : "search-input"}
            placeholder="search movies"
            value={query}
            onChange={e => dispatch(handleChange(e.target.value))}
          />
          <button className="search-btn" onClick={() => setIsSearch(!isSearch)}>
            <FaSearch />
          </button>
        </form>
      </div>
      <button className="sidebar-btn" onClick={() => setIsSidebar(true)}>
        discover <FaChevronDown />
      </button>
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
    </nav>
  );
};

export default Navbar;
