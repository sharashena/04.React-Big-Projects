import { useState, useEffect, useRef } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { BsLightningCharge, BsLightningChargeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { links } from "../../helpers/navLinks";
import { themeFromStorage } from "../../helpers/themeFromStorage";

// sidebar
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

const Navbar = () => {
  const [theme, setTheme] = useState(themeFromStorage());
  const [size, setSize] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [showSidebarSubmenu, setShowSidebarSubmenu] = useState(false);
  const [showMainSubmenu, setShowMainSubmenu] = useState(false);
  const [positions, setPositions] = useState({});

  const sidebarRef = useRef(null);
  const searchRef = useRef(null);

  // toggle sidebar
  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  // toggle seachbar
  const openSearchbar = () => setShowSearchbar(true);
  const closeSearchbar = () => setShowSearchbar(false);

  // toggle sidebar submenu
  const toggleSubmenu = () => setShowSidebarSubmenu(!showSidebarSubmenu);

  // toggle main submenu
  const openMainSubmenu = () => setShowMainSubmenu(true);
  const closeMainSubmenu = () => setShowMainSubmenu(false);

  const handleSubmit = e => e.preventDefault();

  // theme

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  // display sub menus

  const displaySubmenus = e => {
    if (e.target.textContent === "ფილმები") {
      const tempLink = e.target.getBoundingClientRect();
      const left = tempLink.left;
      const right = tempLink.right;
      const bottom = tempLink.bottom + 5;
      const center = (left + right) / 2;
      setPositions({ center, bottom });
      openMainSubmenu();
    }
  };

  const handleSubmenu = e => {
    if (!e.target.classList.contains("link")) {
      closeMainSubmenu();
    }
  };

  // resize effects
  // sidebar

  useEffect(() => {
    const resizeEvent = window.addEventListener("resize", () => {
      setSize(window.innerWidth);
      if (size <= 992) {
        closeSidebar();
        closeSearchbar();
      }
    });
    return () => window.removeEventListener("resize", resizeEvent);
  }, []);

  // close sidebar when outside clicking

  useEffect(() => {
    const targetEvent = document.body.addEventListener("mouseup", e => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSidebar();
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        closeSearchbar();
      }
    });
    return () => document.body.removeEventListener("mouseup", targetEvent);
  }, []);

  return (
    <>
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <button className="nav-btn bars-btn btn" onClick={openSidebar}>
            <FaBars />
          </button>
          <Link to="/" className="logo">
            adjara<span>net</span>.com
          </Link>
          <ul className="nav-container">
            {links.map(({ name, icon, hasPath, path }, index) => {
              return (
                <li key={index}>
                  {hasPath ? (
                    <>
                      <Link
                        to={path}
                        className="link"
                        onMouseOver={displaySubmenus}
                      >
                        {icon}
                        <span>{name}</span>
                      </Link>
                    </>
                  ) : (
                    <a href={path} target="_blank" key={index} className="link">
                      {icon}
                      <span>{name}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <button className="nav-btn search-btn btn" onClick={openSearchbar}>
            <FaSearch />
          </button>
          <button className="nav-btn light-bulb btn" onClick={toggleTheme}>
            {theme === "light-theme" ? (
              <BsLightningChargeFill />
            ) : (
              <BsLightningCharge />
            )}
          </button>
          {size <= 992 && (
            <form
              onSubmit={handleSubmit}
              className={
                showSearchbar
                  ? "quick-form-overlay show-search-bar"
                  : "quick-form-overlay"
              }
            >
              <div className="quick-search-form">
                <input type="search" placeholder="ძიება..." ref={searchRef} />
              </div>
            </form>
          )}
        </div>
      </nav>
      {size <= 992 && (
        <Sidebar
          theme={theme}
          toggleTheme={toggleTheme}
          toggleSubmenu={toggleSubmenu}
          sidebarRef={sidebarRef}
          showSidebar={showSidebar}
          closeSidebar={closeSidebar}
          showSubmenu={showSidebarSubmenu}
        />
      )}
      <Submenu showSubmenu={showMainSubmenu} positions={positions} />
    </>
  );
};

export default Navbar;
