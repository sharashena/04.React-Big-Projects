// react
import { useEffect, useRef } from "react";

// navbar links
import { navLinks } from "../helpers/navLinks";

// redux
import { useDispatch } from "react-redux";
import { clearSearch } from "../redux/features/movies/moviesSlice";

// router
import { Link } from "react-router";

const Sidebar = ({ isSidebar, setIsSidebar }) => {
  const dispatch = useDispatch();
  const sidebarContainerRef = useRef(null);

  useEffect(() => {
    const handleCloseSidebar = e => {
      if (
        sidebarContainerRef.current &&
        !sidebarContainerRef.current.contains(e.target)
      ) {
        setIsSidebar(false);
      }
    };

    window.addEventListener("mousedown", handleCloseSidebar);
    return () => window.removeEventListener("mousedown", handleCloseSidebar);
  }, []);

  return (
    <div
      className={isSidebar ? "sidebar-overlay show-sidebar" : "sidebar-overlay"}
    >
      <ul className="sidebar-container" ref={sidebarContainerRef}>
        {navLinks.map(({ path, title }, index) => {
          return (
            <li key={index}>
              <Link
                to={path}
                className="sidebar-link"
                onClick={() => {
                  setIsSidebar(false);
                  dispatch(clearSearch());
                }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
