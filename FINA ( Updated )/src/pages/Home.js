import React from "react";
import PropTypes from "prop-types";

// redux

import { connect } from "react-redux";

// components

import ModalBtn from "../components/Modal/ModalBtn";
import Todo from "../components/Todo/Todo";

const Home = ({ users, list, isEdit, editId }) => {
  return (
    <>
      <ModalBtn users={users} list={list} isEdit={isEdit} editId={editId} />
      <Todo />
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
