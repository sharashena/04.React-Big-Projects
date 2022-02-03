import React, { useState } from "react";
import PropTypes from "prop-types";

// redux

import { useDispatch } from "react-redux";

// components

import TreeGridForm from "./TreeGridForm";
import TreeGridItems from "./TreeGridItems";

// actions

import {
  handleChangeData,
  handleSelect,
  changeFolder,
  addUserToTree,
  addFolderToTree,
  deleteList,
  empty,
  editItem,
  overrideTreeItem,
  defaultSelectedId,
} from "../../store/actions/handleTreeGrid";

// material

import { Box, Button, Modal, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
      }
    }
  };

  // handle change

  const handleChangeUser = e => {
    const { value } = e.target;
    dispatch(handleChangeData(value));
  };

  const handleChangeFolder = e => {
    const { value } = e.target;
    dispatch(changeFolder(value));
  };

  // add user

  const addUser = () => {
    const selectItem = treeGridList.find(item => item.id === selectedId);
    setIsEdit(false);
    // editting user
    if (name) {
      if (isEdit) {
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
      } else {
        // adding user
        dispatch(
          addUserToTree({
            id: parseInt(new Date().getTime().toString()),
            parentId: !selectItem ? null : selectItem.id,
            type: "",
            name,
          })
        );
      }
    }
  };

  // add folder

  const addFolder = () => {
    const newItems = treeGridList.find(item => item.id === selectedId);
    setFolderModal(false);
    setIsEdit(false);

    if (folderModal) {
      setFolderModal(false);
    } else {
      setFolderModal(true);
    }
    if (folderTxt) {
      if (isEdit) {
        // editting folder
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
      } else {
        // adding folder
        dispatch(
          addFolderToTree({
            id: parseInt(new Date().getTime().toString()),
            parentId: !newItems ? null : newItems.id,
            name: folderTxt,
            type: "folder",
          })
        );
      }
    }
  };

  // delete item in tree

  const handleDelete = (arr, id) => {
    let newArr = arr.filter(item => item.id !== id);
    let children = arr.filter(item => item.parentId === id);
    while (children.length > 0) {
      let childrenOfChildren = [];
      children.forEach(child => {
        childrenOfChildren = childrenOfChildren.concat(
          newArr.filter(item => item.parentId === child.id)
        );
        newArr = newArr.filter(item => item.id !== child.id);
      });
      children = childrenOfChildren;
    }
    dispatch(deleteList(newArr));
    return newArr;
  };

  // selected item

  const handleSelectId = id => {
    const selectedItem = treeGridList.find(item => item.id === id);
    if (selectedId !== selectedItem.id) {
      dispatch(handleSelect(selectedItem));
    }
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

  const defaultId = () => {
    const selectDefaultId = treeGridList.find(item => item.id === selectedId);
    dispatch(defaultSelectedId(selectDefaultId));
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
            disabled={folderTxt.length < 2}
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
            handleChangeName={name}
            listFromTodo={list}
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
        defaultSelectedId={defaultId}
      />
    </Box>
  );
};

TreeGridComponent.propTypes = {
  list: PropTypes.array.isRequired,
  treeGridList: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  folderTxt: PropTypes.string.isRequired,
  selectedId: PropTypes.number,
};

export default TreeGridComponent;
