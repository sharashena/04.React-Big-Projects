import { NavLink } from "react-router-dom";
import { links, icons } from "../../helpers/navLinks";
import logo from "../../assets/logo.svg";
import { useCartContext } from "../../context/cart_context";

const Navbar = () => {
  const { totalItems } = useCartContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        {/* logo */}
        <NavLink to="/">
          <img src={logo} alt="comfy sloth" className="logo" />
        </NavLink>
        {/* nav links */}
        <ul className="nav-links">
          {links.map((link, index) => {
            const { label, path } = link;
            return (
              <li key={index}>
                <NavLink to={path} className="nav-link">
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
                <NavLink to={path} className="nav-icon">
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
      </div>
    </nav>
  );
};

export default Navbar;
