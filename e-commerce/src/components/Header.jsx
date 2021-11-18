import React, { useRef, useState, useEffect } from "react";
import logo from "../images/logo.svg";
// import router link
import { Link } from "react-router-dom";
// import react-icons
import {
  FaBars,
  FaCartPlus,
  FaTimes,
  FaUserPlus,
  FaUserMinus,
} from "react-icons/fa";
// import styled-components
import { Navbar } from "../styles/Navbar";
import { SideNav } from "../styles/SideNav";
// import cart context
import { useGlobalCartContext } from "../context/cart";
import { useGlobalUserContext } from "../context/user";

const Header = () => {
  const { countItem } = useGlobalCartContext();
  const { user, userLogout } = useGlobalUserContext();
  // useState
  const [sideBar, setSideBar] = useState(false);
  // useRef
  const linksContainer = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (sideBar) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = "0";
    }
  });

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      {/* main navbar */}
      <Navbar>
        <div className="section-center">
          {/* navbar header */}
          <article className="navbar-header">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </article>
          <span className="icon">
            <FaBars className="bars" onClick={toggleSidebar} />
          </span>
          {/* navbar header end */}

          {/* nav links */}
          <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="about">about</Link>
            </li>
            <li>
              <Link to="products">products</Link>
            </li>
            {user.token && (
              <li>
                <Link to="checkout">checkout</Link>
              </li>
            )}
          </ul>
          <ul className="nav-icons">
            <Link to="cart" className="icon">
              <p>cart</p>
              <FaCartPlus />
              <span className="count-cart">{countItem}</span>
            </Link>
            {user.token ? (
              <Link to="/login" className="icon" onClick={userLogout}>
                <p>log out</p>
                <FaUserMinus />
              </Link>
            ) : (
              <Link to="login" className="icon">
                <p>login</p>
                <FaUserPlus />
              </Link>
            )}
          </ul>
          {/* nav links end */}
        </div>
        {/* main navbar end */}
      </Navbar>

      {/* slide nav */}
      <SideNav className={sideBar ? "sidebar show-nav" : "sidebar"}>
        <div className="navbar-header">
          <Link to="/" onClick={toggleSidebar}>
            <img src={logo} alt="logo" />
          </Link>
          <span className="icon">
            <FaTimes onClick={toggleSidebar} />
          </span>
        </div>
        {/* nav links */}
        <article
          className={
            sideBar ? "navbar-container show-navLinks" : "navbar-container"
          }
          ref={linksContainer}
        >
          <ul className="navbar-links" ref={linksRef}>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                home
              </Link>
            </li>
            <li>
              <Link to="about" onClick={toggleSidebar}>
                about
              </Link>
            </li>
            <li>
              <Link to="products" onClick={toggleSidebar}>
                products
              </Link>
            </li>
            {user.token && (
              <li>
                <Link to="checkout" onClick={toggleSidebar}>
                  checkout
                </Link>
              </li>
            )}
          </ul>
        </article>
        {/* nav links end */}

        {/* nav icons */}
        <div className="navbar-icons">
          <Link to="cart" className="icon" onClick={toggleSidebar}>
            <p>cart</p>
            <FaCartPlus />
            <span className="count-cart">{countItem}</span>
          </Link>
          {user.token ? (
            <Link to="login" className="icon" onClick={userLogout}>
              <p>logout</p>
              <FaUserMinus />
            </Link>
          ) : (
            <Link to="login" className="icon" onClick={toggleSidebar}>
              <p>login</p>
              <FaUserPlus />
            </Link>
          )}
        </div>
        {/* nav icons end */}
      </SideNav>
      {/* slide nav end */}
    </>
  );
};

export default Header;
