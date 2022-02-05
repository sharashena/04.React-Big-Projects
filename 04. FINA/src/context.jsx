import React, { useState, useEffect, useContext, createContext } from "react";

const AppContext = createContext();

const getLocalStorage = () => {
  let url = localStorage.getItem("list");
  if (url) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [users, setUsers] = useState({
    name: "",
    age: "",
    color: "white",
  });
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "success",
  });

  // delete item

  const deleteItem = id => {
    const del = list.filter(item => item.id !== id);
    setList(del);
    setAlert({
      show: true,
      msg: "item successfuly deleted from list",
      type: "danger",
    });
  };

  //   localstorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  //   edit item

  const editItem = id => {
    const edit = list.find(item => item.id === id);
    setEditId(edit.id);
    setIsEdit(true);
    setUsers({
      ...users,
      name: edit.name,
      age: edit.age,
      color: edit.color,
    });
    setIsModalOpen(true);
  };

  //   clear list

  function clearList() {
    setList([]);
    setAlert({ show: true, msg: "list is cleared", type: "danger" });
  }

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (users.name && users.age && users.color && isEdit) {
      setList(
        list.map(item => {
          if (item.id === editId) {
            return {
              ...item,
              name: users.name,
              age: users.age,
              color: users.color,
            };
          }
          return item;
        })
      );
      setIsModalOpen(false);
      setIsEdit(false);
      setEditId(null);
      setUsers({
        ...users,
        name: "",
        age: "",
        color: "white",
      });
      setAlert({
        show: true,
        msg: "item successfuly changed",
        type: "success",
      });
    } else {
      if (users.name && users.age && users.color) {
        const newItem = {
          id: new Date().getTime().toString(),
          name: users.name,
          age: users.age,
          color: users.color,
        };
        setList([...list, newItem]);
        setIsModalOpen(false);
        setIsEdit(false);
        setUsers({
          ...users,
          name: "",
          age: "",
          color: "white",
        });
        setAlert({
          show: true,
          msg: "item successfuly added to list",
          type: "success",
        });
      } else {
        setIsModalOpen(false);
        setAlert({
          show: true,
          msg: "empty values, please field values correctly",
          type: "danger",
        });
        setUsers({
          ...users,
          name: "",
          age: "",
          color: "white",
        });
      }
    }
  };

  // hide alert

  const closeAlert = () => {
    setAlert({ show: false, msg: "", type: "success" });
  };

  // handle change

  const handleChange = e => {
    const { value, name } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };
  return (
    <AppContext.Provider
      value={{
        users,
        isModalOpen,
        list,
        isEdit,
        alert,
        setAlert,
        setIsModalOpen,
        deleteItem,
        editItem,
        clearList,
        handleChange,
        handleSubmit,
        closeAlert,
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
