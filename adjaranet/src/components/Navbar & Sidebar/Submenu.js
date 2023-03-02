import { useEffect, useRef } from "react";
import { subLinks } from "../../helpers/navLinks";

// router
import { Link } from "react-router-dom";

const Submenu = ({ showSubmenu, positions }) => {
  const { center, bottom } = positions;
  const submenuRef = useRef(null);

  useEffect(() => {
    submenuRef.current.style.left = `${center}px`;
    submenuRef.current.style.top = `${bottom}px`;
  }, [positions]);

  return (
    <aside
      className={showSubmenu ? "submenu show-submenu" : "submenu"}
      ref={submenuRef}
    >
      <ul className="submenu-center">
        {subLinks.map(({ title }, index) => {
          return (
            <li key={index}>
              <Link className="submenu-link">{title}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Submenu;
