import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(2);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        query,
        page,
        open,
        setPage,
        setQuery,
        handleChange,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
