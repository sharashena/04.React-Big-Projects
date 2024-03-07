import { NavLink } from "react-router-dom";
import { links, icons } from "../../helpers/navLinks";
import logo from "../../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { NavContext } from "../../context/nav_context";
import { useCartContext } from "../../context/cart_context";

const Sidebar = () => {
  const { totalItems } = useCartContext();
  const { showNav, closeNav, toggleNav } = useContext(NavContext);
  return (
    <nav className="nav">
      <div className="nav-center sidebar-center">
        {/* logo */}
        <NavLink to="/">
          <img src={logo} alt="comfy sloth" className="logo" />
        </NavLink>
        <FaBars className="toggle-sidebar" onClick={toggleNav} />
        {/* sidebar */}
        <aside className={showNav ? "sidebar show-sidebar" : "sidebar"}>
          <header className="sidebar-header">
            <img src={logo} alt="comfy sloth" className="logo" />
            <FaTimes className="close-btn" onClick={closeNav} />
          </header>
          {/* nav links */}
          <ul className="sidebar-links">
            {links.map((link, index) => {
              const { label, path } = link;
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className="sidebar-link"
                    onClick={closeNav}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* nav links end */}
          {/* icons */}
          <ul className="nav-icons">
            {icons.map((navIcon, index) => {
              const { label, icon, path, hasCount } = navIcon;
              return (
                <li key={index}>
                  <NavLink to={path} className="nav-icon" onClick={closeNav}>
                    {label}
                    <span className="cart-icon">
                      {hasCount && (
                        <span className="cart-amount">{totalItems}</span>
                      )}
                      {icon}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          {/* icons end */}
        </aside>
        {/* sidebar end */}
      </div>
    </nav>
  );
};

export default Sidebar;
