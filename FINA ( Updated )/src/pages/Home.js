import React from "react";
import PropTypes from "prop-types";

// redux

import { connect } from "react-redux";

// components

import ModalBtn from "../components/Modal/ModalBtn";
import Todo from "../components/Todo/Todo";

const Home = ({ users, list, isEdit, editId, open }) => {
  return (
    <>
      <ModalBtn
        users={users}
        list={list}
        isEdit={isEdit}
        editId={editId}
        open={open}
      />
      <Todo />
    </>
  );
};

Home.propTypes = {
  users: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  editId: PropTypes.number,
};

const mapStateToProps = ({
  todoState: { users, isEdit, editId, list },
  modalState: { open },
}) => {
  return { users, list, isEdit, editId, open };
};

export default connect(mapStateToProps)(Home);
