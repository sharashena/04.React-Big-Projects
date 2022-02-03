import React from "react";
import PropTypes from "prop-types";

// redux

import { connect } from "react-redux";

import TreeGridComponent from "../components/TreeGrid/TreeGridComponent";

const TreeGrid = ({ name, treeGridList, list, selectedId, folderTxt }) => {
  return (
    <TreeGridComponent
      name={name}
      treeGridList={treeGridList}
      list={list}
      selectedId={selectedId}
      folderTxt={folderTxt}
    />
  );
};

TreeGrid.propTypes = {
  name: PropTypes.string.isRequired,
  treeGridList: PropTypes.array.isRequired,
  list: PropTypes.array.isRequired,
  folderTxt: PropTypes.string.isRequired,
  selectedId: PropTypes.number,
};

const mapStateToProps = ({
  treeGridState: { name, folderTxt, treeGridList, selectedId },
  todoState: { list, users },
}) => {
  return { name, treeGridList, list, selectedId, folderTxt, users, selectedId };
};

export default connect(mapStateToProps)(TreeGrid);
