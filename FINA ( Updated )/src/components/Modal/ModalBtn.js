import React from "react";
import PropTypes from "prop-types";
import ModalForm from "./ModalForm";

// redux

import { useDispatch } from "react-redux";

// actions

import { modalOpen, modalClose } from "../../store/actions/toggleModal";
import {
  handleChange,
  overrideItem,
  addToList,
} from "../../store/actions/handleTodoList";

// material

import { Box, Button, Modal } from "@mui/material";
import { useStyles } from "../../ui/styles";

const Header = ({ open, users, isEdit, editId, list }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(modalOpen());
  };
  const handleClose = () => {
    dispatch(modalClose());
  };

  const onChange = e => {
    const { name, value } = e.target;
    dispatch(handleChange(name, value));
  };

  const handleSubmit = () => {
    if (users.name && users.age && users.color && isEdit) {
      const mapList = list.map(list => {
        if (list.id === editId) {
          return {
            ...list,
            id: editId,
            name: users.name,
            age: parseInt(users.age),
            color: users.color,
          };
        }
        return list;
      });
      dispatch(overrideItem(mapList));
    } else if (users.name && users.age && users.color) {
      const newList = {
        id: parseInt(new Date().getTime().toString()),
        name: users.name,
        age: parseInt(users.age),
        color: users.color,
      };
      dispatch(addToList(newList));
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box className={classes.header}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        add user
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalForm
            handleClose={handleClose}
            onChange={onChange}
            handleSubmit={handleSubmit}
            users={users}
          />
        </Box>
      </Modal>
    </Box>
  );
};

Header.propTypes = {
  users: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  editId: PropTypes.number,
};

export default Header;
