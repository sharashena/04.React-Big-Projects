import React from "react";
import PropTypes from "prop-types";

// material

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const useStyles = makeStyles(() => ({
  disabledButton: {
    "&:hover": {
      cursor: "pointer !important",
    },
  },
}));

const TreeGridForm = ({
  handleChangeName,
  handleChangeUser,
  listFromTodo,
  addUser,
  toggleModal,
}) => {
  const classes = useStyles();
  return (
    <Box sx={style}>
      <FormControl fullWidth>
        <InputLabel id="users">Users</InputLabel>
        <Select
          labelId="users"
          id="users"
          name="users"
          value={handleChangeName}
          label="users"
          onChange={handleChangeUser}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {listFromTodo.map((list, index) => {
            return (
              <MenuItem value={list.name} key={index}>
                {list.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        style={{ marginTop: "1rem" }}
        disabled={!handleChangeName}
        className={`${!handleChangeName ? classes.disabledButton : null}`}
        onClick={() => {
          addUser();
          toggleModal();
        }}
      >
        submit
      </Button>
    </Box>
  );
};

TreeGridForm.propTypes = {
  handleChangeName: PropTypes.string.isRequired,
  handleChangeUser: PropTypes.func.isRequired,
  listFromTodo: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};

export default TreeGridForm;
