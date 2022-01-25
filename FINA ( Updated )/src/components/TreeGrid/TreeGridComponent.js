import React, { useState } from "react";
import PropTypes from "prop-types";

// redux

import { useDispatch } from "react-redux";

// components

import TreeGridForm from "./TreeGridForm";
import TreeGridItems from "./TreeGridItems";

// actions

import {
  handleChange,
  handleSelect,
  changeFolder,
  addUserToTree,
  addFolderToTree,
  deleteList,
  empty,
  editItem,
  overrideTreeItem,
} from "../../store/actions/handleTreeGrid";

// material

import { Box, Button, Modal, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { treeGridReducer } from "../../store/reducers/treeGridReducer";

const useStyles = makeStyles(() => ({
  selectUsers: {
    marginBottom: "2rem !important",
    marginRight: "1rem !important",
  },
}));

const TreeGridComponent = ({
  treeGridList,
  name,
  list,
  folderTxt,
  selectedId,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [folderModal, setFolderModal] = useState(false);
  const [dataModal, setDataModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
  };

  // toggle modal

  const toggleModal = () => {
    if (!dataModal) {
      setDataModal(true);
    } else {
      setDataModal(false);
      if (name) {
        dispatch(empty());
      } else {
        return;
      }
    }
  };

  // toggle modal for add folder

  const toggleAddFolderModal = () => {
    if (!folderModal) {
      setFolderModal(true);
    } else {
      setFolderModal(false);
      setIsEdit(false);
      if (folderTxt) {
        dispatch(empty());
      } else {
        return;
      }
    }
  };

  // handle change

  const handleChangeUser = e => {
    const { value } = e.target;
    dispatch(handleChange(value));
  };

  const handleChangeFolder = e => {
    const { value } = e.target;
    dispatch(changeFolder(value));
  };

  // add user

  const addUser = () => {
    const newItems = treeGridList.find(item => item.id === selectedId);

    if (name && isEdit) {
      const newItem = treeGridList.map(item => {
        if (item.id === editId) {
          return {
            ...item,
            name,
          };
        }
        return item;
      });
      dispatch(overrideTreeItem(newItem));
      setIsEdit(false);
    } else {
      if (!newItems) {
        const newObj = {
          id: parseInt(new Date().getTime().toString()),
          parentId: null,
          name,
          type: "",
        };
        dispatch(addUserToTree(newObj));
      } else {
        const newObj = {
          id: parseInt(new Date().getTime().toString()),
          parentId: newItems.id,
          name,
          type: "",
        };
        dispatch(addUserToTree(newObj));
      }
    }
  };

  const addFolder = () => {
    setFolderModal(false);
    const newItems = treeGridList.find(item => item.id === selectedId);

    if (folderModal) {
      setFolderModal(false);
    } else {
      setFolderModal(true);
    }

    if (folderTxt && isEdit) {
      const newItem = treeGridList.map(item => {
        if (item.id === editId) {
          return {
            ...item,
            name: folderTxt,
          };
        }
        return item;
      });
      dispatch(overrideTreeItem(newItem));
      setIsEdit(false);
    } else {
      if (folderTxt) {
        if (!newItems) {
          const newObj = {
            id: parseInt(new Date().getTime().toString()),
            parentId: null,
            name: folderTxt,
            type: "folder",
          };
          dispatch(addFolderToTree(newObj));
        } else {
          const newObj = {
            id: parseInt(new Date().getTime().toString()),
            parentId: newItems.id,
            name: folderTxt,
            type: "folder",
          };
          dispatch(addFolderToTree(newObj));
        }
      }
    }
  };

  // delete item in tree

  const handleDelete = id => {
    const newItem = treeGridList.filter(
      item => item.parentId !== id && item.id !== id
    );

    dispatch(deleteList(newItem));
  };

  // selected item

  const handleSelectId = id => {
    const selectedItem = treeGridList.find(item => item.id === id);
    dispatch(handleSelect(selectedItem));
  };

  // edit item in tree

  const handleEdit = id => {
    const newItem = treeGridList.find(item => item.id === id);
    if (newItem.type === "folder") {
      setFolderModal(true);
    } else {
      setDataModal(true);
    }
    setIsEdit(true);
    setEditId(newItem.id);

    dispatch(editItem(newItem));
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
        select data
      </Button>
      <Button
        variant="contained"
        className={classes.selectUsers}
        onClick={toggleAddFolderModal}
      >
        add folder
      </Button>
      <Modal
        open={folderModal}
        onClose={toggleAddFolderModal}
        aria-labelledby="user-modal"
        aria-describedby="user-modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            variant="outlined"
            sx={{ mt: "1rem" }}
            placeholder="Add Folder"
            name="folderTxt"
            value={folderTxt}
            onChange={handleChangeFolder}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: "1rem" }}
            onClick={addFolder}
          >
            {isEdit ? "edit" : "add folder"}
          </Button>
        </Box>
      </Modal>
      <Modal
        open={dataModal}
        onClose={toggleModal}
        aria-labelledby="selcted-user-modal"
        aria-describedby="select-user-modal-description"
      >
        <div>
          <TreeGridForm
            handleChangeUser={handleChangeUser}
            listFromTodo={list}
            handleChangeName={name}
            addUser={addUser}
            toggleModal={toggleModal}
          />
        </div>
      </Modal>
      <TreeGridItems
        treeGridList={treeGridList}
        handleDelete={handleDelete}
        handleSelectId={handleSelectId}
        handleEdit={handleEdit}
        selectedId={selectedId}
      />
    </Box>
  );
};

TreeGridComponent.propTypes = {
  list: PropTypes.array.isRequired,
  treeGridList: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default TreeGridComponent;
