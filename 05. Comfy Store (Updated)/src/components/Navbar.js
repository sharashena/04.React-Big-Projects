// react
import { useEffect, useRef, useState } from "react";

// react icons
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

// router
import { NavLink } from "react-router-dom";

// nav links
import { navLinks } from "../helpers/navLinks";

// redux
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../redux/featured/featuredSlice";

const getFromLocalStorage = () => {
  const item = localStorage.getItem("index");
  if (item) {
    return JSON.parse(localStorage.getItem("index"));
  } else {
    return 0;
  }
};

const Navbar = () => {
  const { theme } = useSelector(state => state.featured);
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [navIndex] = useState(getFromLocalStorage);
  const [isActiveDropdown, setIsActiveDropDown] = useState(false);
  const [scroll, setScroll] = useState(0);
  const menuRef = useRef(null);

  // save nav index to local storage
  useEffect(() => {
    localStorage.setItem("index", JSON.stringify(navIndex));
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [navIndex, theme]);

  useEffect(() => {
    const effect = window.addEventListener("click", e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsActiveDropDown(false);
      }
    });
    return () => window.removeEventListener("click", effect);
  }, []);

  useEffect(() => {
    const effect = window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScroll((scrollY / height) * 100);
    });
    return () => window.removeEventListener("scroll", effect);
  }, []);

  const changeToLightTheme = () => {
    dispatch(lightTheme("light-theme"));
  };

  const changeToDarkTheme = () => {
    dispatch(darkTheme("dark-theme"));
  };

  return (
    <nav className="section nav">
      <div className="scrollbar-container">
        <div className="scrollbar-track" style={{ width: `${scroll}%` }}></div>
      </div>
      <div className="section-center nav-center">
        <NavLink to="/" className="logo">
          C
        </NavLink>
        <button
          type="button"
          className="hamburger-btn"
          onClick={() => setIsActiveDropDown(!isActiveDropdown)}
          ref={menuRef}
        >
          <RxHamburgerMenu />
        </button>
        <ul
          className={isActiveDropdown ? "dropdown active-dropdown" : "dropdown"}
        >
          {navLinks.map(({ title, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className="aside-link">
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul className="links-container">
          {navLinks.map(({ title, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className="nav-link">
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="icons-container">
          {theme === "light-theme" ? (
            <button
              type="button"
              className="nav-btn"
              onClick={changeToDarkTheme}
            >
              <IoIosMoon />
            </button>
          ) : (
            <button
              type="button"
              className="nav-btn sun-btn"
              onClick={changeToLightTheme}
            >
              <IoSunnyOutline />
            </button>
          )}
          <NavLink to="cart" type="button" className="nav-btn amount-btn">
            <BsCart2 />
            <span className="total-amount">{cart.length}</span>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
