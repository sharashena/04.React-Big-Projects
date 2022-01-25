import React from "react";
import PropTypes from "prop-types";
import ModalForm from "./ModalForm";

// redux

import { useDispatch } from "react-redux";

import {
  handleChange,
  overrideItem,
  addToList,
  emptyTodoModal,
} from "../../store/actions/handleTodoList";

// material

import { Box, Button, Modal } from "@mui/material";
import { useStyles } from "../../ui/styles";

const Header = ({ users, isEdit, editId, list, modal, setModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggleModal = () => {
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
      
      if (users.name || users.age || users.color) {
        dispatch(emptyTodoModal());
      } else {
        return;
      }
    }
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
      <Button variant="contained" color="primary" onClick={toggleModal}>
        add user
      </Button>
      <Modal
        open={modal}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalForm
            toggleModal={toggleModal}
            onChange={onChange}
            handleSubmit={handleSubmit}
            users={users}
            isEdit={isEdit}
          />
        </Box>
      </Modal>
    </Box>
  );
};

Header.propTypes = {
  users: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  isEdit: PropTypes.bool.isRequired,
  editId: PropTypes.number,
};

export default Header;
