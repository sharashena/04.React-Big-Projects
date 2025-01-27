// react icons
import { FaTimes } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

// router
import { Link, NavLink } from "react-router-dom";

// helpers
import { navLinks } from "../../helpers/navLinks";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  closeSidebar,
  changeThemeToDark,
  changeThemeToLight,
} from "../../redux/home/productsSlice";

const Sidebar = () => {
  const { isSidebarOpen, theme } = useSelector(state => state.products);
  const dispatch = useDispatch();

  // close sidebar effects
  // close sidebar effects
  // close sidebar effects

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };
  const closeNonSidebar = e => {
    const sidebar = !e.target.classList.contains("sidebar");
    if (sidebar) {
      dispatch(closeSidebar());
    }
  };

  // change theme
  // change theme
  // change theme

  const handleChangeThemeToDark = () => {
    dispatch(changeThemeToDark());
  };

  const handleChangeThemeToLight = () => {
    dispatch(changeThemeToLight());
  };


  return (
    <div
      className={
        isSidebarOpen ? "sidebar-overlay show-sidebar" : "sidebar-overlay"
      }
      onClick={closeNonSidebar}
    >
      <aside className="sidebar">
        <button
          type="button"
          className="btn close-btn"
          onClick={handleCloseSidebar}
        >
          <FaTimes />
        </button>
        <Link to="/" className="logo sidebar-logo">
          adjara
          <span>net</span>
        </Link>
        <ul>
          {navLinks.map(({ title, path, icon, hasPath }, index) => {
            return !hasPath ? (
              <li key={index}>
                <a
                  href={path}
                  className="sidebar-nav-link"
                  target="_blank"
                  onClick={handleCloseSidebar}
                >
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
                  className="sidebar-nav-link"
                  onClick={handleCloseSidebar}
                >
                  <span className="nav-icon">{icon}</span>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul>
          <div>
            {theme === "light" ? (
              <button
                type="button"
                className="btn sidebar-wrapper-btn"
                onClick={handleChangeThemeToDark}
              >
                <span className="nav-icon">{<FaRegLightbulb />}</span>
                დაბნელება
              </button>
            ) : (
              <button
                type="button"
                className="btn sidebar-wrapper-btn"
                onClick={handleChangeThemeToLight}
              >
                <span className="nav-icon">{<FaLightbulb />}</span>
                განათება
              </button>
            )}
          </div>
          <div className="authorization-btn">
            <button
              type="button"
              className="btn authorization-btn"
              onClick={handleCloseSidebar}
            >
              <span className="nav-icon">{<CiLogin />}</span>
              ავტორიზაცია
            </button>
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
