import * as React from "react";
import PropTypes from "prop-types";

// redux

import { useDispatch } from "react-redux";

// components

import TreeGridForm from "./TreeGridForm";
import TreeGridItems from "./TreeGridItems";

// actions

import {
  changeUser,
  addUser,
  deleteList,
} from "../../store/actions/handleTreeGrid";
import { modalOpen, modalClose } from "../../store/actions/toggleModal";

// material

import { Box, Button, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  selectUsers: {
    marginBottom: "2rem !important",
  },
}));

const TreeGridComponent = ({ list, open, name, treeGridList }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const toggleModal = () => {
    if (!open) {
      dispatch(modalOpen());
    } else {
      dispatch(modalClose());
    }
  };

  const handleSubmit = id => {
    const newItem = list.filter(item => item.id !== id);
    dispatch(addUser(newItem));
  };

  const handleDelete = id => {
    const delItem = treeGridList.filter(list => list.id !== id);
    dispatch(deleteList(delItem));
  };

  const onChange = e => {
    const { value } = e.target;
    dispatch(changeUser(value));
  };

  return (
    <Box
      sx={{
        overflowX: "hidden",
        padding: "2rem",
      }}
    >
      <Button
        variant="contained"
        className={classes.selectUsers}
        onClick={toggleModal}
      >
        select users
      </Button>
      <Modal
        open={open}
        onClose={toggleModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div>
          <TreeGridForm
            name={name}
            list={list}
            toggleModal={toggleModal}
            handleSubmit={handleSubmit}
            onChange={onChange}
          />
        </div>
      </Modal>
      <TreeGridItems treeGridList={treeGridList} handleDelete={handleDelete} />
    </Box>
  );
};

TreeGridComponent.propTypes = {
  list: PropTypes.array.isRequired,
  treeGridList: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default TreeGridComponent;
