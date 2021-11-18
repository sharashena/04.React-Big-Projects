import React, { useState, useContext } from "react";

const UserContext = React.createContext();

const getFromLocalStorage = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return { token: null, username: null };
  }
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getFromLocalStorage);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("default");
  const [password, setPassword] = useState("");
  const [isMember, setIsMember] = useState(true);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "success" });

  const toggleMember = () => {
    setIsMember(prevMember => {
      let member = !prevMember;
      member ? setUsername("default") : setUsername("");
      return member;
    });
  };

  const showAlert = () => {
    setAlert({
      show: true,
      msg: "you successfully logged in",
      type: "success",
    });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false, msg: "", type: "" });
  };

  const userLogin = users => {
    setUser(users);
    localStorage.setItem("user", JSON.stringify(users));
  };

  const userLogout = () => {
    setUser({ token: null, username: null });
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isMember,
        toggleMember,
        email,
        username,
        password,
        setEmail,
        setUsername,
        setPassword,
        userLogin,
        userLogout,
        showAlert,
        hideAlert,
        alert,
        setAlert,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useGlobalUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, useGlobalUserContext };
