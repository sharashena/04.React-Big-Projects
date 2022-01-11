import React from "react";
import PropTypes from "prop-types";

// redux

import { connect } from "react-redux";

import TreeGridComponent from "../components/TreeGrid/TreeGridComponent";

const TreeGrid = ({ name, treeGridList, list, open }) => {
  return (
    <TreeGridComponent
      name={name}
      treeGridList={treeGridList}
      list={list}
      open={open}
    />
  );
};

TreeGrid.propTypes = {
  name: PropTypes.string.isRequired,
  treeGridList: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  treeGridState: { name, treeGridList },
  todoState: { list },
  modalState: { open },
}) => {
  return { name, treeGridList, list, open };
};

export default connect(mapStateToProps)(TreeGrid);
