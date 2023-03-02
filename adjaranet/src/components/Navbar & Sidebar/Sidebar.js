import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { BsLightningCharge, BsLightningChargeFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { links, subLinks } from "../../helpers/navLinks";
import { Link } from "react-router-dom";

const Sidebar = ({
  theme,
  toggleTheme,
  toggleSubmenu,
  sidebarRef,
  showSidebar,
  closeSidebar,
  showSubmenu,
}) => {
  const refContainer = useRef(null);
  const refLinks = useRef(null);

  useEffect(() => {
    const sublinksHeight = refLinks.current.getBoundingClientRect().height;
    if (showSubmenu) {
      refContainer.current.style.height = `${sublinksHeight}px`;
    } else {
      refContainer.current.style.height = "0";
    }
  }, [showSubmenu]);

  return (
    <aside
      className={
        showSidebar ? "sidebar-overlay show-sidebar" : "sidebar-overlay"
      }
    >
      <div className="sidebar" ref={sidebarRef}>
        <button className="close-btn btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className="sidebar-container">
          {links.map(({ icon, name, path, hasPath, hasSubLinks }, index) => {
            return (
              <li key={index}>
                {hasPath ? (
                  <>
                    <Link
                      to={hasSubLinks ? false : path}
                      className="sidebar-link"
                      onClick={hasSubLinks ? toggleSubmenu : undefined}
                    >
                      {icon}
                      <span>{name}</span>
                      {hasSubLinks && (
                        <span
                          className="sidebar-arrow"
                          style={{
                            transform: showSubmenu ? "rotate(180deg)" : "unset",
                          }}
                        >
                          <MdArrowDropDown />
                        </span>
                      )}
                    </Link>
                    {hasSubLinks && (
                      <div className="sublinks-container" ref={refContainer}>
                        <ul className="sublinks" ref={refLinks}>
                          {subLinks.map(({ title }, index) => {
                            return (
                              <li key={index}>
                                <Link to={path} className="sublink">
                                  {title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={path}
                    target="_blank"
                    key={index}
                    className="sidebar-link"
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <button className="btn sidebar-lightbulb" onClick={toggleTheme}>
          {theme === "light-theme" ? (
            <BsLightningChargeFill />
          ) : (
            <BsLightningCharge />
          )}
          <span>{theme === "light-theme" ? "night mode" : "light mode"}</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
