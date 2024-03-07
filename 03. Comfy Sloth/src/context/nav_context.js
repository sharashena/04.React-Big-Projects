import { useState, createContext } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);
  const closeNav = () => setShowNav(false);
  return (
    <NavContext.Provider
      value={{
        showNav,
        toggleNav,
        closeNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
