import React, { useState } from "react";
import PropTypes from "prop-types";
import { editItem } from "../store/actions/handleTodoList";

// redux

import { connect, useDispatch } from "react-redux";

// components

import ModalBtn from "../components/Modal/ModalBtn";
import Todo from "../components/Todo/Todo";

const Home = ({ users, list, isEdit, editId }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const editList = id => {
    const editTodoList = list.find(list => list.id === id);
    dispatch(editItem(editTodoList));
    setModal(true);
  };

  return (
    <>
      <ModalBtn
        users={users}
        list={list}
        isEdit={isEdit}
        editId={editId}
        modal={modal}
        setModal={setModal}
      />
      <Todo editList={editList} />
    </>
  );
};

Home.propTypes = {
  users: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  isEdit: PropTypes.bool.isRequired,
  editId: PropTypes.number,
};

const mapStateToProps = ({ todoState: { users, isEdit, editId, list } }) => {
  return { users, list, isEdit, editId };
};

export default connect(mapStateToProps)(Home);
